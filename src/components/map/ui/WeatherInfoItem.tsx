"use client";

import IconTextButton from "@/shared/ui/IconTextButton";
import { IconProps } from "@tabler/icons-react";

interface WeatherInfoItemProps {
  icon: React.FC<IconProps>;
  label: string;
  value: string;
  subValue?: string;
}

const WeatherInfoItem = ({
  icon,
  label,
  value,
  subValue,
}: WeatherInfoItemProps) => {
  return (
    <div className="bg-white p-4 rounded-2xl border border-slate-100 flex flex-col gap-1">
      <div className="-ml-3">
        <IconTextButton
          icon={icon}
          text={label}
          className="pointer-events-none"
        />
      </div>
      <div className="text-xl font-bold text-slate-900 mt-1">{value}</div>
      {subValue && (
        <div className="text-[12px] text-slate-400 font-medium">{subValue}</div>
      )}
    </div>
  );
};

export default WeatherInfoItem;
