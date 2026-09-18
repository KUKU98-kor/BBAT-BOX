const players = [
  { order: 1, number: 7, name: "김민재", position: "유격수", records: [{ result: "1B", running: "도루" }, { result: "F8" }] },
  { order: 2, number: 14, name: "최현우", position: "2루수", records: [{ result: "BB", running: "득점", run: true }, { result: "K" }] },
  { order: 3, number: 23, name: "이도윤", position: "중견수", records: [{ result: "2B", rbi: 1 }, { result: "G4" }] },
  { order: 4, number: 33, name: "장시온", position: "1루수", records: [{ result: "HR", rbi: 2, run: true }, { result: "BB" }] },
  { order: 5, number: 10, name: "서우진", position: "좌익수", records: [{ result: "K" }, { result: "1B" }] },
  { order: 6, number: 2, name: "윤태경", position: "포수", records: [{ result: "G6" }, { result: "K" }] },
  { order: 7, number: 51, name: "오지훈", position: "우익수", records: [{ result: "1B" }, { result: "F7" }] },
  { order: 8, number: 6, name: "한결", position: "3루수", records: [{ result: "K" }, { result: "BB" }] },
  { order: 9, number: 39, name: "배준서", position: "지명타자", records: [{ result: "G5" }] },
];

const allResults = [
  ["1B", "1루타"], ["2B", "2루타"], ["3B", "3루타"], ["1HR", "1점 홈런"],
  ["2HR", "2점 홈런"], ["3HR", "3점 홈런"], ["GS", "만루 홈런"], ["BB", "볼넷"],
  ["HBP", "몸에 맞는 공"], ["K", "삼진"], ["GO", "땅볼"], ["FO", "뜬공"],
  ["FC", "야수 선택"], ["E", "실책"], ["SAC", "희생타"], ["SF", "희생플라이"],
];

let selectedPlayerIndex = 2;
let selectedResult = "1B";
let rbi = 0;
let editingIndex = null;
let pitches = ["볼", "지켜본 스트라이크", "볼"];
let history = [];

const $ = (selector) => document.querySelector(selector);
const lineupList = $("#lineupList");
const atbatGrid = $("#atbatGrid");
const sheet = $("#recordSheet");
const backdrop = $("#sheetBackdrop");
const toast = $("#toast");

function renderLineup() {
  lineupList.innerHTML = players.map((player, index) => `
    <li><button class="player-button ${index === selectedPlayerIndex ? "is-active" : ""}" type="button" data-player="${index}" aria-pressed="${index === selectedPlayerIndex}">
      <span class="bat-order">${player.order}</span><strong>${player.number} ${player.name}</strong><small>${player.position}</small>
    </button></li>`).join("");
}

function playerStats(player) {
  const atBats = player.records.filter(r => !["BB", "HBP", "SAC", "SF"].includes(r.result)).length;
  const hits = player.records.filter(r => /^(1B|2B|3B|HR|[123]HR|GS)$/.test(r.result)).length;
  const rbis = player.records.reduce((sum, r) => sum + (r.rbi || 0), 0);
  return `${atBats}타수 ${hits}안타 ${rbis}타점`;
}

function renderSelectedPlayer() {
  const player = players[selectedPlayerIndex];
  $("#selectedOrder").textContent = `${player.order}번`;
  $("#selectedPlayer").textContent = player.name;
  $("#selectedMeta").textContent = `${player.position} · ${playerStats(player)}`;
  renderGrid();
}

function renderGrid() {
  const records = players[selectedPlayerIndex].records;
  let html = '<div class="grid-corner">타석</div>';
  for (let i = 0; i < 10; i++) html += `<div class="pa-head">${i + 1}</div>`;
  html += '<div class="row-label">타격</div>';
  for (let i = 0; i < 10; i++) {
    const record = records[i];
    if (record) {
      const hitClass = /^(1B|2B|3B)$/.test(record.result) ? "is-hit" : /HR|GS/.test(record.result) ? "is-hr" : "";
      html += `<button class="record-cell ${hitClass}" data-cell="${i}" type="button"><strong>${record.result}</strong>${record.rbi ? `<small class="rbi-tag">${record.rbi}타점</small>` : ""}</button>`;
    } else if (i === records.length) {
      html += `<button class="record-cell is-next" data-cell="${i}" type="button" aria-label="${i + 1}번째 타석 추가"></button>`;
    } else {
      html += `<button class="record-cell" data-cell="${i}" type="button" disabled></button>`;
    }
  }
  html += '<div class="row-label">주루</div>';
  for (let i = 0; i < 10; i++) {
    const record = records[i];
    const text = record?.running || (record?.run ? "득점" : "");
    html += `<div class="record-cell running-cell">${record?.run ? '<span class="run-dot">R</span>' : ""}<span>${text}</span></div>`;
  }
  atbatGrid.innerHTML = html;
}

function renderPitches() {
  const labels = { "볼": "B", "지켜본 스트라이크": "C", "헛스윙": "S", "파울": "F", "인플레이": "IP" };
  const classes = { "볼": "ball", "지켜본 스트라이크": "strike", "헛스윙": "strike", "파울": "foul", "인플레이": "play" };
  $("#pitchSequence").innerHTML = pitches.length
    ? pitches.map((pitch, i) => `<span class="pitch-chip ${classes[pitch]}" title="${i + 1}구 ${pitch}">${labels[pitch]}</span>`).join("")
    : '<span class="pitch-empty">첫 투구를 기록해 주세요.</span>';
  $("#ballCount").textContent = Math.min(3, pitches.filter(p => p === "볼").length);
  $("#strikeCount").textContent = Math.min(2, pitches.filter(p => ["지켜본 스트라이크", "헛스윙", "파울"].includes(p)).length);
}

function openSheet(index = null, result = null) {
  const player = players[selectedPlayerIndex];
  editingIndex = index ?? player.records.length;
  const existing = player.records[editingIndex];
  selectedResult = result === "HR" ? "1HR" : result || existing?.result || "1B";
  rbi = existing?.rbi || 0;
  $("#rbiValue").textContent = rbi;
  $("#runningNote").value = existing?.running || "";
  setToggle($("#runToggle"), Boolean(existing?.run));
  setToggle($("#stealToggle"), existing?.running === "도루");
  $("#sheetContext").textContent = `${player.order}번 ${player.name} · ${editingIndex + 1}번째 타석`;
  $("#sheetResults").innerHTML = allResults.map(([value, label]) => `<button type="button" data-sheet-result="${value}" aria-pressed="${value === selectedResult}">${value}<br><small>${label}</small></button>`).join("");
  sheet.hidden = false;
  backdrop.hidden = false;
  document.body.style.overflow = "hidden";
  $("#closeSheet").focus();
}

function closeSheet() {
  sheet.hidden = true;
  backdrop.hidden = true;
  document.body.style.overflow = "";
  $("#newRecordButton").focus();
}

function setToggle(button, on) { button.setAttribute("aria-pressed", String(on)); }
function showToast(message) {
  toast.textContent = message; toast.classList.add("show");
  clearTimeout(showToast.timer); showToast.timer = setTimeout(() => toast.classList.remove("show"), 2200);
}

function saveState() {
  localStorage.setItem("playbook-draft", JSON.stringify(players));
}

lineupList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-player]"); if (!button) return;
  selectedPlayerIndex = Number(button.dataset.player); renderLineup(); renderSelectedPlayer();
});

atbatGrid.addEventListener("click", (event) => {
  const cell = event.target.closest("[data-cell]"); if (!cell) return; openSheet(Number(cell.dataset.cell));
});

document.querySelectorAll("[data-pitch]").forEach(button => button.addEventListener("click", () => {
  pitches.push(button.dataset.pitch); renderPitches();
}));

$("#resultButtons").addEventListener("click", (event) => {
  const button = event.target.closest("[data-result]"); if (button) openSheet(null, button.dataset.result);
});
$("#newRecordButton").addEventListener("click", () => openSheet());
$("#moreResults").addEventListener("click", () => openSheet());
$("#closeSheet").addEventListener("click", closeSheet);
$("#cancelSheet").addEventListener("click", closeSheet);
backdrop.addEventListener("click", closeSheet);

$("#sheetResults").addEventListener("click", (event) => {
  const button = event.target.closest("[data-sheet-result]"); if (!button) return;
  selectedResult = button.dataset.sheetResult;
  document.querySelectorAll("[data-sheet-result]").forEach(b => b.setAttribute("aria-pressed", String(b === button)));
});

document.querySelectorAll("[data-rbi-change]").forEach(button => button.addEventListener("click", () => {
  rbi = Math.max(0, Math.min(4, rbi + Number(button.dataset.rbiChange))); $("#rbiValue").textContent = rbi;
}));

[$("#runToggle"), $("#stealToggle")].forEach(button => button.addEventListener("click", () => setToggle(button, button.getAttribute("aria-pressed") !== "true")));

$("#saveRecord").addEventListener("click", () => {
  const player = players[selectedPlayerIndex];
  history.push(JSON.stringify(players));
  const runningNote = $("#runningNote").value.trim();
  player.records[editingIndex] = { result: selectedResult, rbi, run: $("#runToggle").getAttribute("aria-pressed") === "true", running: $("#stealToggle").getAttribute("aria-pressed") === "true" ? "도루" : runningNote };
  saveState(); renderSelectedPlayer(); closeSheet(); showToast(`${player.name} 선수의 ${editingIndex + 1}번째 타석을 저장했습니다.`);
});

$("#undoButton").addEventListener("click", () => {
  if (!history.length) return showToast("되돌릴 기록이 없습니다.");
  const previous = JSON.parse(history.pop()); previous.forEach((player, i) => players[i].records = player.records);
  saveState(); renderSelectedPlayer(); showToast("마지막 기록을 되돌렸습니다.");
});

$("#substituteButton").addEventListener("click", () => showToast("선수 교체 기능은 다음 단계에서 연결됩니다."));
document.addEventListener("keydown", event => { if (event.key === "Escape" && !sheet.hidden) closeSheet(); });

try {
  const stored = JSON.parse(localStorage.getItem("playbook-draft"));
  if (Array.isArray(stored) && stored.length === players.length) stored.forEach((player, i) => players[i].records = player.records || []);
} catch (_) { /* 손상된 임시 저장값은 기본 기록으로 대체 */ }

renderLineup(); renderSelectedPlayer(); renderPitches();
