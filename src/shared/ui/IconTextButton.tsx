"use client";

import { P } from "@/lib/Typography";
import { IconProps } from "@tabler/icons-react";

interface IconTextButtonProps {
  icon: React.FC<IconProps>;
  text: string;
  className?: string;
}

const IconTextButton = ({ icon: Icon, text, className }: IconTextButtonProps) => {
  return (
    <button
      className={`group px-3 py-1.5 rounded-md hover:bg-slate-900 transition-colors duration-200 ${className}`}
    >
      <div className="flex items-center justify-center gap-1.5">
        <Icon
          size={18}
          stroke={2}
          className="text-gray-600 group-hover:text-white transition-colors duration-200"
        />
        <P className="text-gray-600 group-hover:text-white transition-colors duration-200">
          {text}
        </P>
      </div>
    </button>
  );
};

export default IconTextButton;
