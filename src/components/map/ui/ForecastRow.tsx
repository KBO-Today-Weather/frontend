"use client";

interface ForecastRowProps {
  day: string; // 월, 화, 수...
  weatherText: string; // 맑음, 구름조금...
  maxTemp: number;
  minTemp: number;
}

const ForecastRow = ({
  day,
  weatherText,
  maxTemp,
  minTemp,
}: ForecastRowProps) => {
  return (
    <div className="flex items-center py-3 border-b border-gray-50 last:border-0">
      {/* 요일 */}
      <span className="w-10 font-bold text-gray-900">{day}</span>

      {/* 날씨 상태 설명 */}
      <span className="flex-1 ml-4 text-sm text-gray-500 font-medium">
        {weatherText}
      </span>

      {/* 기온 정보 */}
      <div className="flex items-center gap-4">
        <span className="font-bold text-gray-900 w-8 text-right">
          {maxTemp}°
        </span>
        <span className="text-gray-300 w-8 text-right">{minTemp}°</span>
      </div>
    </div>
  );
};

export default ForecastRow;
