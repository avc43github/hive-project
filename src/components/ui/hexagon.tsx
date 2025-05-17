
import { cn } from "@/lib/utils";
import React from "react";

interface HexagonProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: number;
  className?: string;
  children?: React.ReactNode;
  animated?: boolean;
  hoverable?: boolean;
}

const Hexagon = ({
  size = 100,
  className,
  children,
  animated = false,
  hoverable = false,
  ...props
}: HexagonProps) => {
  return (
    <div
      className={cn(
        "hexagon relative flex items-center justify-center overflow-hidden",
        animated && "animate-hex-pulse",
        hoverable && "hover:scale-105 transition-transform duration-300",
        className
      )}
      style={{
        width: `${size}px`,
        height: `${size * 0.866}px`,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default Hexagon;
