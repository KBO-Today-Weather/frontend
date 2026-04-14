import SubPageHeader from "@/components/ui/SubPageHeader";

export default function StatsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <SubPageHeader />
      <main className="flex-1 px-4 py-6">{children}</main>
    </div>
  );
}
