import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface TableHeaderProps {
  children: ReactNode;
  className?: string;
}

const TableHeader = ({ children, className }: TableHeaderProps) => {
  return (
    <thead className={cn("border-b border-gray-200", className)}>
      {children}
    </thead>
  );
};

export default TableHeader;


