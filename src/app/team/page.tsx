"use client";

import Image from "next/image";
import PageHeader from "@/components/ui/pageHeader";
import Container from "@/components/ui/container";
import { DataTable, HeadCell } from "@/components/table";
import { TeamData } from "@/entities/team";



const TeamPage = () => {
  // 팀별 아이콘 매핑 (나중에 각 팀마다 다른 아이콘으로 수정 가능)
  const teamIcons: Record<string, string> = {
    "삼성 라이온즈": "/sample.svg",
    "LG 트윈스": "/sample.svg",
    "한화 이글스": "/sample.svg",
    "키움 히어로즈": "/sample.svg",
    "KIA 타이거즈": "/sample.svg",
    "롯데 자이언츠": "/sample.svg",
    "두산 베어스": "/sample.svg",
    "SSG 랜더스": "/sample.svg",
    "NC 다이노스": "/sample.svg",
    "KT 위즈": "/sample.svg",
  };

  const data: TeamData[] = [
    { rank: 1, team: "삼성 라이온즈", games: 140, wins: 75, losses: 55, draws: 10, winRate: 0.561 },
    { rank: 2, team: "LG 트윈스", games: 140, wins: 77, losses: 53, draws: 10, winRate: 0.552 },
    { rank: 4, team: "한화 이글스", games: 140, wins: 73, losses: 57, draws: 10, winRate: 0.550 },
    { rank: 5, team: "키움 히어로즈", games: 140, wins: 72, losses: 58, draws: 10, winRate: 0.543 },
    { rank: 6, team: "KIA 타이거즈", games: 140, wins: 71, losses: 59, draws: 10, winRate: 0.543 },
    { rank: 7, team: "롯데 자이언츠", games: 140, wins: 70, losses: 60, draws: 10, winRate: 0.536 },
    { rank: 3, team: "두산 베어스", games: 140, wins: 80, losses: 50, draws: 10, winRate: 0.571 },
    { rank: 8, team: "SSG 랜더스", games: 140, wins: 69, losses: 61, draws: 10, winRate: 0.532 },
    { rank: 9, team: "NC 다이노스", games: 140, wins: 68, losses: 62, draws: 10, winRate: 0.529 },
    { rank: 10, team: "KT 위즈", games: 140, wins: 67, losses: 63, draws: 10, winRate: 0.525 },
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
        const iconSrc = teamIcons[teamName] || "/sample.svg";
        return (
          <div className="flex items-center gap-2">
            <Image src={iconSrc} alt="" width={24} height={24} className="shrink-0" />
            <span>{teamName}</span>
          </div>
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
  ];

  return (
    <div className="space-y-4">
      <PageHeader title="팀 정보 & 순위" description="팀별 순위, 경기 일정, 선수 정보를 확인하세요" />
      <Container padding="p-0">
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