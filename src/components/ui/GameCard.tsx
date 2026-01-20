import KboNameTag from "@/shared/ui/KboNameTag";
import Image from "next/image";
import { H3, P } from "@/lib/Typography";

interface GamecardProps {
  // 홈 팀 정보
  homeTeam: {
    name: string;
    color: string;
  };
  // 원정 팀 정보
  awayTeam: {
    name: string;
    color: string;
  };
  time: string; // 경기 시간
  stadium: string; // 경기장 이름
}

const Gamecard = ({ homeTeam, awayTeam, time, stadium }: GamecardProps) => {
  return (
    <div className="flex flex-col bg-white border border-gray-200 rounded-lg py-3 px-4 mb-1">
      <div className="flex justify-between">
        <div className="flex items-center gap-3">
          <KboNameTag color={homeTeam.color} name={homeTeam.name} />
          <P className="text-xs text-gray-500">VS</P>
          <KboNameTag color={awayTeam.color} name={awayTeam.name} />
        </div>

        <div className="flex items-center gap-1">
          <Image
            src="/image/main/Clock.svg"
            alt="Clock Icon"
            width={15}
            height={15}
          />
          <P className="text-sm text-gray-500">{time}</P>
        </div>
      </div>

      <div className="flex items-center gap-1">
        <Image
          src="/image/main/Map.svg"
          alt="Map Icon"
          width={15}
          height={15}
        />
        <P className="text-sm text-gray-500">{stadium}</P>
      </div>
    </div>
  );
};
export default Gamecard;
