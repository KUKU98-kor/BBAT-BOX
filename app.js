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

const teamLeagues = {
  bbat: [
    { id: "seoul-sunday", name: "서울 일요리그", season: "2026 정규 시즌", record: "12승 1무 5패", rank: "A조 3위", nextGame: { date: "2026-09-21", time: "09:00", opponent: "웨일즈", venue: "목동야구장 2구장" } },
    { id: "mapo-cup", name: "마포 구청장배", season: "2026 토너먼트", record: "2승", rank: "8강 진출", nextGame: { date: "2026-09-27", time: "13:30", opponent: "레드폭스", venue: "난지야구장 1구장" } }
  ],
  braves: [
    { id: "river-saturday", name: "한강 토요리그", season: "2026 하반기", record: "8승 2패", rank: "B조 1위", nextGame: { date: "2026-09-20", time: "11:00", opponent: "타이탄즈", venue: "구의야구공원" } },
    { id: "night-league", name: "서울 야간리그", season: "2026 가을 시즌", record: "4승 1패", rank: "전체 2위", nextGame: { date: "2026-09-24", time: "20:00", opponent: "블루샤크", venue: "신월야구공원" } }
  ]
};

const rosters = {
  bbat: {
    staff: [
      { role: "감독", name: "김태성", phone: "010-12**-4501", player: false },
      { role: "매니저", name: "최현우", phone: "010-34**-7712", player: true },
      { role: "코치", name: "박준호", phone: "010-56**-1930", player: true },
      { role: "총무", name: "오민석", phone: "010-78**-6244", player: false },
      { role: "서기", name: "김민재", phone: "010-90**-3186", player: true }
    ],
    players: [
      { number: "23", name: "이도윤", position: "CF", role: "외야수", bats: "우투우타", avg: .348, ops: .927, stat: ".348", metrics: [86, 75, 89, 82, 91], detail: [["타율", ".348"], ["OPS", ".927"], ["도루", "9"]] },
      { number: "7", name: "김민재", position: "SS", role: "내야수 · 서기", bats: "우투우타", avg: .371, ops: .951, stat: ".371", metrics: [91, 71, 84, 94, 88], detail: [["타율", ".371"], ["OPS", ".951"], ["실책", "2"]] },
      { number: "14", name: "최현우", position: "2B", role: "내야수 · 매니저", bats: "우투좌타", avg: .356, ops: .902, stat: ".356", metrics: [88, 65, 92, 87, 85], detail: [["타율", ".356"], ["출루율", ".421"], ["도루", "11"]] },
      { number: "33", name: "장시온", position: "1B", role: "내야수", bats: "좌투좌타", avg: .342, ops: .988, stat: ".342", metrics: [84, 94, 55, 72, 86], detail: [["타율", ".342"], ["홈런", "6"], ["타점", "24"]] },
      { number: "2", name: "문태경", position: "C", role: "포수", bats: "우투우타", avg: .319, ops: .841, stat: ".319", metrics: [78, 68, 52, 93, 90], detail: [["타율", ".319"], ["도루저지", "41%"], ["타점", "15"]] },
      { number: "18", name: "박준호", position: "SP", role: "투수 · 코치", bats: "우투우타", avg: .214, ops: .603, stat: "2.34", metrics: [82, 88, 63, 80, 92], detail: [["ERA", "2.34"], ["삼진", "47"], ["WHIP", "1.08"]], pitcher: true },
      { number: "41", name: "한지우", position: "RP", role: "투수", bats: "좌투좌타", avg: .182, ops: .510, stat: "2.91", metrics: [77, 83, 58, 76, 85], detail: [["ERA", "2.91"], ["홀드", "5"], ["삼진", "31"]], pitcher: true }
    ]
  },
  braves: {
    staff: [
      { role: "감독", name: "정우진", phone: "010-11**-8270", player: false },
      { role: "매니저", name: "서유찬", phone: "010-29**-4408", player: true },
      { role: "코치", name: "이상민", phone: "010-47**-2851", player: false },
      { role: "총무", name: "배지훈", phone: "010-63**-9175", player: true }
    ],
    players: [
      { number: "18", name: "이도윤", position: "SP", role: "투수", bats: "우투우타", avg: .231, ops: .651, stat: "2.34", metrics: [85, 91, 60, 78, 94], detail: [["ERA", "2.34"], ["삼진", "47"], ["WHIP", "1.08"]], pitcher: true },
      { number: "9", name: "서유찬", position: "RF", role: "외야수 · 매니저", bats: "우투좌타", avg: .389, ops: 1.021, stat: ".389", metrics: [94, 88, 86, 78, 91], detail: [["타율", ".389"], ["OPS", "1.021"], ["타점", "19"]] },
      { number: "27", name: "배지훈", position: "1B", role: "내야수 · 총무", bats: "좌투좌타", avg: .361, ops: .944, stat: ".361", metrics: [89, 92, 54, 73, 87], detail: [["타율", ".361"], ["홈런", "5"], ["타점", "22"]] },
      { number: "5", name: "강민호", position: "SS", role: "내야수", bats: "우투우타", avg: .337, ops: .875, stat: ".337", metrics: [83, 67, 88, 95, 86], detail: [["타율", ".337"], ["도루", "8"], ["실책", "1"]] },
      { number: "32", name: "윤태오", position: "C", role: "포수", bats: "우투우타", avg: .318, ops: .822, stat: ".318", metrics: [78, 70, 48, 92, 89], detail: [["타율", ".318"], ["도루저지", "38%"], ["타점", "13"]] },
      { number: "11", name: "조현석", position: "LF", role: "외야수", bats: "좌투좌타", avg: .306, ops: .798, stat: ".306", metrics: [76, 74, 82, 79, 81], detail: [["타율", ".306"], ["출루율", ".384"], ["득점", "17"]] },
      { number: "45", name: "임건우", position: "RP", role: "투수", bats: "우투우타", avg: .143, ops: .412, stat: "2.76", metrics: [79, 86, 55, 75, 84], detail: [["ERA", "2.76"], ["세이브", "4"], ["삼진", "29"]], pitcher: true }
    ]
  }
};

try {
  const savedSchedules = JSON.parse(localStorage.getItem("bbat-box-schedules"));
  if (savedSchedules) Object.entries(savedSchedules).forEach(([teamKey, leagues]) => leagues.forEach(savedLeague => {
    const league = teamLeagues[teamKey]?.find(item => item.id === savedLeague.id);
    if (league && savedLeague.nextGame) league.nextGame = savedLeague.nextGame;
  }));
} catch (_) { /* 손상된 일정 임시 저장값은 무시합니다. */ }

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
    const navName = name === "profile" ? "home" : name === "roster" ? "team" : name;
    const active = button.dataset.nav === navName;
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

function formatGameDate(dateString) {
  return new Intl.DateTimeFormat("ko-KR", { month: "long", day: "numeric", weekday: "long" }).format(new Date(`${dateString}T00:00:00`));
}

function getLeague(teamKey, leagueId) {
  return teamLeagues[teamKey].find(league => league.id === leagueId) || teamLeagues[teamKey][0];
}

function populateLeagueSelect(select, teamKey, selectedId) {
  const leagues = teamLeagues[teamKey];
  select.innerHTML = leagues.map(league => `<option value="${league.id}">${league.name}</option>`).join("");
  select.value = leagues.some(league => league.id === selectedId) ? selectedId : leagues[0].id;
  return select.value;
}

function renderRosterPreview(teamKey) {
  const team = teams[teamKey];
  const roster = rosters[teamKey];
  document.querySelector("#rosterPreviewTitle").textContent = `${team.name} 선수명단`;
  document.querySelector("#teamStaffPreview").innerHTML = roster.staff.slice(0, 4).map(person => `<span class="staff-chip"><b>${person.role}</b>${person.name}</span>`).join("");
  const hitters = roster.players.filter(player => !player.pitcher).sort((a, b) => b.avg - a.avg).slice(0, 5);
  const pitchers = roster.players.filter(player => player.pitcher).slice(0, 2);
  document.querySelector("#teamRosterPreview").innerHTML = [...hitters, ...pitchers].map(player => `<div class="preview-player ${player.pitcher ? "pitcher" : ""}"><span>${player.number}</span><div><strong>${player.name}</strong><small>${player.position} · ${player.pitcher ? "대표 투수" : "타율 상위"}</small></div><em>${player.stat}</em></div>`).join("");
}

function renderTeamPage(key, requestedLeagueId) {
  const team = teams[key];
  const leagueSelect = document.querySelector("#teamLeagueSelect");
  const leagueId = populateLeagueSelect(leagueSelect, key, requestedLeagueId || leagueSelect.value);
  const league = getLeague(key, leagueId);
  const game = league.nextGame;
  document.querySelector("#teamPageSelect").value = key;
  document.querySelector("#teamPageCrest").childNodes[0].nodeValue = team.initial;
  document.querySelector("#teamMyNumber").textContent = team.number;
  document.querySelector("#teamName").textContent = team.name;
  document.querySelector("#teamMeta").textContent = team.teamMeta.split(" · ").slice(0, 2).join(" · ");
  document.querySelector("#teamLeagueLabel").textContent = league.name;
  document.querySelector("#teamSeasonLabel").textContent = league.season;
  document.querySelector("#teamWins").textContent = league.record;
  document.querySelector("#teamRank").textContent = league.rank;
  document.querySelector("#nextGameLeague").textContent = `${league.name} · 다음 경기`;
  document.querySelector("#nextGameDate").textContent = formatGameDate(game.date);
  document.querySelector("#nextGameHomeCrest").textContent = team.initial;
  document.querySelector("#nextGameTeam").textContent = team.name;
  document.querySelector("#nextGameTime").textContent = game.time;
  document.querySelector("#nextGameVenue").textContent = game.venue;
  document.querySelector("#nextGameAwayCrest").textContent = game.opponent.slice(0, 1);
  document.querySelector("#nextGameOpponent").textContent = game.opponent;
  renderRosterPreview(key);
}

function radarPoints(metrics) {
  const center = [120, 110];
  const endpoints = [[120, 20], [215, 89], [179, 200], [61, 200], [25, 89]];
  return metrics.map((score, index) => {
    const [x, y] = endpoints[index];
    return `${Math.round(center[0] + (x - center[0]) * score / 100)},${Math.round(center[1] + (y - center[1]) * score / 100)}`;
  }).join(" ");
}

function renderPlayerAnalysis(teamKey, playerIndex) {
  const player = rosters[teamKey].players[playerIndex];
  document.querySelectorAll(".player-select").forEach((button, index) => button.classList.toggle("active", index === playerIndex));
  document.querySelector("#analysisNumber").textContent = player.number;
  document.querySelector("#analysisRole").textContent = player.role;
  document.querySelector("#analysisName").textContent = player.name;
  document.querySelector("#analysisSummary").textContent = `${player.bats} · ${player.pitcher ? `ERA ${player.stat}` : `타율 ${player.stat}`}`;
  document.querySelector("#radarValue").setAttribute("points", radarPoints(player.metrics));
  document.querySelector("#analysisMetrics").innerHTML = player.detail.map(([label, value]) => `<div><small>${label}</small><strong>${value}</strong></div>`).join("");
}

function renderRosterManagement(teamKey) {
  const team = teams[teamKey];
  const roster = rosters[teamKey];
  document.querySelector("#rosterTitle").textContent = `${team.name} 선수단`;
  document.querySelector("#staffDirectoryList").innerHTML = roster.staff.map(person => `<div class="staff-contact"><span class="staff-role">${person.role}</span><div><strong>${person.name}</strong><small>${person.player ? "운영진 · 선수 등록" : "운영진"}</small></div><a href="tel:${person.phone.replace(/\*/g, "0")}" aria-label="${person.name} 연락처">${person.phone}</a></div>`).join("");
  document.querySelector("#playerSelectList").innerHTML = roster.players.map((player, index) => `<button class="player-select ${index === 0 ? "active" : ""}" type="button" data-player-index="${index}"><span>${player.number}</span><div><strong>${player.name}</strong><small>${player.role}</small></div><b>${player.stat}</b></button>`).join("");
  renderPlayerAnalysis(teamKey, 0);
}

function saveSchedules() {
  const snapshot = Object.fromEntries(Object.entries(teamLeagues).map(([teamKey, leagues]) => [teamKey, leagues.map(league => ({ id: league.id, nextGame: league.nextGame }))]));
  localStorage.setItem("bbat-box-schedules", JSON.stringify(snapshot));
}

function buildCalendar() {
  const grid = document.querySelector("#calendarGrid");
  const weekdays = ["일", "월", "화", "수", "목", "금", "토"];
  const events = { 5: ["braves"], 7: ["bbat"], 12: ["personal"], 13: ["braves"], 18: ["personal"], 21: ["bbat", "personal"], 27: ["braves"] };
  Object.entries(teamLeagues).forEach(([teamKey, leagues]) => leagues.forEach(league => {
    const date = new Date(`${league.nextGame.date}T00:00:00`);
    if (date.getFullYear() === 2026 && date.getMonth() === 8) {
      const day = date.getDate();
      events[day] = [...new Set([...(events[day] || []), teamKey])];
    }
  }));
  const cells = weekdays.map(day => `<div class="weekday">${day}</div>`);
  for (let day = 30; day <= 31; day++) cells.push(`<div class="other">${day}</div>`);
  for (let day = 1; day <= 30; day++) {
    const classes = [day === 18 ? "today" : "", day === 21 ? "selected" : ""].filter(Boolean).join(" ");
    const dots = events[day] ? `<span class="event-dots">${events[day].map(type => `<i class="${type}"></i>`).join("")}</span>` : "";
    cells.push(`<div class="${classes}">${day}${dots}</div>`);
  }
  grid.innerHTML = cells.join("");
}

function renderCalendarGame(teamKey, leagueId) {
  const team = teams[teamKey];
  const league = getLeague(teamKey, leagueId);
  const game = league.nextGame;
  const date = new Date(`${game.date}T00:00:00`);
  document.querySelector("#calendarDayNumber").textContent = date.getDate();
  document.querySelector("#calendarDayTitle").textContent = formatGameDate(game.date);
  document.querySelector("#calendarGameMeta").textContent = `${game.time} · ${game.venue}`;
  document.querySelector("#calendarGameMatchup").textContent = `${team.name} vs ${game.opponent}`;
  document.querySelector("#calendarGameLeague").textContent = `${league.name} · 예정 경기`;
  document.querySelector(".day-game .team-line").className = `team-line ${teamKey}`;
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

const scheduleModal = document.querySelector("#scheduleModal");
const scheduleBackdrop = document.querySelector("#scheduleBackdrop");

function fillScheduleForm(teamKey, leagueId) {
  const teamInput = document.querySelector("#scheduleTeamInput");
  const leagueInput = document.querySelector("#scheduleLeagueInput");
  teamInput.value = teamKey;
  const selectedLeagueId = populateLeagueSelect(leagueInput, teamKey, leagueId);
  const game = getLeague(teamKey, selectedLeagueId).nextGame;
  document.querySelector("#scheduleDateInput").value = game.date;
  document.querySelector("#scheduleTimeInput").value = game.time;
  document.querySelector("#scheduleOpponentInput").value = game.opponent;
  document.querySelector("#scheduleVenueInput").value = game.venue;
}

function openScheduleEditor() {
  const teamKey = document.querySelector("#teamPageSelect").value;
  const leagueId = document.querySelector("#teamLeagueSelect").value;
  fillScheduleForm(teamKey, leagueId);
  scheduleModal.hidden = false;
  scheduleBackdrop.hidden = false;
  document.body.style.overflow = "hidden";
  document.querySelector("#scheduleDateInput").focus();
}

function closeScheduleEditor() {
  scheduleModal.hidden = true;
  scheduleBackdrop.hidden = true;
  document.body.style.overflow = "";
  document.querySelector("#openScheduleEditor").focus();
}

document.addEventListener("click", event => {
  const nav = event.target.closest("[data-nav]");
  const go = event.target.closest("[data-go]");
  const playerButton = event.target.closest("[data-player-index]");
  if (nav) showScreen(nav.dataset.nav);
  if (go) showScreen(go.dataset.go);
  if (playerButton) renderPlayerAnalysis(document.querySelector("#teamPageSelect").value, Number(playerButton.dataset.playerIndex));
  if (event.target.closest("[data-open-live]")) openLiveDetail();
});

document.querySelector("#homeTeamSelect").addEventListener("change", event => renderHomeTeam(event.target.value));
document.querySelector("#teamPageSelect").addEventListener("change", event => renderTeamPage(event.target.value));
document.querySelector("#teamLeagueSelect").addEventListener("change", event => renderTeamPage(document.querySelector("#teamPageSelect").value, event.target.value));
document.querySelector("#openRosterManagement").addEventListener("click", () => {
  const teamKey = document.querySelector("#teamPageSelect").value;
  renderRosterManagement(teamKey);
  showScreen("roster");
});
document.querySelector("#rosterBackButton").addEventListener("click", () => showScreen("team"));
document.querySelector("#addPlayerButton").addEventListener("click", () => showToast("선수 추가는 팀 관리자 권한으로 연결됩니다."));
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
document.querySelector("#openScheduleEditor").addEventListener("click", openScheduleEditor);
document.querySelector("#closeScheduleEditor").addEventListener("click", closeScheduleEditor);
document.querySelector("#cancelScheduleEdit").addEventListener("click", closeScheduleEditor);
scheduleBackdrop.addEventListener("click", closeScheduleEditor);
document.querySelector("#scheduleTeamInput").addEventListener("change", event => fillScheduleForm(event.target.value));
document.querySelector("#scheduleLeagueInput").addEventListener("change", event => fillScheduleForm(document.querySelector("#scheduleTeamInput").value, event.target.value));
document.querySelector("#scheduleForm").addEventListener("submit", event => {
  event.preventDefault();
  const teamKey = document.querySelector("#scheduleTeamInput").value;
  const leagueId = document.querySelector("#scheduleLeagueInput").value;
  const league = getLeague(teamKey, leagueId);
  league.nextGame = {
    date: document.querySelector("#scheduleDateInput").value,
    time: document.querySelector("#scheduleTimeInput").value,
    opponent: document.querySelector("#scheduleOpponentInput").value.trim(),
    venue: document.querySelector("#scheduleVenueInput").value.trim()
  };
  saveSchedules();
  document.querySelector("#teamPageSelect").value = teamKey;
  renderTeamPage(teamKey, leagueId);
  buildCalendar();
  renderCalendarGame(teamKey, leagueId);
  closeScheduleEditor();
  showToast("일정을 저장해 캘린더와 다음 경기에 반영했습니다.");
});

const settingsSheet = document.querySelector("#settingsSheet");
const modalBackdrop = document.querySelector("#modalBackdrop");
function openSettings() { settingsSheet.hidden = false; modalBackdrop.hidden = false; document.body.style.overflow = "hidden"; document.querySelector("#closeSettings").focus(); }
function closeSettings() { settingsSheet.hidden = true; modalBackdrop.hidden = true; document.body.style.overflow = ""; document.querySelector("#settingsButton").focus(); }
document.querySelector("#settingsButton").addEventListener("click", openSettings);
document.querySelector("#closeSettings").addEventListener("click", closeSettings);
modalBackdrop.addEventListener("click", closeSettings);
document.addEventListener("keydown", event => {
  if (event.key !== "Escape") return;
  if (!settingsSheet.hidden) closeSettings();
  if (!scheduleModal.hidden) closeScheduleEditor();
});

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
renderTeamPage("bbat", "seoul-sunday");
renderCalendarGame("bbat", "seoul-sunday");
