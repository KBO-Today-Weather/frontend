import IconTextButton from "@/shared/ui/IconTextButton";
import Image from "next/image";

const MainHeader = () => {
  return (
    <header className=" top-0 z-50 flex items-center justify-between w-full h-14 px-2 border-b border-gray-200 bg-white">
      {/* 좌측: 로고 또는 메뉴 */}
      <div className="flex items-center">
        <Image src="/image/KBOLogo.svg" alt="KBO Logo" width={45} height={45} />
        <h1 className="font-bold text-black"> KBO늘의 날씨</h1>
      </div>

      {/* 우측: 알림 또는 프로필 */}
      <div className="flex items-center">
        <IconTextButton
          icon="/image/main/Home.svg"
          hoverIcon="/image/main/Home(white).svg"
          text="홈"
        />
        <IconTextButton
          icon="/image/main/People.svg"
          hoverIcon="/image/main/People(white).svg"
          text="팀"
        />
        <IconTextButton
          icon="/image/main/Stadium.svg"
          hoverIcon="/image/main/Stadium(white).svg"
          text="구장"
        />
        <IconTextButton
          icon="/image/main/Graph.svg"
          hoverIcon="/image/main/Graph(white).svg"
          text="통계"
        />
      </div>
    </header>
  );
};
export default MainHeader;
