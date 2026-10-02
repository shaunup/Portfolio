export const navigationItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Journey", href: "/journey" },
  { label: "Notes", href: "/notes" },
  { label: "Contact", href: "/contact" },
] as const;

export type NavItem = (typeof navigationItems)[number];
