export interface Stadium {
  id: string;
  name: string;
  coordinates: [number, number];
  logo?: string;
  logos?: { team1: string; team2: string };
}

export const STADIUMS: Stadium[] = [
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
