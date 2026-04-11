"use client";

import { createContext, useContext } from "react";
import { IconX, IconStarFilled } from "@tabler/icons-react";
import { H3, P } from "@/lib/Typography";
import { cn } from "@/lib/utils";
import { useTeamSelectModal } from "@/hook/useTeamSelectModal";
import { KBO_TEAMS } from "@/store/myTeamStore";
import type { Team } from "@/store/myTeamStore";

interface ModalContextValue {
  onClose: () => void;
  selectedTeam: Team | null;
  onSelect: (team: Team) => void;
}

const ModalContext = createContext<ModalContextValue | null>(null);

const useModalContext = () => {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error("TeamSelectModal 하위에서만 사용 가능합니다.");
  return ctx;
};

const Title = () => {
  const { onClose } = useModalContext();
  return (
    <div className="relative flex items-center justify-center mb-6">
      <H3 className="font-semibold">내 팀 설정</H3>
      <button
        onClick={onClose}
        className="absolute right-0 text-gray-400 hover:text-gray-600 transition-colors"
        aria-label="닫기"
      >
        <IconX size={20} />
      </button>
    </div>
  );
};

const TeamGrid = () => {
  const { selectedTeam, onSelect } = useModalContext();
  return (
    <div className="grid grid-cols-2 gap-3">
      {KBO_TEAMS.map((team) => {
        const isSelected = selectedTeam?.name === team.name;
        return (
          <button
            key={team.name}
            onClick={() => onSelect(team)}
            className={cn(
              "flex items-center justify-between px-4 py-3 rounded-lg border transition-colors duration-150",
              isSelected
                ? "border-kbo-lightBlue"
                : "border-gray-200 hover:border-gray-300"
            )}
          >
            <P className="cursor-default">{team.name}</P>
            {isSelected && (
              <IconStarFilled size={18} className="text-kbo-darkBlue shrink-0" />
            )}
          </button>
        );
      })}
    </div>
  );
};

interface TeamSelectModalProps {
  onClose: () => void;
}

const TeamSelectModal = ({ onClose }: TeamSelectModalProps) => {
  const { selectedTeam, handleSelect } = useTeamSelectModal();

  const handleSelectAndClose = (team: Team) => {
    handleSelect(team);
    onClose();
  };

  return (
    <ModalContext.Provider
      value={{ onClose, selectedTeam, onSelect: handleSelectAndClose }}
    >
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
        onClick={onClose}
      >
        <div
          className="bg-white rounded-2xl p-8 w-[480px]"
          onClick={(e) => e.stopPropagation()}
        >
          <TeamSelectModal.Title />
          <TeamSelectModal.TeamGrid />
        </div>
      </div>
    </ModalContext.Provider>
  );
};

TeamSelectModal.Title = Title;
TeamSelectModal.TeamGrid = TeamGrid;

export default TeamSelectModal;
