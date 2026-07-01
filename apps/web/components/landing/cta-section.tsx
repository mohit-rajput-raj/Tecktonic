"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export function CtaSection() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-primary/8 blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm text-primary mb-8">
            <Sparkles className="h-3.5 w-3.5" />
            Start building today
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Ready to build something{" "}
            <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500 bg-clip-text text-transparent">
              extraordinary
            </span>
            ?
          </h2>

          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Get access to 300+ premium components, regular updates, and priority
            support. Ship faster than ever before.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/components"
              className="flex h-12 items-center gap-2 rounded-[var(--radius-md)] border border-border bg-background px-6 text-sm font-semibold text-foreground shadow-sm transition-all hover:bg-muted hover:shadow-md"
            >
              Browse Free Components
            </Link>
            <Link
              href="/pricing"
              className="flex h-12 items-center gap-2 rounded-[var(--radius-md)] bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 px-8 text-sm font-semibold text-white shadow-lg shadow-amber-500/25 transition-all hover:shadow-xl hover:shadow-amber-500/30 hover:brightness-110"
            >
              Get All-Access
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <p className="mt-6 text-xs text-muted-foreground">
            Free tier available · No credit card required · Cancel anytime
          </p>
        </motion.div>
      </div>
    </section>
  );
}
