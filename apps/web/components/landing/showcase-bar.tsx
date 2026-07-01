"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { showcaseCategories } from "@/config/site";

export function ShowcaseBar() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="relative z-10 w-full"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-border bg-card/80 backdrop-blur-sm p-1.5 shadow-lg">
          {/* Scrollable categories */}
          <div
            ref={scrollRef}
            className="flex items-center gap-1 overflow-x-auto scrollbar-none py-1 px-1"
            style={{ scrollbarWidth: "none" }}
          >
            {/* Decorative dots */}
            <div className="hidden sm:flex items-center gap-1.5 pr-4 pl-2 shrink-0">
              <div className="h-3 w-3 rounded-full bg-red-500/80" />
              <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
              <div className="h-3 w-3 rounded-full bg-green-500/80" />
            </div>

            {showcaseCategories.map((cat) => (
              <Link
                key={cat.title}
                href={cat.href}
                className="flex items-center gap-2 shrink-0 rounded-xl px-4 py-2.5 text-sm font-medium text-muted-foreground transition-all hover:bg-muted hover:text-foreground group"
              >
                <span className="text-base transition-transform group-hover:scale-110">
                  {cat.icon}
                </span>
                <span>{cat.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
