"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Star, Sparkles } from "lucide-react";

const avatars = [
  "https://i.pravatar.cc/100?img=1",
  "https://i.pravatar.cc/100?img=2",
  "https://i.pravatar.cc/100?img=3",
  "https://i.pravatar.cc/100?img=4",
  "https://i.pravatar.cc/100?img=5",
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* ── Ambient background orbs ── */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 left-1/4 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-500/10 blur-[120px] animate-pulse-glow" />
        <div className="absolute top-1/3 right-1/4 h-[400px] w-[400px] rounded-full bg-violet-500/8 blur-[100px] animate-pulse-glow [animation-delay:2s]" />
        <div className="absolute bottom-1/4 left-1/3 h-[350px] w-[350px] rounded-full bg-rose-500/6 blur-[100px] animate-pulse-glow [animation-delay:4s]" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-16 lg:gap-20">
          {/* ── Left: Content ── */}
          <div className="max-w-2xl text-center lg:text-left">
            {/* Announcement Badge */}
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
            >
              <Link
                href="/changelog"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground group"
              >
                <Sparkles className="h-3.5 w-3.5 text-primary" />
                <span>Changelog</span>
                <span className="h-1 w-1 rounded-full bg-border" />
                <span className="font-medium text-foreground">
                  80+ new blocks
                </span>
                <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </motion.div>

            {/* Headline */}
            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-8 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-foreground leading-[1.1]"
            >
              Ship landing pages{" "}
              <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500 bg-clip-text text-transparent">
                at lightning speed.
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              300+ production-ready components, blocks and templates that make
              your site feel like you hired a design team. Copy, paste,
              customize, no wrestling with Framer Motion animations or Tailwind
              styling.
            </motion.p>

            {/* CTAs */}
            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-10 flex flex-wrap items-center gap-4 justify-center lg:justify-start"
            >
              <Link
                href="/components"
                className="flex h-12 items-center gap-2 rounded-[var(--radius-md)] border border-border bg-background px-6 text-sm font-semibold text-foreground shadow-sm transition-all hover:bg-muted hover:shadow-md"
              >
                Browse Components
              </Link>
              <Link
                href="/pricing"
                className="flex h-12 items-center gap-2 rounded-[var(--radius-md)] bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 px-6 text-sm font-semibold text-white shadow-lg shadow-amber-500/25 transition-all hover:shadow-xl hover:shadow-amber-500/30 hover:brightness-110"
              >
                Get All-Access
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>

          {/* ── Right: Social Proof ── */}
          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center lg:items-end gap-5 lg:pt-12"
          >
            <p className="text-sm text-muted-foreground text-center lg:text-right max-w-[220px]">
              Trusted by{" "}
              <span className="font-semibold text-foreground">120,000+</span>{" "}
              founders developers and creators
            </p>

            {/* Avatars */}
            <div className="flex items-center -space-x-3">
              {avatars.map((src, i) => (
                <motion.img
                  key={i}
                  src={src}
                  alt={`User ${i + 1}`}
                  width={44}
                  height={44}
                  className="h-11 w-11 rounded-full border-2 border-background object-cover"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + i * 0.08 }}
                />
              ))}
            </div>

            {/* Stars */}
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-amber-400 text-amber-400"
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
