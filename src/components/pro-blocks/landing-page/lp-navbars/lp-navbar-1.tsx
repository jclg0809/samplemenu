"use client";

// import { Logo } from "sample/components/pro-blocks/logo";
import { Button } from "sample/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const MENU_ITEMS = [
  { label: "Home", href: "#" },
  { label: "Movie", href: "#" },
  { label: "Docs", href: "#" },
  { label: "About", href: "#" },
  { label: "FAQ", href: "#" },
] as const;

interface NavMenuItemsProps {
  className?: string;
}

const NavMenuItems = ({ className }: NavMenuItemsProps) => (
  <div className={`flex flex-col gap-1 md:flex-row ${className ?? ""}`}>
    {MENU_ITEMS.map(({ label, href }) => (
      <Link key={label} href={href}>
        <Button variant="ghost" className="w-full md:w-auto">
          {label}
        </Button>
      </Link>
    ))}
  </div>
);

export function LpNavbar1() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <nav className="bg-grey-500 sticky top-0 isolate z-50 py-3.5 md:py-2">
      <div className="relative container m-auto flex flex-col justify-between gap-4 px-6 md:flex-row md:items-center md:gap-6">
        <div className="flex items-center justify-between">
          <img src="/n.jpg" alt="Logo" className="ml-50 h-6 md:h-10" />

          <Button
            variant="ghost"
            className="flex h-8 w-8 items-center justify-center p-0 md:hidden"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={16} /> : <Menu size={16} />}
          </Button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden w-full flex-row justify-end gap-5 md:flex">
          <NavMenuItems />
          <Link href="#">
            <Button>Get started</Button>
          </Link>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="flex w-full flex-col justify-end gap-5 pb-2.5 md:hidden">
            <NavMenuItems />
            <Link href="#">
              <Button className="w-full">Get started</Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
