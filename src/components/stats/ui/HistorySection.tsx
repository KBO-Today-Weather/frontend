"use client";

import { useState } from "react";
import { TEAM_DETAILS } from "@/entities/team";
import { TEAM_HISTORY } from "@/entities/stats";

export default function HistorySection() {
  const [teamId, setTeamId] = useState("doosan");
  const records = TEAM_HISTORY[teamId] ?? [];

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <div className="flex items-center justify-between px-4 py-4 border-b border-gray-100">
        <p className="text-sm font-semibold text-gray-900">과거 기록</p>
        <select
          value={teamId}
          onChange={(e) => setTeamId(e.target.value)}
          className="text-sm border border-gray-200 rounded-lg px-3 py-1.5 bg-white focus:outline-none focus:ring-2 focus:ring-kbo-lightBlue"
        >
          {TEAM_DETAILS.map((t) => (
            <option key={t.id} value={t.id}>{t.name}</option>
          ))}
        </select>
      </div>

      <table className="w-full text-sm">
        <thead>
          <tr className="bg-gray-50 text-xs text-gray-500">
            <th className="px-4 py-3 text-left font-medium">시즌</th>
            <th className="px-4 py-3 text-center font-medium">순위</th>
            <th className="px-4 py-3 text-center font-medium">승</th>
            <th className="px-4 py-3 text-center font-medium">패</th>
            <th className="px-4 py-3 text-center font-medium">승률</th>
            <th className="px-4 py-3 text-right font-medium">포스트시즌</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-50">
          {records.map((r) => (
            <tr key={r.season} className="hover:bg-gray-50">
              <td className="px-4 py-3 font-medium text-gray-900">{r.season}</td>
              <td className="px-4 py-3 text-center text-kbo-lightBlue font-semibold">{r.rank}위</td>
              <td className="px-4 py-3 text-center text-gray-700">{r.wins}</td>
              <td className="px-4 py-3 text-center text-gray-700">{r.losses}</td>
              <td className="px-4 py-3 text-center text-gray-700">{r.winRate.toFixed(3)}</td>
              <td className="px-4 py-3 text-right text-gray-500 text-xs">{r.postseason}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
