import cherrySkyLiving from "@/public/images/cherry-sky-living.png";
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
  footerTagline:
    "Fullstack engineer shipping APIs, interfaces, and data-backed products.",
  contactBlurb:
    "Open to full-time roles, contract work, and collaborations on web apps, APIs, and data-driven products.",
  email: "winstencoellins13@gmail.com",
  linkedin: "https://linkedin.com/in/winsten-coellins",
  github: "https://github.com/winstencoellins",
  resume: "/docs/winstencoellins_resume.pdf",
} as const;

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Tech Stack", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
] as const;

export const experience = [
  {
    company: "Wilmar Consultancy Services",
    role: "Software Engineer",
    period: "Present",
    initial: "WIL",
    description:
      "Leading and mentoring teams in the migration of enterprise applications from OutSystems to a modern Next.js and NestJS architecture, leveraging AI-assisted development to accelerate delivery, enhance code quality, and improve scalability and maintainability.",
  },
  {
    company: "Umify Pte Ltd",
    role: "Fullstack Software Engineer",
    period: "2022 - 2023",
    initial: "U",
    description:
      "Promoted from Intern to Software Engineer in recognition of strong technical contributions and performance, including leading the development and delivery of an MVP that enabled a successful project launch and accelerated time-to-market.",
  },
  {
    company: "Collaboration For Good, Inc.",
    role: "Web Developer",
    period: "2023 - 2023",
    initial: "C4G",
    description:
      "Designed and developed a responsive event website using HTML, CSS, and JavaScript to support one of Madison’s largest community events, enhancing attendee engagement and access to event information.",
  },
  {
    company: "University of Wisconsin-Madison",
    role: "IT Assistant",
    period: "2022 - 2023",
    initial: "UWM",
    description:
      "Established a barcode scanning system to optimize item check-in and check-out workflows, while developing accessible web solutions using semantic HTML to ensure accurate screen-reader support for students with disabilities.",
  },
] as const;

export const freelanceProjects = [
  {
    title: "Property Management System",
    client: "Cherry Sky Living",
    period: "2026",
    description:
      "A Property Management System is a platform that helps landlords and property managers manage properties, units, tenant leases, rent payments, bookkeeping, and lease renewal requests through a centralized dashboard.",
    href: "#projects",
    initial: "CSL",
  },
  {
    title: "Freight Forwarding System",
    client: "PT. Mitra Laju Interocean",
    period: "2026",
    description:
      "A Freight Forwarding System is a logistics platform that manages shipments, documentation, tracking, invoicing, and user roles to streamline freight operations and customer services.",
    href: "#projects",
    initial: "MLI",
  },
  {
    title: "Corporate Website",
    client: "CV. Chinergy Shenindo",
    period: "2026",
    description:
      "A Corporate Website for Chinergy Shenindo that showcases the company's profile, services, products, and projects, helping potential clients learn about the business and submit inquiries online.",
    href: "#projects",
    initial: "CS",
  },
  {
    title: "Court Scheduling System",
    client: "Quantum Sports",
    period: "2025",
    description:
      "A Court Scheduling System is a platform that allows users to book courts, make online payments, and manage reservations, while providing administrators with tools for scheduling, bookkeeping, and business analytics.",
    href: "#projects",
    initial: "QS",
  },
  {
    title: "Content Management System (CMS)",
    client: "Chez Bakery & Cafe",
    period: "2025",
    description:
    "A Content Management System is a platform that enables administrators to manage and publish content, categories, and listings through an intuitive dashboard for display on a public website.",
    href: "#projects",
    initial: "CH",
  },
  {
    title: "Education Management System",
    client: "Yanks & Brits English Institute",
    period: "2024",
    description:
      "An Education Management System is a platform that manages courses, students, teachers, class schedules, payroll, bookkeeping, and performance tracking to streamline educational operations.",
    href: "#projects",
    initial: "YNB",
  },
] as const;

export const education = [
  {
    title: "B.S. in Data Science",
    subtitle: "University of Wisconsin–Madison",
    date: "Bachelor's Degree",
    href: "https://www.wisc.edu",
  },
  {
    title: "Certificate in Computer Science",
    subtitle: "University of Wisconsin–Madison",
    date: "Certificate",
    href: "https://www.cs.wisc.edu",
  },
] as const;

export const techStack = {
  badge: "My Tech Stack",
  title: "Key Technologies & Platforms",
  description:
    "I work with modern frameworks, languages, and cloud platforms to build reliable full-stack applications—from polished interfaces and APIs to authentication, databases, and production deployment.",
  ctaLabel: "View Projects",
  ctaHref: "#projects",
  technologies: [
    { name: "Next.js", icon: "nextdotjs" },
    { name: "React", icon: "react", color: "61DAFB" },
    { name: "Tailwind CSS", icon: "tailwindcss", color: "06B6D4" },
    { name: "Zustand", src: "/icons/zustand.png" },
    { name: "HTML5", icon: "html5", color: "E34F26" },
    { name: "CSS3", icon: "css", color: "1572B6" },
    { name: "JavaScript", icon: "javascript", color: "F7DF1E" },
    { name: "TypeScript", icon: "typescript", color: "3178C6" },
    { name: "Python", icon: "python", color: "3776AB" },
    { name: "FastAPI", icon: "fastapi", color: "009688" },
    { name: "Django", icon: "django", color: "092E20" },
    { name: "Elysia", src: "/icons/elysia.svg" },
    { name: "Express", icon: "express" },
    { name: "Node.js", icon: "nodedotjs", color: "339933" },
    { name: "Better Auth", src: "/icons/better-auth.svg" },
    { name: "PostgreSQL", icon: "postgresql", color: "4169E1" },
    { name: "Prisma", icon: "prisma" },
    { name: "Bun", icon: "bun" },
    { name: "NestJS", icon: "nestjs", color: "E0234E" },
    { name: "Docker", icon: "docker", color: "2496ED" },
    { name: "AWS", src: "/icons/aws.svg" },
    { name: "Vercel", icon: "vercel" },
    { name: "Railway", icon: "railway" },
    { name: "DigitalOcean", icon: "digitalocean", color: "0080FF" },
    { name: "Redis", icon: "redis", color: "FF4438" },
    { name: "MongoDB", icon: "mongodb", color: "47A248" },
    { name: "GraphQL", icon: "graphql", color: "E10098" },
    { name: "Git", icon: "git", color: "F05032" },
    { name: "GitHub", icon: "github" },
  ],
} as const;

export const projects = [
  {
    title: "Freight Forwarding System",
    category: "Logistics",
    summary:
      "A freight forwarding system is a logistics platform that manages shipment bookings, documentation, tracking, and customs processes, with role-based user authorization to control access for admins, operators, customers, and agents.",
    image: mitraLajuInterocean,
  },
  {
    title: "Court Scheduling System",
    category: "Sports & Recreation",
    summary:
      "A court scheduling system is a web-based platform that allows users to book courts, make online payments, and manage reservations, while providing administrators with a dashboard for scheduling management, bookkeeping, payment tracking, and business analytics.",
    image: quantumSports,
  },
  {
    title: "Property Management System",
    category: "Real Estate",
    summary:
      "A Property Management System is a centralized platform that enables landlords and property managers to manage properties, units, tenant leases, rent collection, bookkeeping, maintenance requests, and occupancy records, while allowing tenants to log in, view their lease details, make payments, and submit lease renewal requests online.",
    image: cherrySkyLiving,
  },
  {
    title: "Education Management System",
    category: "Education",
    summary:
      "An Education Management System is an end-to-end solution for managing courses, student enrollment, teacher scheduling, lesson delivery, payroll calculations, financial records, performance tracking, and marketing commissions within a single integrated platform.",
    image: yanksBritsEnglishInstitute,
  },
  {
    title: "Content Management System (CMS)",
    category: "Marketing",
    summary:
      "A Content Management System is a platform that allows business owners to manage menu categories and menu items through an admin dashboard, automatically organizing and displaying them on a public-facing website for customers to browse.",
    image: chezBakeryCafe,
  },
  {
    title: "Corporate Website",
    category: "Industrial Trading & Sourcing Company",
    summary:
      "A corporate landing page that showcases Chinergy Shenindo's company profile, services, products, projects, and contact information, helping potential clients learn about the business and connect for inquiries or partnerships.",
    image: chinergyShenindo,
  }
] as const;

export const socialLinks = [
  { label: "LinkedIn", href: site.linkedin },
  { label: "GitHub", href: site.github },
] as const;

export const freelanceProjectsSectionTitle = "Freelance Projects";
export const educationSectionTitle = "Education";
