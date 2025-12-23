import { cn } from "@/lib/utils";
import { ReactNode, CSSProperties } from "react";

interface TableCellProps {
  children: ReactNode;
  className?: string;
  header?: boolean;
  highlight?: boolean;
  align?: "left" | "center" | "right";
  colSpan?: number;
  style?: CSSProperties;
}

const TableCell = ({
  children,
  className,
  header = false,
  highlight = false,
  align = "left",
  colSpan,
  style,
}: TableCellProps) => {
  const Component = header ? "th" : "td";
  const alignClass = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  }[align];

  return (
    <Component
      className={cn(
        "px-4 py-3 text-sm",
        header && "font-semibold text-gray-900",
        !header && "text-gray-700",
        highlight && "text-blue-600 font-medium",
        alignClass,
        className
      )}
      colSpan={colSpan}
      style={style}
    >
      {children}
    </Component>
  );
};

export default TableCell;


