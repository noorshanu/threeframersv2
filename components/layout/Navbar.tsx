"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/Button";
import {
  ASSETS,
  CAL_DISCOVERY_URL,
  NAV_LINKS,
  SITE_NAME,
} from "@/lib/constants";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 px-[5%] transition-[background-color,backdrop-filter,border-color] duration-300 ${
        isScrolled || isOpen
          ? "border-b border-border/80 bg-background/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex min-h-[4.5rem] max-w-7xl items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 no-underline text-inherit"
          onClick={() => setIsOpen(false)}
        >
          <Image
            src={ASSETS.logo}
            alt={`${SITE_NAME} logo`}
            width={56}
            height={56}
            className="h-14 w-14 object-contain"
            priority
            sizes="56px"
          />
          <span className="font-heading text-xl font-semibold md:text-2xl">
            {SITE_NAME}
          </span>
        </Link>

        <nav className="hidden items-center lg:flex">
          <div className="flex items-center">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-base no-underline text-inherit transition-opacity hover:opacity-80"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="ml-4">
            <Button href={CAL_DISCOVERY_URL} external>
              Contact
            </Button>
          </div>
        </nav>

        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          onClick={() => setIsOpen((open) => !open)}
        >
          <span
            className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${isOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-opacity duration-300 ${isOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${isOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      <nav
        className={`overflow-hidden border-t border-neutral-dark/80 transition-[max-height,opacity] duration-300 lg:hidden ${
          isOpen ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-6">
          <div className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-3 text-lg no-underline text-inherit transition-colors hover:bg-surface-elevated"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4">
              <Button
                href={CAL_DISCOVERY_URL}
                external
                className="w-full justify-center"
              >
                Contact
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
