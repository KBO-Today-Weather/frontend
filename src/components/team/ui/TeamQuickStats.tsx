import Container from "@/components/ui/Container";
import { cn } from "@/lib/utils";

interface TeamQuickStatsProps {
  rank: number;
  winRate: number;
  streak: string;
}

const TeamQuickStats = ({ rank, winRate, streak }: TeamQuickStatsProps) => {
  const isWinStreak = streak.endsWith("승");

  return (
    <Container>
      <div className="flex divide-x divide-gray-200">
        <div className="flex-1 flex flex-col items-center py-3">
          <span className="text-2xl font-bold">{rank}위</span>
          <span className="text-xs text-gray-500 mt-1">순위</span>
        </div>
        <div className="flex-1 flex flex-col items-center py-3">
          <span className="text-2xl font-bold">{winRate.toFixed(3).replace("0.", ".")}</span>
          <span className="text-xs text-gray-500 mt-1">승률</span>
        </div>
        <div className="flex-1 flex flex-col items-center py-3">
          <span className={cn("text-2xl font-bold", isWinStreak ? "text-green-500" : "text-red-500")}>
            {streak}
          </span>
          <span className="text-xs text-gray-500 mt-1">최근 연속</span>
        </div>
      </div>
    </Container>
  );
};

export default TeamQuickStats;
