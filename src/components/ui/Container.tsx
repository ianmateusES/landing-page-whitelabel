import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

type ContainerSize = "sm" | "md" | "lg" | "xl";

const maxWidths: Record<ContainerSize, string> = {
  sm: "32rem",
  md: "48rem",
  lg: "56rem",
  xl: "72rem",
};

interface ContainerProps {
  children: ReactNode;
  size?: ContainerSize;
  className?: string;
}

export function Container({ children, size = "xl", className }: ContainerProps) {
  return (
    <div
      className={cn("w-full px-4 sm:px-6 lg:px-8", className)}
      style={{
        maxWidth: maxWidths[size],
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      {children}
    </div>
  );
}
