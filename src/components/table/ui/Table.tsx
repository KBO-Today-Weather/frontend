import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface TableProps {
  children: ReactNode;
  className?: string;
}

const Table = ({ children, className }: TableProps) => {
  return (
    <div className="w-full overflow-x-auto">
      <table className={cn("w-full min-w-[470px] border-collapse", className)}>
        {children}
      </table>
    </div>
  );
};

export default Table;


