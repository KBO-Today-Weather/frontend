"use client";

import { useState, useMemo } from "react";

export type SortDirection = "asc" | "desc" | null;

export interface SortConfig<T> {
  key: keyof T;
  direction: SortDirection;
}

export interface UseTableOptions<T> {
  data: T[];
  initialSort?: SortConfig<T>;
  initialSortKey?: keyof T;
  initialSortDirection?: SortDirection;
}

export interface UseTableReturn<T> {
  sortedData: T[];
  sortConfig: SortConfig<T> | null;
  handleSort: (key: keyof T) => void;
  setData: (data: T[]) => void;
}

type SortableValue = string | number | boolean | null | undefined;

function useTable<T extends Record<string, unknown>>({
  data,
  initialSort,
  initialSortKey,
  initialSortDirection = null,
}: UseTableOptions<T>): UseTableReturn<T> {
  const [sortConfig, setSortConfig] = useState<SortConfig<T> | null>(
    initialSort || (initialSortKey ? { key: initialSortKey, direction: initialSortDirection } : null)
  );
  const [tableData, setTableData] = useState<T[]>(data);

  const sortedData = useMemo(() => {
    if (!sortConfig || !sortConfig.direction) {
      return tableData;
    }

    const sorted = [...tableData].sort((a, b) => {
      const aValue = a[sortConfig.key] as SortableValue;
      const bValue = b[sortConfig.key] as SortableValue;

      if (aValue === null || aValue === undefined) return 1;
      if (bValue === null || bValue === undefined) return -1;

      if (typeof aValue === "number" && typeof bValue === "number") {
        return sortConfig.direction === "asc" ? aValue - bValue : bValue - aValue;
      }

      const aString = String(aValue).toLowerCase();
      const bString = String(bValue).toLowerCase();

      if (sortConfig.direction === "asc") {
        return aString.localeCompare(bString, "ko");
      } else {
        return bString.localeCompare(aString, "ko");
      }
    });

    return sorted;
  }, [tableData, sortConfig]);

  const handleSort = (key: keyof T) => {
    let direction: SortDirection = "asc";

    if (sortConfig && sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    } else if (sortConfig && sortConfig.key === key && sortConfig.direction === "desc") {
      direction = null;
    }

    setSortConfig(direction ? { key, direction } : null);
  };

  return {
    sortedData,
    sortConfig,
    handleSort,
    setData: setTableData,
  };
}

export default useTable;

