import { IconChevronRight } from "@tabler/icons-react";
import { Player } from "@/entities/team";

interface PlayerListItemProps extends Player {
  teamColor: string;
  onClick?: () => void;
}

const PlayerListItem = ({ jerseyNumber, name, position, average, details, teamColor, onClick }: PlayerListItemProps) => {
  return (
    <div onClick={onClick} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-none cursor-pointer hover:bg-gray-50 px-1">
      <div className="flex items-center gap-3">
        <div className={`w-8 h-8 rounded-full ${teamColor} flex items-center justify-center shrink-0`}>
          <span className="text-white text-xs font-bold">{jerseyNumber}</span>
        </div>
        <div>
          <p className="font-semibold text-sm">{name}</p>
          <p className="text-xs text-gray-500">{position}</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        {average && (
          <div className="text-right">
            <p className="font-bold text-sm">{average}</p>
            {details && <p className="text-xs text-gray-500">{details}</p>}
          </div>
        )}
        <IconChevronRight size={16} className="text-gray-400" />
      </div>
    </div>
  );
};

export default PlayerListItem;
