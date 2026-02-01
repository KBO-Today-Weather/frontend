"use client";

import { useState } from "react";
import { P } from "@/lib/Typography";
import { IconProps } from "@tabler/icons-react";

interface IconTextButtonProps {
  icon: React.FC<IconProps>;
  text: string;
  className?: string;
}

const IconTextButton = ({
  icon: Icon,
  text,
  className,
}: IconTextButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className={`group px-3 py-1.5 rounded-md hover:bg-slate-900 transition-colors duration-200 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center justify-center gap-1.5">
        {/* 호버 시 색상이 흰색으로 변하도록 group-hover를 사용합니다. */}
        <Icon
          size={18}
          stroke={2}
          className={`transition-colors duration-200 ${isHovered ? "text-white" : "text-gray-600"}`}
        />
        <P
          className={`transition-colors duration-200 ${isHovered ? "text-white" : "text-gray-600"}`}
        >
          {text}
        </P>
      </div>
    </button>
  );
};
export default IconTextButton;
