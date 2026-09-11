import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
};

export function Button({
  href,
  children,
  className = "",
  external = false,
}: ButtonProps) {
  const classes = [
    "inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 text-base font-medium text-black no-underline transition-all duration-300",
    "hover:px-8",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
