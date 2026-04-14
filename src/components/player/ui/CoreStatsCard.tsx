import Container from "@/components/ui/Container";
import { CoreStat } from "@/entities/player";

interface CoreStatsCardProps {
  stats: CoreStat[];
}

const CoreStatsCard = ({ stats }: CoreStatsCardProps) => {
  if (stats.length === 0) return null;

  return (
    <Container>
      <p className="font-semibold text-base mb-4">핵심 스탯</p>
      <div className="flex divide-x divide-gray-200">
        {stats.map((stat) => (
          <div key={stat.label} className="flex-1 flex flex-col items-center">
            <span className="text-xl font-bold">{stat.value}</span>
            <span className="text-xs text-gray-500 mt-1">{stat.label}</span>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default CoreStatsCard;
