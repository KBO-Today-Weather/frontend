export interface TeamData extends Record<string, unknown> {
  id: string;
  rank: number;
  team: string;
  games: number;
  wins: number;
  losses: number;
  draws: number;
  winRate: number;
  streak: string;
}

export interface TeamDetail {
  id: string;
  order: number;
  name: string;
  stadium: string;
  color: string;
  rank: number;
  games: number;
  wins: number;
  losses: number;
  draws: number;
  winRate: number;
  streak: string;
  players: Player[];
  coaches: Player[];
  battingStats: TeamStat[];
  pitchingStats: TeamStat[];
}

export interface Player {
  id: string;
  jerseyNumber: number;
  name: string;
  position: string;
  average: string;
  details: string;
}

export interface TeamStat {
  label: string;
  value: string;
  rank: string;
}

export const TEAM_HEX_COLORS: Record<string, string> = {
  kia: "#ea0029",
  kt: "#000000",
  lg: "#c30452",
  nc: "#325288",
  ssg: "#ce0f2d",
  doosan: "#131230",
  lotte: "#041e42",
  samsung: "#064ca2",
  kiwoom: "#570414",
  hanwha: "#fc4f00",
};

export const TEAM_COLORS: Record<string, string> = {
  "두산 베어스": "bg-doosan",
  "LG 트윈스": "bg-Lg",
  "키움 히어로즈": "bg-kiwoom",
  "KT 위즈": "bg-kt",
  "SSG 랜더스": "bg-ssg",
  "NC 다이노스": "bg-nc",
  "삼성 라이온즈": "bg-samsung",
  "롯데 자이언츠": "bg-lotte",
  "KIA 타이거즈": "bg-kia",
  "한화 이글스": "bg-hanwha",
};