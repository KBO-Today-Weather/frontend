import { notFound } from "next/navigation";
import { getTeamById } from "@/entities/team";
import TeamHero from "@/components/team/ui/TeamHero";
import TeamQuickStats from "@/components/team/ui/TeamQuickStats";
import PlayerSearchSection from "@/components/team/ui/PlayerSearchSection";
import TeamStatsSection from "@/components/team/ui/TeamStatsSection";

interface TeamDetailPageProps {
  params: Promise<{ teamId: string }>;
}

export async function generateStaticParams() {
  const { TEAM_DETAILS } = await import("@/entities/team");
  return TEAM_DETAILS.map((team) => ({ teamId: team.id }));
}

const TeamDetailPage = async ({ params }: TeamDetailPageProps) => {
  const { teamId } = await params;
  const team = getTeamById(teamId);

  if (!team) notFound();

  return (
    <div className="space-y-4">
      <TeamHero teamName={team.name} stadium={team.stadium} teamColor={team.color} />
      <TeamQuickStats rank={team.rank} winRate={team.winRate} streak={team.streak} />
      <PlayerSearchSection
        teamId={team.id}
        teamColor={team.color}
        players={team.players}
        coaches={team.coaches}
      />
      <TeamStatsSection
        battingStats={team.battingStats}
        pitchingStats={team.pitchingStats}
      />
    </div>
  );
};

export default TeamDetailPage;
