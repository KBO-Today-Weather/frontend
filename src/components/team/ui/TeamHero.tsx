import { IconStar } from "@tabler/icons-react";

interface TeamHeroProps {
  teamName: string;
  stadium: string;
  teamColor: string;
}

const TeamHero = ({ teamName, stadium, teamColor }: TeamHeroProps) => {
  return (
    <div className={`relative rounded-xl p-6 ${teamColor}`}>
      <button className="absolute top-4 right-4 flex items-center justify-center w-8 h-8 rounded-md border border-white/40">
        <IconStar size={16} className="text-white" />
      </button>
      <h2 className="text-2xl font-bold text-white mb-1">{teamName}</h2>
      <p className="text-sm text-white/70">{stadium}</p>
    </div>
  );
};

export default TeamHero;
