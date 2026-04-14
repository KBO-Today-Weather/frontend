import { CompareStatRow } from "@/entities/stats";

interface Props {
  rows: CompareStatRow[];
  color1: string;
  color2: string;
}

export default function StatCompareList({ rows, color1, color2 }: Props) {
  const getWinner = (row: CompareStatRow): "team1" | "team2" | "draw" => {
    const v1 = parseFloat(row.team1Value);
    const v2 = parseFloat(row.team2Value);
    if (isNaN(v1) || isNaN(v2)) return "draw";
    if (v1 === v2) return "draw";
    return row.higherIsBetter ? (v1 > v2 ? "team1" : "team2") : (v1 < v2 ? "team1" : "team2");
  };

  return (
    <div className="divide-y divide-gray-100">
      {rows.map((row) => {
        const winner = getWinner(row);
        return (
          <div key={row.label} className="flex items-center py-3 px-4">
            <span
              className={`w-16 text-center text-sm font-semibold ${winner === "team1" ? "text-gray-900" : "text-gray-400"}`}
            >
              {row.team1Value}
            </span>
            <span className="flex-1 text-center text-xs text-gray-500">{row.label}</span>
            <span
              className={`w-16 text-center text-sm font-semibold ${winner === "team2" ? "text-gray-900" : "text-gray-400"}`}
            >
              {row.team2Value}
            </span>
          </div>
        );
      })}
    </div>
  );
}
