import TeamCompareSection from "@/components/stats/ui/TeamCompareSection";
import HistorySection from "@/components/stats/ui/HistorySection";

export default function StatsPage() {
  return (
    <div className="space-y-3">
      <div className="mb-5">
        <h1 className="text-lg font-bold text-gray-900">통계 &amp; 분석</h1>
        <p className="text-sm text-gray-500 mt-0.5">과거 기록 분석 및 팀 비교</p>
      </div>
      <TeamCompareSection />
      <HistorySection />
    </div>
  );
}
