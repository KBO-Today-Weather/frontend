"use client";

import { useState } from "react";
import {
  IconHome,
  IconUsers,
  IconBuildingStadium,
  IconChartBar,
  IconStarFilled,
} from "@tabler/icons-react";
import Image from "next/image";
import { H3, P } from "@/lib/Typography";
import { cn } from "@/lib/utils";
import IconTextButton from "@/shared/ui/IconTextButton";
import TeamSelectModal from "@/components/main/ui/TeamSelectModal";
import { useMainHeader } from "@/components/main/hook/useMainHeader";

const MainHeader = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { selectedTeam } = useMainHeader();

  return (
    <>
      <header className="top-0 z-50 flex items-center justify-between w-full h-14 px-2 border-b border-gray-200 bg-white">
        <div className="flex items-center">
          <Image src="/image/KBOLogo.svg" alt="KBO Logo" width={45} height={45} />
          <H3 className="font-bold text-black"> KBO늘의 날씨</H3>
        </div>

        <div className="flex items-center">
          <IconTextButton icon={IconHome} text="홈" />
          <IconTextButton icon={IconUsers} text="팀" />
          <IconTextButton icon={IconBuildingStadium} text="구장" />
          <IconTextButton icon={IconChartBar} text="통계" />

          <button
            onClick={() => setIsModalOpen(true)}
            className={cn(
              "ml-2 flex items-center gap-2 px-3 py-1.5 rounded-lg transition-colors duration-200",
              selectedTeam
                ? "bg-kbo-darkBlue hover:bg-kbo-blue"
                : "border border-gray-300 text-gray-600 hover:border-gray-400"
            )}
          >
            {selectedTeam ? (
              <>
                <IconStarFilled size={16} className="text-white" />
                <P className="text-white cursor-default">{selectedTeam.name}</P>
              </>
            ) : (
              <P className="cursor-default text-sm">내 팀 선택하기</P>
            )}
          </button>
        </div>
      </header>

      {isModalOpen && (
        <TeamSelectModal onClose={() => setIsModalOpen(false)} />
      )}
    </>
  );
};

export default MainHeader;
