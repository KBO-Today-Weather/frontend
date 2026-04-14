"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import { TeamStat } from "@/entities/team";
import { cn } from "@/lib/utils";

interface TeamStatsSectionProps {
  battingStats: TeamStat[];
  pitchingStats: TeamStat[];
}

const TeamStatsSection = ({
  battingStats,
  pitchingStats,
}: TeamStatsSectionProps) => {
  const [tab, setTab] = useState<"batting" | "pitching">("batting");
  const stats = tab === "batting" ? battingStats : pitchingStats;

  return (
    <Container>
      <p className="font-semibold text-base mb-3">팀 상세 스탯</p>
      <div className="flex bg-gray-100 rounded-lg p-1 mb-4">
        {(["batting", "pitching"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={cn(
              "flex-1 py-1.5 rounded-md text-sm transition-colors",
              tab === t ? "bg-white font-semibold shadow-sm" : "text-gray-500",
            )}
          >
            {t === "batting" ? "타격" : "투구"}
          </button>
        ))}
      </div>
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="text-left py-2 px-6 text-gray-500 font-medium">
              항목
            </th>
            <th className="text-center py-2 px-6 text-gray-500 font-medium">
              수치
            </th>
            <th className="text-right py-2 px-6 text-gray-500 font-medium">
              리그 순위
            </th>
          </tr>
        </thead>
        <tbody>
          {stats.map((stat) => (
            <tr
              key={stat.label}
              className="border-b border-gray-100 last:border-none"
            >
              <td className="py-2.5 px-6">{stat.label}</td>
              <td className="text-center py-2.5 px-6 font-medium">
                {stat.value}
              </td>
              <td className="text-right py-2.5 px-6 text-kbo-lightBlue font-medium">
                {stat.rank}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};

export default TeamStatsSection;
