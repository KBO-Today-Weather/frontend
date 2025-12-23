import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface TableBodyProps {
  children: ReactNode;
  className?: string;
}

const TableBody = ({ children, className }: TableBodyProps) => {
  return (
    <tbody className={cn("", className)}>
      {children}
    </tbody>
  );
};

export default TableBody;


