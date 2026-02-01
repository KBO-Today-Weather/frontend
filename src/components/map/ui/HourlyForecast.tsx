"use client";

import { P } from "@/lib/Typography";

interface HourlyData {
  time: string;
  temp: number;
  rainProbability: number;
}

const HourlyForecast = ({ data }: { data: HourlyData[] }) => {
  return (
    <div className="flex overflow-x-auto scrollbar-hide cursor-pointer gap-6 pb-2">
      {data.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center min-w-[50px] gap-2"
        >
          {/* 시간 */}
          <span className="text-sm text-gray-500">{item.time}</span>
          {/* 온도 */}
          <P className="text-lg font-bold">{item.temp}°</P>
          {/* 강수확률 */}
          <span className="text-xs font-medium text-blue-500">
            {item.rainProbability}%
          </span>
        </div>
      ))}
    </div>
  );
};

export default HourlyForecast;
