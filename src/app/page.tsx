import KoreaMap from "@/components/ui/KoreaMap";
import MainHeader from "@/components/ui/MainHeader";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen items-center">
      <MainHeader />

      <main className="flex-1 w-full max-w-5xl mx-auto p-6">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-lgfont-semibold text-gray-900 ml-2">
            전국 구장 지도
          </h2>
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
      </main>
    </div>
  );
};
export default Home;
