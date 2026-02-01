"use client";

import { P } from "@/lib/Typography";

interface SectionCardProps {
  title?: string;
  children: React.ReactNode;
  variant?: "white" | "lime";
  className?: string;
}

const SectionCard = ({
  title,
  children,
  variant = "white",
  className,
}: SectionCardProps) => {
  const bgClass =
    variant === "lime"
      ? "bg-lime-50 rounded-sm"
      : "bg-white border border-gray-100 px-5 py-3 rounded-2xl";

  return (
    <div className={className}>
      <div className="flex justify-between items-end mb-3 px-1">
        {title && <P className="text-sm font-bold">{title}</P>}
      </div>
      <div className={`${bgClass}`}>{children}</div>
    </div>
  );
};

export default SectionCard;
