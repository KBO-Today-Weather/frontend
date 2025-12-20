"use client";

import Image from "next/image";
import { useState } from "react";

interface IconTextButtonProps {
  icon: string;
  hoverIcon?: string;
  text: string;
}

const IconTextButton = ({ icon, hoverIcon, text }: IconTextButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className="px-3 py-2 rounded-md hover:bg-kbo-navy hover:text-white transition-colors duration-200"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center justify-center gap-2">
        <Image
          src={isHovered && hoverIcon ? hoverIcon : icon}
          alt="icon"
          width={18}
          height={18}
          priority
        />
        <span className="text-sm">{text}</span>
      </div>
    </button>
  );
};
export default IconTextButton;
