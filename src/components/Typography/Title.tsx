import React from "react";

interface TitleProps {
  children: React.ReactNode;
  className?: string;
}

export function Title({ children, className = "" }: TitleProps) {
  return <h1 className={`${className}`}>{children}</h1>;
}
