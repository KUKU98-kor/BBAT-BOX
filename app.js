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
    if (league && Array.isArray(savedLeague.games)) league.games = savedLeague.games;
  }));
} catch (_) { /* 손상된 일정 임시 저장값은 무시합니다. */ }

try {
  const savedPlayers = JSON.parse(localStorage.getItem("bbat-box-added-players"));
  if (savedPlayers) Object.entries(savedPlayers).forEach(([teamKey, players]) => players.forEach(player => {
    if (rosters[teamKey] && !rosters[teamKey].players.some(item => item.number === player.number && item.name === player.name)) rosters[teamKey].players.push(player);
  }));
} catch (_) { /* 손상된 선수 임시 저장값은 무시합니다. */ }

let attendanceState = {};
let lineupState = {};
try { attendanceState = JSON.parse(localStorage.getItem("bbat-box-attendance")) || {}; } catch (_) { attendanceState = {}; }
try { lineupState = JSON.parse(localStorage.getItem("bbat-box-lineups")) || {}; } catch (_) { lineupState = {}; }

const screens = [...document.querySelectorAll(".app-screen")];
const navButtons = [...document.querySelectorAll("[data-nav]")];
const toast = document.querySelector("#toast");
const positionLabels = {
  CF: "중견수",
  LF: "좌익수",
  RF: "우익수",
  OF: "외야수",
  SS: "유격수",
  "2B": "2루수",
  "3B": "3루수",
  "1B": "1루수",
  C: "포수",
  P: "투수",
  SP: "선발투수",
  RP: "구원투수",
  DH: "지명타자",
};
let savedProfilePhoto = localStorage.getItem("bbat-box-profile-photo") || "";
let draftProfilePhoto = savedProfilePhoto;
let signedInAccount = null;

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
  if (name === "live") renderLiveTab(document.querySelector("[data-live-tab].active")?.dataset.liveTab || "playing");
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

function offsetGame(game, days, opponent, venue) {
  const date = new Date(`${game.date}T00:00:00`);
  date.setDate(date.getDate() + days);
  const localDate = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
  return { date: localDate, time: game.time, opponent, venue };
}

function getLeagueGames(teamKey, leagueId) {
  const league = getLeague(teamKey, leagueId);
  if (!Array.isArray(league.games)) {
    league.games = [
      { ...league.nextGame },
      offsetGame(league.nextGame, 14, "블루웨이브", "신월야구공원"),
      offsetGame(league.nextGame, 28, "서울파이터스", "난지야구장 2구장"),
    ];
  }
  return league.games.sort((a, b) => a.date.localeCompare(b.date));
}

function daysUntilGame(game) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const gameDate = new Date(`${game.date}T00:00:00`);
  return Math.ceil((gameDate - today) / 86400000);
}

function getUpcomingGames(teamKey, leagueId) {
  return getLeagueGames(teamKey, leagueId).filter(game => daysUntilGame(game) >= 0);
}

function getNextWeekGame(teamKey, leagueId) {
  return getUpcomingGames(teamKey, leagueId).find(game => daysUntilGame(game) <= 7) || null;
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
  const visiblePlayers = roster.players.slice(0, 9);
  document.querySelector("#teamRosterPreview").innerHTML = visiblePlayers.map(player => `<div class="preview-player ${player.pitcher ? "pitcher" : ""}"><span>${player.number}</span><div><strong>${player.name}</strong><small>${player.position} · ${player.role.split(" · ")[0]}</small></div><em>${player.stat}</em></div>`).join("");
}

function gameKey(teamKey, leagueId, game = getNextWeekGame(teamKey, leagueId) || getLeague(teamKey, leagueId).nextGame) {
  return `${teamKey}:${leagueId}:${game.date}`;
}

function ensureAttendance(teamKey, leagueId, game) {
  const key = gameKey(teamKey, leagueId, game);
  if (!attendanceState[key]) {
    attendanceState[key] = Object.fromEntries(rosters[teamKey].players.map((player, index) => [player.name, index < 6 ? "yes" : index === 6 ? "maybe" : "no"]));
  }
  return attendanceState[key];
}

function renderSchedulePolls(teamKey, leagueId) {
  const games = getUpcomingGames(teamKey, leagueId).slice(0, 3);
  document.querySelector("#schedulePollList").innerHTML = games.length ? games.map(game => {
    const attendance = ensureAttendance(teamKey, leagueId, game);
    const attending = Object.values(attendance).filter(status => status === "yes").length;
    const myStatus = attendance[currentAccountName()] || "maybe";
    const days = daysUntilGame(game);
    const closed = days <= 7;
    const timing = closed ? "투표 마감" : `${days - 7}일 후 마감`;
    return `<article class="schedule-poll ${closed ? "closed" : ""}"><div class="poll-game"><span>${formatGameDate(game.date)} · ${game.time}</span><strong>vs ${game.opponent}</strong><small>${game.venue}</small></div><div class="poll-state"><b>${timing}</b><span>참가 ${attending}명</span></div><div class="attendance-buttons"><button type="button" data-attendance="yes" data-game-date="${game.date}" class="${myStatus === "yes" ? "active" : ""}" ${closed ? "disabled" : ""}>참가</button><button type="button" data-attendance="maybe" data-game-date="${game.date}" class="${myStatus === "maybe" ? "active" : ""}" ${closed ? "disabled" : ""}>미정</button><button type="button" data-attendance="no" data-game-date="${game.date}" class="${myStatus === "no" ? "active" : ""}" ${closed ? "disabled" : ""}>불참</button></div></article>`;
  }).join("") : `<p class="poll-empty">등록된 향후 경기가 없습니다. 관리자가 일정을 추가하면 참가 투표가 열립니다.</p>`;
}

function renderLineupStatus(teamKey, leagueId) {
  const game = getNextWeekGame(teamKey, leagueId);
  const button = document.querySelector("#openLineupBuilder");
  button.disabled = !game;
  if (!game) {
    document.querySelector("#lineupStatus").textContent = "7일 안에 예정된 경기가 생기면 해당 경기의 라인업이 표시됩니다.";
    return;
  }
  const saved = lineupState[gameKey(teamKey, leagueId, game)];
  const batting = Array.isArray(saved) ? saved : saved?.batting || [];
  document.querySelector("#lineupStatus").textContent = batting.length ? `${formatGameDate(game.date)} 라인업 ${batting.filter(item => item.player).length}명 등록 · 팀원에게 공개 중` : `${formatGameDate(game.date)} 경기 라인업을 구성할 수 있습니다.`;
}

function renderLeagueRosterSync(teamKey) {
  const team = rosters[teamKey];
  document.querySelector("#leagueRosterTeamSelect").value = teamKey;
  document.querySelector("#leagueRosterSyncList").innerHTML = team.players.map(player => `<span><b>${player.number}</b>${player.name}<small>${player.position}</small></span>`).join("");
}

function possiblePositions(player) {
  if (player.possiblePositions?.length) return player.possiblePositions;
  const alternatives = { CF: ["CF", "LF", "RF"], SS: ["SS", "2B", "3B"], "2B": ["2B", "SS"], "1B": ["1B", "DH"], C: ["C", "1B"], SP: ["P", "DH"], RP: ["P", "RF"] };
  return alternatives[player.position] || [player.position];
}

function renderTeamPage(key, requestedLeagueId) {
  const team = teams[key];
  const leagueSelect = document.querySelector("#teamLeagueSelect");
  const leagueId = populateLeagueSelect(leagueSelect, key, requestedLeagueId || leagueSelect.value);
  const league = getLeague(key, leagueId);
  const game = getNextWeekGame(key, leagueId);
  document.querySelector("#teamPageSelect").value = key;
  document.querySelector("#teamPageCrest").childNodes[0].nodeValue = team.initial;
  document.querySelector("#teamMyNumber").textContent = team.number;
  document.querySelector("#teamName").textContent = team.name;
  document.querySelector("#teamMeta").textContent = team.teamMeta.split(" · ").slice(0, 2).join(" · ");
  document.querySelector("#teamHostBadge").hidden = !(key === "bbat" && signedInAccount?.teamRoles?.bbat === "host");
  document.querySelector("#teamLeagueLabel").textContent = league.name;
  document.querySelector("#teamSeasonLabel").textContent = league.season;
  document.querySelector("#teamWins").textContent = league.record;
  document.querySelector("#teamRank").textContent = league.rank;
  document.querySelector("#nextGameLeague").textContent = `${league.name} · 다음 경기`;
  document.querySelector("#nextGameDate").textContent = game ? formatGameDate(game.date) : "다가오는 7일 내 경기 없음";
  document.querySelector("#nextGameHomeCrest").textContent = team.initial;
  document.querySelector("#nextGameTeam").textContent = team.name;
  document.querySelector("#nextGameMatchup").hidden = !game;
  if (game) {
    document.querySelector("#nextGameTime").textContent = game.time;
    document.querySelector("#nextGameVenue").textContent = game.venue;
    document.querySelector("#nextGameAwayCrest").textContent = game.opponent.slice(0, 1);
    document.querySelector("#nextGameOpponent").textContent = game.opponent;
  }
  renderRosterPreview(key);
  renderSchedulePolls(key, leagueId);
  renderLineupStatus(key, leagueId);
}

function radarPoints(metrics) {
  const center = [120, 110];
  const endpoints = [[120, 20], [215, 89], [179, 200], [61, 200], [25, 89]];
  return metrics.map((score, index) => {
    const [x, y] = endpoints[index];
    return `${Math.round(center[0] + (x - center[0]) * score / 100)},${Math.round(center[1] + (y - center[1]) * score / 100)}`;
  }).join(" ");
}

let rosterRecordMode = "hitting";
let selectedRosterPlayerIndex = 0;

function hittingRecord(player, index) {
  const games = 18 - index % 5;
  const pa = 62 - index * 2;
  const walks = 4 + index % 5;
  const atBats = pa - walks - 2;
  const hits = Math.max(1, Math.round(player.avg * atBats));
  const homeRuns = Math.max(0, Math.round((player.ops - .62) * 14));
  return { G: games, PA: pa, AB: atBats, H: hits, "2B": Math.max(1, Math.round(hits * .2)), "3B": index % 3, HR: homeRuns, RBI: 8 + homeRuns * 3 + index, R: 9 + index, BB: walks, SB: Math.max(0, 10 - index), AVG: player.avg.toFixed(3).replace(/^0/, ""), OPS: player.ops.toFixed(3).replace(/^0/, "") };
}

function pitchingRecord(player, index) {
  const era = Number(player.stat);
  const innings = 42.1 - index * 4.2;
  const strikeouts = Number(player.detail.find(([label]) => label === "삼진")?.[1] || 29);
  return { G: 10 - index, GS: Math.max(0, 7 - index * 2), IP: innings.toFixed(1), W: Math.max(1, 6 - index), L: 2 + index, SV: index ? 4 : 0, H: 31 + index * 3, BB: 11 + index * 2, K: strikeouts, ERA: era.toFixed(2), WHIP: player.detail.find(([label]) => label === "WHIP")?.[1] || (1.08 + index * .11).toFixed(2) };
}

function renderRosterTable(teamKey) {
  const roster = rosters[teamKey];
  const visiblePlayers = roster.players.map((player, index) => ({ player, index })).filter(({ player }) => rosterRecordMode === "hitting" || player.pitcher);
  const metricColumns = rosterRecordMode === "hitting" ? ["G", "PA", "AB", "H", "2B", "3B", "HR", "RBI", "R", "BB", "SB", "AVG", "OPS"] : ["G", "GS", "IP", "W", "L", "SV", "H", "BB", "K", "ERA", "WHIP"];
  const columns = [...metricColumns, ...Array(13 - metricColumns.length).fill("")];
  document.querySelector("#playerRecordTableHead").innerHTML = `<tr><th>사진</th><th>등번호</th><th>이름</th><th>포지션</th>${columns.map(column => `<th>${column}</th>`).join("")}</tr>`;
  document.querySelector("#playerRecordTableBody").innerHTML = visiblePlayers.map(({ player, index }, visibleIndex) => {
    const record = rosterRecordMode === "hitting" ? hittingRecord(player, index) : pitchingRecord(player, visibleIndex);
    return `<tr class="${index === selectedRosterPlayerIndex ? "active" : ""}" data-player-row="${index}" data-player-index="${index}"><td><span class="table-player-photo" aria-hidden="true">${player.name.slice(0, 1)}</span></td><td><b class="table-number">${player.number}</b></td><td><button class="record-player-button" type="button"><span><strong>${player.name}</strong><small>${player.role}</small></span></button></td><td>${player.position}</td>${columns.map(column => `<td>${column ? record[column] : ""}</td>`).join("")}</tr>`;
  }).join("");
  const select = document.querySelector("#rosterPlayerSelect");
  select.innerHTML = visiblePlayers.map(({ player, index }) => `<option value="${index}">${player.number} ${player.name} · ${player.position}</option>`).join("");
  if (!visiblePlayers.some(({ index }) => index === selectedRosterPlayerIndex)) selectedRosterPlayerIndex = visiblePlayers[0].index;
  select.value = String(selectedRosterPlayerIndex);
}

function renderPlayerAnalysis(teamKey, playerIndex) {
  const player = rosters[teamKey].players[playerIndex];
  selectedRosterPlayerIndex = playerIndex;
  document.querySelectorAll("[data-player-row]").forEach(row => row.classList.toggle("active", Number(row.dataset.playerRow) === playerIndex));
  document.querySelector("#rosterPlayerSelect").value = String(playerIndex);
  const record = rosterRecordMode === "hitting" ? hittingRecord(player, playerIndex) : pitchingRecord(player, rosters[teamKey].players.filter(item => item.pitcher).indexOf(player));
  const detailedColumns = rosterRecordMode === "hitting" ? ["G", "PA", "AB", "H", "2B", "3B", "HR", "RBI", "R", "BB", "SB", "AVG"] : ["G", "GS", "IP", "W", "L", "SV", "H", "BB", "K", "ERA", "WHIP"];
  document.querySelector("#detailPlayerTitle").textContent = `${player.name} ${rosterRecordMode === "hitting" ? "타자" : "투수"} 기록`;
  document.querySelector("#detailNumber").textContent = player.number;
  document.querySelector("#detailName").textContent = player.name;
  document.querySelector("#detailPlayerMeta").textContent = `${player.position} · ${player.bats}`;
  document.querySelector("#detailPrimaryStat").textContent = rosterRecordMode === "hitting" ? record.AVG : record.ERA;
  document.querySelector("#playerDetailStats").innerHTML = detailedColumns.map(column => `<div><small>${column}</small><strong>${record[column]}</strong></div>`).join("");
  document.querySelector("#recentFormBars").innerHTML = player.metrics.map((score, index) => `<i style="height:${Math.max(18, score - index * 5)}%" title="${score}"></i>`).join("");
  document.querySelector("#analysisNumber").textContent = player.number;
  document.querySelector("#analysisRole").textContent = player.role;
  document.querySelector("#analysisName").textContent = player.name;
  document.querySelector("#analysisSummary").textContent = `${player.bats} · ${player.pitcher ? `ERA ${player.stat}` : `타율 ${player.stat}`}`;
  document.querySelector("#radarValue").setAttribute("points", radarPoints(player.metrics));
  const radarLabels = player.pitcher ? ["구위", "제구", "체력", "위기", "기여"] : ["타격", "장타", "주루", "수비", "기여"];
  radarLabels.forEach((label, index) => { document.querySelector(`#radarLabel${index}`).textContent = label; });
  document.querySelector("#analysisMetrics").innerHTML = player.detail.map(([label, value]) => `<div><small>${label}</small><strong>${value}</strong></div>`).join("");
}

function renderRosterManagement(teamKey) {
  const team = teams[teamKey];
  const roster = rosters[teamKey];
  rosterRecordMode = "hitting";
  selectedRosterPlayerIndex = 0;
  document.querySelector("#rosterTitle").textContent = `${team.name} 선수단`;
  document.querySelector("#rosterTeamTab").textContent = team.name;
  document.querySelector("#staffDirectoryList").innerHTML = roster.staff.map(person => `<div class="staff-contact"><span class="staff-role">${person.role}</span><div><strong>${person.name}</strong><small>${person.player ? "운영진 · 선수 등록" : "운영진"}</small></div><a href="tel:${person.phone.replace(/\*/g, "0")}" aria-label="${person.name} 연락처">${person.phone}</a></div>`).join("");
  document.querySelectorAll("[data-record-mode]").forEach(button => {
    const active = button.dataset.recordMode === rosterRecordMode;
    button.classList.toggle("active", active);
    button.setAttribute("aria-selected", String(active));
  });
  renderRosterTable(teamKey);
  renderPlayerAnalysis(teamKey, 0);
}

function saveSchedules() {
  const snapshot = Object.fromEntries(Object.entries(teamLeagues).map(([teamKey, leagues]) => [teamKey, leagues.map(league => ({ id: league.id, nextGame: league.nextGame, games: league.games }))]));
  localStorage.setItem("bbat-box-schedules", JSON.stringify(snapshot));
}

function toDateKey(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

let calendarViewDate = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
let selectedCalendarDate = toDateKey(new Date());

function calendarEntries() {
  return Object.entries(teamLeagues).flatMap(([teamKey, leagues]) => leagues.flatMap(league => getLeagueGames(teamKey, league.id).map(game => ({ teamKey, leagueId: league.id, league, game }))));
}

function renderCalendarDay(dateKey, entry = null) {
  selectedCalendarDate = dateKey;
  const date = new Date(`${dateKey}T00:00:00`);
  const event = entry || calendarEntries().find(item => item.game.date === dateKey);
  document.querySelector("#calendarDayNumber").textContent = date.getDate();
  document.querySelector("#calendarDayTitle").textContent = formatGameDate(dateKey);
  document.querySelector("#calendarDayCaption").textContent = dateKey === toDateKey(new Date()) ? "오늘 · 기기 날짜 기준" : "선택한 날짜";
  const gameCard = document.querySelector("#calendarDayGame");
  const empty = document.querySelector("#calendarDayEmpty");
  gameCard.hidden = !event;
  empty.hidden = Boolean(event);
  if (event) {
    const team = teams[event.teamKey];
    document.querySelector("#calendarGameMeta").textContent = `${event.game.time} · ${event.game.venue}`;
    document.querySelector("#calendarGameMatchup").textContent = `${team.name} vs ${event.game.opponent}`;
    document.querySelector("#calendarGameLeague").textContent = `${event.league.name} · 예정 경기`;
    document.querySelector(".day-game .team-line").className = `team-line ${event.teamKey}`;
  }
  document.querySelectorAll(".calendar-cell").forEach(cell => cell.classList.toggle("selected", cell.dataset.calendarDate === dateKey));
}

function buildCalendar() {
  const grid = document.querySelector("#calendarGrid");
  const weekdays = ["일", "월", "화", "수", "목", "금", "토"];
  const year = calendarViewDate.getFullYear();
  const month = calendarViewDate.getMonth();
  const todayKey = toDateKey(new Date());
  const entries = calendarEntries();
  const first = new Date(year, month, 1);
  const start = new Date(year, month, 1 - first.getDay());
  document.querySelector("#calendarTitle").textContent = `${year}년 ${month + 1}월`;
  document.querySelector("#calendarCard").setAttribute("aria-label", `${year}년 ${month + 1}월 달력`);
  const cells = weekdays.map(day => `<div class="weekday">${day}</div>`);
  for (let index = 0; index < 42; index += 1) {
    const date = new Date(start);
    date.setDate(start.getDate() + index);
    const dateKey = toDateKey(date);
    const dayEntries = entries.filter(item => item.game.date === dateKey);
    const classes = ["calendar-cell", date.getMonth() !== month ? "other" : "", dateKey === todayKey ? "today" : "", dateKey === selectedCalendarDate ? "selected" : ""].filter(Boolean).join(" ");
    const gameItems = dayEntries.map(item => `<button class="calendar-event ${item.teamKey}" type="button" data-calendar-team="${item.teamKey}" data-calendar-league="${item.leagueId}" data-calendar-date="${dateKey}"><span>${item.game.time}</span><strong>${teams[item.teamKey].name} vs ${item.game.opponent}</strong></button>`).join("");
    cells.push(`<div class="${classes}" data-calendar-date="${dateKey}"><button class="calendar-date-button" type="button" aria-label="${date.getMonth() + 1}월 ${date.getDate()}일">${date.getDate()}</button><div class="calendar-events">${gameItems}</div></div>`);
  }
  grid.innerHTML = cells.join("");
}

function renderCalendarGame(teamKey, leagueId) {
  const league = getLeague(teamKey, leagueId);
  const game = getUpcomingGames(teamKey, leagueId)[0] || league.nextGame;
  const date = new Date(`${game.date}T00:00:00`);
  calendarViewDate = new Date(date.getFullYear(), date.getMonth(), 1);
  selectedCalendarDate = game.date;
  buildCalendar();
  renderCalendarDay(game.date, { teamKey, leagueId, league, game });
}

const liveStoreKey = "bbat-box-live-game-v1";
const getLiveState = () => { try { return JSON.parse(localStorage.getItem(liveStoreKey) || "null"); } catch (_) { return null; } };
const livePitchLabel = code => ({ B: "볼", C: "지켜본 스트라이크", S: "헛스윙", F: "파울", X: "타격", H: "사구" }[code] || "투구");
const liveDots = (count, total, tone = "") => Array.from({ length: total }, (_, index) => `<i class="${tone} ${index < count ? "on" : ""}"></i>`).join("");
function livePlayer(state, position, fallbackIndex) {
  return state.defense?.find(player => player.position === position) || state.defense?.[fallbackIndex] || { number: "-", name: "수비" };
}
function renderLiveStadium(state) {
  const stadium = document.querySelector("#liveStadium");
  const positions = [["p","P",0],["c","C",1],["first-baseman","1B",2],["second-baseman","2B",3],["third-baseman","3B",4],["ss","SS",5],["lf","LF",6],["cf","CF",7],["rf","RF",8]];
  const fielders = positions.map(([className, position, index]) => { const player = livePlayer(state, position, index); return `<div class="position ${className}"><b>${player.number || "-"}</b><span>${player.name || position}</span></div>`; }).join("");
  const feed = (state.pitchLog || []).map((pitch, index) => ({ pitch, number: index + 1 })).slice(-5).reverse();
  stadium.innerHTML = `<header><button class="back-button" id="closeLiveDetail" type="button">‹ 경기 목록</button><div><span class="live-now"><i></i>LIVE</span><strong id="stadiumTitle">${state.inningLabel} · ${state.outs}사</strong></div><button class="record-button" id="openScorebook" type="button">기록 입력</button></header>
    <div class="stadium-score"><div><span class="small-crest home">B</span><strong>${state.ourTeam}</strong><b>${state.ourRuns}</b></div><span>${state.battingTeam} 공격</span><div><b>${state.oppRuns}</b><strong>${state.opponent}</strong><span class="small-crest away">A</span></div></div>
    <div class="live-strip"><span>${state.leagueName || "리그 경기"}</span><b>${state.inningLabel}</b><span>${state.date || "오늘"}</span></div>
    <div class="field-and-info"><div class="ball-field premium-field" aria-label="현재 수비와 주자 위치"><div class="stadium-lights left"></div><div class="stadium-lights right"></div><div class="outfield-ring"></div><div class="grass-band band-one"></div><div class="grass-band band-two"></div><div class="foul-line foul-left"></div><div class="foul-line foul-right"></div><div class="infield-diamond"></div><div class="mound"></div><div class="home-plate"></div><div class="base first ${state.bases?.[0] ? "is-on" : ""}"></div><div class="base second ${state.bases?.[1] ? "is-on" : ""}"></div><div class="base third ${state.bases?.[2] ? "is-on" : ""}"></div>${fielders}${state.currentBase ? `<div class="runner runner-base-${state.currentBase}"><b>R</b><span>${state.batter.name}</span></div>` : ""}<span class="field-status">${state.battingTeam} 공격 · ${state.currentBase ? `${state.currentBase}루 주자` : "주자 없음"}</span></div>
    <div class="live-info"><article class="match-person batter"><p>현재 타자 · ${state.batter.paIndex}번째 타석</p><div><span class="player-token">${state.batter.number}</span><div><strong>${state.batter.name}</strong><small>${state.batter.position || "타자"}${state.batter.result ? ` · ${state.batter.result}` : ""}</small></div><b>${state.strikes}S</b></div></article><article class="match-person pitcher"><p>현재 투수</p><div><span class="player-token">P</span><div><strong>${state.pitcher.name}</strong><small>${state.pitcher.ip || 0}이닝 · ${state.pitcher.h || 0}피안타</small></div><b>${state.pitcher.pitches || 0}구</b></div></article><div class="live-count"><span>B ${liveDots(state.balls,3)}</span><span>S ${liveDots(state.strikes,2,"yellow")}</span><span>O ${liveDots(state.outs,2,"red")}</span></div><div class="play-feed"><span>최근 투구</span><ol>${feed.length ? feed.map(item => `<li><b>${item.number}구</b>${livePitchLabel(item.pitch)}</li>`).join("") : "<li>아직 입력된 투구가 없습니다.</li>"}</ol></div><div class="live-sync-note"><i></i><span>기록지와 실시간 동기화 중</span></div></div></div>`;
  stadium.querySelector("#closeLiveDetail").addEventListener("click", closeLiveDetail);
  stadium.querySelector("#openScorebook").addEventListener("click", () => window.BBATScorebook?.openRecord(state.recordId));
}
function openLiveDetail() {
  const state = getLiveState();
  if (!state?.live) return showToast("현재 진행 중인 LIVE 경기가 없습니다.");
  renderLiveStadium(state);
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
    const state = getLiveState();
    list.innerHTML = state?.live ? `<button class="live-game-card" type="button" data-open-live="main"><span class="live-now"><i></i>LIVE · 기록 동기화 중</span><div class="live-teams"><div><span class="small-crest home">B</span><strong>${state.ourTeam}</strong><b>${state.ourRuns}</b></div><div class="inning"><strong>${state.inningLabel}</strong><small>${state.outs}사 · ${state.currentBase ? `주자 ${state.currentBase}루` : "주자 없음"}</small></div><div><span class="small-crest away">A</span><strong>${state.opponent}</strong><b>${state.oppRuns}</b></div></div><span class="watch-live">고화질 상황판 보기</span></button>` : `<div class="live-empty"><span class="live-empty-icon">◇</span><strong>현재 진행 중인 LIVE 경기가 없어요.</strong><p>리그 경기 기록 상단의 LIVE 버튼을 누르면 상황판 방이 바로 열립니다.</p></div>`;
  } else {
    list.innerHTML = `<button class="live-game-card finished" type="button"><span class="date-line">경기 종료 · 9월 14일</span><div class="live-teams"><div><span class="small-crest home">B</span><strong>브레이브스</strong><b>7</b></div><div class="inning"><strong>종료</strong><small>한강 토요리그</small></div><div><span class="small-crest away">T</span><strong>타이탄즈</strong><b>4</b></div></div><span class="watch-live">경기 기록 보기</span></button><button class="live-game-card finished" type="button"><span class="date-line">경기 종료 · 9월 7일</span><div class="live-teams"><div><span class="small-crest home">B</span><strong>배트조짐</strong><b>5</b></div><div class="inning"><strong>종료</strong><small>서울 일요리그</small></div><div><span class="small-crest away">R</span><strong>러너스</strong><b>5</b></div></div><span class="watch-live">경기 기록 보기</span></button>`;
  }
}

const scheduleModal = document.querySelector("#scheduleModal");
const scheduleBackdrop = document.querySelector("#scheduleBackdrop");
const playerModal = document.querySelector("#playerModal");
const playerBackdrop = document.querySelector("#playerBackdrop");
const lineupModal = document.querySelector("#lineupModal");
const lineupBackdrop = document.querySelector("#lineupBackdrop");
let lastScheduleTrigger = null;
let currentLineupContext = null;

function fillScheduleForm(teamKey, leagueId) {
  const teamInput = document.querySelector("#scheduleTeamInput");
  const leagueInput = document.querySelector("#scheduleLeagueInput");
  teamInput.value = teamKey;
  const selectedLeagueId = populateLeagueSelect(leagueInput, teamKey, leagueId);
  if (scheduleModal.dataset.mode === "create") {
    document.querySelector("#scheduleOriginalDateInput").value = "";
    document.querySelector("#scheduleDateInput").value = "";
    document.querySelector("#scheduleTimeInput").value = "09:00";
    document.querySelector("#scheduleOpponentInput").value = "";
    document.querySelector("#scheduleVenueInput").value = "";
    return;
  }
  const game = getUpcomingGames(teamKey, selectedLeagueId)[0] || getLeague(teamKey, selectedLeagueId).nextGame;
  document.querySelector("#scheduleOriginalDateInput").value = game.date;
  document.querySelector("#scheduleDateInput").value = game.date;
  document.querySelector("#scheduleTimeInput").value = game.time;
  document.querySelector("#scheduleOpponentInput").value = game.opponent;
  document.querySelector("#scheduleVenueInput").value = game.venue;
}

function openScheduleEditor() {
  lastScheduleTrigger = document.activeElement;
  const teamKey = document.querySelector("#teamPageSelect").value;
  const leagueId = document.querySelector("#teamLeagueSelect").value;
  scheduleModal.dataset.mode = lastScheduleTrigger?.id === "openTeamScheduleEditor" ? "create" : "edit";
  document.querySelector("#scheduleModalTitle").textContent = scheduleModal.dataset.mode === "create" ? "경기 일정 추가" : "경기 일정 추가·수정";
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
  if (lastScheduleTrigger?.focus) lastScheduleTrigger.focus();
}

function openPlayerModal() {
  playerModal.hidden = false;
  playerBackdrop.hidden = false;
  document.body.style.overflow = "hidden";
  document.querySelector("#newPlayerName").focus();
}

function closePlayerModal() {
  playerModal.hidden = true;
  playerBackdrop.hidden = true;
  document.body.style.overflow = "";
  document.querySelector("#addPlayerButton").focus();
}

const lineupPositions = ["P", "C", "1B", "2B", "3B", "SS", "LF", "CF", "RF", "DH"];

function lineupPositionOptions(selected) {
  return lineupPositions.map(position => `<option ${position === selected ? "selected" : ""}>${position}</option>`).join("");
}

function lineupPlayerOptions(participants, selectedNumber) {
  return [`<option value="">미정</option>`, ...participants.map(player => `<option value="${player.number}" ${player.number === selectedNumber ? "selected" : ""}>${player.number} ${player.name} · ${possiblePositions(player).join("/")}</option>`)].join("");
}

function renderRelieverRows(participants, selectedNumbers = []) {
  const count = Math.min(4, Math.max(2, selectedNumbers.length || 2));
  document.querySelector("#lineupRelieverList").innerHTML = Array.from({ length: count }, (_, index) => `<div class="reliever-row"><b>R${index + 1}</b><label>선수<select class="reliever-player-select">${lineupPlayerOptions(participants, selectedNumbers[index] || "")}</select></label><button class="remove-reliever" type="button" aria-label="구원투수 ${index + 1}칸 삭제" ${count <= 2 ? "disabled" : ""}>×</button></div>`).join("");
  document.querySelector("#addRelieverButton").disabled = count >= 4;
}

function renderLineupBench(teamKey) {
  const participants = currentLineupContext.participants;
  const selected = new Set([
    document.querySelector("#lineupPitcherSelect").value,
    ...[...document.querySelectorAll(".reliever-player-select")].map(select => select.value),
    ...[...document.querySelectorAll(".lineup-player-select")].map(select => select.value),
  ].filter(Boolean));
  const bench = participants.filter(player => !selected.has(player.number));
  document.querySelector("#lineupBenchList").innerHTML = bench.length ? bench.map(player => `<span><b>${player.number}</b><strong>${player.name}</strong><small>${possiblePositions(player).join("/")}</small></span>`).join("") : `<p>모든 참가 선수가 선발 라인업에 포함되었습니다.</p>`;
}

function renderLineupRows(teamKey, leagueId, game) {
  const attendance = ensureAttendance(teamKey, leagueId, game);
  const participants = rosters[teamKey].players.filter(player => attendance[player.name] === "yes");
  const available = rosters[teamKey].players.filter(player => attendance[player.name] !== "yes");
  const stored = lineupState[gameKey(teamKey, leagueId, game)];
  const saved = Array.isArray(stored) ? { batting: stored, pitcher: "" } : stored || { batting: [], pitcher: "" };
  currentLineupContext.participants = participants;
  document.querySelector("#lineupParticipants").innerHTML = participants.map(player => `<span><b>${player.number}</b>${player.name}<small>${possiblePositions(player).join("/")}</small></span>`).join("");
  document.querySelector("#manualParticipantSelect").innerHTML = available.length ? available.map(player => `<option value="${player.number}">${player.number} ${player.name} · ${possiblePositions(player).join("/")}</option>`).join("") : `<option value="">추가할 선수가 없습니다</option>`;
  document.querySelector("#addManualParticipant").disabled = !available.length;
  const defaultPitcher = participants.find(player => player.pitcher)?.number || "";
  document.querySelector("#lineupPitcherSelect").innerHTML = lineupPlayerOptions(participants, saved.pitcher || defaultPitcher);
  renderRelieverRows(participants, saved.relievers || []);
  document.querySelector("#lineupOrder").innerHTML = Array.from({ length: 9 }, (_, index) => {
    const selectedNumber = stored ? saved.batting[index]?.player || "" : (index < 3 ? participants[index]?.number : "") || "";
    const selectedPosition = saved.batting[index]?.position || lineupPositions[index + 1] || "DH";
    return `<div class="lineup-row"><b>${index + 1}</b><label>선수<select class="lineup-player-select">${lineupPlayerOptions(participants, selectedNumber)}</select></label><label>수비 위치<select class="lineup-position-select">${lineupPositionOptions(selectedPosition)}</select></label></div>`;
  }).join("");
  renderLineupBench(teamKey);
}

function openLineupBuilder() {
  const teamKey = document.querySelector("#teamPageSelect").value;
  const leagueId = document.querySelector("#teamLeagueSelect").value;
  const league = getLeague(teamKey, leagueId);
  const game = getNextWeekGame(teamKey, leagueId);
  if (!game) return showToast("7일 안에 예정된 경기가 없어 라인업을 열 수 없습니다.");
  currentLineupContext = { teamKey, leagueId, game, participants: [] };
  document.querySelector("#lineupGameLabel").textContent = `${league.name} · ${formatGameDate(game.date)} · vs ${game.opponent}`;
  renderLineupRows(teamKey, leagueId, game);
  lineupModal.hidden = false;
  lineupBackdrop.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeLineupBuilder() {
  lineupModal.hidden = true;
  lineupBackdrop.hidden = true;
  document.body.style.overflow = "";
  document.querySelector("#openLineupBuilder").focus();
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
document.querySelector("#rosterTeamTab").addEventListener("click", () => showScreen("team"));
document.querySelectorAll("[data-record-mode]").forEach(button => button.addEventListener("click", () => {
  rosterRecordMode = button.dataset.recordMode;
  document.querySelectorAll("[data-record-mode]").forEach(item => {
    const active = item === button;
    item.classList.toggle("active", active);
    item.setAttribute("aria-selected", String(active));
  });
  const teamKey = document.querySelector("#teamPageSelect").value;
  if (rosterRecordMode === "pitching" && !rosters[teamKey].players[selectedRosterPlayerIndex].pitcher) selectedRosterPlayerIndex = rosters[teamKey].players.findIndex(player => player.pitcher);
  renderRosterTable(teamKey);
  renderPlayerAnalysis(teamKey, selectedRosterPlayerIndex);
}));
document.querySelector("#rosterPlayerSelect").addEventListener("change", event => renderPlayerAnalysis(document.querySelector("#teamPageSelect").value, Number(event.target.value)));
document.querySelector("#addPlayerButton").addEventListener("click", openPlayerModal);
document.querySelector("#closePlayerModal").addEventListener("click", closePlayerModal);
document.querySelector("#cancelPlayerAdd").addEventListener("click", closePlayerModal);
playerBackdrop.addEventListener("click", closePlayerModal);
document.querySelector("#playerForm").addEventListener("submit", event => {
  event.preventDefault();
  const teamKey = document.querySelector("#teamPageSelect").value;
  const position = document.querySelector("#newPlayerPosition").value;
  const isPitcher = ["SP", "RP", "P"].includes(position);
  const player = {
    number: document.querySelector("#newPlayerNumber").value.trim(),
    name: document.querySelector("#newPlayerName").value.trim(),
    position,
    role: isPitcher ? "투수" : positionLabels[position] || "선수",
    bats: `${document.querySelector("#newPlayerThrows").value}${document.querySelector("#newPlayerBats").value}`,
    avg: 0,
    ops: 0,
    stat: isPitcher ? "0.00" : ".000",
    metrics: [50, 50, 50, 50, 50],
    detail: isPitcher ? [["ERA", "0.00"], ["삼진", "0"], ["WHIP", "0.00"]] : [["타율", ".000"], ["OPS", ".000"], ["타점", "0"]],
    pitcher: isPitcher,
    possiblePositions: document.querySelector("#newPlayerPositions").value.split(",").map(value => value.trim()).filter(Boolean),
    custom: true
  };
  rosters[teamKey].players.push(player);
  const customPlayers = Object.fromEntries(Object.entries(rosters).map(([key, roster]) => [key, roster.players.filter(item => item.custom)]));
  localStorage.setItem("bbat-box-added-players", JSON.stringify(customPlayers));
  event.target.reset();
  closePlayerModal();
  renderRosterManagement(teamKey);
  renderRosterPreview(teamKey);
  renderLeagueRosterSync(teamKey);
  showToast(`${player.name} 선수를 선수단과 리그 기록 명단에 추가했습니다.`);
});
document.querySelector("#leagueRosterTeamSelect").addEventListener("change", event => renderLeagueRosterSync(event.target.value));
document.querySelector("#openTeamScheduleEditor").addEventListener("click", openScheduleEditor);
document.querySelector("#schedulePollList").addEventListener("click", event => {
  const button = event.target.closest("[data-attendance]");
  if (!button || button.disabled) return;
  const teamKey = document.querySelector("#teamPageSelect").value;
  const leagueId = document.querySelector("#teamLeagueSelect").value;
  const game = getLeagueGames(teamKey, leagueId).find(item => item.date === button.dataset.gameDate);
  if (!game) return;
  ensureAttendance(teamKey, leagueId, game)[currentAccountName()] = button.dataset.attendance;
  localStorage.setItem("bbat-box-attendance", JSON.stringify(attendanceState));
  renderSchedulePolls(teamKey, leagueId);
  renderLineupStatus(teamKey, leagueId);
  showToast(`참가 여부를 '${button.textContent}'로 저장했습니다.`);
});
document.querySelector("#openLineupBuilder").addEventListener("click", openLineupBuilder);
document.querySelector("#closeLineupModal").addEventListener("click", closeLineupBuilder);
document.querySelector("#cancelLineup").addEventListener("click", closeLineupBuilder);
lineupBackdrop.addEventListener("click", closeLineupBuilder);
document.querySelector("#addManualParticipant").addEventListener("click", () => {
  const number = document.querySelector("#manualParticipantSelect").value;
  const player = rosters[currentLineupContext.teamKey].players.find(item => item.number === number);
  if (!player) return;
  ensureAttendance(currentLineupContext.teamKey, currentLineupContext.leagueId, currentLineupContext.game)[player.name] = "yes";
  localStorage.setItem("bbat-box-attendance", JSON.stringify(attendanceState));
  renderLineupRows(currentLineupContext.teamKey, currentLineupContext.leagueId, currentLineupContext.game);
  renderSchedulePolls(currentLineupContext.teamKey, currentLineupContext.leagueId);
  showToast(`${player.name} 선수를 참가명단에 추가했습니다.`);
});
document.querySelector("#addRelieverButton").addEventListener("click", () => {
  const selected = [...document.querySelectorAll(".reliever-player-select")].map(select => select.value);
  if (selected.length >= 4) return;
  renderRelieverRows(currentLineupContext.participants, [...selected, ""]);
  renderLineupBench(currentLineupContext.teamKey);
});
document.querySelector("#lineupRelieverList").addEventListener("click", event => {
  const button = event.target.closest(".remove-reliever");
  if (!button || button.disabled) return;
  const rows = [...document.querySelectorAll(".reliever-row")];
  const selected = rows.filter(row => row !== button.closest(".reliever-row")).map(row => row.querySelector("select").value);
  renderRelieverRows(currentLineupContext.participants, selected);
  renderLineupBench(currentLineupContext.teamKey);
});
document.querySelector("#lineupForm").addEventListener("change", event => {
  if (event.target.matches(".lineup-player-select, .reliever-player-select, #lineupPitcherSelect")) renderLineupBench(currentLineupContext.teamKey);
});
document.querySelector("#lineupForm").addEventListener("submit", event => {
  event.preventDefault();
  const rows = [...document.querySelectorAll(".lineup-row")];
  const batting = rows.map((row, index) => ({ order: index + 1, player: row.querySelector(".lineup-player-select").value, position: row.querySelector(".lineup-position-select").value }));
  const relievers = [...document.querySelectorAll(".reliever-player-select")].map(select => select.value).filter(Boolean);
  const selected = new Set([document.querySelector("#lineupPitcherSelect").value, ...relievers, ...batting.map(item => item.player)].filter(Boolean));
  lineupState[gameKey(currentLineupContext.teamKey, currentLineupContext.leagueId, currentLineupContext.game)] = {
    pitcher: document.querySelector("#lineupPitcherSelect").value,
    relievers,
    batting,
    bench: currentLineupContext.participants.filter(player => !selected.has(player.number)).map(player => player.number),
  };
  localStorage.setItem("bbat-box-lineups", JSON.stringify(lineupState));
  renderLineupStatus(currentLineupContext.teamKey, currentLineupContext.leagueId);
  closeLineupBuilder();
  showToast("다음 경기 라인업을 저장하고 팀원에게 공개했습니다.");
});
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
  const name = document.querySelector("#profileNameInput").value.trim() || currentAccountName();
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
  updateSignedInAccount({ name });
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
document.querySelector("#openScorebook").addEventListener("click", () => { const state = getLiveState(); if (state?.recordId) window.BBATScorebook?.openRecord(state.recordId); });
window.addEventListener("bbat-live-update", event => {
  const liveScreen = document.querySelector("#screen-live");
  if (!liveScreen.hidden) {
    if (!document.querySelector("#liveStadium").hidden && event.detail?.live) renderLiveStadium(event.detail);
    else renderLiveTab("playing");
  }
});
window.addEventListener("storage", event => {
  if (event.key === liveStoreKey && !document.querySelector("#screen-live").hidden) renderLiveTab("playing");
});
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
  const savedGame = {
    date: document.querySelector("#scheduleDateInput").value,
    time: document.querySelector("#scheduleTimeInput").value,
    opponent: document.querySelector("#scheduleOpponentInput").value.trim(),
    venue: document.querySelector("#scheduleVenueInput").value.trim()
  };
  const games = getLeagueGames(teamKey, leagueId);
  const originalDate = document.querySelector("#scheduleOriginalDateInput").value;
  const existingIndex = games.findIndex(game => game.date === originalDate);
  if (existingIndex >= 0) games.splice(existingIndex, 1, savedGame);
  else games.push(savedGame);
  games.sort((a, b) => a.date.localeCompare(b.date));
  league.nextGame = getUpcomingGames(teamKey, leagueId)[0] || savedGame;
  saveSchedules();
  document.querySelector("#teamPageSelect").value = teamKey;
  renderTeamPage(teamKey, leagueId);
  buildCalendar();
  renderCalendarGame(teamKey, leagueId);
  closeScheduleEditor();
  showToast("일정을 저장하고 참가 투표를 열었습니다.");
});

document.querySelector("#previousMonth").addEventListener("click", () => {
  calendarViewDate = new Date(calendarViewDate.getFullYear(), calendarViewDate.getMonth() - 1, 1);
  buildCalendar();
});
document.querySelector("#nextMonth").addEventListener("click", () => {
  calendarViewDate = new Date(calendarViewDate.getFullYear(), calendarViewDate.getMonth() + 1, 1);
  buildCalendar();
});
document.querySelector("#calendarGrid").addEventListener("click", event => {
  const gameButton = event.target.closest(".calendar-event");
  if (gameButton) {
    const entry = calendarEntries().find(item => item.teamKey === gameButton.dataset.calendarTeam && item.leagueId === gameButton.dataset.calendarLeague && item.game.date === gameButton.dataset.calendarDate);
    renderCalendarDay(gameButton.dataset.calendarDate, entry);
    return;
  }
  const dateButton = event.target.closest(".calendar-date-button");
  if (dateButton) renderCalendarDay(dateButton.closest(".calendar-cell").dataset.calendarDate);
});

const settingsSheet = document.querySelector("#settingsSheet");
const modalBackdrop = document.querySelector("#modalBackdrop");
function openSettings() { settingsSheet.hidden = false; modalBackdrop.hidden = false; document.body.style.overflow = "hidden"; document.querySelector("#closeSettings").focus(); }
function closeSettings() { settingsSheet.hidden = true; modalBackdrop.hidden = true; document.body.style.overflow = ""; document.querySelector("#settingsButton").focus(); }
document.querySelector("#settingsButton").addEventListener("click", openSettings);
document.querySelector("#closeSettings").addEventListener("click", closeSettings);
modalBackdrop.addEventListener("click", closeSettings);
document.querySelector("#logoutButton").addEventListener("click", () => {
  closeSettings();
  lockApp();
});
document.addEventListener("keydown", event => {
  if (event.key !== "Escape") return;
  if (!settingsSheet.hidden) closeSettings();
  if (!scheduleModal.hidden) closeScheduleEditor();
  if (!playerModal.hidden) closePlayerModal();
  if (!lineupModal.hidden) closeLineupBuilder();
});

const didWell = document.querySelector("#didWell");
const toLearn = document.querySelector("#toLearn");
const privateNoteKey = `bbat-box-private-note:local-user:${toDateKey(new Date())}`;
document.querySelector("#saveNoteButton").addEventListener("click", () => {
  localStorage.setItem(privateNoteKey, JSON.stringify({ didWell: didWell.value, toLearn: toLearn.value, visibility: "private" }));
  showToast("오늘의 개인 노트를 나만 볼 수 있게 저장했습니다.");
});
try {
  const saved = JSON.parse(localStorage.getItem(privateNoteKey));
  if (saved) { didWell.value = saved.didWell || ""; toLearn.value = saved.toLearn || ""; }
} catch (_) { /* 손상된 임시 저장값은 무시합니다. */ }

buildCalendar();
renderCalendarDay(selectedCalendarDate);
applyProfilePhoto(savedProfilePhoto);
renderHomeTeam("bbat");
renderTeamPage("bbat", "seoul-sunday");
renderLeagueRosterSync("bbat");
const authStoreKey = "bbat-box-local-accounts-v1";
const authSessionKey = "bbat-box-local-session-v1";
const bbatHostAccountKey = "bbat-box-bbat-host-account-v1";
const authGate = document.querySelector("#authGate");
const loginForm = document.querySelector("#loginForm");
const signupForm = document.querySelector("#signupForm");
const authSwitch = document.querySelector("#authSwitch");
let signupIdVerified = "";

function readLocalAccounts() {
  try { return JSON.parse(localStorage.getItem(authStoreKey)) || []; }
  catch (_) { return []; }
}

function normalizeUsername(value) { return value.trim().toLowerCase(); }
function bytesToBase64(bytes) { return btoa(String.fromCharCode(...new Uint8Array(bytes))); }
function currentAccountName() { return signedInAccount?.name || "이도윤"; }

function persistAccount(account) {
  const accounts = readLocalAccounts();
  const index = accounts.findIndex(item => item.username === account.username);
  if (index >= 0) accounts[index] = account;
  else accounts.push(account);
  localStorage.setItem(authStoreKey, JSON.stringify(accounts));
}

function ensureBbatHost(account) {
  let hostUsername = localStorage.getItem(bbatHostAccountKey);
  if (!hostUsername) {
    hostUsername = account.username;
    localStorage.setItem(bbatHostAccountKey, hostUsername);
  }
  if (hostUsername === account.username && account.teamRoles?.bbat !== "host") {
    account.teamRoles = { ...(account.teamRoles || {}), bbat: "host" };
    account.teams = [...new Set([...(account.teams || []), "bbat"])];
    account.hostGrantedAt = new Date().toISOString();
    persistAccount(account);
  }
  return account;
}

function migratePlayerIdentity(previousName, nextName) {
  if (!nextName || previousName === nextName) return;
  Object.values(rosters).forEach(roster => roster.players.forEach(player => {
    if (player.name === previousName || player.name === "이도윤") player.name = nextName;
  }));
  Object.values(attendanceState).forEach(attendance => {
    if (Object.prototype.hasOwnProperty.call(attendance, previousName)) {
      attendance[nextName] = attendance[previousName];
      if (previousName !== nextName) delete attendance[previousName];
    } else if (Object.prototype.hasOwnProperty.call(attendance, "이도윤")) {
      attendance[nextName] = attendance["이도윤"];
      if (nextName !== "이도윤") delete attendance["이도윤"];
    }
  });
  localStorage.setItem("bbat-box-attendance", JSON.stringify(attendanceState));
}

function updateSignedInAccount(changes) {
  if (!signedInAccount) return;
  const previousName = signedInAccount.name;
  signedInAccount = { ...signedInAccount, ...changes };
  persistAccount(signedInAccount);
  migratePlayerIdentity(previousName, signedInAccount.name);
  applySignedInUser(signedInAccount);
}

async function derivePassword(password, saltBase64) {
  const encoder = new TextEncoder();
  const salt = saltBase64 ? Uint8Array.from(atob(saltBase64), char => char.charCodeAt(0)) : crypto.getRandomValues(new Uint8Array(16));
  const material = await crypto.subtle.importKey("raw", encoder.encode(password), "PBKDF2", false, ["deriveBits"]);
  const hash = await crypto.subtle.deriveBits({ name: "PBKDF2", salt, iterations: 120000, hash: "SHA-256" }, material, 256);
  return { salt: bytesToBase64(salt), hash: bytesToBase64(hash) };
}

function setAuthMode(mode) {
  const joining = mode === "signup";
  loginForm.hidden = joining;
  signupForm.hidden = !joining;
  document.querySelector("#authKicker").textContent = joining ? "BBAT BOX 시작하기" : "다시 오신 것을 환영합니다";
  document.querySelector("#authTitle").textContent = joining ? "회원가입" : "로그인";
  document.querySelector("#authDescription").textContent = joining ? "간단한 계정을 만들고 팀 초대를 받아보세요." : "내 계정으로 기록과 팀을 이어서 확인하세요.";
  authSwitch.innerHTML = joining ? "이미 계정이 있으신가요? <b>로그인</b>" : "회원이 아니신가요? <b>회원가입</b>";
  authSwitch.dataset.mode = joining ? "signup" : "login";
  document.querySelector(joining ? "#signupName" : "#loginId").focus();
}

function applySignedInUser(account) {
  if (!account) return;
  const previousName = signedInAccount?.name || "이도윤";
  signedInAccount = account;
  migratePlayerIdentity(previousName, account.name);
  const host = account.teamRoles?.bbat === "host";
  document.querySelector(".mini-profile-copy strong").textContent = account.name;
  document.querySelector("#profileDisplayName").textContent = account.name;
  document.querySelector("#profileNameInput").value = account.name;
  document.querySelector("#profileNickname").textContent = account.nickname;
  document.querySelector("#editorIdentityName").textContent = `${account.nickname} (${account.name})`;
  document.querySelector("#settingsAccountName").textContent = `${account.nickname} (${account.name})`;
  document.querySelector("#settingsAccountMeta").textContent = `${account.username} · ${host ? "배트조짐 호스트" : "선수"}`;
  renderHomeTeam(document.querySelector("#homeTeamSelect").value);
  renderTeamPage(document.querySelector("#teamPageSelect").value, document.querySelector("#teamLeagueSelect").value);
  renderLeagueRosterSync(document.querySelector("#leagueRosterTeamSelect").value);
}

function unlockApp(account) {
  ensureBbatHost(account);
  localStorage.setItem(authSessionKey, account.username);
  applySignedInUser(account);
  authGate.hidden = true;
  document.body.classList.remove("auth-locked");
}

function lockApp() {
  localStorage.removeItem(authSessionKey);
  authGate.hidden = false;
  document.body.classList.add("auth-locked");
  setAuthMode("login");
}

authSwitch.addEventListener("click", () => setAuthMode(authSwitch.dataset.mode === "signup" ? "login" : "signup"));

document.querySelectorAll("[data-password-toggle]").forEach(button => button.addEventListener("click", () => {
  const input = document.querySelector(`#${button.dataset.passwordToggle}`);
  const showing = input.type === "text";
  input.type = showing ? "password" : "text";
  button.textContent = showing ? "보기" : "숨기기";
  button.setAttribute("aria-label", showing ? "비밀번호 보기" : "비밀번호 숨기기");
}));

document.querySelector("#signupId").addEventListener("input", event => {
  signupIdVerified = "";
  document.querySelector("#idCheckMessage").textContent = event.target.validity.patternMismatch ? "영문, 숫자, 밑줄만 사용할 수 있어요." : "중복 확인을 눌러주세요.";
  document.querySelector("#idCheckMessage").className = "id-check-message";
});

function validatePasswordConfirmation() {
  const password = document.querySelector("#signupPassword");
  const confirmation = document.querySelector("#signupPasswordConfirm");
  confirmation.setCustomValidity(password.value === confirmation.value ? "" : "비밀번호가 일치하지 않습니다.");
}
document.querySelector("#signupPassword").addEventListener("input", validatePasswordConfirmation);
document.querySelector("#signupPasswordConfirm").addEventListener("input", validatePasswordConfirmation);

document.querySelector("#checkUsernameButton").addEventListener("click", () => {
  const input = document.querySelector("#signupId");
  const username = normalizeUsername(input.value);
  const message = document.querySelector("#idCheckMessage");
  if (!input.checkValidity()) {
    message.textContent = "아이디는 영문과 숫자로 3자리 이상 입력해주세요.";
    message.className = "id-check-message error";
    input.reportValidity();
    return;
  }
  if (readLocalAccounts().some(account => account.username === username)) {
    signupIdVerified = "";
    message.textContent = "이미 사용 중인 아이디예요.";
    message.className = "id-check-message error";
    return;
  }
  signupIdVerified = username;
  message.textContent = "사용할 수 있는 아이디예요.";
  message.className = "id-check-message success";
});

signupForm.addEventListener("submit", async event => {
  event.preventDefault();
  validatePasswordConfirmation();
  if (!signupForm.reportValidity()) return;
  const username = normalizeUsername(document.querySelector("#signupId").value);
  const message = document.querySelector("#signupMessage");
  if (signupIdVerified !== username) { message.textContent = "아이디 중복 확인을 먼저 해주세요."; return; }
  const submit = signupForm.querySelector("[type=submit]");
  submit.disabled = true;
  submit.textContent = "계정 만드는 중";
  try {
    const credential = await derivePassword(document.querySelector("#signupPassword").value);
    const account = { id: crypto.randomUUID?.() || `${Date.now()}-${Math.random()}`, username, name: document.querySelector("#signupName").value.trim(), nickname: document.querySelector("#signupNickname").value.trim(), ...credential, createdAt: new Date().toISOString() };
    const accounts = readLocalAccounts();
    if (accounts.some(item => item.username === username)) throw new Error("duplicate");
    accounts.push(account);
    localStorage.setItem(authStoreKey, JSON.stringify(accounts));
    signupForm.reset();
    signupIdVerified = "";
    unlockApp(account);
  } catch (_) {
    message.textContent = "계정을 만들지 못했습니다. 다시 시도해주세요.";
  } finally {
    submit.disabled = false;
    submit.textContent = "계정 만들기";
  }
});

loginForm.addEventListener("submit", async event => {
  event.preventDefault();
  const username = normalizeUsername(document.querySelector("#loginId").value);
  const message = document.querySelector("#loginMessage");
  const account = readLocalAccounts().find(item => item.username === username);
  if (!account) { message.textContent = "아이디 또는 비밀번호를 확인해주세요."; return; }
  const credential = await derivePassword(document.querySelector("#loginPassword").value, account.salt);
  if (credential.hash !== account.hash) { message.textContent = "아이디 또는 비밀번호를 확인해주세요."; return; }
  message.textContent = "";
  loginForm.reset();
  unlockApp(account);
});

const initialUsername = localStorage.getItem(authSessionKey);
const initialAccount = readLocalAccounts().find(account => account.username === initialUsername);
if (initialAccount) unlockApp(initialAccount);
