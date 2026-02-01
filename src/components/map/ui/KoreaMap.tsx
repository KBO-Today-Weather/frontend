"use client";

import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import StadiumMarker, { Stadium } from "./StadiumMarker";
import { useState } from "react";
import StadiumDetail from "./StadiumDetail";

// 구장 데이터 (잠실은 특수 처리를 위해 id 부여)
const STADIUMS: Stadium[] = [
  {
    id: "jamsil",
    name: "잠실 야구장",
    coordinates: [127.2, 37.512],
    logos: {
      team1: "/image/teamLogo/Doosan.svg",
      team2: "/image/teamLogo/Lg.svg",
    },
  },
  {
    id: "kiwoom",
    name: "고척 스카이돔",
    coordinates: [126.85, 37.498],
    logo: "/image/teamLogo/Kiwoom.svg",
  },
  {
    id: "ssg",
    name: "인천 SSG 랜더스필드",
    coordinates: [126.58, 37.437],
    logo: "/image/teamLogo/Ssg.svg",
  },
  {
    id: "kt",
    name: "수원 KT 위즈파크",
    coordinates: [127.009, 37.258],
    logo: "/image/teamLogo/Kt.svg",
  },
  {
    id: "hanwha",
    name: "대전 한화생명 이글스파크",
    coordinates: [127.431, 36.317],
    logo: "/image/teamLogo/Hanwha.svg",
  },
  {
    id: "samsung",
    name: "대구 삼성 라이온즈파크",
    coordinates: [128.681, 35.841],
    logo: "/image/teamLogo/Samsung.svg",
  },
  {
    id: "kia",
    name: "광주 KIA 챔피언스 필드",
    coordinates: [126.889, 35.168],
    logo: "/image/teamLogo/Kia.svg",
  },
  {
    id: "nc",
    name: "창원 NC 파크",
    coordinates: [128.582, 35.223],
    logo: "/image/teamLogo/Nc.svg",
  },
  {
    id: "lotte",
    name: "부산 사직 야구장",
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
          <StadiumDetail
            stadium={selectedStadium}
            onClose={() => setSelectedStadium(null)}
          />
        )}
      </aside>
    </div>
  );
};
export default KoreaMap;
