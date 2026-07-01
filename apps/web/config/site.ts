export const siteConfig = {
  name: "Tectonic UI",
  description:
    "300+ production-ready components, blocks and templates that make your site feel like you hired a design team. Copy, paste, customize — no wrestling with animations or styling.",
  url: "https://tectonicui.dev",
  ogImage: "https://tectonicui.dev/og.png",
  links: {
    github: "https://github.com/tectonic-ui",
    twitter: "https://twitter.com/tectonicui",
    discord: "https://discord.gg/tectonicui",
  },
};

export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
  external?: boolean;
  label?: string;
  children?: NavItem[];
};

export const mainNavItems: NavItem[] = [
  {
    title: "Components",
    href: "/components",
    children: [
      { title: "Hero Sections", href: "/components/hero-sections" },
      { title: "Features", href: "/components/features" },
      { title: "Bento Grids", href: "/components/bento-grids" },
      { title: "Cards", href: "/components/cards" },
      { title: "Buttons", href: "/components/buttons" },
      { title: "Inputs", href: "/components/inputs" },
      { title: "Navigation", href: "/components/navigation" },
    ],
  },
  { title: "Blocks", href: "/blocks" },
  { title: "Templates", href: "/templates" },
  { title: "Labs", href: "/labs", label: "New" },
  { title: "Pricing", href: "/pricing" },
  { title: "Changelog", href: "/changelog" },
];

export const showcaseCategories = [
  { title: "Hero Sections", icon: "🏔️", href: "/components/hero-sections" },
  { title: "Features", icon: "⚡", href: "/components/features" },
  { title: "Bento Grids", icon: "🧩", href: "/components/bento-grids" },
  { title: "Parallax Blocks", icon: "🌀", href: "/components/parallax" },
  { title: "Keyboard", icon: "⌨️", href: "/components/keyboard" },
  { title: "Glowing Effect", icon: "✨", href: "/components/glowing-effect" },
  { title: "Glare Card", icon: "💎", href: "/components/glare-card" },
  { title: "Canvas Card", icon: "🎨", href: "/components/canvas-card" },
  { title: "Text Reveal", icon: "📝", href: "/components/text-reveal" },
  { title: "Modals", icon: "🪟", href: "/components/modals" },
  { title: "Tabs", icon: "📑", href: "/components/tabs" },
  { title: "Marquee", icon: "🎞️", href: "/components/marquee" },
];

export const footerLinks = {
  product: [
    { title: "Components", href: "/components" },
    { title: "Blocks", href: "/blocks" },
    { title: "Templates", href: "/templates" },
    { title: "Labs", href: "/labs" },
    { title: "Pricing", href: "/pricing" },
  ],
  resources: [
    { title: "Documentation", href: "/docs" },
    { title: "Changelog", href: "/changelog" },
    { title: "Blog", href: "/blog" },
    { title: "Figma Kit", href: "/figma" },
  ],
  company: [
    { title: "About", href: "/about" },
    { title: "Careers", href: "/careers" },
    { title: "Contact", href: "/contact" },
    { title: "Brand", href: "/brand" },
  ],
  legal: [
    { title: "Privacy Policy", href: "/privacy" },
    { title: "Terms of Service", href: "/terms" },
    { title: "License", href: "/license" },
  ],
};
