import Container from "@/components/ui/Container";
import { AbilityCategory } from "@/entities/player";

interface AbilityStatsCardProps {
  abilityCategories: AbilityCategory[];
}

const AbilityStatsCard = ({ abilityCategories }: AbilityStatsCardProps) => {
  if (abilityCategories.length === 0) return null;

  return (
    <Container>
      <p className="font-semibold text-base mb-4">세부 능력치</p>
      <div className="space-y-5">
        {abilityCategories.map((category) => (
          <div key={category.category}>
            <p className="text-sm font-semibold text-gray-800 mb-3">{category.category}</p>
            <div className="space-y-3">
              {category.stats.map((stat) => (
                <div key={stat.label}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-700">{stat.label}</span>
                    <span className="text-gray-500">
                      {stat.score}점 ({stat.percentile})
                    </span>
                  </div>
                  <div className="w-full h-1.5 bg-gray-200 rounded-full">
                    <div
                      className="h-1.5 bg-kbo-darkBlue rounded-full transition-all"
                      style={{ width: `${stat.score}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default AbilityStatsCard;
