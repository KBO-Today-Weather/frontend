export interface TeamData extends Record<string, unknown> {
    rank: number;
    team: string;
    games: number;
    wins: number;
    losses: number;
    draws: number;
    winRate: number;
    streak: string;
  }