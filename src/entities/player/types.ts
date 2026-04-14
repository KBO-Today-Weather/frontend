export interface CoreStat {
  label: string;
  value: string;
}

export interface AbilityStat {
  label: string;
  score: number;
  percentile: string;
}

export interface AbilityCategory {
  category: string;
  stats: AbilityStat[];
}

export interface PlayerDetail {
  id: string;
  jerseyNumber: number;
  name: string;
  teamId: string;
  teamName: string;
  teamColor: string;
  position: string;
  batting?: string;
  throwing?: string;
  coreStats: CoreStat[];
  abilityCategories: AbilityCategory[];
}
