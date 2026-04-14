import { notFound } from "next/navigation";
import { getPlayerDetail } from "@/entities/player";
import PlayerInfoCard from "@/components/player/ui/PlayerInfoCard";
import CoreStatsCard from "@/components/player/ui/CoreStatsCard";
import AbilityStatsCard from "@/components/player/ui/AbilityStatsCard";

interface PlayerDetailPageProps {
  params: Promise<{ teamId: string; playerId: string }>;
}

const PlayerDetailPage = async ({ params }: PlayerDetailPageProps) => {
  const { teamId, playerId } = await params;
  const player = getPlayerDetail(teamId, playerId);

  if (!player) notFound();

  return (
    <div className="space-y-4">
      <PlayerInfoCard player={player} />
      <CoreStatsCard stats={player.coreStats} />
      <AbilityStatsCard abilityCategories={player.abilityCategories} />
    </div>
  );
};

export default PlayerDetailPage;
