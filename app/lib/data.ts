import type { StaticImageData } from "next/image";

import cherrySkyLiving from "@/public/images/cherry-sky-living.png";
import umify from "@/public/images/umify.webp";
import wilmar from "@/public/images/wilmar.png";
import collab4good from "@/public/images/collab4good.png";
import uwMadison from "@/public/images/uw-crest-color-web-digital.svg";
import mitraLajuInterocean from "@/public/images/mitra-laju-interocean.png";
import chezBakeryCafe from "@/public/images/chez-bakery.png";
import quantumSports from "@/public/images/quantum-sports.png";
import yanksBritsEnglishInstitute from "@/public/images/yanks-and-brits.png";
import chinergyShenindo from "@/public/images/chinergy-shenindo.png";

export const site = {
  name: "Winsten Coellins",
  title: "Fullstack Software Engineer",
  tagline: "Fullstack software engineer building products end to end.",
  bio: "I develop reliable software from concept through launch—focused on clear architecture, thoughtful user experiences, and outcomes teams can measure and trust.",
  /** Short meta description (~155 chars) for search snippets */
  seoDescription:
    "Winsten Coellins — fullstack software engineer building web apps, APIs, and data-backed products. Open to remote and on-site roles.",
  footerTagline:
    "Fullstack engineer shipping APIs, interfaces, and data-backed products.",
  contactBlurb:
    "Open to full-time roles, contract work, and collaborations—remote or on-site—on web apps, APIs, and data-driven products.",
  email: "winstencoellins13@gmail.com",
  linkedin: "https://linkedin.com/in/winsten-coellins",
  github: "https://github.com/winstencoellins",
  resume: "/docs/winstencoellins_resume.pdf",
  /** Canonical production URL. Override with NEXT_PUBLIC_SITE_URL when deploying. */
  url: "https://winstencoellins.com",
  locale: "en_US",
  location: {
    city: "Medan",
    country: "Indonesia",
    countryCode: "ID",
  },
  keywords: [
    "Winsten Coellins",
    "fullstack software engineer",
    "Next.js developer",
    "NestJS developer",
    "TypeScript",
    "React",
    "remote software engineer",
    "Medan",
    "portfolio",
    "web applications",
    "APIs",
  ],
} as const;

export function getSiteUrl() {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (fromEnv) return fromEnv;
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL.replace(/\/$/, "")}`;
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL.replace(/\/$/, "")}`;
  }
  return site.url;
}

/** Work-first nav: show projects before career history. */
export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Work", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Stack", href: "#tech" },
  { label: "Contact", href: "#contact" },
] as const;

type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  initial: string;
  logo?: StaticImageData;
  description: string;
};

export const experience: readonly ExperienceItem[] = [
  {
    company: "Wilmar Consultancy Services",
    role: "Fullstack Software Engineer",
    period: "2023 — Present",
    initial: "WIL",
    logo: wilmar,
    description:
      "Leading and mentoring teams in the migration of enterprise applications from OutSystems to a modern Next.js and NestJS architecture, leveraging AI-assisted development to accelerate delivery, enhance code quality, and improve scalability and maintainability.",
  },
  {
    company: "Umify Pte Ltd",
    role: "Fullstack Software Engineer",
    period: "2022 — 2023",
    initial: "U",
    logo: umify,
    description:
      "Promoted from Intern to Software Engineer in recognition of strong technical contributions and performance, including leading the development and delivery of an MVP that enabled a successful project launch and accelerated time-to-market.",
  },
  {
    company: "Collaboration For Good, Inc.",
    role: "Web Developer",
    period: "2022 — 2023",
    initial: "C4G",
    logo: collab4good,
    description:
      "Designed and developed a responsive event website using HTML, CSS, and JavaScript to support one of Madison’s largest community events, enhancing attendee engagement and access to event information.",
  },
  {
    company: "University of Wisconsin-Madison",
    role: "IT Assistant",
    period: "2021 — 2022",
    initial: "UWM",
    logo: uwMadison,
    description:
      "Established a barcode scanning system to optimize item check-in and check-out workflows, while developing accessible web solutions using semantic HTML to ensure accurate screen-reader support for students with disabilities.",
  },
] as const;

export const education = [
  {
    title: "B.S. in Data Science",
    subtitle: "University of Wisconsin–Madison",
    date: "Bachelor's Degree",
    href: "https://www.wisc.edu",
    logo: uwMadison,
  },
  {
    title: "Certificate in Computer Science",
    subtitle: "University of Wisconsin–Madison",
    date: "Certificate",
    href: "https://www.cs.wisc.edu",
    logo: uwMadison,
  },
] as const;

type TechItem = {
  name: string;
  icon?: string;
  color?: string;
  src?: string;
};

export const techStack = {
  title: "Stack",
  description:
    "Tools I use to ship interfaces, APIs, data layers, and production infrastructure.",
  categories: [
    {
      label: "Frontend",
      items: [
        { name: "Next.js", icon: "nextdotjs" },
        { name: "React", icon: "react", color: "61DAFB" },
        { name: "TypeScript", icon: "typescript", color: "3178C6" },
        { name: "JavaScript", icon: "javascript", color: "F7DF1E" },
        { name: "Tailwind CSS", icon: "tailwindcss", color: "06B6D4" },
        { name: "Zustand", src: "/icons/zustand.png" },
        { name: "HTML5", icon: "html5", color: "E34F26" },
        { name: "CSS3", icon: "css", color: "1572B6" },
      ] satisfies TechItem[],
    },
    {
      label: "Backend",
      items: [
        { name: "Node.js", icon: "nodedotjs", color: "339933" },
        { name: "NestJS", icon: "nestjs", color: "E0234E" },
        { name: "Express", icon: "express" },
        { name: "Elysia", src: "/icons/elysia.svg" },
        { name: "Bun", icon: "bun" },
        { name: "Python", icon: "python", color: "3776AB" },
        { name: "FastAPI", icon: "fastapi", color: "009688" },
        { name: "Django", icon: "django", color: "092E20" },
        { name: "Better Auth", src: "/icons/better-auth.svg" },
        { name: "GraphQL", icon: "graphql", color: "E10098" },
      ] satisfies TechItem[],
    },
    {
      label: "Data",
      items: [
        { name: "PostgreSQL", icon: "postgresql", color: "4169E1" },
        { name: "Prisma", icon: "prisma" },
        { name: "MongoDB", icon: "mongodb", color: "47A248" },
        { name: "Redis", icon: "redis", color: "FF4438" },
      ] satisfies TechItem[],
    },
    {
      label: "Cloud & tooling",
      items: [
        { name: "AWS", src: "/icons/aws.svg" },
        { name: "Docker", icon: "docker", color: "2496ED" },
        { name: "Vercel", icon: "vercel" },
        { name: "Railway", icon: "railway" },
        { name: "DigitalOcean", icon: "digitalocean", color: "0080FF" },
        { name: "Git", icon: "git", color: "F05032" },
        { name: "GitHub", icon: "github" },
      ] satisfies TechItem[],
    },
  ],
} as const;

type ProjectItem = {
  title: string;
  client: string;
  category: string;
  period: string;
  summary: string;
  image: StaticImageData;
  kind: "freelance";
  href?: string;
};

export const projects: readonly ProjectItem[] = [
  {
    title: "Freight Forwarding System",
    client: "PT. Mitra Laju Interocean",
    category: "Logistics",
    period: "2026",
    summary:
      "Shipment bookings, documentation, tracking, and customs with role-based access for admins, operators, customers, and agents.",
    image: mitraLajuInterocean,
    kind: "freelance",
  },
  {
    title: "Court Scheduling System",
    client: "Quantum Sports",
    category: "Sports",
    period: "2025",
    summary:
      "Court booking, payments, and reservations—plus an admin dashboard for scheduling, bookkeeping, and analytics.",
    image: quantumSports,
    kind: "freelance",
  },
  {
    title: "Property Management System",
    client: "Cherry Sky Living",
    category: "Real Estate",
    period: "2026",
    summary:
      "Properties, units, leases, rent, and renewals in one dashboard for landlords and tenants.",
    image: cherrySkyLiving,
    kind: "freelance",
  },
  {
    title: "Education Management System",
    client: "Yanks & Brits English Institute",
    category: "Education",
    period: "2024",
    summary:
      "Courses, enrollment, scheduling, payroll, and performance tracking in one operations platform.",
    image: yanksBritsEnglishInstitute,
    kind: "freelance",
  },
  {
    title: "Content Management System",
    client: "Chez Bakery & Cafe",
    category: "Marketing",
    period: "2025",
    summary:
      "Admin tooling for menu categories and items that publishes cleanly to a public site.",
    image: chezBakeryCafe,
    kind: "freelance",
  },
  {
    title: "Corporate Website",
    client: "CV. Chinergy Shenindo",
    category: "Industrial",
    period: "2026",
    summary:
      "Company profile for services, products, and projects—helping prospects learn and inquire.",
    image: chinergyShenindo,
    kind: "freelance",
  },
] as const;

export const socialLinks = [
  { label: "LinkedIn", href: site.linkedin },
  { label: "GitHub", href: site.github },
] as const;

export const educationSectionTitle = "Education";
