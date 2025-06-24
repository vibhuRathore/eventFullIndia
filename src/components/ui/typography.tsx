import * as React from "react";
import { cn } from "../../lib/utils";

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant?: "h1" | "h2" | "h3" | "p" | "small" | "blockquote";
}

export const Typography: React.FC<TypographyProps> = ({
  variant = "p",
  className,
  children,
  ...props
}) => {

  const Tag = variant as React.ElementType;

  return (
    <Tag
      className={cn(
        "text-gray-900",
        variant === "h1" && "text-4xl font-bold",
        variant === "h2" && "text-3xl font-semibold",
        variant === "h3" && "text-2xl font-semibold",
        variant === "p" && "text-base",
        variant === "small" && "text-sm",
        variant === "blockquote" && "italic border-l-4 border-gray-300 pl-4",
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
};
