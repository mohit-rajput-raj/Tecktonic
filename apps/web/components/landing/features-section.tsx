"use client";

import { motion, Variants } from "framer-motion";
import {
  Copy,
  Moon,
  Smartphone,
  Accessibility,
  Code2,
  Zap,
  Palette,
  GitBranch,
} from "lucide-react";
import type { ReactNode } from "react";

interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

const features: Feature[] = [
  {
    icon: <Copy className="h-6 w-6" />,
    title: "Copy & Paste",
    description:
      "Every component is designed to be copied directly into your project. No package installs, no version conflicts.",
    className: "md:col-span-2",
  },
  {
    icon: <Moon className="h-6 w-6" />,
    title: "Dark Mode Ready",
    description:
      "Built-in dark mode support with smooth transitions. Every component works flawlessly in both themes.",
  },
  {
    icon: <Smartphone className="h-6 w-6" />,
    title: "Fully Responsive",
    description:
      "Components adapt beautifully from mobile to desktop. No extra work needed.",
  },
  {
    icon: <Accessibility className="h-6 w-6" />,
    title: "Accessible",
    description:
      "WAI-ARIA compliant. Keyboard navigable. Screen reader friendly. Accessibility is never an afterthought.",
  },
  {
    icon: <Code2 className="h-6 w-6" />,
    title: "TypeScript First",
    description:
      "Full type safety with auto-complete. Every prop, every variant, fully typed and documented.",
    className: "md:col-span-2",
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Framer Motion Powered",
    description:
      "Buttery-smooth animations built with Framer Motion. Production-ready, performance-optimized.",
  },
  {
    icon: <Palette className="h-6 w-6" />,
    title: "Customizable",
    description:
      "CSS variables, Tailwind classes, or your own design tokens. Bend every component to your brand.",
  },
  {
    icon: <GitBranch className="h-6 w-6" />,
    title: "Open Source",
    description:
      "Free components are fully open source. Use them in personal or commercial projects.",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function FeaturesSection() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Why{" "}
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              Tectonic UI
            </span>
            ?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to build production-grade interfaces, without
            the headaches.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className={`group relative overflow-hidden rounded-2xl border border-border bg-card p-6 sm:p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 ${feature.className || ""}`}
            >
              {/* Hover glow */}
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-primary/10 blur-3xl" />
              </div>

              <div className="relative z-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-muted/50 text-primary transition-colors group-hover:bg-primary/10 group-hover:border-primary/30">
                  {feature.icon}
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
