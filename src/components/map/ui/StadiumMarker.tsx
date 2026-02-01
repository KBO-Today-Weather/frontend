"use client";

import React, { useState } from "react";
import { Marker } from "react-simple-maps";

export interface Stadium {
  id: string;
  name: string;
  coordinates: [number, number];
  logo?: string; // 일반 구장용
  logos?: { team1: string; team2: string }; // 잠실 전용
}

interface MarkerProps {
  stadium: Stadium;
  onSelect: (stadium: Stadium) => void;
}

const StadiumMarker = ({ stadium, onSelect }: MarkerProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isJamsil = stadium.id === "jamsil";

  // 애니메이션 수치 설정
  const logoSize = 26;
  const yOffset = isExpanded ? 12 : 3;

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // 지도 클릭 이벤트 전파 방지
    if (isJamsil && !isExpanded) {
      setIsExpanded(true); // 잠실은 처음 클릭 시 펼치기만 함
    } else {
      onSelect(stadium); // 일반 구장이나 펼쳐진 잠실 로고 클릭 시 사이드바 오픈
    }
  };

  return (
    <Marker coordinates={stadium.coordinates} onClick={handleClick}>
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
              style={{ transition: "all 0.4s ease-out" }}
            />
            {/* LG 로고 - 아래로 이동 */}
            <image
              href={stadium.logos?.team2}
              width={logoSize}
              height={logoSize}
              x={-(logoSize / 2)}
              y={-(logoSize / 2) + yOffset}
              style={{ transition: "all 0.4s ease-out" }}
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
            onClick={() => {}}
          />
        )}
      </g>
    </Marker>
  );
};

export default StadiumMarker;
