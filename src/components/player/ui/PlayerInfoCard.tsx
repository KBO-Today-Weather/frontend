import { IconUser } from "@tabler/icons-react";
import Container from "@/components/ui/Container";
import { PlayerDetail } from "@/entities/player";

interface PlayerInfoCardProps {
  player: PlayerDetail;
}

const PlayerInfoCard = ({ player }: PlayerInfoCardProps) => {
  const tags = [player.position, player.batting, player.throwing].filter(Boolean) as string[];

  return (
    <Container>
      <div className="flex gap-4">
        <div className="w-24 h-24 shrink-0 bg-gray-100 rounded-xl flex items-center justify-center">
          <IconUser size={36} className="text-gray-400" />
        </div>
        <div className="flex flex-col justify-center gap-1.5">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold">{player.name}</span>
            <div className="flex items-center justify-center w-7 h-7 rounded-full bg-kbo-darkBlue">
              <span className="text-white text-xs font-bold">{player.jerseyNumber}</span>
            </div>
          </div>
          <span className="text-sm text-gray-500">{player.teamName}</span>
          <div className="flex gap-1.5 flex-wrap">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default PlayerInfoCard;
