"use client";

import React, { useState } from "react";
import { Marker } from "react-simple-maps";

export interface Stadium {
  id: string;
  coordinates: [number, number];
  logo?: string; // 일반 구장용
  logos?: { team1: string; team2: string }; // 잠실 전용
}

const StadiumMarker = ({ stadium }: { stadium: Stadium }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isJamsil = stadium.id === "jamsil";

  // 애니메이션 수치 설정
  const logoSize = 26;
  const yOffset = isExpanded ? 12 : 3;

  return (
    <Marker
      coordinates={stadium.coordinates}
      onClick={() => isJamsil && setIsExpanded(!isExpanded)}
    >
      <g style={{ cursor: "pointer" }}>
        {isJamsil ? (
          // [잠실 구장 UI]
          <>
            {/* 두산 로고 - 위로 이동 */}
            <image
              href={stadium.logos?.team1}
              width={logoSize}
              height={logoSize}
              x={-(logoSize / 2)}
              y={-(logoSize / 2) - yOffset}
              style={{
                transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                filter: isExpanded
                  ? "drop-shadow(0 4px 6px rgba(0,0,0,0.2))"
                  : "none",
              }}
            />
            {/* LG 로고 - 아래로 이동 */}
            <image
              href={stadium.logos?.team2}
              width={logoSize}
              height={logoSize}
              x={-(logoSize / 2)}
              y={-(logoSize / 2) + yOffset}
              style={{
                transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                filter: isExpanded
                  ? "drop-shadow(0 4px 6px rgba(0,0,0,0.2))"
                  : "none",
              }}
            />
          </>
        ) : (
          // [일반 구장 UI]
          <image
            href={stadium.logo}
            width={logoSize}
            height={logoSize}
            x={-(logoSize / 2)}
            y={-(logoSize / 2)}
          />
        )}
      </g>
    </Marker>
  );
};

export default StadiumMarker;
