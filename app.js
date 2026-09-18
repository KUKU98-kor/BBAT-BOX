const teams = {
  bbat: {
    name: "배트조짐", header: "배트조짐 · 중견수", role: "선수 · 기록원", position: "CF", bats: "우투우타", games: "18경기",
    number: "23", initial: "B", logo: "", logoColors: ["#0b3539", "#147565"], league: "서울 일요리그", standing: "A조 3위",
    title: "배트조짐에서의 시즌", trend: "최근 5경기 ▲ .042", summary: "18경기 · 61타석",
    stats: [["타율", ".348"], ["타점", "21"], ["OPS", ".927"]],
    teamMeta: "2021년 창단 · 선수 24명 · 서울 일요리그", wins: "12승 1무 5패", rank: "A조 3위"
  },
  braves: {
    name: "브레이브스", header: "브레이브스 · 투수", role: "선수", position: "P", bats: "우투우타", games: "10경기",
    number: "18", initial: "BR", logo: "", logoColors: ["#183353", "#407fc1"], league: "한강 토요리그", standing: "B조 1위",
    title: "브레이브스에서의 시즌", trend: "최근 3경기 ERA 1.42", summary: "10경기 · 42⅓이닝",
    stats: [["방어율", "2.34"], ["삼진", "47"], ["WHIP", "1.08"]],
    teamMeta: "2019년 창단 · 선수 21명 · 한강 토요리그", wins: "8승 2패", rank: "B조 1위"
  },
  solo: {
    name: "개인 기록", header: "개인 기록 · 외야수", role: "개인 기록", position: "OF", bats: "우투우타", games: "6경기",
    number: "7", initial: "ME", logo: "", logoColors: ["#4e3d18", "#b17b19"], league: "연습 경기와 친선전", standing: "직접 기록",
    title: "나의 개인 경기", trend: "최근 경기 2안타", summary: "6경기 · 19타석",
    stats: [["타율", ".375"], ["타점", "7"], ["OPS", "1.022"]]
  }
};

const screens = [...document.querySelectorAll(".app-screen")];
const navButtons = [...document.querySelectorAll("[data-nav]")];
const toast = document.querySelector("#toast");
const positionLabels = { CF: "중견수", P: "투수", SS: "유격수", "2B": "2루수", C: "포수", OF: "외야수" };
let savedProfilePhoto = localStorage.getItem("bbat-box-profile-photo") || "";
let draftProfilePhoto = savedProfilePhoto;

function applyProfilePhoto(source) {
  document.querySelectorAll(".profile-photo").forEach(frame => {
    const image = frame.querySelector(".profile-photo-image");
    image.src = source || "";
    frame.classList.toggle("has-image", Boolean(source));
  });
}

function resizeProfilePhoto(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
      const image = new Image();
      image.onerror = reject;
      image.onload = () => {
        const limit = 720;
        const scale = Math.min(1, limit / Math.max(image.width, image.height));
        const canvas = document.createElement("canvas");
        canvas.width = Math.max(1, Math.round(image.width * scale));
        canvas.height = Math.max(1, Math.round(image.height * scale));
        canvas.getContext("2d").drawImage(image, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL("image/jpeg", .86));
      };
      image.src = reader.result;
    };
    reader.readAsDataURL(file);
  });
}

function showScreen(name) {
  screens.forEach(screen => {
    const active = screen.dataset.screen === name;
    screen.hidden = !active;
    screen.classList.toggle("is-active", active);
  });
  navButtons.forEach(button => {
    const active = button.dataset.nav === (name === "profile" ? "home" : name);
    button.classList.toggle("active", active);
    active ? button.setAttribute("aria-current", "page") : button.removeAttribute("aria-current");
  });
  if (name !== "live") closeLiveDetail();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 2200);
}

function renderHomeTeam(key) {
  const team = teams[key];
  const teamCard = document.querySelector(".team-info-card");
  const logoImage = document.querySelector("#teamLogoWatermarkImage");
  teamCard.style.setProperty("--team-logo-start", team.logoColors[0]);
  teamCard.style.setProperty("--team-logo-end", team.logoColors[1]);
  document.querySelector("#teamLogoWatermark").textContent = team.initial;
  logoImage.hidden = !team.logo;
  logoImage.src = team.logo || "";
  document.querySelector("#homeTeamSelect").value = key;
  document.querySelector("#headerTeam").textContent = team.header;
  document.querySelector("#headerNumber").textContent = team.number;
  document.querySelector("#profileTeam").textContent = team.name;
  document.querySelector("#profileTeamInitial").textContent = team.initial;
  document.querySelector("#profileRole").textContent = team.role;
  document.querySelector("#profileLeague").textContent = team.league;
  document.querySelector("#profileTeamStanding").textContent = team.standing;
  document.querySelector("#profileNumber").textContent = `N.${team.number}`;
  document.querySelector("#profileTeamShort").textContent = team.name;
  document.querySelector("#profilePosition").textContent = team.position;
  document.querySelector("#profileBats").textContent = team.bats;
  document.querySelector("#profileGames").textContent = team.games;
  document.querySelector("#seasonTitle").textContent = team.title;
  document.querySelector("#seasonTrend").textContent = team.trend;
  document.querySelector("#recordSummary").textContent = team.summary;
  document.querySelector("#homeStats").innerHTML = team.stats.map(([label, value], index) => `<div class="${index === 0 ? "key" : ""}"><small>${label}</small><strong>${value}</strong></div>`).join("");
}

function openProfileEditor() {
  const key = document.querySelector("#homeTeamSelect").value;
  const team = teams[key];
  document.querySelector("#profileTeamSelect").value = key;
  document.querySelector("#profileNumberInput").value = team.number;
  document.querySelector("#profilePositionInput").value = team.position;
  document.querySelector("#throwHandInput").value = team.bats.slice(0, 2);
  document.querySelector("#batHandInput").value = team.bats.slice(2);
  document.querySelector("#editorTeamCaption").textContent = `${team.name} · N.${team.number}`;
  draftProfilePhoto = savedProfilePhoto;
  applyProfilePhoto(draftProfilePhoto);
  showScreen("profile");
}

function closeProfileEditor() {
  draftProfilePhoto = savedProfilePhoto;
  applyProfilePhoto(savedProfilePhoto);
  document.querySelector("#profilePhotoInput").value = "";
  showScreen("home");
}

function renderTeamPage(key) {
  const team = teams[key];
  document.querySelector("#teamName").textContent = team.name;
  document.querySelector("#teamMeta").textContent = team.teamMeta;
  document.querySelector("#teamWins").textContent = team.wins;
  document.querySelector("#teamRank").textContent = team.rank;
}

function buildCalendar() {
  const grid = document.querySelector("#calendarGrid");
  const weekdays = ["일", "월", "화", "수", "목", "금", "토"];
  const events = { 5: ["braves"], 7: ["bbat"], 12: ["personal"], 13: ["braves"], 18: ["personal"], 21: ["bbat", "personal"], 27: ["braves"] };
  const cells = weekdays.map(day => `<div class="weekday">${day}</div>`);
  for (let day = 30; day <= 31; day++) cells.push(`<div class="other">${day}</div>`);
  for (let day = 1; day <= 30; day++) {
    const classes = [day === 18 ? "today" : "", day === 21 ? "selected" : ""].filter(Boolean).join(" ");
    const dots = events[day] ? `<span class="event-dots">${events[day].map(type => `<i class="${type}"></i>`).join("")}</span>` : "";
    cells.push(`<div class="${classes}">${day}${dots}</div>`);
  }
  grid.innerHTML = cells.join("");
}

function openLiveDetail() {
  document.querySelector("#liveGameList").hidden = true;
  document.querySelector("#liveStadium").hidden = false;
  document.querySelector("#liveStadium").scrollIntoView({ behavior: "smooth", block: "start" });
}

function closeLiveDetail() {
  const stadium = document.querySelector("#liveStadium");
  const list = document.querySelector("#liveGameList");
  if (stadium && list) { stadium.hidden = true; list.hidden = false; }
}

function renderLiveTab(tab) {
  const list = document.querySelector("#liveGameList");
  closeLiveDetail();
  if (tab === "playing") {
    list.innerHTML = `<button class="live-game-card" type="button" data-open-live="main"><span class="live-now"><i></i>LIVE</span><div class="live-teams"><div><span class="small-crest home">B</span><strong>배트조짐</strong><b>3</b></div><div class="inning"><strong>5회초</strong><small>2사 · 주자 1루</small></div><div><span class="small-crest away">W</span><strong>웨일즈</strong><b>2</b></div></div><span class="watch-live">상황판 보기</span></button>`;
  } else {
    list.innerHTML = `<button class="live-game-card finished" type="button"><span class="date-line">경기 종료 · 9월 14일</span><div class="live-teams"><div><span class="small-crest home">B</span><strong>브레이브스</strong><b>7</b></div><div class="inning"><strong>종료</strong><small>한강 토요리그</small></div><div><span class="small-crest away">T</span><strong>타이탄즈</strong><b>4</b></div></div><span class="watch-live">경기 기록 보기</span></button><button class="live-game-card finished" type="button"><span class="date-line">경기 종료 · 9월 7일</span><div class="live-teams"><div><span class="small-crest home">B</span><strong>배트조짐</strong><b>5</b></div><div class="inning"><strong>종료</strong><small>서울 일요리그</small></div><div><span class="small-crest away">R</span><strong>러너스</strong><b>5</b></div></div><span class="watch-live">경기 기록 보기</span></button>`;
  }
}

document.addEventListener("click", event => {
  const nav = event.target.closest("[data-nav]");
  const go = event.target.closest("[data-go]");
  if (nav) showScreen(nav.dataset.nav);
  if (go) showScreen(go.dataset.go);
  if (event.target.closest("[data-open-live]")) openLiveDetail();
});

document.querySelector("#homeTeamSelect").addEventListener("change", event => renderHomeTeam(event.target.value));
document.querySelector("#teamPageSelect").addEventListener("change", event => renderTeamPage(event.target.value));
document.querySelector("#openProfileEditor").addEventListener("click", openProfileEditor);
document.querySelector("#profileBackButton").addEventListener("click", closeProfileEditor);
document.querySelector("#cancelProfileEdit").addEventListener("click", closeProfileEditor);
document.querySelector("#changePhotoButton").addEventListener("click", () => document.querySelector("#profilePhotoInput").click());
document.querySelector("#profilePhotoInput").addEventListener("change", async event => {
  const [file] = event.target.files;
  if (!file) return;
  if (!file.type.startsWith("image/")) return showToast("이미지 파일만 선택할 수 있습니다.");
  if (file.size > 10 * 1024 * 1024) return showToast("10MB 이하 사진을 선택해 주세요.");
  try {
    draftProfilePhoto = await resizeProfilePhoto(file);
    applyProfilePhoto(draftProfilePhoto);
    showToast("사진 미리보기를 적용했습니다. 저장을 눌러 완료하세요.");
  } catch (_) {
    showToast("사진을 불러오지 못했습니다. 다른 파일을 선택해 주세요.");
  }
});
document.querySelector("#profileTeamSelect").addEventListener("change", event => {
  const team = teams[event.target.value];
  document.querySelector("#profileNumberInput").value = team.number;
  document.querySelector("#profilePositionInput").value = team.position;
  document.querySelector("#throwHandInput").value = team.bats.slice(0, 2);
  document.querySelector("#batHandInput").value = team.bats.slice(2);
  document.querySelector("#editorTeamCaption").textContent = `${team.name} · N.${team.number}`;
});
document.querySelector("#profileForm").addEventListener("submit", event => {
  event.preventDefault();
  const key = document.querySelector("#profileTeamSelect").value;
  const name = document.querySelector("#profileNameInput").value.trim() || "이도윤";
  const number = document.querySelector("#profileNumberInput").value.trim() || teams[key].number;
  const position = document.querySelector("#profilePositionInput").value;
  const throws = document.querySelector("#throwHandInput").value;
  const bats = document.querySelector("#batHandInput").value;
  teams[key].number = number;
  teams[key].position = position;
  teams[key].bats = `${throws}${bats}`;
  teams[key].header = `${teams[key].name} · ${positionLabels[position] || position}`;
  savedProfilePhoto = draftProfilePhoto;
  try { localStorage.setItem("bbat-box-profile-photo", savedProfilePhoto); } catch (_) { showToast("사진은 적용됐지만 이 기기에는 저장하지 못했습니다."); }
  document.querySelector("#profileDisplayName").textContent = name;
  document.querySelector(".mini-profile-copy strong").textContent = name;
  document.querySelector(".photo-editor-card h2").textContent = name;
  renderHomeTeam(key);
  showScreen("home");
  showToast("프로필 변경사항을 저장했습니다.");
});

document.querySelector("#leagueAccordion").addEventListener("click", event => {
  const toggle = event.target.closest(".league-toggle");
  if (!toggle) return;
  const row = toggle.closest(".league-row");
  const willOpen = !row.classList.contains("is-open");
  document.querySelectorAll(".league-row").forEach(item => {
    item.classList.remove("is-open");
    item.querySelector(".league-toggle").setAttribute("aria-expanded", "false");
  });
  row.classList.toggle("is-open", willOpen);
  toggle.setAttribute("aria-expanded", String(willOpen));
});

document.querySelectorAll("[data-live-tab]").forEach(button => button.addEventListener("click", () => {
  document.querySelectorAll("[data-live-tab]").forEach(item => item.classList.toggle("active", item === button));
  renderLiveTab(button.dataset.liveTab);
}));

document.querySelector("#closeLiveDetail").addEventListener("click", closeLiveDetail);
document.querySelector("#openScorebook").addEventListener("click", () => showToast("기록 입력 화면은 다음 단계에서 LIVE와 연결할 예정입니다."));
document.querySelector(".permission-action").addEventListener("click", () => showToast("리그 생성은 팀 리더 권한 확인 후 열립니다."));
document.querySelector("#joinTeamButton").addEventListener("click", () => showToast("참가 코드 입력 화면은 다음 단계에서 연결합니다."));

const settingsSheet = document.querySelector("#settingsSheet");
const modalBackdrop = document.querySelector("#modalBackdrop");
function openSettings() { settingsSheet.hidden = false; modalBackdrop.hidden = false; document.body.style.overflow = "hidden"; document.querySelector("#closeSettings").focus(); }
function closeSettings() { settingsSheet.hidden = true; modalBackdrop.hidden = true; document.body.style.overflow = ""; document.querySelector("#settingsButton").focus(); }
document.querySelector("#settingsButton").addEventListener("click", openSettings);
document.querySelector("#closeSettings").addEventListener("click", closeSettings);
modalBackdrop.addEventListener("click", closeSettings);
document.addEventListener("keydown", event => { if (event.key === "Escape" && !settingsSheet.hidden) closeSettings(); });

const didWell = document.querySelector("#didWell");
const toLearn = document.querySelector("#toLearn");
document.querySelector("#saveNoteButton").addEventListener("click", () => {
  localStorage.setItem("bbat-box-note", JSON.stringify({ didWell: didWell.value, toLearn: toLearn.value }));
  showToast("9월 21일 야구 노트를 저장했습니다.");
});
try {
  const saved = JSON.parse(localStorage.getItem("bbat-box-note"));
  if (saved) { didWell.value = saved.didWell || ""; toLearn.value = saved.toLearn || ""; }
} catch (_) { /* 손상된 임시 저장값은 무시합니다. */ }

buildCalendar();
applyProfilePhoto(savedProfilePhoto);
renderHomeTeam("bbat");
