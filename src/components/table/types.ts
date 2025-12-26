import { ReactNode } from "react";

export type Align = "left" | "center" | "right";

export interface HeadCell<T = Record<string, unknown>> {
  id: keyof T | string;
  label: string;
  align?: Align;
  headerAlign?: Align;
  cellAlign?: Align;
  highlight?: boolean;
  width?: string;
  minWidth?: string;
  maxWidth?: string;
  disablePadding?: boolean;
  render?: (value: unknown, row: T) => ReactNode;
  headerClassName?: string;
  cellClassName?: string;
}

