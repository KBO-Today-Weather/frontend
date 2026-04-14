"use client";

import PageHeader from "@/components/ui/PageHeader";
import Container from "@/components/ui/Container";
import { DataTable, HeadCell } from "@/components/table";
import KboNameTag from "@/shared/ui/KboNameTag";
import { Muted, P } from "@/lib/Typography";
import { TeamData, TEAM_COLORS } from "@/entities/team";

const data: TeamData[] = [
  {
    rank: 1,
    team: "두산 베어스",
    games: 140,
    wins: 80,
    losses: 50,
    draws: 10,
    winRate: 0.571,
    streak: "1승",
  },
  {
    rank: 2,
    team: "LG 트윈스",
    games: 140,
    wins: 77,
    losses: 53,
    draws: 10,
    winRate: 0.552,
    streak: "2패",
  },
  {
    rank: 3,
    team: "키움 히어로즈",
    games: 140,
    wins: 74,
    losses: 56,
    draws: 10,
    winRate: 0.532,
    streak: "3승",
  },
  {
    rank: 4,
    team: "KT 위즈",
    games: 140,
    wins: 71,
    losses: 59,
    draws: 10,
    winRate: 0.513,
    streak: "4패",
  },
  {
    rank: 5,
    team: "SSG 랜더스",
    games: 140,
    wins: 68,
    losses: 62,
    draws: 10,
    winRate: 0.493,
    streak: "5승",
  },
  {
    rank: 6,
    team: "NC 다이노스",
    games: 140,
    wins: 65,
    losses: 65,
    draws: 10,
    winRate: 0.473,
    streak: "6패",
  },
  {
    rank: 7,
    team: "삼성 라이온즈",
    games: 140,
    wins: 62,
    losses: 68,
    draws: 10,
    winRate: 0.453,
    streak: "7승",
  },
  {
    rank: 8,
    team: "롯데 자이언츠",
    games: 140,
    wins: 59,
    losses: 71,
    draws: 10,
    winRate: 0.432,
    streak: "8패",
  },
  {
    rank: 9,
    team: "KIA 타이거즈",
    games: 140,
    wins: 56,
    losses: 74,
    draws: 10,
    winRate: 0.412,
    streak: "9승",
  },
  {
    rank: 10,
    team: "한화 이글스",
    games: 140,
    wins: 53,
    losses: 77,
    draws: 10,
    winRate: 0.391,
    streak: "10패",
  },
];

const headCells: HeadCell<TeamData>[] = [
  {
    id: "rank",
    label: "순위",
    align: "center",
  },
  {
    id: "team",
    label: "팀명",
    align: "left",
    render: (value) => {
      const teamName = value as string;
      return (
        <KboNameTag
          color={TEAM_COLORS[teamName] ?? "bg-gray-400"}
          name={teamName}
        />
      );
    },
  },
  {
    id: "games",
    label: "경기",
    align: "center",
  },
  {
    id: "wins",
    label: "승",
    align: "center",
    highlight: true,
  },
  {
    id: "losses",
    label: "패",
    align: "center",
  },
  {
    id: "draws",
    label: "무",
    align: "center",
  },
  {
    id: "winRate",
    label: "승률",
    align: "center",
    render: (value) => (value as number).toFixed(3),
  },
  {
    id: "streak",
    label: "연속",
    align: "center",
  },
];

const TeamPage = () => {
  return (
    <div className="space-y-4">
      <PageHeader
        title="팀 정보 & 순위"
        description="팀별 순위, 경기 일정, 선수 정보를 확인하세요"
      />
      <Container padding="p-0">
        <div className="px-6 pt-4 pb-2">
          <P className="font-semibold text-lg">정규리그 순위</P>
          <Muted>2024 시즌</Muted>
        </div>
        <DataTable
          data={data}
          headCells={headCells}
          initialSortKey="rank"
          initialSortDirection="asc"
          rowKey="rank"
        />
      </Container>
    </div>
  );
};

export default TeamPage;
