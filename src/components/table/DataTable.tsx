"use client";

import Table from "./ui/Table";
import { TableRow, TableCell } from "./ui";
import { useTable } from "./hook";
import { HeadCell } from "./types";
import { cn } from "@/lib/utils";

interface DataTableProps<T> {
  data: T[];
  headCells: HeadCell<T>[];
  onRowClick?: (row: T) => void;
  initialSortKey?: keyof T;
  initialSortDirection?: "asc" | "desc" | null;
  emptyMessage?: string;
  className?: string;
  rowKey?: keyof T | ((row: T, index: number) => string | number);
}

function DataTable<T extends Record<string, unknown>>({
  data,
  headCells,
  onRowClick,
  initialSortKey,
  initialSortDirection = null,
  emptyMessage = "데이터가 없습니다.",
  className,
  rowKey,
}: DataTableProps<T>) {
  const { sortedData } = useTable({
    data,
    initialSortKey,
    initialSortDirection,
  });

  const getRowKey = (row: T, index: number): string | number => {
    if (rowKey) {
      return typeof rowKey === "function" ? rowKey(row, index) : String(row[rowKey]);
    }
    return index;
  };

  return (
    <Table className={className}>
      {/* header */}
      <thead>
        <TableRow>
          {headCells.map((headCell) => {
            return (
              <TableCell
                key={String(headCell.id)}
                header
                align={headCell.headerAlign || headCell.align || "left"}
                className={cn(
                  headCell.width && `w-[${headCell.width}]`,
                  headCell.minWidth && `min-w-[${headCell.minWidth}]`,
                  headCell.maxWidth && `max-w-[${headCell.maxWidth}]`,
                  headCell.headerClassName
                )}
                style={{
                  ...(headCell.width && { width: headCell.width }),
                  ...(headCell.minWidth && { minWidth: headCell.minWidth }),
                  ...(headCell.maxWidth && { maxWidth: headCell.maxWidth }),
                }}
              >
                {headCell.label}
              </TableCell>
            );
          })}
        </TableRow>
      </thead>

      {/* body */}
      <tbody>
        {/* empty */}
        {sortedData.length === 0 ? (
          <TableRow>
            <TableCell
              colSpan={headCells.length}
              align="center"
              className="py-8 text-gray-500"
            >
              {emptyMessage}
            </TableCell>
          </TableRow>
        ) : (
          sortedData.map((row, index) => (
            <TableRow
              key={getRowKey(row, index)}
              onClick={() => onRowClick?.(row)}
              className={onRowClick ? "cursor-pointer" : ""}
            >
              {headCells.map((headCell) => {
                const cellValue = row[headCell.id as keyof T];
                const cellContent = headCell.render
                  ? headCell.render(cellValue, row)
                  : String(cellValue ?? "");

                return (
                  <TableCell
                    key={String(headCell.id)}
                    align={headCell.cellAlign || headCell.align || "left"}
                    highlight={headCell.highlight}
                    className={cn(
                      headCell.width && `w-[${headCell.width}]`,
                      headCell.minWidth && `min-w-[${headCell.minWidth}]`,
                      headCell.maxWidth && `max-w-[${headCell.maxWidth}]`,
                      headCell.cellClassName
                    )}
                    style={{
                      ...(headCell.width && { width: headCell.width }),
                      ...(headCell.minWidth && { minWidth: headCell.minWidth }),
                      ...(headCell.maxWidth && { maxWidth: headCell.maxWidth }),
                    }}
                  >
                    {cellContent}
                  </TableCell>
                );
              })}
            </TableRow>
          ))
        )}
      </tbody>
    </Table>
  );
}

export default DataTable;

