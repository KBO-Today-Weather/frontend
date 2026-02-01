"use client";

import { IconProps } from "@tabler/icons-react";

interface WeatherInfoItemProps {
  icon: React.FC<IconProps>;
  label: string;
  value: string;
  subValue?: string;
}

const WeatherInfoItem = ({
  icon: Icon,
  label,
  value,
  subValue,
}: WeatherInfoItemProps) => {
  return (
    <div className="bg-white p-4 rounded-2xl border border-slate-100 flex flex-col gap-1">
      <div className="flex items-center gap-1.5 text-slate-400 text-[13px] font-medium">
        <Icon size={18} stroke={2} />
        <span>{label}</span>
      </div>
      <div className="text-xl font-bold text-slate-900 mt-1">{value}</div>
      {subValue && (
        <div className="text-[12px] text-slate-400 font-medium">{subValue}</div>
      )}
    </div>
  );
};

export default WeatherInfoItem;
