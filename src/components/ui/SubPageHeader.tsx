import Image from "next/image";
import AppLogo from "@/shared/ui/AppLogo";

const SubPageHeader = () => {
  return (
    <header className="top-0 z-50 flex items-center justify-between w-full h-14 px-4 border-b border-gray-200 bg-white">
      <AppLogo />
      <button className="flex items-center justify-center p-1.5 rounded-md hover:bg-gray-100 transition-colors duration-200">
        <Image src="/image/icon-menu-2.svg" alt="메뉴" width={24} height={24} />
      </button>
    </header>
  );
};

export default SubPageHeader;
