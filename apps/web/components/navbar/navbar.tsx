"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Menu,
  X,
  ChevronDown,
  Command,
  ArrowRight,
} from "lucide-react";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { siteConfig, mainNavItems, type NavItem } from "@/config/site";
import { cn } from "@/lib/utils";

/* ─── Desktop Dropdown ────────────────────────────── */
function NavDropdown({
  item,
  isOpen,
  onToggle,
}: {
  item: NavItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="relative">
      <button
        onClick={onToggle}
        className={cn(
          "flex items-center gap-1 text-sm font-medium transition-colors",
          "text-muted-foreground hover:text-foreground",
          isOpen && "text-foreground"
        )}
      >
        {item.title}
        <ChevronDown
          className={cn(
            "h-3.5 w-3.5 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute top-full left-0 z-50 mt-2 min-w-[220px] overflow-hidden rounded-xl border border-border bg-popover p-2 shadow-xl"
          >
            {item.children?.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {child.title}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── Mobile Nav ──────────────────────────────────── */
function MobileNav({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm"
          />

          {/* Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 z-50 h-full w-[300px] border-l border-border bg-background p-6"
          >
            <div className="flex items-center justify-between mb-8">
              <span className="text-lg font-bold text-foreground">
                {siteConfig.name}
              </span>
              <button
                onClick={onClose}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <nav className="flex flex-col gap-1">
              {mainNavItems.map((item) =>
                item.children ? (
                  <div key={item.title}>
                    <button
                      onClick={() =>
                        setExpandedItem(
                          expandedItem === item.title ? null : item.title
                        )
                      }
                      className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                    >
                      {item.title}
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform duration-200",
                          expandedItem === item.title && "rotate-180"
                        )}
                      />
                    </button>
                    <AnimatePresence>
                      {expandedItem === item.title && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden pl-3"
                        >
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={onClose}
                              className="flex items-center rounded-lg px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                            >
                              {child.title}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={item.title}
                    href={item.href}
                    onClick={onClose}
                    className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                  >
                    {item.title}
                    {item.label && (
                      <span className="rounded-full bg-primary/15 px-1.5 py-0.5 text-[10px] font-semibold text-primary">
                        {item.label}
                      </span>
                    )}
                  </Link>
                )
              )}
            </nav>

            <div className="mt-8 flex flex-col gap-3">
              <Link
                href="/login"
                onClick={onClose}
                className="flex h-10 w-full items-center justify-center rounded-[var(--radius-md)] border border-border text-sm font-medium text-foreground transition-colors hover:bg-muted"
              >
                Login
              </Link>
              <Link
                href="/pricing"
                onClick={onClose}
                className="flex h-10 w-full items-center justify-center gap-2 rounded-[var(--radius-md)] bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 text-sm font-semibold text-white shadow-lg shadow-amber-500/25"
              >
                Get All-Access
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

/* ─── Main Navbar ─────────────────────────────────── */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    if (!openDropdown) return;
    const close = () => setOpenDropdown(null);
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, [openDropdown]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", damping: 20, stiffness: 100 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "border-b border-border/50 bg-background/70 backdrop-blur-xl shadow-sm"
            : "bg-transparent"
        )}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 shadow-lg shadow-amber-500/20">
              <span className="text-sm font-black text-white">T</span>
            </div>
            <span className="text-lg font-bold tracking-tight text-foreground">
              Tectonic
              <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                {" "}UI
              </span>
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {mainNavItems.map((item) =>
              item.children ? (
                <NavDropdown
                  key={item.title}
                  item={item}
                  isOpen={openDropdown === item.title}
                  onToggle={() =>
                    setOpenDropdown(
                      openDropdown === item.title ? null : item.title
                    )
                  }
                />
              ) : (
                <Link
                  key={item.title}
                  href={item.href}
                  className="relative flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground group"
                >
                  {item.title}
                  {item.label && (
                    <span className="rounded-full bg-primary/15 px-1.5 py-0.5 text-[10px] font-semibold text-primary">
                      {item.label}
                    </span>
                  )}
                  <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gradient-to-r from-amber-500 to-orange-500 transition-all duration-300 group-hover:w-full" />
                </Link>
              )
            )}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* Search */}
            <button
              className="hidden sm:flex items-center gap-2 h-9 rounded-lg border border-border bg-muted/50 px-3 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground min-w-[180px]"
              aria-label="Search components"
            >
              <Search className="h-3.5 w-3.5" />
              <span>Search...</span>
              <kbd className="ml-auto flex h-5 items-center gap-0.5 rounded border border-border bg-background px-1.5 text-[10px] font-medium text-muted-foreground">
                <Command className="h-2.5 w-2.5" />K
              </kbd>
            </button>

            {/* Theme */}
            <ThemeToggle />

            {/* Login */}
            <Link
              href="/login"
              className="hidden md:flex h-9 items-center px-4 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Login
            </Link>

            {/* CTA */}
            <Link
              href="/pricing"
              className="hidden md:flex h-9 items-center gap-1.5 rounded-[var(--radius-md)] bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 px-4 text-sm font-semibold text-white shadow-md shadow-amber-500/20 transition-all hover:shadow-lg hover:shadow-amber-500/30 hover:brightness-110"
            >
              Get All-Access
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex lg:hidden h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Toggle menu"
            >
              <Menu className="h-4 w-4" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Nav */}
      <MobileNav isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
