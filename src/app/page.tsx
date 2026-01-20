import Gamecard from "@/components/ui/GameCard";
import KoreaMap from "@/components/ui/KoreaMap";
import MainHeader from "@/components/ui/MainHeader";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen items-center">
      <MainHeader />

      <main className="flex-1 w-full p-6">
        <div className="flex items-center justify-between mb-2">
          <h2 className="font-semibold text-gray-900 ml-2">전국 구장 지도</h2>
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <div className="text-sm w-2 h-2 bg-green-500 rounded-full"></div>
            <span>9개 구장</span>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 py-4">
          <div className="relative w-full">
            <KoreaMap />
          </div>
        </div>

        <h2 className="font-semibold text-gray-900 ml-2 mt-5 mb-2">
          오늘의 경기
        </h2>

        <Gamecard
          homeTeam={{ name: "키움", color: "bg-kiwoom" }}
          awayTeam={{ name: "두산", color: "bg-doosan" }}
          time="18:30"
          stadium="고척 스카이돔"
        />
        <Gamecard
          homeTeam={{ name: "LG", color: "bg-lg" }}
          awayTeam={{ name: "삼성", color: "bg-samsung" }}
          time="18:30"
          stadium="잠실 야구장"
        />
        <Gamecard
          homeTeam={{ name: "한화", color: "bg-hanwha" }}
          awayTeam={{ name: "KIA", color: "bg-kia" }}
          time="18:30"
          stadium="잠실 야구장"
        />
        <Gamecard
          homeTeam={{ name: "NC", color: "bg-nc" }}
          awayTeam={{ name: "SSG", color: "bg-ssg" }}
          time="18:30"
          stadium="잠실 야구장"
        />
      </main>
    </div>
  );
};
export default Home;
