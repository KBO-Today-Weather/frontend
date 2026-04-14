export interface HistoryRecord {
  season: number;
  rank: number;
  wins: number;
  losses: number;
  winRate: number;
  postseason: string;
}

export interface CompareStatRow {
  label: string;
  team1Value: string;
  team2Value: string;
  higherIsBetter: boolean;
}
