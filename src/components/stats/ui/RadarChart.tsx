"use client";

import {
  Radar,
  RadarChart as RechartsRadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

interface Props {
  scores1: [number, number, number, number, number];
  scores2: [number, number, number, number, number];
  color1: string;
  color2: string;
}

const AXES = ["타율", "홈런", "방어율", "도루", "수비율"];

export default function RadarChart({ scores1, scores2, color1, color2 }: Props) {
  const data = AXES.map((label, i) => ({
    subject: label,
    team1: scores1[i],
    team2: scores2[i],
  }));

  return (
    <ResponsiveContainer width="100%" height={240}>
      <RechartsRadarChart data={data} cx="50%" cy="50%" outerRadius={80}>
        <PolarGrid stroke="#e5e7eb" />
        <PolarAngleAxis dataKey="subject" tick={{ fontSize: 11, fill: "#6b7280" }} />
        <Radar dataKey="team1" stroke={color1} fill={color1} fillOpacity={0.25} strokeWidth={2} />
        <Radar dataKey="team2" stroke={color2} fill={color2} fillOpacity={0.25} strokeWidth={2} />
      </RechartsRadarChart>
    </ResponsiveContainer>
  );
}
