"use client";

import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import StadiumMarker from "@/components/map/ui/StadiumMarker";
import { useState } from "react";
import StadiumDetail from "@/components/map/ui/StadiumDetail";
import { STADIUMS, Stadium } from "@/store/stadiumStore";

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
