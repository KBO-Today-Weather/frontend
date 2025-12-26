"use client";

import IconTextButton from "@/shared/ui/IconTextButton";
import Image from "next/image";
import { useState } from "react";

const MainHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { icon: "tabler-home", text: "홈" },
    { icon: "tabler-users", text: "팀" },
    { icon: "tabler-building-stadium", text: "구장" },
    { icon: "tabler-chart-bar", text: "통계" },
  ];

  return (
    <header className="top-0 z-50 flex items-center justify-between w-full h-14 px-2 border-b border-gray-200 bg-white relative">
      {/* 좌측: 로고 또는 메뉴 */}
      <div className="flex items-center">
        <Image src="/image/KBOLogo.svg" alt="KBO Logo" width={45} height={45} />
        <h1 className="font-bold text-black"> KBO늘의 날씨</h1>
      </div>

      {/* 우측: 데스크톱 메뉴 (768px 이상) */}
      <div className="hidden md:flex items-center">
        {menuItems.map((item, index) => (
          <IconTextButton
            key={index}
            icon={item.icon}
            text={item.text}
          />
        ))}
      </div>

      {/* 우측: 햄버거 메뉴 버튼 (768px 미만) */}
      <button
        className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="메뉴 열기"
      >
        <i className='tabler-menu-2' />
      </button>

    </header>
  );
};
export default MainHeader;
