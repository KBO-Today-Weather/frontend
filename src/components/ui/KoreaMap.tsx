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
      </ComposableMap>
    </div>
  );
};
export default KoreaMap;
