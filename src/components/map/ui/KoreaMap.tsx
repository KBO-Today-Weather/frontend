"use client";

import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import StadiumMarker, { Stadium } from "./StadiumMarker";
import { useState } from "react";

// 구장 데이터 (잠실은 특수 처리를 위해 id 부여)
const STADIUMS: Stadium[] = [
  {
    id: "jamsil",
    coordinates: [127.2, 37.512],
    logos: {
      team1: "/image/teamLogo/Doosan.svg",
      team2: "/image/teamLogo/Lg.svg",
    },
  },
  {
    id: "kiwoom",
    coordinates: [126.85, 37.498],
    logo: "/image/teamLogo/Kiwoom.svg",
  },
  {
    id: "ssg",
    coordinates: [126.58, 37.437],
    logo: "/image/teamLogo/Ssg.svg",
  },
  {
    id: "kt",
    coordinates: [127.009, 37.258],
    logo: "/image/teamLogo/Kt.svg",
  },
  {
    id: "hanwha",
    coordinates: [127.431, 36.317],
    logo: "/image/teamLogo/Hanwha.svg",
  },
  {
    id: "samsung",
    coordinates: [128.681, 35.841],
    logo: "/image/teamLogo/Samsung.svg",
  },
  {
    id: "kia",
    coordinates: [126.889, 35.168],
    logo: "/image/teamLogo/Kia.svg",
  },
  {
    id: "nc",
    coordinates: [128.582, 35.223],
    logo: "/image/teamLogo/Nc.svg",
  },
  {
    id: "lotte",
    coordinates: [129.061, 35.194],
    logo: "/image/teamLogo/Lotte.svg",
  },
];

const GEO_URL = "/data/skorea-provinces-2018-topo.json";

const KoreaMap = () => {
  const [selectedStadium, setSelectedStadium] = useState<Stadium | null>(null);

  return (
    <div className="relative w-full h-full overflow-hidden bg-white">
      <div
        className={`w-full h-full transition-all duration-500 ease-in-out ${
          selectedStadium ? "pr-[33.333%]" : ""
        }`}
      >
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{
            scale: 4500,
            center: [127.6, 36.5],
          }}
        >
          <Geographies geography={GEO_URL}>
            {({ geographies }) =>
              geographies.map((geo) => {
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    style={{
                      default: {
                        fill: "#F8FAFC", // 기본 색상 (Slate-700)
                        stroke: "#334155", // 테두리 색상
                        strokeWidth: 0.5,
                        outline: "none",
                      },
                      hover: {
                        fill: "#F8FAFC", // 기본 색상 (Slate-700)
                        stroke: "#334155", // 테두리 색상
                        outline: "none",
                        transition: "all 0.2s ease",
                        cursor: "pointer",
                        pointerEvents: "none",
                      },
                      pressed: {
                        fill: "#F8FAFC", // 기본 색상 (Slate-700)
                        pointerEvents: "none",
                      },
                    }}
                  />
                );
              })
            }
          </Geographies>

          {STADIUMS.map((stadium) => (
            <StadiumMarker
              key={stadium.id}
              stadium={stadium}
              onSelect={(s) => setSelectedStadium(s)}
            />
          ))}
        </ComposableMap>
      </div>

      {/* 사이드바 영역 */}
      <aside
        className={`fixed top-0 right-0 h-full w-full md:w-1/3 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          selectedStadium ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {selectedStadium && (
          <div className="p-6 h-full flex flex-col">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold uppercase">
                {selectedStadium.id} 상세 정보
              </h2>
              <button
                onClick={() => setSelectedStadium(null)}
                className="p-2 hover:bg-slate-100 rounded-full transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            {/* 컨텐츠 영역 */}
            <div className="flex-1 overflow-y-auto">
              <div className="aspect-video bg-slate-100 rounded-xl mb-6 flex items-center justify-center">
                {/* 선택된 구장의 로고나 경기장 이미지 등을 넣을 수 있습니다 */}
                <span className="text-slate-400 font-medium">
                  Stadium Image Area
                </span>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-slate-50 rounded-lg">
                  <p className="text-sm text-slate-500 mb-1">
                    오늘의 경기 정보
                  </p>
                  <p className="font-semibold text-lg">
                    데이터를 불러오는 중...
                  </p>
                </div>
                {/* 추가 구장/팀 정보가 들어갈 자리 */}
              </div>
            </div>
          </div>
        )}
      </aside>
    </div>
  );
};
export default KoreaMap;
