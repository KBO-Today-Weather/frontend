import { HistoryRecord, CompareStatRow } from "./types";
import { TEAM_DETAILS } from "@/entities/team";

// 수비율 (fielding%) - stats API에서 올 데이터
const TEAM_FIELDING: Record<string, number> = {
  doosan: 0.991,
  lg: 0.989,
  kiwoom: 0.987,
  kt: 0.986,
  ssg: 0.985,
  nc: 0.984,
  samsung: 0.983,
  lotte: 0.981,
  kia: 0.979,
  hanwha: 0.977,
};

// 5시즌 역사 기록 - history API에서 올 데이터
export const TEAM_HISTORY: Record<string, HistoryRecord[]> = {
  kia: [
    { season: 2024, rank: 9, wins: 56, losses: 74, winRate: 0.431, postseason: "미진출" },
    { season: 2023, rank: 1, wins: 86, losses: 55, winRate: 0.61, postseason: "한국시리즈 우승" },
    { season: 2022, rank: 6, wins: 64, losses: 76, winRate: 0.457, postseason: "미진출" },
    { season: 2021, rank: 8, wins: 60, losses: 82, winRate: 0.422, postseason: "미진출" },
    { season: 2020, rank: 10, wins: 54, losses: 86, winRate: 0.386, postseason: "미진출" },
  ],
  kt: [
    { season: 2024, rank: 4, wins: 71, losses: 59, winRate: 0.546, postseason: "준플레이오프" },
    { season: 2023, rank: 5, wins: 68, losses: 72, winRate: 0.486, postseason: "미진출" },
    { season: 2022, rank: 1, wins: 84, losses: 54, winRate: 0.609, postseason: "한국시리즈 우승" },
    { season: 2021, rank: 1, wins: 81, losses: 42, winRate: 0.659, postseason: "한국시리즈 우승" },
    { season: 2020, rank: 3, wins: 75, losses: 66, winRate: 0.532, postseason: "플레이오프" },
  ],
  lg: [
    { season: 2024, rank: 2, wins: 77, losses: 53, winRate: 0.592, postseason: "한국시리즈" },
    { season: 2023, rank: 1, wins: 86, losses: 55, winRate: 0.61, postseason: "한국시리즈 우승" },
    { season: 2022, rank: 2, wins: 80, losses: 60, winRate: 0.571, postseason: "한국시리즈" },
    { season: 2021, rank: 4, wins: 71, losses: 71, winRate: 0.5, postseason: "준플레이오프" },
    { season: 2020, rank: 4, wins: 71, losses: 69, winRate: 0.507, postseason: "준플레이오프" },
  ],
  nc: [
    { season: 2024, rank: 6, wins: 65, losses: 65, winRate: 0.5, postseason: "미진출" },
    { season: 2023, rank: 8, wins: 60, losses: 80, winRate: 0.429, postseason: "미진출" },
    { season: 2022, rank: 9, wins: 57, losses: 83, winRate: 0.407, postseason: "미진출" },
    { season: 2021, rank: 6, wins: 67, losses: 75, winRate: 0.472, postseason: "미진출" },
    { season: 2020, rank: 1, wins: 83, losses: 55, winRate: 0.601, postseason: "한국시리즈 우승" },
  ],
  ssg: [
    { season: 2024, rank: 5, wins: 68, losses: 62, winRate: 0.523, postseason: "플레이오프" },
    { season: 2023, rank: 4, wins: 72, losses: 68, winRate: 0.514, postseason: "준플레이오프" },
    { season: 2022, rank: 1, wins: 88, losses: 52, winRate: 0.629, postseason: "한국시리즈 우승" },
    { season: 2021, rank: 2, wins: 78, losses: 62, winRate: 0.557, postseason: "한국시리즈" },
    { season: 2020, rank: 5, wins: 67, losses: 73, winRate: 0.479, postseason: "미진출" },
  ],
  doosan: [
    { season: 2024, rank: 1, wins: 80, losses: 50, winRate: 0.615, postseason: "한국시리즈 우승" },
    { season: 2023, rank: 3, wins: 76, losses: 64, winRate: 0.543, postseason: "플레이오프" },
    { season: 2022, rank: 4, wins: 73, losses: 67, winRate: 0.521, postseason: "준플레이오프" },
    { season: 2021, rank: 5, wins: 68, losses: 74, winRate: 0.479, postseason: "미진출" },
    { season: 2020, rank: 2, wins: 79, losses: 58, winRate: 0.577, postseason: "한국시리즈" },
  ],
  lotte: [
    { season: 2024, rank: 8, wins: 59, losses: 71, winRate: 0.454, postseason: "미진출" },
    { season: 2023, rank: 7, wins: 62, losses: 78, winRate: 0.443, postseason: "미진출" },
    { season: 2022, rank: 7, wins: 63, losses: 77, winRate: 0.45, postseason: "미진출" },
    { season: 2021, rank: 9, wins: 57, losses: 85, winRate: 0.401, postseason: "미진출" },
    { season: 2020, rank: 9, wins: 56, losses: 84, winRate: 0.4, postseason: "미진출" },
  ],
  samsung: [
    { season: 2024, rank: 7, wins: 62, losses: 68, winRate: 0.477, postseason: "미진출" },
    { season: 2023, rank: 6, wins: 65, losses: 75, winRate: 0.464, postseason: "미진출" },
    { season: 2022, rank: 5, wins: 70, losses: 70, winRate: 0.5, postseason: "미진출" },
    { season: 2021, rank: 3, wins: 74, losses: 68, winRate: 0.521, postseason: "플레이오프" },
    { season: 2020, rank: 7, wins: 63, losses: 77, winRate: 0.45, postseason: "미진출" },
  ],
  kiwoom: [
    { season: 2024, rank: 3, wins: 74, losses: 56, winRate: 0.569, postseason: "플레이오프" },
    { season: 2023, rank: 2, wins: 82, losses: 58, winRate: 0.586, postseason: "한국시리즈" },
    { season: 2022, rank: 3, wins: 79, losses: 61, winRate: 0.564, postseason: "플레이오프" },
    { season: 2021, rank: 7, wins: 63, losses: 79, winRate: 0.444, postseason: "미진출" },
    { season: 2020, rank: 6, wins: 64, losses: 75, winRate: 0.46, postseason: "미진출" },
  ],
  hanwha: [
    { season: 2024, rank: 10, wins: 53, losses: 77, winRate: 0.408, postseason: "미진출" },
    { season: 2023, rank: 10, wins: 55, losses: 85, winRate: 0.393, postseason: "미진출" },
    { season: 2022, rank: 10, wins: 54, losses: 86, winRate: 0.386, postseason: "미진출" },
    { season: 2021, rank: 10, wins: 53, losses: 89, winRate: 0.373, postseason: "미진출" },
    { season: 2020, rank: 8, wins: 59, losses: 81, winRate: 0.421, postseason: "미진출" },
  ],
};

// 레이더 차트용 점수 (0~100) - 타율/홈런/방어율/도루/수비율 5축
export const getRadarScores = (teamId: string): [number, number, number, number, number] => {
  const team = TEAM_DETAILS.find((t) => t.id === teamId);
  if (!team) return [0, 0, 0, 0, 0];

  const batting = parseFloat(team.battingStats.find((s) => s.label === "타율")?.value ?? "0");
  const hr = parseInt(team.battingStats.find((s) => s.label === "홈런")?.value ?? "0");
  const era = parseFloat(team.pitchingStats.find((s) => s.label === "평균자책점")?.value ?? "9");
  const sb = parseInt(team.battingStats.find((s) => s.label === "도루")?.value ?? "0");
  const fielding = TEAM_FIELDING[teamId] ?? 0.98;

  return [
    Math.max(0, Math.min(100, Math.round(((batting - 0.26) / (0.295 - 0.26)) * 100))),
    Math.max(0, Math.min(100, Math.round(((hr - 128) / (178 - 128)) * 100))),
    Math.max(0, Math.min(100, Math.round(((4.68 - era) / (4.68 - 3.51)) * 100))),
    Math.max(0, Math.min(100, Math.round(((sb - 65) / (115 - 65)) * 100))),
    Math.max(0, Math.min(100, Math.round(((fielding - 0.977) / (0.991 - 0.977)) * 100))),
  ];
};

export const getCompareStats = (teamId1: string, teamId2: string): CompareStatRow[] => {
  const t1 = TEAM_DETAILS.find((t) => t.id === teamId1);
  const t2 = TEAM_DETAILS.find((t) => t.id === teamId2);
  if (!t1 || !t2) return [];

  const getBattingVal = (team: typeof t1, label: string) =>
    team!.battingStats.find((s) => s.label === label)?.value ?? "-";
  const getPitchingVal = (team: typeof t1, label: string) =>
    team!.pitchingStats.find((s) => s.label === label)?.value ?? "-";

  return [
    { label: "팀 타율", team1Value: getBattingVal(t1, "타율"), team2Value: getBattingVal(t2, "타율"), higherIsBetter: true },
    { label: "팀 홈런", team1Value: getBattingVal(t1, "홈런"), team2Value: getBattingVal(t2, "홈런"), higherIsBetter: true },
    { label: "팀 ERA", team1Value: getPitchingVal(t1, "평균자책점"), team2Value: getPitchingVal(t2, "평균자책점"), higherIsBetter: false },
    { label: "팀 도루", team1Value: getBattingVal(t1, "도루"), team2Value: getBattingVal(t2, "도루"), higherIsBetter: true },
    {
      label: "팀 수비율",
      team1Value: TEAM_FIELDING[teamId1]?.toFixed(3) ?? "-",
      team2Value: TEAM_FIELDING[teamId2]?.toFixed(3) ?? "-",
      higherIsBetter: true,
    },
  ];
};
