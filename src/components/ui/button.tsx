import * as React from "react";
import { cn } from "../../lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "secondary"; // Add "secondary"
  size?: "default" | "sm" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
          variant === "default" && "bg-primary text-primary-foreground hover:bg-primary/90",
          variant === "outline" && "border border-input hover:bg-accent hover:text-accent-foreground",
          variant === "secondary" && "bg-secondary text-secondary-foreground hover:bg-secondary/90", // 
          size === "default" && "h-10 px-4 py-2",
          size === "sm" && "h-9 px-3 rounded-md",
          size === "lg" && "h-11 px-8 rounded-md",
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
