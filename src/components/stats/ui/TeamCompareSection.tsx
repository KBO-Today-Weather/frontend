"use client";

import { useState } from "react";
import { TEAM_DETAILS, TEAM_HEX_COLORS } from "@/entities/team";
import { getRadarScores, getCompareStats } from "@/entities/stats";
import RadarChart from "@/components/stats/ui/RadarChart";
import StatCompareList from "@/components/stats/ui/StatCompareList";

export default function TeamCompareSection() {
  const [teamId1, setTeamId1] = useState("doosan");
  const [teamId2, setTeamId2] = useState("lg");

  const scores1 = getRadarScores(teamId1);
  const scores2 = getRadarScores(teamId2);
  const compareRows = getCompareStats(teamId1, teamId2);
  const color1 = TEAM_HEX_COLORS[teamId1] ?? "#000000";
  const color2 = TEAM_HEX_COLORS[teamId2] ?? "#000000";
  const team1 = TEAM_DETAILS.find((t) => t.id === teamId1);
  const team2 = TEAM_DETAILS.find((t) => t.id === teamId2);

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <div className="px-4 py-4 border-b border-gray-100">
        <p className="text-sm font-semibold text-gray-900">팀 비교 분석</p>
      </div>

      {/* 팀 선택 */}
      <div className="flex items-center gap-2 px-4 py-3">
        <select
          value={teamId1}
          onChange={(e) => setTeamId1(e.target.value)}
          className="flex-1 text-sm border border-gray-200 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-kbo-lightBlue"
        >
          {TEAM_DETAILS.map((t) => (
            <option key={t.id} value={t.id}>{t.name}</option>
          ))}
        </select>
        <span className="text-xs text-gray-400 shrink-0">VS</span>
        <select
          value={teamId2}
          onChange={(e) => setTeamId2(e.target.value)}
          className="flex-1 text-sm border border-gray-200 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-kbo-lightBlue"
        >
          {TEAM_DETAILS.map((t) => (
            <option key={t.id} value={t.id}>{t.name}</option>
          ))}
        </select>
      </div>

      {/* 레이더 차트 */}
      <div className="px-4 pt-2 pb-1">
        <RadarChart scores1={scores1} scores2={scores2} color1={color1} color2={color2} />
      </div>

      {/* 범례 */}
      <div className="flex justify-center gap-6 pb-3">
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full" style={{ backgroundColor: color1 }} />
          <span className="text-xs text-gray-600">{team1?.name}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full" style={{ backgroundColor: color2 }} />
          <span className="text-xs text-gray-600">{team2?.name}</span>
        </div>
      </div>

      {/* 스탯 비교 리스트 */}
      <div className="border-t border-gray-100">
        <StatCompareList rows={compareRows} color1={color1} color2={color2} />
      </div>
    </div>
  );
}
