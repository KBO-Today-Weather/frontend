"use client";

import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const GEO_URL = "/data/skorea-provinces-2018-topo.json";

const KoreaMap = () => {
  return (
    <div className="w-full h-full">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 6000,
          center: [127.6, 36.5],
        }}
        className="w-full h-full"
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
                      fill: "#3B82F6", // 호버 시 파란색 (Blue-500)
                      outline: "none",
                      transition: "all 0.2s ease",
                      cursor: "pointer",
                    },
                    pressed: {
                      fill: "#1D4ED8", // 클릭 시 진한 파란색
                      outline: "none",
                    },
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
};
export default KoreaMap;
