"use client";

import { useRouter } from "next/navigation";
import PageHeader from "@/components/ui/PageHeader";
import Container from "@/components/ui/Container";
import { DataTable, HeadCell } from "@/components/table";
import KboNameTag from "@/shared/ui/KboNameTag";
import { Muted, P } from "@/lib/Typography";
import { TeamData, TEAM_COLORS, STANDINGS } from "@/entities/team";

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
      return <KboNameTag color={TEAM_COLORS[teamName] ?? "bg-gray-400"} name={teamName} />;
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
  const router = useRouter();

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
          data={STANDINGS}
          headCells={headCells}
          initialSortKey="rank"
          initialSortDirection="asc"
          rowKey="rank"
          onRowClick={(row) => router.push(`/team/${row.id}`)}
        />
      </Container>
    </div>
  );
};

export default TeamPage;
