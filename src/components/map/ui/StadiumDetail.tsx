"use client";
import {
  IconX,
  IconTemperature,
  IconDroplets,
  IconWind,
  IconCloud,
  IconClock,
  IconMapPin,
} from "@tabler/icons-react";
import { H3, P } from "@/lib/Typography";
import { Stadium } from "./StadiumMarker";
import SectionCard from "./SectionCard";
import WeatherInfoItem from "./WeatherInfoItem";
import HourlyForecast from "./HourlyForecast";
import ForecastRow from "./ForecastRow";

interface StadiumDetailProps {
  stadium: Stadium;
  onClose: () => void;
}

const StadiumDetail = ({ stadium, onClose }: StadiumDetailProps) => {
  return (
    <div className="h-full flex flex-col">
      <header className="relative px-6 py-2 bg-white">
        {/* 1. 닫기 버튼 (우측 모서리 상단) */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 hover:bg-slate-100 rounded-full transition-colors text-slate-400"
        >
          <IconX size={20} stroke={2.5} />
        </button>

        <div className="flex justify-between items-center mt-2">
          {/* 2. 구장 이름 및 위치 (좌측) */}
          <div className="flex flex-col gap-1">
            <H3 className="font-bold text-2xl text-slate-900 leading-tight">
              {stadium.name}
            </H3>
            <div className="flex items-center gap-1 text-slate-400">
              <IconMapPin size={14} />
              <span className="text-sm font-medium">
                {stadium.name.slice(0, 2)}
              </span>
            </div>
          </div>

          {/* 3. 경기 가능 배지 (우측) */}
          <SectionCard variant="lime">
            <div className="flex flex-col items-center px-3 py-2">
              <span className="text-xs font-bold text-lime-600/70 mb-0.5">
                경기 가능
              </span>
              <div className="flex items-baseline gap-0.5 text-lime-600">
                <span className="text-base font-black">23</span>
                <span className="text-sm font-bold">°C</span>
              </div>
            </div>
          </SectionCard>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto scrollbar-hide px-6 space-y-4 mb-5">
        {/* 오늘의 경기 섹션 */}
        <SectionCard title="오늘의 경기">
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center gap-8">
              <div className="flex flex-col items-center gap-1">
                <span className="font-bold text-lg">한화</span>
                <span className="text-xs text-slate-400 font-medium">홈팀</span>
              </div>
              <div className="text-2xl font-black text-slate-300 italic">
                VS
              </div>
              <div className="flex flex-col items-center gap-1">
                <span className="font-bold text-lg">삼성</span>
                <span className="text-xs text-slate-400 font-medium">원정</span>
              </div>
            </div>
            <div className="flex items-center gap-1.5 ml-4px-3 py-1.5">
              <IconClock size={16} className="text-slate-400" />
              <span className="text-sm font-bold text-slate-700">18:30</span>
            </div>
          </div>
        </SectionCard>

        {/* 현재 날씨 섹션 (그리드) */}
        <div className="space-y-3">
          <P className="font-bold text-slate-900 ml-1 mt-6">현재 날씨</P>
          <div className="grid grid-cols-2 gap-3">
            <WeatherInfoItem
              icon={IconTemperature}
              label="기온"
              value="23°"
              subValue="체감 21°C"
            />
            <WeatherInfoItem
              icon={IconDroplets}
              label="습도"
              value="65%"
              subValue="강수 10%"
            />
            <WeatherInfoItem
              icon={IconWind}
              label="풍속"
              value="3.5"
              subValue="m/s"
            />
            <WeatherInfoItem icon={IconCloud} label="날씨" value="구름 조금" />
          </div>
        </div>

        {/* 시간대별 예보 */}
        <SectionCard title="시간대별 예보">
          {/* 앞서 만든 가로 스크롤 컴포넌트 */}
          <HourlyForecast data={MOCK_HOURLY_DATA} />
        </SectionCard>

        {/* 주간 예보 */}
        <SectionCard title="주간 예보">
          <div className="divide-y divide-slate-50">
            <ForecastRow
              day="월"
              weatherText="맑음"
              maxTemp={25}
              minTemp={18}
            />
            <ForecastRow
              day="화"
              weatherText="구름조금"
              maxTemp={26}
              minTemp={19}
            />
            <ForecastRow
              day="수"
              weatherText="흐림"
              maxTemp={24}
              minTemp={17}
            />
            <ForecastRow day="목" weatherText="비" maxTemp={23} minTemp={16} />
          </div>
        </SectionCard>
      </div>
    </div>
  );
};

// 가로 스크롤을 위한 임시 데이터
const MOCK_HOURLY_DATA = [
  { time: "15:00", temp: 23, rainProbability: 10 },
  { time: "16:00", temp: 24, rainProbability: 5 },
  { time: "17:00", temp: 24, rainProbability: 5 },
  { time: "18:00", temp: 23, rainProbability: 0 },
  { time: "19:00", temp: 22, rainProbability: 0 },
  { time: "20:00", temp: 21, rainProbability: 0 },
];

export default StadiumDetail;
