"use client";

import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import StadiumMarker, { Stadium } from "./StadiumMarker";

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
  return (
    <div className="w-full h-full">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 4500,
          center: [127.6, 36.5],
        }}
        height={450}
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
          <StadiumMarker key={stadium.id} stadium={stadium} />
        ))}
      </ComposableMap>
    </div>
  );
};
export default KoreaMap;
