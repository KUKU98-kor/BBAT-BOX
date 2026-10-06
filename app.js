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
let teamAttendancePolls = {};
let serverLeagueState = {};
let cloudGameRecordsByTeam = {};
let cloudRealtimeChannel = null;
let cloudFallbackTimer = null;
let cloudGameSaveTimer = null;
let cloudLegacyGameRecords = null;
let cloudLegacyLineupState = null;
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
let draftTeamImageFile = null;
let draftTeamImageObjectUrl = "";
let removeTeamImageRequested = false;
let signedInAccount = null;
const backendConfig = window.BBAT_SUPABASE || {};
const supabaseClient = window.supabase?.createClient?.(backendConfig.url, backendConfig.publishableKey, {
  auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true },
});

function applyProfilePhoto(source) {
  document.querySelectorAll(".profile-photo").forEach(frame => {
    const image = frame.querySelector(".profile-photo-image");
    image.src = source || "";
    frame.classList.toggle("has-image", Boolean(source));
  });
  document.querySelectorAll(".mini-avatar").forEach(frame => {
    const image = frame.querySelector(".mini-avatar-image");
    if (!image) return;
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
  if (name !== "live") closeLiveDetail(true);
  if (name === "live") renderLiveTab(document.querySelector("[data-live-tab].active")?.dataset.liveTab || "playing");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 2200);
}

function renderHomeLeagueList(teamKey) {
  const miniList = document.querySelector(".league-mini-list");
  if (!miniList) return;
  const team = teams[teamKey];
  const leagues = serverLeagueState[teamKey] || [];
  if (!team || !leagues.length) {
    miniList.innerHTML = `<div class="empty-league-home"><strong>참여 중인 리그가 없습니다.</strong><span>${team ? `${escapeMarkup(team.name)}의 첫 리그를 만들면 여기에 표시됩니다.` : "팀에 참여하면 리그가 이곳에 표시됩니다."}</span></div>`;
    return;
  }
  miniList.innerHTML = leagues.map(league => `<button type="button" data-go="league" aria-label="${escapeMarkup(league.name)} 리그 기록 보기"><span class="league-emblem seoul">${escapeMarkup(league.name.slice(0, 1))}</span><span><strong>${escapeMarkup(league.name)}</strong><small>${escapeMarkup(team.name)} · ${escapeMarkup(league.season)}</small></span><b>참여 중</b></button>`).join("");
}

function renderHomeTeam(key) {
  const team = teams[key];
  const canEditTeam = ["host", "admin"].includes(signedInAccount?.teamRoles?.[key]);
  const teamCard = document.querySelector(".team-info-card");
  const logoImage = document.querySelector("#teamLogoWatermarkImage");
  teamCard.style.setProperty("--team-logo-start", team.logoColors[0]);
  teamCard.style.setProperty("--team-logo-end", team.logoColors[1]);
  teamCard.classList.toggle("has-team-image", Boolean(team.logo));
  teamCard.style.backgroundImage = team.logo
    ? `linear-gradient(105deg, rgba(5,29,34,.94) 0%, rgba(5,29,34,.78) 48%, rgba(5,29,34,.48) 100%), url("${team.logo}")`
    : "";
  document.querySelector("#teamLogoWatermark").textContent = team.initial;
  logoImage.hidden = !team.logo;
  logoImage.src = team.logo || "";
  document.querySelector("#homeTeamSelect").value = key;
  document.querySelector("#headerTeam").textContent = `N.${team.number || "-"}`;
  document.querySelector("#headerNumber").textContent = team.number;
  document.querySelector("#profileTeam").textContent = team.name;
  const homeCrest = document.querySelector("#profileTeamInitial");
  homeCrest.textContent = team.logo ? "" : team.initial;
  homeCrest.style.backgroundImage = team.logo ? `url("${team.logo}")` : "";
  document.querySelector("#profileRole").textContent = team.role;
  document.querySelector("#profileLeague").textContent = team.league;
  document.querySelector("#profileTeamStanding").textContent = team.region || team.standing;
  document.querySelector("#openTeamProfile").hidden = !canEditTeam;
  document.querySelector("#profileNumber").textContent = `N.${team.number}`;
  document.querySelector("#profileTeamShort").textContent = team.name;
  document.querySelector("#profilePosition").textContent = team.position;
  document.querySelector("#profileBats").textContent = team.bats;
  document.querySelector("#profileGames").textContent = team.games;
  document.querySelector("#seasonTitle").textContent = team.title;
  document.querySelector("#seasonTrend").textContent = team.trend;
  document.querySelector("#recordSummary").textContent = team.summary;
  document.querySelector("#homeStats").innerHTML = team.stats.map(([label, value], index) => `<div class="${index === 0 ? "key" : ""}"><small>${label}</small><strong>${value}</strong></div>`).join("");
  renderHomeLeagueList(key);
}

function openProfileEditor() {
  if (!accountTeams().length) {
    openProfileSetup(signedInAccount);
    return;
  }
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

function formatJoinedAt(value) {
  if (!value) return "-";
  return new Intl.DateTimeFormat("ko-KR", { year: "numeric", month: "2-digit", day: "2-digit" }).format(new Date(value));
}

function renderToday() {
  const today = new Date();
  document.querySelector("#homeDateLine").textContent = `${today.getFullYear()} 시즌 · ${new Intl.DateTimeFormat("ko-KR", { month: "long", day: "numeric", weekday: "long" }).format(today)}`;
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
    league.games = league.nextGame ? [{ ...league.nextGame }] : [];
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
  if (!attendanceState[key]) attendanceState[key] = {};
  return attendanceState[key];
}

function pollToGame(poll) {
  return {
    id: poll.id,
    pollId: poll.id,
    date: poll.date,
    time: poll.time,
    opponent: poll.opponent,
    venue: poll.venue,
    closesAt: poll.closesAt,
  };
}

function syncAttendancePollsToLeagues(teamKey) {
  const polls = teamAttendancePolls[teamKey] || [];
  (teamLeagues[teamKey] || []).forEach(league => {
    const leaguePolls = polls.filter(poll => poll.leagueKey === league.id);
    league.games = leaguePolls.map(pollToGame);
    league.nextGame = league.games.find(game => daysUntilGame(game) >= 0) || null;
  });
  polls.forEach(poll => {
    const game = pollToGame(poll);
    const attendance = Object.fromEntries((poll.yesNames || []).map(name => [name, "yes"]));
    if (poll.myResponse) attendance[currentAccountName()] = poll.myResponse;
    attendanceState[gameKey(teamKey, poll.leagueKey, game)] = attendance;
  });
}

async function loadTeamAttendancePolls(teamKey) {
  const teamId = signedInAccount?.teamIds?.[teamKey];
  if (!teamId || !supabaseClient) {
    teamAttendancePolls[teamKey] = [];
    syncAttendancePollsToLeagues(teamKey);
    return;
  }
  const { data, error } = await supabaseClient.rpc("list_team_attendance_polls", { p_team_id: teamId });
  if (error) throw error;
  teamAttendancePolls[teamKey] = (data || []).map(item => ({
    id: item.poll_id,
    leagueKey: item.league_key,
    leagueName: item.league_name,
    date: item.game_date,
    time: String(item.game_time || "").slice(0, 5),
    opponent: item.opponent,
    venue: item.venue,
    closesAt: item.closes_at,
    closed: Boolean(item.is_closed),
    yesCount: Number(item.yes_count) || 0,
    maybeCount: Number(item.maybe_count) || 0,
    noCount: Number(item.no_count) || 0,
    myResponse: item.my_response || "",
    yesNames: item.yes_names || [],
  }));
  syncAttendancePollsToLeagues(teamKey);
}

async function loadTeamLeagues(teamKey) {
  const teamId = signedInAccount?.teamIds?.[teamKey];
  if (!teamId || !supabaseClient) return;
  const { data, error } = await supabaseClient.rpc("list_team_leagues", { p_team_id: teamId });
  if (error) throw error;
  serverLeagueState[teamKey] = (data || []).map(item => ({
    id: item.league_key,
    name: item.league_name,
    season: item.season_name,
    record: "0승 0패",
    rank: "-",
    nextGame: null,
    games: [],
  }));
  teamLeagues[teamKey] = serverLeagueState[teamKey].length ? serverLeagueState[teamKey].map(league => ({ ...league })) : [{
    id: `${teamKey}-league`, name: "리그 미설정", season: "첫 시즌", record: "0승 0패", rank: "-", nextGame: null, games: [],
  }];
}

function readLocalGameRecords() {
  try {
    const records = JSON.parse(localStorage.getItem("bbat-box-game-records-v2") || "[]");
    return Array.isArray(records) ? records : [];
  } catch (_) {
    return [];
  }
}

function canRecordCloudTeam(teamKey) {
  return ["host", "admin", "manager", "scorer"].includes(signedInAccount?.teamRoles?.[teamKey]);
}

function canManageCloudLineup(teamKey) {
  return ["host", "admin", "manager"].includes(signedInAccount?.teamRoles?.[teamKey]);
}

function rebuildCloudGameCache() {
  const cloudRecords = Object.values(cloudGameRecordsByTeam).flatMap(records => records);
  localStorage.setItem("bbat-box-game-records-v2", JSON.stringify(cloudRecords));
  const liveRecord = cloudRecords
    .filter(record => record.__cloudLiveState?.live)
    .sort((a, b) => String(b.__cloudUpdatedAt || "").localeCompare(String(a.__cloudUpdatedAt || "")))[0];
  if (liveRecord) localStorage.setItem("bbat-box-live-game-v1", JSON.stringify(liveRecord.__cloudLiveState));
  else localStorage.removeItem("bbat-box-live-game-v1");
  window.dispatchEvent(new CustomEvent("bbat-cloud-records-loaded", { detail: { records: cloudRecords } }));
  window.dispatchEvent(new CustomEvent("bbat-records-update"));
  window.dispatchEvent(new CustomEvent("bbat-live-update", { detail: liveRecord?.__cloudLiveState || { live: false } }));
}

async function loadCloudLineups(teamKey, migrateLocal = true) {
  const teamId = signedInAccount?.teamIds?.[teamKey];
  if (!teamId || !supabaseClient) return;
  let { data, error } = await supabaseClient.rpc("list_team_lineups", { p_team_id: teamId });
  if (error) throw error;
  const rows = data || [];
  if (migrateLocal && canManageCloudLineup(teamKey)) {
    const serverKeys = new Set(rows.map(row => row.lineup_key));
    const localEntries = Object.entries(cloudLegacyLineupState || lineupState).filter(([key]) => key.startsWith(`${teamKey}:`) && !serverKeys.has(key));
    if (localEntries.length) {
      await Promise.all(localEntries.map(async ([key, payload]) => {
        const parts = key.split(":");
        const { error: uploadError } = await supabaseClient.rpc("upsert_team_lineup", {
          p_team_id: teamId,
          p_lineup_key: key,
          p_league_key: parts[1] || "league",
          p_game_date: parts.at(-1),
          p_payload: payload,
        });
        if (uploadError) throw uploadError;
      }));
      ({ data, error } = await supabaseClient.rpc("list_team_lineups", { p_team_id: teamId }));
      if (error) throw error;
    }
  }
  Object.keys(lineupState).filter(key => key.startsWith(`${teamKey}:`)).forEach(key => delete lineupState[key]);
  (data || rows).forEach(row => { lineupState[row.lineup_key] = row.payload || {}; });
  localStorage.setItem("bbat-box-lineups", JSON.stringify(lineupState));
}

async function loadCloudGameRecords(teamKey, migrateLocal = true) {
  const teamId = signedInAccount?.teamIds?.[teamKey];
  if (!teamId || !supabaseClient) return;
  let { data, error } = await supabaseClient.rpc("list_team_game_records", { p_team_id: teamId });
  if (error) throw error;
  const rows = data || [];
  if (migrateLocal && canRecordCloudTeam(teamKey)) {
    const serverKeys = new Set(rows.map(row => row.record_key));
    const localLive = (() => { try { return JSON.parse(localStorage.getItem("bbat-box-live-game-v1") || "null"); } catch (_) { return null; } })();
    const localRecords = (cloudLegacyGameRecords || readLocalGameRecords()).filter(record => record.teamKey === teamKey && record.id && !serverKeys.has(record.id));
    if (localRecords.length) {
      await Promise.all(localRecords.map(async record => {
        const liveState = localLive?.recordId === record.id ? localLive : {};
        const { error: uploadError } = await supabaseClient.rpc("upsert_team_game_record", {
          p_team_id: teamId,
          p_record_key: record.id,
          p_league_key: record.leagueId || "league",
          p_game_date: record.date,
          p_opponent: record.opponent || "",
          p_payload: record,
          p_live_state: liveState,
          p_finished: Boolean(record.finished),
          p_is_live: Boolean(record.live && liveState?.live),
        });
        if (uploadError) throw uploadError;
      }));
      ({ data, error } = await supabaseClient.rpc("list_team_game_records", { p_team_id: teamId }));
      if (error) throw error;
    }
  }
  cloudGameRecordsByTeam[teamKey] = (data || rows).map(row => ({
    ...(row.payload || {}),
    id: row.record_key,
    teamKey,
    leagueId: row.league_key,
    date: row.game_date,
    finished: Boolean(row.finished),
    live: Boolean(row.is_live),
    __cloudLiveState: row.live_state || {},
    __cloudUpdatedAt: row.updated_at,
  }));
  rebuildCloudGameCache();
}

async function saveCloudLineup(teamKey, leagueKey, game, payload) {
  const teamId = signedInAccount?.teamIds?.[teamKey];
  if (!teamId) throw new Error("TEAM_NOT_FOUND");
  const key = gameKey(teamKey, leagueKey, game);
  const { error } = await supabaseClient.rpc("upsert_team_lineup", {
    p_team_id: teamId,
    p_lineup_key: key,
    p_league_key: leagueKey,
    p_game_date: game.date,
    p_payload: payload,
  });
  if (error) throw error;
}

async function saveCloudGame(record, liveState = {}) {
  clearTimeout(cloudGameSaveTimer);
  const teamId = signedInAccount?.teamIds?.[record?.teamKey];
  if (!teamId || !record?.id) throw new Error("TEAM_NOT_FOUND");
  const payload = JSON.parse(JSON.stringify(record));
  delete payload.__cloudLiveState;
  delete payload.__cloudUpdatedAt;
  const { error } = await supabaseClient.rpc("upsert_team_game_record", {
    p_team_id: teamId,
    p_record_key: record.id,
    p_league_key: record.leagueId || "league",
    p_game_date: record.date,
    p_opponent: record.opponent || "",
    p_payload: payload,
    p_live_state: liveState || {},
    p_finished: Boolean(record.finished),
    p_is_live: Boolean(record.live && liveState?.live),
  });
  if (error) throw error;
}

function queueCloudGameSave(record, liveState) {
  clearTimeout(cloudGameSaveTimer);
  const recordSnapshot = JSON.parse(JSON.stringify(record));
  const liveSnapshot = JSON.parse(JSON.stringify(liveState || {}));
  cloudGameSaveTimer = setTimeout(() => {
    saveCloudGame(recordSnapshot, liveSnapshot).catch(() => showToast("LIVE 서버 동기화를 다시 시도해주세요."));
  }, 250);
}

async function deleteCloudGame(teamKey, recordKey) {
  const teamId = signedInAccount?.teamIds?.[teamKey];
  if (!teamId) throw new Error("TEAM_NOT_FOUND");
  const { error } = await supabaseClient.rpc("delete_team_game_record", { p_team_id: teamId, p_record_key: recordKey });
  if (error) throw error;
  await loadCloudGameRecords(teamKey, false);
}

async function loadPrivateNoteFromCloud() {
  if (!signedInAccount?.id) return;
  const noteDate = toDateKey(new Date());
  const { data, error } = await supabaseClient.rpc("get_private_note", { p_note_date: noteDate });
  if (error) throw error;
  const localKey = `bbat-box-private-note:${signedInAccount.id}:${noteDate}`;
  let note = data || {};
  if (!Object.keys(note).length) {
    const legacyKey = `bbat-box-private-note:local-user:${noteDate}`;
    try { note = JSON.parse(localStorage.getItem(localKey) || localStorage.getItem(legacyKey) || "{}"); } catch (_) { note = {}; }
    if (Object.keys(note).length) await savePrivateNoteToCloud(note);
  }
  document.querySelector("#didWell").value = note.didWell || "";
  document.querySelector("#toLearn").value = note.toLearn || "";
}

async function savePrivateNoteToCloud(note) {
  const noteDate = toDateKey(new Date());
  const localKey = `bbat-box-private-note:${signedInAccount?.id || "local-user"}:${noteDate}`;
  localStorage.setItem(localKey, JSON.stringify(note));
  const { error } = await supabaseClient.rpc("upsert_private_note", { p_note_date: noteDate, p_payload: note });
  if (error) throw error;
}

async function loadProfilePhotoFromCloud(account) {
  const accountCacheKey = `bbat-box-profile-photo:${account?.id || "local-user"}`;
  if (!account?.profilePhotoPath) return localStorage.getItem(accountCacheKey) || localStorage.getItem("bbat-box-profile-photo") || "";
  const { data, error } = await supabaseClient.storage.from("profile-assets").createSignedUrl(account.profilePhotoPath, 60 * 60);
  if (error) throw error;
  return data.signedUrl;
}

async function saveProfilePhotoToCloud(source) {
  if (!signedInAccount?.id || !source?.startsWith("data:")) return source;
  const blob = await fetch(source).then(response => response.blob());
  const path = `${signedInAccount.id}/profile`;
  const { error: uploadError } = await supabaseClient.storage.from("profile-assets").upload(path, blob, {
    upsert: true,
    contentType: blob.type || "image/jpeg",
    cacheControl: "3600",
  });
  if (uploadError) throw uploadError;
  const { error: pathError } = await supabaseClient.rpc("update_my_profile_photo", { p_path: path });
  if (pathError) throw pathError;
  signedInAccount.profilePhotoPath = path;
  return loadProfilePhotoFromCloud(signedInAccount);
}

function stopCloudSync() {
  if (cloudRealtimeChannel && supabaseClient) supabaseClient.removeChannel(cloudRealtimeChannel);
  cloudRealtimeChannel = null;
  clearInterval(cloudFallbackTimer);
  cloudFallbackTimer = null;
}

function startCloudSync() {
  stopCloudSync();
  if (!signedInAccount || !supabaseClient) return;
  const refresh = () => Promise.all(accountTeams().map(team => loadCloudGameRecords(team.slug, false))).catch(() => {});
  cloudRealtimeChannel = supabaseClient.channel(`bbat-games-${signedInAccount.id}`)
    .on("postgres_changes", { event: "*", schema: "public", table: "team_game_records" }, refresh)
    .subscribe();
  cloudFallbackTimer = setInterval(refresh, 15000);
}

async function loadCloudData() {
  cloudLegacyGameRecords = readLocalGameRecords();
  cloudLegacyLineupState = { ...lineupState };
  try {
    await Promise.all(accountTeams().map(team => loadCloudLineups(team.slug)));
    await Promise.all(accountTeams().map(team => loadCloudGameRecords(team.slug)));
    const allowedTeamPrefixes = accountTeams().map(team => `${team.slug}:`);
    lineupState = Object.fromEntries(Object.entries(lineupState).filter(([key]) => allowedTeamPrefixes.some(prefix => key.startsWith(prefix))));
    localStorage.setItem("bbat-box-lineups", JSON.stringify(lineupState));
    if (!accountTeams().length) rebuildCloudGameCache();
    await loadPrivateNoteFromCloud();
    startCloudSync();
  } finally {
    cloudLegacyGameRecords = null;
    cloudLegacyLineupState = null;
  }
}

window.BBATCloud = {
  saveGame: saveCloudGame,
  queueGameSave: queueCloudGameSave,
  deleteGame: deleteCloudGame,
  saveLineup: saveCloudLineup,
  reloadGames: () => Promise.all(accountTeams().map(team => loadCloudGameRecords(team.slug, false))),
};

function renderSchedulePolls(teamKey, leagueId) {
  const polls = (teamAttendancePolls[teamKey] || []).filter(poll => poll.leagueKey === leagueId).slice(0, 3);
  const canDeletePoll = ["host", "admin", "manager"].includes(signedInAccount?.teamRoles?.[teamKey]);
  document.querySelector("#schedulePollList").innerHTML = polls.length ? polls.map(poll => {
    const timing = poll.closed ? "투표 마감" : `${new Intl.DateTimeFormat("ko-KR", { month: "numeric", day: "numeric" }).format(new Date(poll.closesAt))} 마감`;
    return `<article class="schedule-poll ${poll.closed ? "closed" : ""}"><div class="poll-game"><span>${formatGameDate(poll.date)} · ${poll.time}</span><strong>vs ${escapeMarkup(poll.opponent)}</strong><small>${escapeMarkup(poll.venue)}</small></div><div class="poll-state"><b>${timing}</b><span>참가 ${poll.yesCount} · 미정 ${poll.maybeCount} · 불참 ${poll.noCount}</span>${canDeletePoll ? `<button class="poll-delete-button" type="button" data-delete-poll="${poll.id}">투표 삭제</button>` : ""}</div><div class="attendance-buttons"><button type="button" data-attendance="yes" data-poll-id="${poll.id}" class="${poll.myResponse === "yes" ? "active" : ""}" ${poll.closed ? "disabled" : ""}>참가</button><button type="button" data-attendance="maybe" data-poll-id="${poll.id}" class="${poll.myResponse === "maybe" ? "active" : ""}" ${poll.closed ? "disabled" : ""}>미정</button><button type="button" data-attendance="no" data-poll-id="${poll.id}" class="${poll.myResponse === "no" ? "active" : ""}" ${poll.closed ? "disabled" : ""}>불참</button></div></article>`;
  }).join("") : `<p class="poll-empty">아직 올라온 참가투표가 없습니다. 관리자가 ‘참가투표 만들기’를 누르면 팀원에게 선택지가 열립니다.</p>`;
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
  const teamRole = signedInAccount?.teamRoles?.[key];
  const canManageRoster = ["host", "admin", "manager"].includes(teamRole);
  const canEditTeam = ["host", "admin"].includes(teamRole);
  const leagueSelect = document.querySelector("#teamLeagueSelect");
  const leagueId = populateLeagueSelect(leagueSelect, key, requestedLeagueId || leagueSelect.value);
  const league = getLeague(key, leagueId);
  const game = getNextWeekGame(key, leagueId);
  document.querySelector("#teamPageSelect").value = key;
  const teamPageLogo = document.querySelector("#teamPageLogo");
  teamPageLogo.hidden = !team.logo;
  teamPageLogo.src = team.logo || "";
  document.querySelector("#teamPageInitial").hidden = Boolean(team.logo);
  document.querySelector("#teamPageInitial").textContent = team.initial;
  document.querySelector("#teamMyNumber").textContent = team.number;
  document.querySelector("#teamName").textContent = team.name;
  document.querySelector("#teamMeta").textContent = team.teamMeta.split(" · ").slice(0, 2).join(" · ");
  document.querySelector("#teamHostBadge").hidden = teamRole !== "host";
  document.querySelector("#openTeamProfileFromTeam").hidden = !canEditTeam;
  document.querySelector("#teamRegion").textContent = team.region || "미설정";
  document.querySelector("#teamManager").textContent = team.managerName || "미설정";
  document.querySelector("#teamHomeField").textContent = team.homeField || "미설정";
  document.querySelector("#teamPrimaryLeagues").textContent = team.primaryLeagues?.length ? team.primaryLeagues.join(" · ") : "미설정";
  document.querySelector("#teamDescription").textContent = team.description || "팀 소개를 등록해주세요.";
  document.querySelector("#addPlayerButton").hidden = !canManageRoster;
  document.querySelector("#openTeamScheduleEditor").hidden = !canManageRoster;
  document.querySelector("#teamMemberRoleCard").hidden = !canManageRoster;
  document.querySelector("#teamLeagueLabel").textContent = league.name;
  document.querySelector("#teamSeasonLabel").textContent = league.season;
  document.querySelector("#teamWins").textContent = league.record;
  document.querySelector("#teamRank").textContent = league.rank;
  document.querySelector("#nextGameLeague").textContent = `${league.name} · 다음 경기`;
  document.querySelector("#nextGameDate").textContent = game ? formatGameDate(game.date) : "예정된 다음 경기 없음";
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
  if (canManageRoster) renderTeamMemberRolePanel(key);
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
  if (player.source) return { G: 0, PA: 0, AB: 0, H: 0, "2B": 0, "3B": 0, HR: 0, RBI: 0, R: 0, BB: 0, SB: 0, AVG: ".000", OPS: ".000" };
  const games = 18 - index % 5;
  const pa = 62 - index * 2;
  const walks = 4 + index % 5;
  const atBats = pa - walks - 2;
  const hits = Math.max(1, Math.round(player.avg * atBats));
  const homeRuns = Math.max(0, Math.round((player.ops - .62) * 14));
  return { G: games, PA: pa, AB: atBats, H: hits, "2B": Math.max(1, Math.round(hits * .2)), "3B": index % 3, HR: homeRuns, RBI: 8 + homeRuns * 3 + index, R: 9 + index, BB: walks, SB: Math.max(0, 10 - index), AVG: player.avg.toFixed(3).replace(/^0/, ""), OPS: player.ops.toFixed(3).replace(/^0/, "") };
}

function linkedHittingRecord(teamKey, player) {
  let saved = {};
  try { saved = JSON.parse(localStorage.getItem("bbat-box-linked-player-stats-v1") || "{}"); } catch (_) { saved = {}; }
  const lines = Object.values(saved).filter(game => game?.teamKey === teamKey).flatMap(game => game.players || []).filter(line => line.name === player.name);
  if (!lines.some(line => Number(line.PA) > 0)) return null;
  const fields = ["G", "PA", "AB", "H", "2B", "3B", "HR", "RBI", "R", "BB", "HBP", "SO", "SB"];
  const total = Object.fromEntries(fields.map(field => [field, lines.reduce((sum, line) => sum + (Number(line[field]) || 0), 0)]));
  const singles = Math.max(0, total.H - total["2B"] - total["3B"] - total.HR);
  const totalBases = singles + total["2B"] * 2 + total["3B"] * 3 + total.HR * 4;
  const onBaseDenominator = total.AB + total.BB + total.HBP;
  const obp = onBaseDenominator ? (total.H + total.BB + total.HBP) / onBaseDenominator : 0;
  const slg = total.AB ? totalBases / total.AB : 0;
  total.AVG = total.AB ? (total.H / total.AB).toFixed(3).replace(/^0/, "") : ".000";
  total.OPS = (obp + slg).toFixed(3).replace(/^0/, "");
  return total;
}

function pitchingRecord(player, index) {
  if (player.source) return { G: 0, GS: 0, IP: "0.0", W: 0, L: 0, SV: 0, H: 0, BB: 0, K: 0, ERA: "0.00", WHIP: "0.00" };
  const era = Number(player.stat);
  const innings = 42.1 - index * 4.2;
  const strikeouts = Number(player.detail.find(([label]) => label === "삼진")?.[1] || 29);
  return { G: 10 - index, GS: Math.max(0, 7 - index * 2), IP: innings.toFixed(1), W: Math.max(1, 6 - index), L: 2 + index, SV: index ? 4 : 0, H: 31 + index * 3, BB: 11 + index * 2, K: strikeouts, ERA: era.toFixed(2), WHIP: player.detail.find(([label]) => label === "WHIP")?.[1] || (1.08 + index * .11).toFixed(2) };
}

function renderRosterTable(teamKey) {
  const roster = rosters[teamKey];
  const canManageRoster = ["host", "admin", "manager"].includes(signedInAccount?.teamRoles?.[teamKey]);
  const visiblePlayers = roster.players.map((player, index) => ({ player, index })).filter(({ player }) => rosterRecordMode === "hitting" || player.pitcher);
  const metricColumns = rosterRecordMode === "hitting" ? ["G", "PA", "AB", "H", "2B", "3B", "HR", "RBI", "R", "BB", "SB", "AVG", "OPS"] : ["G", "GS", "IP", "W", "L", "SV", "H", "BB", "K", "ERA", "WHIP"];
  const columns = [...metricColumns, ...Array(13 - metricColumns.length).fill("")];
  document.querySelector("#playerRecordTableHead").innerHTML = `<tr><th>사진</th><th>등번호</th><th>이름</th><th>포지션</th>${columns.map(column => `<th>${column}</th>`).join("")}<th>관리</th></tr>`;
  if (!visiblePlayers.length) {
    document.querySelector("#playerRecordTableBody").innerHTML = `<tr><td colspan="18">${rosterRecordMode === "pitching" ? "등록된 투수가 없습니다." : "등록된 선수가 없습니다."}</td></tr>`;
    document.querySelector("#rosterPlayerSelect").innerHTML = '<option value="">선수 없음</option>';
    selectedRosterPlayerIndex = -1;
    return;
  }
  document.querySelector("#playerRecordTableBody").innerHTML = visiblePlayers.map(({ player, index }, visibleIndex) => {
    const record = rosterRecordMode === "hitting" ? (linkedHittingRecord(teamKey, player) || hittingRecord(player, index)) : pitchingRecord(player, visibleIndex);
    const deleteButton = canManageRoster && player.source === "manual" ? `<button class="table-delete-button" type="button" data-delete-player="${player.id}" data-player-name="${escapeMarkup(player.name)}">삭제</button>` : `<span class="linked-player-label">${player.source === "account" ? "가입 계정" : "-"}</span>`;
    return `<tr class="${index === selectedRosterPlayerIndex ? "active" : ""}" data-player-row="${index}" data-player-index="${index}"><td><span class="table-player-photo" aria-hidden="true">${player.name.slice(0, 1)}</span></td><td><b class="table-number">${player.number}</b></td><td><button class="record-player-button" type="button"><span><strong>${player.name}</strong><small>${player.role}</small></span></button></td><td>${player.position}</td>${columns.map(column => `<td>${column ? record[column] : ""}</td>`).join("")}<td>${deleteButton}</td></tr>`;
  }).join("");
  const select = document.querySelector("#rosterPlayerSelect");
  select.innerHTML = visiblePlayers.map(({ player, index }) => `<option value="${index}">${player.number} ${player.name} · ${player.position}</option>`).join("");
  if (!visiblePlayers.some(({ index }) => index === selectedRosterPlayerIndex)) selectedRosterPlayerIndex = visiblePlayers[0].index;
  select.value = String(selectedRosterPlayerIndex);
}

function renderPlayerAnalysis(teamKey, playerIndex) {
  const player = rosters[teamKey].players[playerIndex];
  if (!player) {
    document.querySelector("#detailPlayerTitle").textContent = "선수를 추가하면 기록이 표시됩니다";
    document.querySelector("#playerDetailStats").innerHTML = "";
    document.querySelector("#recentFormBars").innerHTML = "";
    document.querySelector("#analysisName").textContent = "선수 없음";
    document.querySelector("#analysisMetrics").innerHTML = "";
    return;
  }
  selectedRosterPlayerIndex = playerIndex;
  document.querySelectorAll("[data-player-row]").forEach(row => row.classList.toggle("active", Number(row.dataset.playerRow) === playerIndex));
  document.querySelector("#rosterPlayerSelect").value = String(playerIndex);
  const record = rosterRecordMode === "hitting" ? (linkedHittingRecord(teamKey, player) || hittingRecord(player, playerIndex)) : pitchingRecord(player, rosters[teamKey].players.filter(item => item.pitcher).indexOf(player));
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
const gameRecordStoreKey = "bbat-box-game-records-v2";
let selectedLiveInning = null;
let resumeLiveDetail = false;
const getLiveState = () => { try { return JSON.parse(localStorage.getItem(liveStoreKey) || "null"); } catch (_) { return null; } };
const getSavedGameRecords = () => { try { const records = JSON.parse(localStorage.getItem(gameRecordStoreKey) || "[]"); return Array.isArray(records) ? records : []; } catch (_) { return []; } };
const livePitchLabel = code => ({ B: "볼", C: "지켜본 스트라이크", S: "헛스윙", F: "파울", X: "타격", H: "사구" }[code] || "투구");
const liveDots = (count, total, tone = "") => Array.from({ length: total }, (_, index) => `<i class="${tone} ${index < count ? "on" : ""}"></i>`).join("");
const liveSafe = value => String(value ?? "").replace(/[&<>\"]/g, character => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[character]));
function livePlayer(state, position, fallbackIndex) {
  return state.defense?.find(player => player.position === position) || state.defense?.[fallbackIndex] || { number: "-", name: "수비" };
}
function renderLiveStadium(state) {
  const stadium = document.querySelector("#liveStadium");
  const positions = [["p","P",0],["c","C",1],["first-baseman","1B",2],["second-baseman","2B",3],["third-baseman","3B",4],["ss","SS",5],["lf","LF",6],["cf","CF",7],["rf","RF",8]];
  const fielders = positions.map(([className, position, index]) => { const player = livePlayer(state, position, index); return `<div class="position ${className}"><b>${liveSafe(player.number || "-")}</b><span>${liveSafe(player.name || position)}</span></div>`; }).join("");
  const feed = (state.pitchLog || []).map((pitch, index) => ({ pitch, number: index + 1 })).slice(-5).reverse();
  const maxInning = Math.min(9, Math.max(1, Number(state.inning) || 1));
  if (!selectedLiveInning || selectedLiveInning > maxInning) selectedLiveInning = maxInning;
  const history = Array.isArray(state.inningHistory) ? state.inningHistory : [];
  const selectedHistory = history.find(item => Number(item.inning) === selectedLiveInning) || { inning: selectedLiveInning, top: { runs: 0, hits: 0, outs: 0, events: [] }, bottom: { runs: 0, hits: 0, outs: 0, events: [] }, score: { our: 0, opp: 0 } };
  const inningButtons = Array.from({ length: maxInning }, (_, index) => { const inning = index + 1; return `<button type="button" data-live-inning="${inning}" class="${inning === selectedLiveInning ? "active" : ""}" aria-pressed="${inning === selectedLiveInning}">${inning}회</button>`; }).join("");
  const halfRecap = (label, half, current) => `<article class="inning-half ${current ? "current" : ""}"><div><strong>${label}</strong><span>${half.runs || 0}득점 · ${half.hits || 0}안타 · ${half.outs || 0}아웃</span></div><ol>${half.events?.length ? half.events.map(event => `<li>${liveSafe(event.label || event)}</li>`).join("") : "<li>기록된 타석이 없습니다.</li>"}</ol></article>`;
  const onDeck = (state.onDeck || []).slice(0, 2);
  stadium.innerHTML = `<header><button class="back-button" id="closeLiveDetail" type="button">‹ 경기 목록</button><div><span class="live-now"><i></i>LIVE</span><strong id="stadiumTitle">${liveSafe(state.inningLabel)} · ${state.outs}사</strong></div><button class="record-button" id="openScorebook" type="button">기록 입력</button></header>
    <div class="stadium-score"><div><span class="small-crest home">B</span><strong>${liveSafe(state.ourTeam)}</strong><b>${state.ourRuns}</b></div><span>${liveSafe(state.battingTeam)} 공격</span><div><b>${state.oppRuns}</b><strong>${liveSafe(state.opponent)}</strong><span class="small-crest away">A</span></div></div>
    <section class="live-inning-browser" aria-label="이닝별 기록"><div class="inning-browser-head"><div><strong>${selectedLiveInning}회 기록</strong><span>${selectedLiveInning === maxInning ? "현재 이닝" : "지난 이닝 다시보기"}</span></div><div class="inning-score-snapshot">${liveSafe(state.ourTeam)} ${selectedHistory.score?.our || 0} : ${selectedHistory.score?.opp || 0} ${liveSafe(state.opponent)}</div></div><div class="inning-selector">${inningButtons}</div><div class="inning-recap">${halfRecap(`${selectedLiveInning}회초`, selectedHistory.top || {}, state.inning === selectedLiveInning && state.half === "top")}${halfRecap(`${selectedLiveInning}회말`, selectedHistory.bottom || {}, state.inning === selectedLiveInning && state.half === "bottom")}</div></section>
    <div class="live-strip"><span>${liveSafe(state.leagueName || "리그 경기")}</span><b>${liveSafe(state.inningLabel)}</b><span>${liveSafe(state.date || "오늘")}</span></div>
    <div class="field-and-info"><div class="ball-field premium-field" aria-label="현재 수비와 주자 위치"><div class="stadium-lights left"></div><div class="stadium-lights right"></div><div class="outfield-ring"></div><div class="grass-band band-one"></div><div class="grass-band band-two"></div><div class="foul-line foul-left"></div><div class="foul-line foul-right"></div><div class="infield-diamond"></div><div class="mound"></div><div class="home-plate"></div><div class="base first ${state.bases?.[0] ? "is-on" : ""}"></div><div class="base second ${state.bases?.[1] ? "is-on" : ""}"></div><div class="base third ${state.bases?.[2] ? "is-on" : ""}"></div>${fielders}${state.currentBase ? `<div class="runner runner-base-${state.currentBase}"><b>R</b><span>${liveSafe(state.batter.name)}</span></div>` : ""}<span class="field-status">${liveSafe(state.battingTeam)} 공격 · ${state.currentBase ? `${state.currentBase}루 주자` : "주자 없음"}</span></div>
    <div class="live-info"><article class="match-person batter"><p>현재 타자 · ${state.batter.paIndex}번째 타석</p><div><span class="player-token">${liveSafe(state.batter.number)}</span><div><strong>${liveSafe(state.batter.name)}</strong><small>${liveSafe(state.batter.position || "타자")}${state.batter.result ? ` · ${liveSafe(state.batter.result)}` : ""}</small></div><b>${state.strikes}S</b></div></article><article class="match-person pitcher"><p>현재 투수</p><div><span class="player-token">P</span><div><strong>${liveSafe(state.pitcher.name)}</strong><small>현재 타석 ${state.pitcher.atBatPitches || 0}구 · ${state.pitcher.ip || 0}이닝 · ${state.pitcher.h || 0}피안타</small></div><b>총 ${state.pitcher.pitches || 0}구</b></div></article><div class="live-count"><span>B ${liveDots(state.balls,3)}</span><span>S ${liveDots(state.strikes,2,"yellow")}</span><span>O ${liveDots(state.outs,2,"red")}</span></div><section class="on-deck-board"><div><strong>다음 대기타석</strong><span>최대 2명</span></div><ol>${onDeck.length ? onDeck.map((player, index) => `<li><b>${index + 1}</b><span>${liveSafe(player.number)}</span><strong>${liveSafe(player.name)}</strong><small>${liveSafe(player.position || "타자")}</small></li>`).join("") : "<li class=\"empty\">대기 타자 정보가 없습니다.</li>"}</ol></section><div class="play-feed"><span>최근 투구</span><ol>${feed.length ? feed.map(item => `<li><b>${item.number}구</b>${livePitchLabel(item.pitch)}</li>`).join("") : "<li>아직 입력된 투구가 없습니다.</li>"}</ol></div><div class="live-sync-note"><i></i><span>기록지와 실시간 동기화 중</span></div></div></div>`;
  stadium.querySelector("#closeLiveDetail").addEventListener("click", () => closeLiveDetail(false));
  stadium.querySelector("#openScorebook").addEventListener("click", () => window.BBATScorebook?.openRecord(state.recordId));
  stadium.querySelectorAll("[data-live-inning]").forEach(button => button.addEventListener("click", () => { selectedLiveInning = Number(button.dataset.liveInning); renderLiveStadium(state); }));
}
function openLiveDetail() {
  const state = getLiveState();
  if (!state?.live) return showToast("현재 진행 중인 LIVE 경기가 없습니다.");
  selectedLiveInning = Number(state.inning) || 1;
  resumeLiveDetail = true;
  renderLiveStadium(state);
  document.querySelector("#liveGameList").hidden = true;
  document.querySelector("#liveStadium").hidden = false;
  document.querySelector("#liveStadium").scrollIntoView({ behavior: "smooth", block: "start" });
}

function closeLiveDetail(preserveResume = false) {
  const stadium = document.querySelector("#liveStadium");
  const list = document.querySelector("#liveGameList");
  if (stadium && list) { stadium.hidden = true; list.hidden = false; if (!preserveResume) { selectedLiveInning = null; resumeLiveDetail = false; } }
}

function renderLiveTab(tab) {
  const list = document.querySelector("#liveGameList");
  const liveState = getLiveState();
  const finishedRecords = getSavedGameRecords().filter(item => item.finished).sort((a, b) => String(b.date || "").localeCompare(String(a.date || "")));
  document.querySelector('[data-live-tab="playing"] b').textContent = liveState?.live ? "1" : "0";
  document.querySelector('[data-live-tab="finished"] b').textContent = String(finishedRecords.length);
  closeLiveDetail(true);
  if (tab === "playing") {
    const state = liveState;
    list.innerHTML = state?.live ? `<button class="live-game-card" type="button" data-open-live="main"><span class="live-now"><i></i>LIVE · 기록 동기화 중</span><div class="live-teams"><div><span class="small-crest home">B</span><strong>${state.ourTeam}</strong><b>${state.ourRuns}</b></div><div class="inning"><strong>${state.inningLabel}</strong><small>${state.outs}사 · ${state.currentBase ? `주자 ${state.currentBase}루` : "주자 없음"}</small></div><div><span class="small-crest away">A</span><strong>${state.opponent}</strong><b>${state.oppRuns}</b></div></div><span class="watch-live">고화질 상황판 보기</span></button>` : `<div class="live-empty"><span class="live-empty-icon">◇</span><strong>현재 진행 중인 LIVE 경기가 없어요.</strong><p>리그 경기 기록 상단의 LIVE 버튼을 누르면 상황판 방이 바로 열립니다.</p></div>`;
  } else {
    list.innerHTML = finishedRecords.length ? finishedRecords.map(item => {
      const ourTeam = teams[item.teamKey]?.name || "우리팀";
      return `<article class="finished-live-card"><div><span>${liveSafe(item.date || "날짜 미정")}</span><strong>${liveSafe(ourTeam)} vs ${liveSafe(item.opponent || "상대팀")}</strong><small>${liveSafe(item.leagueName || "경기 기록")} · 경기 종료</small></div><b>${Number(item.ourRuns) || 0} : ${Number(item.oppRuns) || 0}</b></article>`;
    }).join("") : `<div class="live-empty"><strong>종료된 경기가 없습니다.</strong><p>경기 기록을 마치면 지난 LIVE 경기가 여기에 쌓입니다.</p></div>`;
  }
}

const scheduleModal = document.querySelector("#scheduleModal");
const scheduleBackdrop = document.querySelector("#scheduleBackdrop");
const leagueCreateModal = document.querySelector("#leagueCreateModal");
const leagueCreateBackdrop = document.querySelector("#leagueCreateBackdrop");
const playerModal = document.querySelector("#playerModal");
const playerBackdrop = document.querySelector("#playerBackdrop");
const lineupModal = document.querySelector("#lineupModal");
const lineupBackdrop = document.querySelector("#lineupBackdrop");
let lastScheduleTrigger = null;
let currentLineupContext = null;

function openLeagueCreator() {
  const creatableTeams = accountTeams().filter(team => ["host", "admin"].includes(team.role));
  if (!creatableTeams.length) { showToast("리그는 팀 호스트와 관리자만 만들 수 있습니다."); return; }
  document.querySelector("#leagueCreateTeam").innerHTML = creatableTeams.map(team => `<option value="${escapeMarkup(team.slug)}">${escapeMarkup(team.name)}</option>`).join("");
  document.querySelector("#leagueCreateName").value = "";
  document.querySelector("#leagueCreateSeason").value = `${new Date().getFullYear()} 시즌`;
  document.querySelector("#leagueCreateMessage").textContent = "";
  leagueCreateModal.hidden = false;
  leagueCreateBackdrop.hidden = false;
  document.body.style.overflow = "hidden";
  document.querySelector("#leagueCreateName").focus();
}

function closeLeagueCreator() {
  leagueCreateModal.hidden = true;
  leagueCreateBackdrop.hidden = true;
  document.body.style.overflow = "";
}

function fillScheduleForm(teamKey, leagueId) {
  const teamInput = document.querySelector("#scheduleTeamInput");
  const leagueInput = document.querySelector("#scheduleLeagueInput");
  teamInput.value = teamKey;
  populateLeagueSelect(leagueInput, teamKey, leagueId);
  document.querySelector("#scheduleDateInput").value = "";
  document.querySelector("#scheduleDateInput").min = toDateKey(new Date());
  document.querySelector("#scheduleTimeInput").value = "09:00";
  document.querySelector("#scheduleOpponentInput").value = "";
  document.querySelector("#scheduleVenueInput").value = "";
  document.querySelector("#scheduleFormMessage").textContent = "";
}

function openScheduleEditor() {
  lastScheduleTrigger = document.activeElement;
  const manageableTeams = accountTeams().filter(team => ["host", "admin", "manager"].includes(team.role));
  if (!manageableTeams.length) {
    showToast("참가투표는 팀 관리자만 만들 수 있습니다.");
    return;
  }
  const requestedTeamKey = document.querySelector("#teamPageSelect").value;
  const selectedTeam = manageableTeams.find(team => team.slug === requestedTeamKey) || manageableTeams[0];
  const teamKey = selectedTeam.slug;
  const leagueId = teamLeagues[teamKey]?.[0]?.id;
  document.querySelector("#scheduleTeamInput").innerHTML = manageableTeams.map(team => `<option value="${escapeMarkup(team.slug)}">${escapeMarkup(team.name)}</option>`).join("");
  document.querySelector("#scheduleModalTitle").textContent = "참가투표 만들기";
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
  const stored = lineupState[gameKey(teamKey, leagueId, game)];
  const saved = Array.isArray(stored) ? { batting: stored, pitcher: "" } : stored || { batting: [], pitcher: "" };
  (saved.participants || []).forEach(number => {
    const player = rosters[teamKey].players.find(item => item.number === number);
    if (player) attendance[player.name] = "yes";
  });
  const participants = rosters[teamKey].players.filter(player => attendance[player.name] === "yes");
  const available = rosters[teamKey].players.filter(player => attendance[player.name] !== "yes");
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
  if (nav) {
    const destination = nav.dataset.nav;
    if (destination === "league" && window.BBATScorebook?.hasActiveDraft?.()) window.BBATScorebook.resumeRecord();
    else {
      showScreen(destination);
      if (destination === "live" && resumeLiveDetail && getLiveState()?.live) openLiveDetail();
    }
  }
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
  const selectedPlayer = rosters[teamKey].players[selectedRosterPlayerIndex];
  if (rosterRecordMode === "pitching" && !selectedPlayer?.pitcher) selectedRosterPlayerIndex = rosters[teamKey].players.findIndex(player => player.pitcher);
  renderRosterTable(teamKey);
  renderPlayerAnalysis(teamKey, selectedRosterPlayerIndex);
}));
document.querySelector("#rosterPlayerSelect").addEventListener("change", event => renderPlayerAnalysis(document.querySelector("#teamPageSelect").value, Number(event.target.value)));
document.querySelector("#addPlayerButton").addEventListener("click", openPlayerModal);
document.querySelector("#closePlayerModal").addEventListener("click", closePlayerModal);
document.querySelector("#cancelPlayerAdd").addEventListener("click", closePlayerModal);
playerBackdrop.addEventListener("click", closePlayerModal);
document.querySelector("#playerForm").addEventListener("submit", async event => {
  event.preventDefault();
  const teamKey = document.querySelector("#teamPageSelect").value;
  const teamId = signedInAccount?.teamIds?.[teamKey];
  const position = document.querySelector("#newPlayerPosition").value;
  const isPitcher = ["SP", "RP", "P"].includes(position);
  const possiblePositionList = document.querySelector("#newPlayerPositions").value.split(",").map(value => value.trim().toUpperCase()).filter(Boolean);
  const draft = {
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
    possiblePositions: possiblePositionList,
    custom: true
  };
  const submit = event.currentTarget.querySelector("[type=submit]");
  submit.disabled = true;
  submit.textContent = "추가 중";
  try {
    if (!teamId) throw new Error("TEAM_REQUIRED");
    const { data, error } = await supabaseClient.rpc("add_manual_team_player", {
      p_team_id: teamId,
      p_name: draft.name,
      p_number: draft.number,
      p_primary_position: position,
      p_possible_positions: possiblePositionList,
      p_throws: document.querySelector("#newPlayerThrows").value,
      p_bats: document.querySelector("#newPlayerBats").value,
    });
    if (error) throw error;
    const savedPlayer = Array.isArray(data) ? data[0] : data;
    const player = savedPlayer ? mapServerPlayer(savedPlayer) : draft;
    rosters[teamKey].players.push(player);
    event.target.reset();
    closePlayerModal();
    renderRosterManagement(teamKey);
    renderRosterPreview(teamKey);
    renderLeagueRosterSync(teamKey);
    showToast(`${player.name} 선수를 명단에 추가했습니다.`);
  } catch (error) {
    showToast(error.message?.includes("team_players_number_key")
      ? "이미 사용 중인 등번호입니다."
      : "선수를 추가하지 못했습니다. 입력 내용을 확인해주세요.");
  } finally {
    submit.disabled = false;
    submit.textContent = "명단에 추가";
  }
});
document.querySelector("#playerRecordTableBody").addEventListener("click", async event => {
  const button = event.target.closest("[data-delete-player]");
  if (!button) return;
  event.stopPropagation();
  const teamKey = document.querySelector("#teamPageSelect").value;
  if (!window.confirm(`${button.dataset.playerName} 선수를 명단에서 삭제할까요?\n가입 계정 선수는 삭제할 수 없으며, 직접 추가한 선수만 삭제됩니다.`)) return;
  button.disabled = true;
  try {
    const { error } = await supabaseClient.rpc("remove_manual_team_player", {
      p_team_id: signedInAccount?.teamIds?.[teamKey],
      p_player_id: button.dataset.deletePlayer,
    });
    if (error) throw error;
    await loadAccountTeamPlayers(signedInAccount);
    renderRosterManagement(teamKey);
    renderRosterPreview(teamKey);
    renderLeagueRosterSync(teamKey);
    showToast(`${button.dataset.playerName} 선수를 삭제했습니다.`);
  } catch (error) {
    button.disabled = false;
    showToast(error.message?.includes("ACCOUNT_PLAYER_PROTECTED") ? "가입 계정 선수는 팀원 관리에서 처리해주세요." : "선수를 삭제하지 못했습니다.");
  }
});
document.querySelector("#leagueRosterTeamSelect").addEventListener("change", event => renderLeagueRosterSync(event.target.value));
document.querySelector("#openTeamScheduleEditor").addEventListener("click", openScheduleEditor);
document.querySelector("#schedulePollList").addEventListener("click", async event => {
  const deleteButton = event.target.closest("[data-delete-poll]");
  if (deleteButton) {
    const teamKey = document.querySelector("#teamPageSelect").value;
    const leagueId = document.querySelector("#teamLeagueSelect").value;
    if (!window.confirm("이 참가투표를 삭제할까요?\n연결된 다음 경기와 캘린더 일정에서도 함께 사라집니다.")) return;
    deleteButton.disabled = true;
    try {
      const { error } = await supabaseClient.rpc("delete_team_attendance_poll", { p_poll_id: deleteButton.dataset.deletePoll });
      if (error) throw error;
      await loadTeamAttendancePolls(teamKey);
      renderTeamPage(teamKey, leagueId);
      buildCalendar();
      renderCalendarDay(selectedCalendarDate);
      showToast("참가투표와 연결 일정을 삭제했습니다.");
    } catch (_) {
      deleteButton.disabled = false;
      showToast("참가투표를 삭제하지 못했습니다.");
    }
    return;
  }
  const button = event.target.closest("[data-attendance]");
  if (!button || button.disabled) return;
  const teamKey = document.querySelector("#teamPageSelect").value;
  const leagueId = document.querySelector("#teamLeagueSelect").value;
  button.closest(".attendance-buttons").querySelectorAll("button").forEach(item => { item.disabled = true; });
  try {
    const { error } = await supabaseClient.rpc("respond_team_attendance_poll", {
      p_poll_id: button.dataset.pollId,
      p_response: button.dataset.attendance,
    });
    if (error) throw error;
    await loadTeamAttendancePolls(teamKey);
    renderSchedulePolls(teamKey, leagueId);
    renderLineupStatus(teamKey, leagueId);
    showToast(`참가 여부를 '${button.textContent}'로 저장했습니다.`);
  } catch (error) {
    renderSchedulePolls(teamKey, leagueId);
    showToast(error.message?.includes("POLL_CLOSED") ? "마감된 참가투표입니다." : "참가 여부를 저장하지 못했습니다.");
  }
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
document.querySelector("#lineupForm").addEventListener("submit", async event => {
  event.preventDefault();
  const submit = event.currentTarget.querySelector('[type="submit"]');
  submit.disabled = true;
  submit.textContent = "라인업 저장 중";
  const rows = [...document.querySelectorAll(".lineup-row")];
  const batting = rows.map((row, index) => ({ order: index + 1, player: row.querySelector(".lineup-player-select").value, position: row.querySelector(".lineup-position-select").value }));
  const relievers = [...document.querySelectorAll(".reliever-player-select")].map(select => select.value).filter(Boolean);
  const selected = new Set([document.querySelector("#lineupPitcherSelect").value, ...relievers, ...batting.map(item => item.player)].filter(Boolean));
  const lineupKey = gameKey(currentLineupContext.teamKey, currentLineupContext.leagueId, currentLineupContext.game);
  const payload = {
    pitcher: document.querySelector("#lineupPitcherSelect").value,
    relievers,
    batting,
    bench: currentLineupContext.participants.filter(player => !selected.has(player.number)).map(player => player.number),
    participants: currentLineupContext.participants.map(player => player.number),
  };
  lineupState[lineupKey] = payload;
  localStorage.setItem("bbat-box-lineups", JSON.stringify(lineupState));
  try {
    await window.BBATCloud.saveLineup(currentLineupContext.teamKey, currentLineupContext.leagueId, currentLineupContext.game, payload);
    renderLineupStatus(currentLineupContext.teamKey, currentLineupContext.leagueId);
    closeLineupBuilder();
    showToast("라인업을 서버에 저장하고 팀원에게 공개했습니다.");
  } catch (_) {
    showToast("라인업을 서버에 저장하지 못했습니다. 다시 시도해주세요.");
  } finally {
    submit.disabled = false;
    submit.textContent = "라인업 저장";
  }
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
document.querySelector("#profileForm").addEventListener("submit", async event => {
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
  try {
    const { error: playerError } = await supabaseClient.rpc("update_my_team_player", {
      p_team_id: signedInAccount?.teamIds?.[key],
      p_number: number,
      p_position: position,
      p_throws: throws,
      p_bats: bats,
    });
    if (playerError) throw playerError;
    if (draftProfilePhoto !== savedProfilePhoto) savedProfilePhoto = await saveProfilePhotoToCloud(draftProfilePhoto);
    localStorage.setItem(`bbat-box-profile-photo:${signedInAccount.id}`, savedProfilePhoto);
    applyProfilePhoto(savedProfilePhoto);
    await updateSignedInAccount({ name });
    renderHomeTeam(key);
    showScreen("home");
    showToast("프로필과 사진을 서버에 저장했습니다.");
  } catch (_) {
    showToast("프로필을 서버에 저장하지 못했습니다. 다시 시도해주세요.");
  }
});

document.querySelector("#leagueAccordion").addEventListener("click", event => {
  const deleteButton = event.target.closest("[data-delete-league]");
  if (deleteButton) {
    event.stopPropagation();
    const row = deleteButton.closest(".league-row");
    const teamKey = row.dataset.teamKey;
    const leagueName = row.dataset.leagueName;
    if (!window.confirm(`${leagueName} 리그를 삭제할까요?\n연결된 참가투표와 일정도 함께 보이지 않게 됩니다.`)) return;
    deleteButton.disabled = true;
    supabaseClient.rpc("delete_team_league", {
      p_team_id: signedInAccount?.teamIds?.[teamKey],
      p_league_key: row.dataset.leagueId,
    }).then(async ({ error }) => {
      if (error) throw error;
      await loadTeamLeagues(teamKey);
      await loadTeamAttendancePolls(teamKey);
      renderLeagueDashboard();
      renderTeamPage(teamKey, teamLeagues[teamKey][0].id);
      buildCalendar();
      showToast(`${leagueName} 리그를 삭제했습니다.`);
    }).catch(() => {
      deleteButton.disabled = false;
      showToast("리그를 삭제하지 못했습니다.");
    });
    return;
  }
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

document.querySelector("#closeLiveDetail").addEventListener("click", () => closeLiveDetail(false));
document.querySelector("#openScorebook").addEventListener("click", () => { const state = getLiveState(); if (state?.recordId) window.BBATScorebook?.openRecord(state.recordId); });
window.addEventListener("bbat-live-update", event => {
  const liveScreen = document.querySelector("#screen-live");
  if (!liveScreen.hidden) {
    if (!document.querySelector("#liveStadium").hidden && event.detail?.live) renderLiveStadium(event.detail);
    else renderLiveTab(document.querySelector("[data-live-tab].active")?.dataset.liveTab || "playing");
  }
});
window.addEventListener("bbat-records-update", () => {
  if (!document.querySelector("#screen-live").hidden) renderLiveTab(document.querySelector("[data-live-tab].active")?.dataset.liveTab || "playing");
});
window.addEventListener("bbat-player-stats-update", () => {
  const rosterScreen = document.querySelector("#screen-roster");
  if (rosterScreen && !rosterScreen.hidden) {
    const teamKey = document.querySelector("#teamPageSelect").value;
    renderRosterTable(teamKey);
    renderPlayerAnalysis(teamKey, selectedRosterPlayerIndex);
  }
});
window.addEventListener("storage", event => {
  if ([liveStoreKey, gameRecordStoreKey].includes(event.key) && !document.querySelector("#screen-live").hidden) renderLiveTab(document.querySelector("[data-live-tab].active")?.dataset.liveTab || "playing");
});
document.querySelector(".permission-action").addEventListener("click", openLeagueCreator);
document.querySelector("#closeLeagueCreate").addEventListener("click", closeLeagueCreator);
document.querySelector("#cancelLeagueCreate").addEventListener("click", closeLeagueCreator);
leagueCreateBackdrop.addEventListener("click", closeLeagueCreator);
document.querySelector("#leagueCreateForm").addEventListener("submit", async event => {
  event.preventDefault();
  const teamKey = document.querySelector("#leagueCreateTeam").value;
  const message = document.querySelector("#leagueCreateMessage");
  const submit = event.currentTarget.querySelector('[type="submit"]');
  submit.disabled = true;
  submit.textContent = "리그 만드는 중";
  message.textContent = "";
  try {
    const { error } = await supabaseClient.rpc("create_team_league", {
      p_team_id: signedInAccount?.teamIds?.[teamKey],
      p_name: document.querySelector("#leagueCreateName").value.trim(),
      p_season: document.querySelector("#leagueCreateSeason").value.trim(),
    });
    if (error) throw error;
    await loadTeamLeagues(teamKey);
    await loadTeamAttendancePolls(teamKey);
    renderLeagueDashboard();
    if (document.querySelector("#teamPageSelect").value === teamKey) renderTeamPage(teamKey, teamLeagues[teamKey][0].id);
    closeLeagueCreator();
    showToast("새 리그를 만들었습니다.");
  } catch (error) {
    message.textContent = error.message?.includes("NOT_AUTHORIZED") ? "리그는 팀 호스트와 관리자만 만들 수 있습니다." : "리그를 만들지 못했습니다. 이름과 시즌을 확인해주세요.";
  } finally {
    submit.disabled = false;
    submit.textContent = "리그 만들기";
  }
});
document.querySelector("#openScheduleEditor").addEventListener("click", openScheduleEditor);
document.querySelector("#closeScheduleEditor").addEventListener("click", closeScheduleEditor);
document.querySelector("#cancelScheduleEdit").addEventListener("click", closeScheduleEditor);
scheduleBackdrop.addEventListener("click", closeScheduleEditor);
document.querySelector("#scheduleTeamInput").addEventListener("change", event => {
  populateLeagueSelect(document.querySelector("#scheduleLeagueInput"), event.target.value);
});
document.querySelector("#scheduleForm").addEventListener("submit", async event => {
  event.preventDefault();
  const teamKey = document.querySelector("#scheduleTeamInput").value;
  const leagueId = document.querySelector("#scheduleLeagueInput").value;
  const league = getLeague(teamKey, leagueId);
  const message = document.querySelector("#scheduleFormMessage");
  const submit = event.currentTarget.querySelector('[type="submit"]');
  submit.disabled = true;
  submit.textContent = "투표 올리는 중";
  message.textContent = "";
  try {
    const { error } = await supabaseClient.rpc("create_team_attendance_poll", {
      p_team_id: signedInAccount?.teamIds?.[teamKey],
      p_league_key: leagueId,
      p_league_name: league.name,
      p_game_date: document.querySelector("#scheduleDateInput").value,
      p_game_time: document.querySelector("#scheduleTimeInput").value,
      p_opponent: document.querySelector("#scheduleOpponentInput").value.trim(),
      p_venue: document.querySelector("#scheduleVenueInput").value.trim(),
    });
    if (error) throw error;
    await loadTeamAttendancePolls(teamKey);
    document.querySelector("#teamPageSelect").value = teamKey;
    renderTeamPage(teamKey, leagueId);
    buildCalendar();
    renderCalendarGame(teamKey, leagueId);
    closeScheduleEditor();
    showToast("참가투표를 올렸습니다.");
  } catch (error) {
    if (error.message?.includes("PAST_GAME_DATE")) message.textContent = "오늘 이후의 경기 날짜를 선택해주세요.";
    else if (error.message?.includes("NOT_AUTHORIZED")) message.textContent = "참가투표는 팀 관리자만 만들 수 있습니다.";
    else message.textContent = "참가투표를 올리지 못했습니다. 입력 내용을 확인해주세요.";
  } finally {
    submit.disabled = false;
    submit.textContent = "투표 올리기";
  }
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
document.querySelector("#settingsProfileButton").addEventListener("click", () => {
  closeSettings();
  openProfileSetup(signedInAccount);
});
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
  if (typeof teamAccessModal !== "undefined" && !teamAccessModal.hidden) closeTeamAccess();
  if (!document.querySelector("#teamProfileGate").hidden) closeTeamProfileEditor();
});

const didWell = document.querySelector("#didWell");
const toLearn = document.querySelector("#toLearn");
document.querySelector("#saveNoteButton").addEventListener("click", async event => {
  const button = event.currentTarget;
  button.disabled = true;
  try {
    await savePrivateNoteToCloud({ didWell: didWell.value, toLearn: toLearn.value, visibility: "private" });
    showToast("오늘의 개인 노트를 서버에 나만 볼 수 있게 저장했습니다.");
  } catch (_) {
    showToast("개인 노트를 서버에 저장하지 못했습니다.");
  } finally {
    button.disabled = false;
  }
});

buildCalendar();
renderCalendarDay(selectedCalendarDate);
applyProfilePhoto(savedProfilePhoto);
renderHomeTeam("bbat");
renderTeamPage("bbat", "seoul-sunday");
renderLeagueRosterSync("bbat");
const authGate = document.querySelector("#authGate");
const loginForm = document.querySelector("#loginForm");
const signupForm = document.querySelector("#signupForm");
const authSwitch = document.querySelector("#authSwitch");
let signupIdVerified = "";

function normalizeUsername(value) { return value.trim().toLowerCase(); }
function escapeMarkup(value) { return String(value ?? "").replace(/[&<>"']/g, character => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character]); }
function currentAccountName() { return signedInAccount?.name || "이도윤"; }

function accountTeams(account = signedInAccount) {
  return (account?.teamDetails || []).filter(team => team.setupComplete);
}

function placeholderGame() {
  const date = new Date();
  date.setDate(date.getDate() + 14);
  return { date: toDateKey(date), time: "09:00", opponent: "상대팀 미정", venue: "경기장 미정" };
}

function teamImageUrl(path, updatedAt) {
  if (!path || !supabaseClient) return "";
  const { data } = supabaseClient.storage.from("team-assets").getPublicUrl(path);
  return data?.publicUrl ? `${data.publicUrl}?v=${encodeURIComponent(updatedAt || "1")}` : "";
}

function ensureClientTeam(team) {
  const key = team.slug;
  const primaryLeagues = (team.primaryLeagues || []).filter(Boolean).slice(0, 2);
  const foundedLabel = team.foundedYear ? `${team.foundedYear}년 창단` : "창단연도 미설정";
  teams[key] = {
    name: team.name, header: `${team.name} · 포지션 미정`, role: "선수", position: "미정", bats: "우투우타", games: "0경기",
    number: "-", initial: team.name.trim().slice(0, 1) || "B", logo: teamImageUrl(team.teamImagePath, team.updatedAt), logoColors: ["#0b3539", "#147565"], league: primaryLeagues.join(" · ") || "리그 미설정", standing: "시즌 준비 중",
    title: `${team.name}에서의 시즌`, trend: "첫 기록을 기다리고 있어요", summary: "0경기 · 0타석",
    stats: [["타율", ".000"], ["타점", "0"], ["OPS", ".000"]], teamMeta: `${foundedLabel} · 선수 0명`, wins: "0승 0패", rank: "-",
    region: team.region || "", primaryLeagues, managerName: team.managerName || "", foundedYear: team.foundedYear || "", homeField: team.homeField || "", description: team.description || "", teamImagePath: team.teamImagePath || "", updatedAt: team.updatedAt || ""
  };
  teamLeagues[key] = teamLeagues[key] || [{ id: `${key}-league`, name: "리그 미설정", season: "첫 시즌", record: "0승 0패", rank: "-", nextGame: null, games: [] }];
  rosters[key] = rosters[key] || { staff: [], players: [] };
}

function syncAccountTeamSelectors(account) {
  const availableTeams = accountTeams(account);
  const allowedKeys = new Set(availableTeams.map(team => team.slug));
  Object.keys(teams).forEach(key => { if (!allowedKeys.has(key)) delete teams[key]; });
  Object.keys(teamLeagues).forEach(key => { if (!allowedKeys.has(key)) delete teamLeagues[key]; });
  Object.keys(rosters).forEach(key => { if (!allowedKeys.has(key)) delete rosters[key]; });
  availableTeams.forEach(ensureClientTeam);
  const options = availableTeams.map(team => `<option value="${escapeMarkup(team.slug)}">${escapeMarkup(team.name)}</option>`).join("");
  ["#homeTeamSelect", "#teamPageSelect", "#leagueRosterTeamSelect", "#profileTeamSelect", "#scheduleTeamInput"].forEach(selector => {
    const select = document.querySelector(selector);
    if (select) select.innerHTML = options;
  });
  account.teams = availableTeams.map(team => team.slug);
  account.teamIds = Object.fromEntries(availableTeams.map(team => [team.slug, team.id]));
  account.teamRoles = Object.fromEntries(availableTeams.map(team => [team.slug, team.role]));
}

function renderNoTeamHome(account) {
  document.body.classList.add("has-no-team");
  document.querySelector(".team-info-card").hidden = true;
  document.querySelector("#noTeamCard").hidden = false;
  document.querySelector("#homeTeamSelectWrap").hidden = true;
  document.querySelector("#headerTeam").textContent = `N.${account.uniformNumber || "-"}`;
  document.querySelector("#headerNumber").textContent = account.uniformNumber || "-";
  document.querySelector("#profileTeamShort").textContent = "미소속";
  document.querySelector("#profileNumber").textContent = `N.${account.uniformNumber || "-"}`;
  document.querySelector("#profilePosition").textContent = account.desiredPositions?.[0] || "미정";
  document.querySelector("#profileBats").textContent = `${account.experienceYears || 0}년 · ${account.isFormerPlayer ? "선출" : "비선출"}`;
  document.querySelector("#profileGames").textContent = "0경기";
  document.querySelector("#seasonTitle").textContent = "첫 기록을 기다리고 있어요";
  document.querySelector("#seasonTrend").textContent = "팀에 참여하면 기록이 연결됩니다";
  document.querySelector("#recordSummary").textContent = "0경기 · 0타석";
  document.querySelector("#homeStats").innerHTML = [["타율", ".000"], ["타점", "0"], ["OPS", ".000"]].map(([label, value]) => `<div><small>${label}</small><strong>${value}</strong></div>`).join("");
  document.querySelector(".league-mini-list").innerHTML = '<div class="empty-league-home"><strong>참여 중인 리그가 없습니다.</strong><span>팀에 들어가면 리그와 일정이 이곳에 표시됩니다.</span></div>';
  [["#screen-league", "리그 기록"], ["#screen-team", "팀 관리"]].forEach(([selector, title]) => {
    const screen = document.querySelector(selector);
    let notice = screen.querySelector(".screen-no-team-state");
    if (!notice) {
      notice = document.createElement("section");
      notice.className = "screen-no-team-state";
      screen.appendChild(notice);
    }
    notice.innerHTML = `<strong>${title}에 연결된 팀이 없습니다.</strong><p>홈에서 팀을 만들거나 참여코드를 입력해주세요.</p><button type="button" data-go="home">홈에서 팀 연결하기</button>`;
  });
}

function showTeamHome(teamKey) {
  document.body.classList.remove("has-no-team");
  document.querySelectorAll(".screen-no-team-state").forEach(item => item.remove());
  document.querySelector(".team-info-card").hidden = false;
  document.querySelector("#noTeamCard").hidden = true;
  document.querySelector("#homeTeamSelectWrap").hidden = false;
  renderHomeTeam(teamKey);
}

function selectedAccountTeamKey() {
  return document.querySelector("#homeTeamSelect")?.value || signedInAccount?.teams?.[0] || "";
}

function selectedAccountTeamId() {
  return signedInAccount?.teamIds?.[selectedAccountTeamKey()] || null;
}

function mapServerPlayer(player) {
  const position = player.primary_position || "미정";
  const isPitcher = ["SP", "RP", "P"].includes(position);
  return {
    id: player.id, linkedUserId: player.linked_user_id || null, number: player.number || "-", name: player.name, position,
    role: isPitcher ? "투수" : positionLabels[position] || "선수",
    bats: `${player.throws}${player.bats}`, avg: 0, ops: 0,
    stat: isPitcher ? "0.00" : ".000", metrics: [50, 50, 50, 50, 50],
    detail: isPitcher ? [["ERA", "0.00"], ["삼진", "0"], ["WHIP", "0.00"]] : [["타율", ".000"], ["OPS", ".000"], ["타점", "0"]],
    pitcher: isPitcher, possiblePositions: player.possible_positions || [], custom: player.source === "manual", source: player.source
  };
}

async function loadAccountTeamPlayers(account) {
  await Promise.all(accountTeams(account).map(async team => {
    const { data, error } = await supabaseClient.rpc("list_team_players", { p_team_id: team.id });
    if (!error && rosters[team.slug]) rosters[team.slug].players = (data || []).map(mapServerPlayer);
  }));
}

function syncAccountPlayerAcrossTeams(account) {
  const roleLabelsWithTeam = { host: "호스트", admin: "관리자", manager: "매니저", scorer: "기록원", member: "선수" };
  accountTeams(account).forEach(team => {
    const ownPlayer = rosters[team.slug]?.players.find(player => player.linkedUserId === account.id);
    const clientTeam = teams[team.slug];
    if (!clientTeam) return;
    const number = ownPlayer?.number && ownPlayer.number !== "-" ? ownPlayer.number : account.uniformNumber || "-";
    const position = ownPlayer?.position && ownPlayer.position !== "미정" ? ownPlayer.position : account.desiredPositions?.[0] || "미정";
    clientTeam.number = number;
    clientTeam.position = position;
    clientTeam.role = roleLabelsWithTeam[team.role] || "선수";
    clientTeam.header = `${clientTeam.name} · ${positionLabels[position] || position}`;
    clientTeam.teamMeta = `${clientTeam.foundedYear ? `${clientTeam.foundedYear}년 창단` : "창단연도 미설정"} · 선수 ${rosters[team.slug]?.players.length || 0}명`;
    if (ownPlayer?.bats) clientTeam.bats = ownPlayer.bats;
  });
}

function renderFreshTeamEmptyStates(teamKey) {
  const team = teams[teamKey];
  const miniList = document.querySelector(".league-mini-list");
  if (miniList) miniList.innerHTML = `<div class="poll-empty"><strong>아직 참여 중인 리그가 없습니다.</strong><p>${escapeMarkup(team.name)}의 첫 리그를 만들면 여기에 표시됩니다.</p></div>`;
  const accordion = document.querySelector("#leagueAccordion");
  if (accordion) accordion.innerHTML = `<div class="live-empty"><strong>아직 등록한 리그가 없습니다.</strong><p>리그를 만든 뒤 경기 일정과 기록을 시작할 수 있습니다.</p></div>`;
}

function renderLeagueDashboard() {
  const createButton = document.querySelector(".permission-action");
  const canCreate = accountTeams().some(team => ["host", "admin"].includes(team.role));
  createButton.hidden = !canCreate;
  const note = document.querySelector(".permission-note");
  note.querySelector("strong").textContent = canCreate ? "호스트·관리자 권한으로 리그를 만들 수 있습니다" : "리그 기록을 확인할 수 있습니다";
  note.querySelector("p").textContent = canCreate ? "새 리그를 만든 뒤 경기 기록과 참가투표를 연결하세요." : "리그 생성과 권한 지정은 팀 호스트 또는 관리자가 담당합니다.";
  const rows = accountTeams().flatMap(team => (serverLeagueState[team.slug] || []).map(league => ({ team, league })));
  const accordion = document.querySelector("#leagueAccordion");
  renderHomeLeagueList(selectedAccountTeamKey());
  if (!rows.length) {
    accordion.innerHTML = `<div class="live-empty"><strong>아직 등록한 리그가 없습니다.</strong><p>${canCreate ? "리그 만들기를 눌러 첫 리그 기록 공간을 만드세요." : "팀 호스트가 리그를 만들면 이곳에 표시됩니다."}</p></div>`;
    return;
  }
  accordion.innerHTML = rows.map(({ team, league }, index) => {
    const editable = ["host", "admin", "manager", "scorer"].includes(team.role);
    const canDelete = ["host", "admin"].includes(team.role);
    return `<article class="league-row ${index === 0 ? "is-open" : ""}" data-team-key="${escapeMarkup(team.slug)}" data-league-id="${escapeMarkup(league.id)}" data-league-name="${escapeMarkup(league.name)}" data-editable="${editable}"><button class="league-toggle" type="button" aria-expanded="${index === 0}"><span class="league-emblem seoul">${escapeMarkup(league.name.slice(0, 1))}</span><span><strong>${escapeMarkup(league.name)}</strong><small>${escapeMarkup(league.season)} · ${escapeMarkup(team.name)}</small></span><span class="role-badge ${editable ? "edit" : "view"}">${editable ? "편집 가능" : "보기 전용"}</span><i></i></button><div class="league-detail"><div class="standing"><span>시즌 기록</span><strong>0<small>경기</small></strong><p>첫 기록 대기 중</p></div><dl><div><dt>타율</dt><dd>.000</dd></div><div><dt>타점</dt><dd>0</dd></div><div><dt>OPS</dt><dd>.000</dd></div><div><dt>도루</dt><dd>0</dd></div></dl><div class="league-detail-actions"><button class="outline-action" type="button" data-open-league>리그 기록 열기</button>${canDelete ? `<button class="danger-action" type="button" data-delete-league>리그 삭제</button>` : ""}</div></div></article>`;
  }).join("");
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

async function updateSignedInAccount(changes) {
  if (!signedInAccount) return;
  const previousName = signedInAccount.name;
  const nextName = changes.name || signedInAccount.name;
  const nextNickname = changes.nickname || signedInAccount.nickname;
  const { data, error } = await supabaseClient.rpc("update_my_profile", {
    p_full_name: nextName,
    p_nickname: nextNickname,
  });
  if (error) {
    showToast("서버에 프로필을 저장하지 못했습니다.");
    throw error;
  }
  signedInAccount = { ...signedInAccount, ...changes, name: data.full_name, nickname: data.nickname };
  migratePlayerIdentity(previousName, signedInAccount.name);
  await applySignedInUser(signedInAccount);
}

function setAuthMode(mode) {
  const joining = mode === "signup";
  loginForm.hidden = joining;
  signupForm.hidden = !joining;
  document.querySelector("#authKicker").textContent = joining ? "BBAT BOX 시작하기" : "다시 오신 것을 환영합니다";
  document.querySelector("#authTitle").textContent = joining ? "회원가입" : "로그인";
  document.querySelector("#authDescription").textContent = joining ? "계정을 만든 뒤 내 선수 정보를 입력합니다." : "내 계정으로 기록과 팀을 이어서 확인하세요.";
  authSwitch.innerHTML = joining ? "이미 계정이 있으신가요? <b>로그인</b>" : "회원이 아니신가요? <b>회원가입</b>";
  authSwitch.dataset.mode = joining ? "signup" : "login";
  document.querySelector(joining ? "#signupId" : "#loginId").focus();
}

async function applySignedInUser(account) {
  if (!account) return;
  const previousName = signedInAccount?.name || "이도윤";
  stopCloudSync();
  cloudGameRecordsByTeam = {};
  signedInAccount = account;
  migratePlayerIdentity(previousName, account.name);
  syncAccountTeamSelectors(account);
  await loadAccountTeamPlayers(account);
  syncAccountPlayerAcrossTeams(account);
  await Promise.all(accountTeams(account).map(team => loadTeamLeagues(team.slug)));
  await Promise.all(accountTeams(account).map(team => loadTeamAttendancePolls(team.slug)));
  try {
    savedProfilePhoto = await loadProfilePhotoFromCloud(account);
    if (!account.profilePhotoPath && savedProfilePhoto.startsWith("data:")) savedProfilePhoto = await saveProfilePhotoToCloud(savedProfilePhoto);
    draftProfilePhoto = savedProfilePhoto;
    localStorage.setItem(`bbat-box-profile-photo:${account.id}`, savedProfilePhoto);
    applyProfilePhoto(savedProfilePhoto);
  } catch (_) {
    savedProfilePhoto = localStorage.getItem(`bbat-box-profile-photo:${account.id}`) || "";
    draftProfilePhoto = savedProfilePhoto;
    applyProfilePhoto(savedProfilePhoto);
  }
  try {
    await loadCloudData();
  } catch (_) {
    showToast("일부 서버 기록을 불러오지 못했습니다. 잠시 후 다시 시도합니다.");
    startCloudSync();
  }
  const firstTeam = accountTeams(account)[0];
  const role = firstTeam?.role || (account.isPlatformHost ? "host" : "member");
  const roleLabelsWithTeam = { host: "호스트", admin: "관리자", manager: "매니저", scorer: "기록원", member: "선수" };
  const canManageTeam = accountTeams(account).some(team => ["host", "admin", "manager"].includes(team.role));
  document.querySelector(".mini-profile-copy strong").textContent = account.name;
  document.querySelector("#profileDisplayName").textContent = account.name;
  document.querySelector("#profileNameInput").value = account.name;
  document.querySelector("#profileNickname").textContent = account.nickname;
  document.querySelector("#profileJoinedAt").textContent = formatJoinedAt(account.createdAt);
  document.querySelector("#editorIdentityName").textContent = `${account.nickname} (${account.name})`;
  document.querySelector("#settingsAccountName").textContent = `${account.nickname} (${account.name})`;
  document.querySelector("#settingsAccountMeta").textContent = `${account.username} · ${firstTeam ? `${firstTeam.name} ${roleLabelsWithTeam[role]}` : "팀 만들기 전"}`;
  document.querySelector("#teamAccessButton").hidden = !canManageTeam;
  document.querySelector("#openScheduleEditor").hidden = !canManageTeam;
  renderToday();
  if (firstTeam) {
    showTeamHome(firstTeam.slug);
    renderTeamPage(firstTeam.slug, teamLeagues[firstTeam.slug][0].id);
    renderLeagueRosterSync(firstTeam.slug);
    renderLeagueDashboard();
    buildCalendar();
    renderCalendarDay(toDateKey(new Date()));
  } else renderNoTeamHome(account);
}

function resetPrototypeDataForFirstTeamSetup(account) {
  if (!account?.id || accountTeams(account).length > 0) return;
  const marker = `bbat-box-clean-start:${account.id}`;
  if (localStorage.getItem(marker)) return;
  [
    "bbat-box-schedules",
    "bbat-box-added-players",
    "bbat-box-attendance",
    "bbat-box-lineups",
    "bbat-box-linked-player-stats-v1",
    "bbat-box-game-records-v2",
    "bbat-box-live-game-v1",
  ].forEach(key => localStorage.removeItem(key));
  attendanceState = {};
  lineupState = {};
  localStorage.setItem(marker, new Date().toISOString());
}

function openProfileSetup(account = signedInAccount) {
  const gate = document.querySelector("#profileSetupGate");
  const editing = Boolean(account?.profileComplete);
  document.querySelector("#profileSetupTitle").textContent = editing ? "내 프로필 수정" : "내 정보를 입력해주세요";
  document.querySelector("#profileSetupForm [type=submit]").textContent = editing ? "프로필 저장하기" : "내 정보 저장하고 시작하기";
  const secondaryButton = document.querySelector("#profileSetupLogout");
  secondaryButton.textContent = editing ? "취소" : "다른 계정으로 로그인";
  secondaryButton.dataset.action = editing ? "cancel" : "logout";
  document.querySelector("#setupFullName").value = account?.profileComplete ? account.name : "";
  document.querySelector("#setupNickname").value = account?.nickname || "";
  document.querySelector("#setupBirthDate").value = account?.birthDate || "";
  document.querySelector("#setupNumber").value = account?.uniformNumber || "";
  document.querySelector("#setupExperience").value = account?.experienceYears ?? 0;
  document.querySelectorAll('[name="setupPosition"]').forEach(input => { input.checked = account?.desiredPositions?.includes(input.value) || false; });
  const former = document.querySelector(`[name="setupFormerPlayer"][value="${Boolean(account?.isFormerPlayer)}"]`);
  if (former) former.checked = true;
  document.querySelector("#profileSetupMessage").textContent = "";
  gate.hidden = false;
  document.querySelector("#setupFullName").focus();
}

function canEditTeamProfile(teamKey) {
  return ["host", "admin"].includes(signedInAccount?.teamRoles?.[teamKey]);
}

function selectedTeamProfileKey(source = "home") {
  return source === "team" ? document.querySelector("#teamPageSelect").value : document.querySelector("#homeTeamSelect").value;
}

function clearTeamImageObjectUrl() {
  if (draftTeamImageObjectUrl) URL.revokeObjectURL(draftTeamImageObjectUrl);
  draftTeamImageObjectUrl = "";
}

function renderTeamImagePreview(source, initial) {
  const image = document.querySelector("#teamImagePreviewPhoto");
  const fallback = document.querySelector("#teamImagePreviewInitial");
  image.hidden = !source;
  image.src = source || "";
  fallback.hidden = Boolean(source);
  fallback.textContent = initial || "B";
  document.querySelector("#removeTeamImage").disabled = !source;
}

function openTeamProfileEditor(teamKey = selectedTeamProfileKey()) {
  if (!teamKey || !canEditTeamProfile(teamKey)) {
    showToast("팀 정보는 호스트와 관리자만 수정할 수 있습니다.");
    return;
  }
  const team = teams[teamKey];
  const serverTeam = signedInAccount?.teamDetails?.find(item => item.slug === teamKey);
  if (!team || !serverTeam?.id) {
    showToast("팀 정보를 불러오지 못했습니다.");
    return;
  }
  clearTeamImageObjectUrl();
  draftTeamImageFile = null;
  removeTeamImageRequested = false;
  document.querySelector("#teamImageInput").value = "";
  document.querySelector("#teamProfileId").value = serverTeam.id;
  document.querySelector("#teamProfileCrest").textContent = team.initial;
  renderTeamImagePreview(team.logo, team.initial);
  document.querySelector("#teamProfileName").value = team.name;
  document.querySelector("#teamProfileRegion").value = team.region || "";
  document.querySelector("#teamProfileLeague1").value = team.primaryLeagues?.[0] || "";
  document.querySelector("#teamProfileLeague2").value = team.primaryLeagues?.[1] || "";
  document.querySelector("#teamProfileManager").value = team.managerName || "";
  document.querySelector("#teamProfileFoundedYear").value = team.foundedYear || new Date().getFullYear();
  document.querySelector("#teamProfileHomeField").value = team.homeField || "";
  document.querySelector("#teamProfileDescription").value = team.description || "";
  document.querySelector("#teamDescriptionCount").textContent = String((team.description || "").length);
  document.querySelector("#teamProfileMessage").textContent = "";
  document.querySelector("#teamProfileGate").hidden = false;
  document.querySelector("#teamProfileName").focus();
}

function closeTeamProfileEditor() {
  clearTeamImageObjectUrl();
  draftTeamImageFile = null;
  removeTeamImageRequested = false;
  document.querySelector("#teamProfileGate").hidden = true;
}

function openTeamAction(id) {
  document.querySelector(id).hidden = false;
  document.body.classList.add("team-setup-required");
}

function closeTeamAction(id) {
  document.querySelector(id).hidden = true;
  document.body.classList.remove("team-setup-required");
}

async function unlockApp(account) {
  resetPrototypeDataForFirstTeamSetup(account);
  await applySignedInUser(account);
  authGate.hidden = true;
  document.body.classList.remove("auth-locked");
  document.querySelector("#teamSetupGate").hidden = true;
  document.querySelector("#teamJoinGate").hidden = true;
  document.body.classList.remove("team-setup-required");
  if (!account.profileComplete) openProfileSetup(account);
  else document.querySelector("#profileSetupGate").hidden = true;
  showScreen("home");
}

async function lockApp() {
  stopCloudSync();
  if (supabaseClient) await supabaseClient.auth.signOut();
  signedInAccount = null;
  savedProfilePhoto = "";
  draftProfilePhoto = "";
  applyProfilePhoto("");
  didWell.value = "";
  toLearn.value = "";
  document.querySelector("#teamSetupGate").hidden = true;
  document.querySelector("#teamJoinGate").hidden = true;
  document.querySelector("#profileSetupGate").hidden = true;
  document.querySelector("#teamProfileGate").hidden = true;
  document.body.classList.remove("team-setup-required");
  authGate.hidden = false;
  document.body.classList.add("auth-locked");
  setAuthMode("login");
}

document.querySelector("#teamSetupForm").addEventListener("submit", async event => {
  event.preventDefault();
  const name = document.querySelector("#teamSetupName").value.trim();
  const message = document.querySelector("#teamSetupMessage");
  const button = event.currentTarget.querySelector("[type=submit]");
  if (name.length < 2) { message.textContent = "팀 이름을 두 글자 이상 입력해주세요."; return; }
  button.disabled = true;
  button.textContent = "팀 방 만드는 중";
  message.textContent = "";
  try {
    const { error } = await supabaseClient.rpc("create_team_room", { p_name: name });
    if (error) throw error;
    const { data } = await supabaseClient.auth.getUser();
    const account = await loadServerAccount(data.user);
    await unlockApp(account);
    event.currentTarget.reset();
    showToast(`${name} 팀 방을 만들었습니다.`);
  } catch (error) {
    message.textContent = error.message?.includes("HOST_REQUIRED")
      ? "BBAT BOX 호스트만 새 팀 방을 만들 수 있습니다."
      : "팀 방을 만들지 못했습니다. 잠시 후 다시 시도해주세요.";
  } finally {
    button.disabled = false;
    button.textContent = "팀 방 만들기";
  }
});
document.querySelector("#openTeamCreate").addEventListener("click", () => openTeamAction("#teamSetupGate"));
document.querySelector("#teamSetupClose").addEventListener("click", () => closeTeamAction("#teamSetupGate"));
document.querySelector("#openTeamJoin").addEventListener("click", () => openTeamAction("#teamJoinGate"));
document.querySelector("#joinTeamButton").addEventListener("click", () => openTeamAction("#teamJoinGate"));
document.querySelector("#teamJoinClose").addEventListener("click", () => closeTeamAction("#teamJoinGate"));

document.querySelector("#profileSetupForm").addEventListener("submit", async event => {
  event.preventDefault();
  const positions = [...document.querySelectorAll('[name="setupPosition"]:checked')].map(input => input.value);
  const message = document.querySelector("#profileSetupMessage");
  const button = event.currentTarget.querySelector('[type="submit"]');
  if (!positions.length) { message.textContent = "희망 포지션을 한 개 이상 선택해주세요."; return; }
  button.disabled = true;
  button.textContent = "내 정보 저장 중";
  try {
    const { error } = await supabaseClient.rpc("update_player_profile", {
      p_full_name: document.querySelector("#setupFullName").value.trim(),
      p_nickname: document.querySelector("#setupNickname").value.trim(),
      p_birth_date: document.querySelector("#setupBirthDate").value,
      p_desired_positions: positions,
      p_uniform_number: document.querySelector("#setupNumber").value.trim(),
      p_experience_years: Number(document.querySelector("#setupExperience").value),
      p_is_former_player: document.querySelector('[name="setupFormerPlayer"]:checked').value === "true",
    });
    if (error) throw error;
    const { data } = await supabaseClient.auth.getUser();
    const account = await loadServerAccount(data.user);
    document.querySelector("#profileSetupGate").hidden = true;
    await unlockApp(account);
    showToast("내 선수 정보를 저장했습니다.");
  } catch (error) {
    message.textContent = "내 정보를 저장하지 못했습니다. 입력 내용을 확인해주세요.";
  } finally {
    button.disabled = false;
    button.textContent = signedInAccount?.profileComplete ? "프로필 저장하기" : "내 정보 저장하고 시작하기";
  }
});
document.querySelector("#profileSetupLogout").addEventListener("click", event => {
  if (event.currentTarget.dataset.action === "cancel") document.querySelector("#profileSetupGate").hidden = true;
  else lockApp();
});

document.querySelector("#teamJoinForm").addEventListener("submit", async event => {
  event.preventDefault();
  const message = document.querySelector("#teamJoinMessage");
  const button = event.currentTarget.querySelector('[type="submit"]');
  button.disabled = true;
  button.textContent = "팀 연결 중";
  try {
    const { data, error } = await supabaseClient.rpc("join_team_by_code", { p_code: document.querySelector("#teamJoinCode").value.trim() });
    if (error) throw error;
    const request = data?.[0];
    event.currentTarget.reset();
    closeTeamAction("#teamJoinGate");
    showToast(`${request?.name || "팀"} 가입 신청을 보냈습니다. 호스트 또는 관리자 승인 후 연결됩니다.`);
  } catch (error) {
    message.textContent = error.message?.includes("ALREADY_MEMBER")
      ? "이미 참여 중인 팀입니다."
      : error.message?.includes("ALREADY_REQUESTED")
        ? "이미 가입 신청을 보냈습니다. 팀 관리자의 승인을 기다려주세요."
        : "참가코드가 올바르지 않거나 만료되었습니다.";
  } finally {
    button.disabled = false;
    button.textContent = "참가 신청하기";
  }
});

document.querySelector("#openTeamProfile").addEventListener("click", () => openTeamProfileEditor(selectedTeamProfileKey("home")));
document.querySelector("#openTeamProfileFromTeam").addEventListener("click", () => openTeamProfileEditor(selectedTeamProfileKey("team")));
document.querySelector("#cancelTeamProfile").addEventListener("click", closeTeamProfileEditor);
document.querySelector("#teamProfileDescription").addEventListener("input", event => {
  document.querySelector("#teamDescriptionCount").textContent = String(event.target.value.length);
});
document.querySelector("#teamImageInput").addEventListener("change", event => {
  const file = event.target.files?.[0];
  const message = document.querySelector("#teamProfileMessage");
  if (!file) return;
  if (!["image/jpeg", "image/png", "image/webp"].includes(file.type)) {
    message.textContent = "JPG, PNG, WEBP 이미지만 등록할 수 있습니다.";
    event.target.value = "";
    return;
  }
  if (file.size > 5 * 1024 * 1024) {
    message.textContent = "이미지는 5MB 이하로 선택해주세요.";
    event.target.value = "";
    return;
  }
  clearTeamImageObjectUrl();
  draftTeamImageFile = file;
  removeTeamImageRequested = false;
  draftTeamImageObjectUrl = URL.createObjectURL(file);
  message.textContent = "";
  renderTeamImagePreview(draftTeamImageObjectUrl, document.querySelector("#teamProfileCrest").textContent);
});
document.querySelector("#removeTeamImage").addEventListener("click", () => {
  clearTeamImageObjectUrl();
  draftTeamImageFile = null;
  removeTeamImageRequested = true;
  document.querySelector("#teamImageInput").value = "";
  renderTeamImagePreview("", document.querySelector("#teamProfileCrest").textContent);
});
document.querySelector("#teamProfileForm").addEventListener("submit", async event => {
  event.preventDefault();
  const teamId = document.querySelector("#teamProfileId").value;
  const primaryLeagues = [document.querySelector("#teamProfileLeague1").value, document.querySelector("#teamProfileLeague2").value].map(value => value.trim()).filter(Boolean);
  const message = document.querySelector("#teamProfileMessage");
  const button = event.currentTarget.querySelector('[type="submit"]');
  button.disabled = true;
  button.textContent = "팀 정보 저장 중";
  message.textContent = "";
  try {
    const teamKey = signedInAccount?.teamDetails?.find(item => item.id === teamId)?.slug;
    const currentTeam = teamKey ? teams[teamKey] : null;
    let teamImagePath = currentTeam?.teamImagePath || "";
    if (draftTeamImageFile) {
      teamImagePath = `${teamId}/team-image`;
      const { error: uploadError } = await supabaseClient.storage.from("team-assets").upload(teamImagePath, draftTeamImageFile, {
        upsert: true,
        contentType: draftTeamImageFile.type,
        cacheControl: "3600",
      });
      if (uploadError) throw uploadError;
    } else if (removeTeamImageRequested) teamImagePath = "";
    const { error } = await supabaseClient.rpc("update_team_profile", {
      p_team_id: teamId,
      p_name: document.querySelector("#teamProfileName").value.trim(),
      p_region: document.querySelector("#teamProfileRegion").value.trim(),
      p_primary_leagues: primaryLeagues,
      p_manager_name: document.querySelector("#teamProfileManager").value.trim(),
      p_founded_year: Number(document.querySelector("#teamProfileFoundedYear").value),
      p_home_field: document.querySelector("#teamProfileHomeField").value.trim(),
      p_description: document.querySelector("#teamProfileDescription").value.trim(),
      p_team_image_path: teamImagePath,
    });
    if (error) throw error;
    const { data } = await supabaseClient.auth.getUser();
    const account = await loadServerAccount(data.user);
    closeTeamProfileEditor();
    await unlockApp(account);
    showToast("팀 정보를 저장했습니다.");
  } catch (error) {
    message.textContent = error.message?.includes("NOT_AUTHORIZED") ? "팀 정보는 호스트와 관리자만 수정할 수 있습니다." : "팀 정보나 이미지를 저장하지 못했습니다. 입력값과 이미지 크기를 확인해주세요.";
  } finally {
    button.disabled = false;
    button.textContent = "팀 정보 저장";
  }
});

async function loadServerAccount(user) {
  const [{ data: profile, error: profileError }, { data: memberships, error: membershipError }] = await Promise.all([
    supabaseClient.from("profiles").select("id,username,full_name,nickname,status,is_platform_host,must_change_password,created_at,birth_date,desired_positions,uniform_number,experience_years,is_former_player,profile_complete,profile_photo_path").eq("id", user.id).single(),
    supabaseClient.from("team_members").select("role,status,team:teams(id,slug,name,setup_complete,region,primary_leagues,manager_name,founded_year,home_field,description,team_image_path,updated_at)").eq("user_id", user.id),
  ]);
  if (profileError || membershipError || !profile) throw profileError || membershipError || new Error("PROFILE_NOT_FOUND");
  const activeMemberships = (memberships || []).filter(item => item.status === "active");
  if (profile.status !== "active") throw new Error("ACCOUNT_SUSPENDED");
  const teamRoles = {};
  const accountTeamSlugs = [];
  const teamDetails = [];
  activeMemberships.forEach(item => {
    const team = Array.isArray(item.team) ? item.team[0] : item.team;
    if (!team?.slug) return;
    teamRoles[team.slug] = item.role;
    accountTeamSlugs.push(team.slug);
    teamDetails.push({ id: team.id, slug: team.slug, name: team.name, setupComplete: team.setup_complete, role: item.role, region: team.region, primaryLeagues: team.primary_leagues || [], managerName: team.manager_name, foundedYear: team.founded_year, homeField: team.home_field, description: team.description, teamImagePath: team.team_image_path, updatedAt: team.updated_at });
  });
  return { id: profile.id, username: profile.username, name: profile.full_name, nickname: profile.nickname, isPlatformHost: profile.is_platform_host, createdAt: profile.created_at, birthDate: profile.birth_date, desiredPositions: profile.desired_positions || [], uniformNumber: profile.uniform_number || "", experienceYears: profile.experience_years || 0, isFormerPlayer: profile.is_former_player, profileComplete: profile.profile_complete, profilePhotoPath: profile.profile_photo_path || "", mustChangePassword: profile.must_change_password, teamRoles, teams: accountTeamSlugs, teamDetails };
}

async function restoreServerSession() {
  if (!supabaseClient) {
    document.querySelector("#loginMessage").textContent = "계정 서버를 불러오지 못했습니다. 잠시 후 새로고침해주세요.";
    return;
  }
  const { data } = await supabaseClient.auth.getSession();
  if (!data.session?.user) return;
  try {
    await unlockApp(await loadServerAccount(data.session.user));
  } catch (error) {
    await supabaseClient.auth.signOut();
    document.querySelector("#loginMessage").textContent = error.message === "ACCOUNT_SUSPENDED" ? "사용이 정지된 계정입니다. 팀 호스트에게 문의해주세요." : "계정 정보를 불러오지 못했습니다.";
  }
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

document.querySelector("#checkUsernameButton").addEventListener("click", async () => {
  const input = document.querySelector("#signupId");
  const username = normalizeUsername(input.value);
  const message = document.querySelector("#idCheckMessage");
  if (!input.checkValidity()) {
    message.textContent = "아이디는 영문과 숫자로 3자리 이상 입력해주세요.";
    message.className = "id-check-message error";
    input.reportValidity();
    return;
  }
  const { data: available, error } = await supabaseClient.rpc("username_is_available", { p_username: username });
  if (error) {
    signupIdVerified = "";
    message.textContent = "아이디를 확인하지 못했습니다. 잠시 후 다시 시도해주세요.";
    message.className = "id-check-message error";
    return;
  }
  if (!available) {
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
    const nickname = document.querySelector("#signupNickname").value.trim();
    const { data, error } = await supabaseClient.auth.signUp({
      email: `${username}@bbatbox.invalid`,
      password: document.querySelector("#signupPassword").value,
      options: { data: { username, full_name: nickname, nickname, invite_code: "" } },
    });
    if (error) throw error;
    if (!data.session) throw new Error("EMAIL_CONFIRMATION_ENABLED");
    const account = await loadServerAccount(data.user);
    signupForm.reset();
    signupIdVerified = "";
    await unlockApp(account);
  } catch (error) {
    if (error.message === "EMAIL_CONFIRMATION_ENABLED") message.textContent = "서버의 이메일 확인 설정을 점검해주세요.";
    else if (/already registered|already exists|duplicate/i.test(error.message)) message.textContent = "이미 사용 중인 아이디입니다.";
    else message.textContent = "계정을 만들지 못했습니다. 입력 정보를 확인해주세요.";
  } finally {
    submit.disabled = false;
    submit.textContent = "계정 만들기";
  }
});

loginForm.addEventListener("submit", async event => {
  event.preventDefault();
  const username = normalizeUsername(document.querySelector("#loginId").value);
  const message = document.querySelector("#loginMessage");
  const submit = loginForm.querySelector("[type=submit]");
  submit.disabled = true;
  submit.textContent = "로그인 중";
  try {
    const { data, error } = await supabaseClient.auth.signInWithPassword({
      email: `${username}@bbatbox.invalid`,
      password: document.querySelector("#loginPassword").value,
    });
    if (error) throw error;
    const account = await loadServerAccount(data.user);
    message.textContent = "";
    loginForm.reset();
    await unlockApp(account);
  } catch (error) {
    if (error.message === "ACCOUNT_SUSPENDED") message.textContent = "사용이 정지된 계정입니다. 팀 호스트에게 문의해주세요.";
    else message.textContent = "아이디 또는 비밀번호를 확인해주세요.";
    await supabaseClient?.auth.signOut();
  } finally {
    submit.disabled = false;
    submit.textContent = "로그인";
  }
});

const teamAccessModal = document.querySelector("#teamAccessModal");
const teamAccessBackdrop = document.querySelector("#teamAccessBackdrop");
const roleLabels = { host: "호스트", admin: "관리자", manager: "매니저", scorer: "기록원", member: "선수" };
function managedTeamKey() { return document.querySelector("#teamPageSelect")?.value || selectedAccountTeamKey(); }
function managedTeamId() { return signedInAccount?.teamIds?.[managedTeamKey()] || selectedAccountTeamId(); }

function closeTeamAccess() {
  teamAccessModal.hidden = true;
  teamAccessBackdrop.hidden = true;
  document.body.style.overflow = "";
}

function teamRoleOptions(member, canEdit) {
  if (member.role === "host") return '<option value="host" selected>호스트</option>';
  return ["member", "scorer", "manager", "admin"].map(role => `<option value="${role}" ${role === member.role ? "selected" : ""}>${roleLabels[role]}</option>`).join("");
}

async function renderTeamMemberRolePanel(teamKey = managedTeamKey()) {
  const card = document.querySelector("#teamMemberRoleCard");
  const list = document.querySelector("#teamMemberRoleList");
  const teamId = signedInAccount?.teamIds?.[teamKey];
  const myRole = signedInAccount?.teamRoles?.[teamKey];
  if (!teamId || !["host", "admin", "manager"].includes(myRole)) { card.hidden = true; return; }
  card.hidden = false;
  list.innerHTML = '<p class="poll-empty">참가코드 가입 계정을 불러오는 중입니다.</p>';
  const { data, error } = await supabaseClient.rpc("list_team_members", { p_team_id: teamId });
  if (document.querySelector("#teamPageSelect").value !== teamKey) return;
  if (error) { list.innerHTML = '<p class="poll-empty">가입 계정을 불러오지 못했습니다.</p>'; return; }
  const canEdit = ["host", "admin"].includes(myRole);
  list.innerHTML = data.map(member => {
    const protectedAccount = member.role === "host" || member.user_id === signedInAccount.id;
    return `<article class="team-role-row ${member.role === "host" ? "host" : ""}" data-member-id="${member.user_id}" data-team-id="${teamId}"><div><strong>${escapeMarkup(member.nickname)} (${escapeMarkup(member.full_name)})</strong><small>${member.role === "host" ? "팀 방 생성자 · 자동 호스트" : `참가코드 가입 · ${roleLabels[member.role]}`}</small></div><select data-inline-member-role ${!canEdit || protectedAccount ? "disabled" : ""} aria-label="${escapeMarkup(member.full_name)} 권한">${teamRoleOptions(member, canEdit)}</select></article>`;
  }).join("");
}

async function renderTeamMembers() {
  const list = document.querySelector("#memberAdminList");
  list.innerHTML = '<p class="poll-empty">팀원 정보를 불러오는 중입니다.</p>';
  const teamId = managedTeamId();
  if (!teamId) { list.innerHTML = '<p class="poll-empty">먼저 팀 방을 만들어주세요.</p>'; return; }
  const { data, error } = await supabaseClient.rpc("list_team_members", { p_team_id: teamId });
  if (error) { list.innerHTML = '<p class="poll-empty">팀원 정보를 불러오지 못했습니다.</p>'; return; }
  const myRole = signedInAccount?.teamRoles?.[managedTeamKey()];
  const canEdit = ["host", "admin"].includes(myRole);
  list.innerHTML = data.map(member => {
    const protectedAccount = member.role === "host" || member.user_id === signedInAccount.id;
    return `<article class="member-admin-row ${member.status === "suspended" ? "is-suspended" : ""}" data-member-id="${member.user_id}"><div><strong>${escapeMarkup(member.nickname)} (${escapeMarkup(member.full_name)})</strong><small>${escapeMarkup(member.username)} · ${roleLabels[member.role]} · ${new Date(member.joined_at).toLocaleDateString("ko-KR")}</small></div><select data-member-role ${!canEdit || protectedAccount ? "disabled" : ""} aria-label="${escapeMarkup(member.full_name)} 권한">${teamRoleOptions(member, canEdit)}</select><button class="${member.status === "suspended" ? "activate" : "suspend"}" data-member-status ${!canEdit || protectedAccount ? "disabled" : ""} type="button">${member.status === "suspended" ? "사용 재개" : "사용 정지"}</button></article>`;
  }).join("");
}

async function renderTeamJoinRequests() {
  const section = document.querySelector("#joinRequestSection");
  const list = document.querySelector("#teamJoinRequestList");
  const teamId = managedTeamId();
  const myRole = signedInAccount?.teamRoles?.[managedTeamKey()];
  if (!teamId || !["host", "admin"].includes(myRole)) {
    section.hidden = true;
    return;
  }
  section.hidden = false;
  list.innerHTML = '<p class="poll-empty">가입 신청을 불러오는 중입니다.</p>';
  const { data, error } = await supabaseClient.rpc("list_team_join_requests", { p_team_id: teamId });
  if (error) {
    list.innerHTML = '<p class="poll-empty">가입 신청을 불러오지 못했습니다.</p>';
    return;
  }
  const roleOptions = ["member", "scorer", "manager", "admin"]
    .map(role => `<option value="${role}">${roleLabels[role]}</option>`).join("");
  list.innerHTML = data?.length ? data.map(request => `
    <article class="join-request-row" data-request-id="${request.request_id}">
      <div><strong>${escapeMarkup(request.nickname)} (${escapeMarkup(request.full_name)})</strong><small>${escapeMarkup(request.username)} · ${new Date(request.requested_at).toLocaleDateString("ko-KR")} 신청</small></div>
      <label class="join-role-select">승인 권한<select data-join-role aria-label="${escapeMarkup(request.full_name)} 승인 권한">${roleOptions}</select></label>
      <button class="approve" type="button" data-join-decision="approve">선택 권한으로 승인</button>
      <button class="reject" type="button" data-join-decision="reject">거절</button>
    </article>`).join("") : '<p class="poll-empty">대기 중인 가입 신청이 없습니다.</p>';
}

async function openTeamAccess() {
  closeSettings();
  teamAccessModal.hidden = false;
  teamAccessBackdrop.hidden = false;
  document.body.style.overflow = "hidden";
  document.querySelector("#inviteResult").hidden = true;
  const team = teams[managedTeamKey()];
  teamAccessModal.querySelector("header p").textContent = `${team?.name || "팀"} HOST`;
  await Promise.all([renderTeamMembers(), renderTeamJoinRequests()]);
}

document.querySelector("#teamAccessButton").addEventListener("click", openTeamAccess);
document.querySelector("#openTeamAccessFromTeam").addEventListener("click", openTeamAccess);
document.querySelector("#closeTeamAccess").addEventListener("click", closeTeamAccess);
teamAccessBackdrop.addEventListener("click", closeTeamAccess);
document.querySelector("#refreshMembers").addEventListener("click", renderTeamMembers);
document.querySelector("#refreshJoinRequests").addEventListener("click", renderTeamJoinRequests);
document.querySelector("#createInviteButton").addEventListener("click", async event => {
  const button = event.currentTarget;
  button.disabled = true;
  try {
    const { data, error } = await supabaseClient.rpc("create_team_invite", {
      p_team_id: managedTeamId(),
      p_role: "member",
      p_expires_days: 30,
      p_max_uses: Number(document.querySelector("#inviteUses").value) || 1,
    });
    if (error) throw error;
    const invite = data[0];
    document.querySelector("#inviteCodeValue").textContent = invite.code;
    document.querySelector("#inviteExpiry").textContent = `${new Date(invite.expires_at).toLocaleDateString("ko-KR")}까지 · ${invite.max_uses}회 사용`;
    document.querySelector("#inviteResult").hidden = false;
    showToast("팀 참가코드를 만들었습니다. 팀원에게 전달해주세요.");
  } catch (error) {
    showToast(error?.message?.includes("MAX_EDITORS_REACHED")
      ? "수정 권한은 팀 방마다 최대 5명까지 지정할 수 있습니다."
      : "초대 코드를 만들지 못했습니다.");
  }
  finally { button.disabled = false; }
});
document.querySelector("#copyInviteCode").addEventListener("click", async () => {
  await navigator.clipboard.writeText(document.querySelector("#inviteCodeValue").textContent);
  showToast("초대 코드를 복사했습니다.");
});
document.querySelector("#teamJoinRequestList").addEventListener("click", async event => {
  const button = event.target.closest("[data-join-decision]");
  if (!button) return;
  const row = button.closest("[data-request-id]");
  const decision = button.dataset.joinDecision;
  const selectedRole = row.querySelector("[data-join-role]")?.value || "member";
  row.querySelectorAll("button").forEach(item => { item.disabled = true; });
  row.querySelectorAll("select").forEach(item => { item.disabled = true; });
  try {
    const { error } = await supabaseClient.rpc("review_team_join_request", {
      p_team_id: managedTeamId(),
      p_request_id: row.dataset.requestId,
      p_decision: decision,
      p_role: selectedRole,
    });
    if (error) throw error;
    showToast(decision === "approve" ? "가입 신청을 승인했습니다." : "가입 신청을 거절했습니다.");
    await Promise.all([renderTeamJoinRequests(), renderTeamMembers(), renderTeamMemberRolePanel()]);
    if (decision === "approve") {
      await loadAccountTeamPlayers(signedInAccount);
      const teamKey = managedTeamKey();
      renderTeamPage(teamKey, document.querySelector("#teamLeagueSelect")?.value);
    }
  } catch (error) {
    const message = error.message?.includes("MAX_EDITORS_REACHED")
      ? "수정 권한은 팀 방마다 최대 5명까지 지정할 수 있습니다."
      : error.message?.includes("INVITE_EXPIRED")
        ? "이 신청에 사용된 참가코드가 만료되었습니다. 새 코드를 발급해주세요."
        : error.message?.includes("HOST_REQUIRED")
          ? "관리자 권한 승인은 호스트만 처리할 수 있습니다."
          : "가입 신청을 처리하지 못했습니다.";
    showToast(message);
    await renderTeamJoinRequests();
  }
});
document.querySelector("#memberAdminList").addEventListener("change", async event => {
  const select = event.target.closest("[data-member-role]");
  if (!select) return;
  const row = select.closest("[data-member-id]");
  const { error } = await supabaseClient.rpc("set_team_member_role", { p_team_id: managedTeamId(), p_user_id: row.dataset.memberId, p_role: select.value });
  if (error) {
    showToast(error.message?.includes("MAX_EDITORS_REACHED")
      ? "수정 권한은 팀 방마다 최대 5명까지 지정할 수 있습니다."
      : "권한을 변경하지 못했습니다.");
  } else showToast("팀원 권한을 변경했습니다.");
  await renderTeamMembers();
  await renderTeamMemberRolePanel();
});
document.querySelector("#teamMemberRoleList").addEventListener("change", async event => {
  const select = event.target.closest("[data-inline-member-role]");
  if (!select) return;
  const row = select.closest("[data-member-id]");
  select.disabled = true;
  const { error } = await supabaseClient.rpc("set_team_member_role", {
    p_team_id: row.dataset.teamId,
    p_user_id: row.dataset.memberId,
    p_role: select.value,
  });
  if (error) showToast(error.message?.includes("MAX_EDITORS_REACHED") ? "수정 권한은 팀 방마다 최대 5명까지 지정할 수 있습니다." : "권한을 변경하지 못했습니다.");
  else showToast("팀원 권한을 변경했습니다.");
  await renderTeamMemberRolePanel();
});
document.querySelector("#memberAdminList").addEventListener("click", async event => {
  const button = event.target.closest("[data-member-status]");
  if (!button) return;
  const row = button.closest("[data-member-id]");
  const nextStatus = row.classList.contains("is-suspended") ? "active" : "suspended";
  const { error } = await supabaseClient.rpc("set_team_member_status", { p_team_id: managedTeamId(), p_user_id: row.dataset.memberId, p_status: nextStatus });
  if (error) showToast("계정 상태를 변경하지 못했습니다."); else showToast(nextStatus === "active" ? "계정 사용을 재개했습니다." : "계정 사용을 정지했습니다.");
  await renderTeamMembers();
  await renderTeamMemberRolePanel();
});

document.querySelector("#setupBirthDate").max = toDateKey(new Date());
restoreServerSession();

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js?v=1.0.0").catch(() => {
      // 서비스 워커를 지원하지 않거나 차단한 브라우저에서도 웹 기능은 그대로 동작합니다.
    });
  });
}
