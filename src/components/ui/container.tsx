import { cn } from "@/lib/utils";

const Container = ({ padding = "p-4", children, className }: { padding?: string, children: React.ReactNode, className?: string }) => {
  return <div className={cn("mx-auto bg-white border-2 border-gray-200 rounded-md", padding, className)}>{children}</div>;
};

export default Container;