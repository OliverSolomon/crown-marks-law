import type { ElementType, ReactNode } from "react";

type ContainerProps = {
  as?: ElementType;
  size?: "default" | "narrow" | "wide";
  className?: string;
  children: ReactNode;
};

const sizes = {
  narrow: "max-w-3xl",
  default: "max-w-[78rem]",
  wide: "max-w-[88rem]",
} as const;

export function Container({
  as: Tag = "div",
  size = "default",
  className = "",
  children,
}: ContainerProps) {
  return (
    <Tag className={`mx-auto w-full px-6 sm:px-8 lg:px-12 ${sizes[size]} ${className}`}>
      {children}
    </Tag>
  );
}
