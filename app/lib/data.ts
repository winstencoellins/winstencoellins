import cherrySkyKost from "@/public/images/cherry-sky-kost.png";
import mitraLajuInterocean from "@/public/images/mitra-laju-interocean.png";
import chezBakeryCafe from "@/public/images/chez-bakery.png";
import quantumSports from "@/public/images/quantum-sports.png";
import yanksBritsEnglishInstitute from "@/public/images/yanks-and-brits.png";

export const site = {
  name: "Winsten Coellins",
  title: "Fullstack Software Engineer",
  tagline: "Fullstack software engineer building products end to end.",
  bio: "I develop reliable software from concept through launch—focused on clear architecture, thoughtful user experiences, and outcomes teams can measure and trust.",
  footerTagline:
    "Fullstack engineer shipping APIs, interfaces, and data-backed products.",
  contactBlurb:
    "Open to full-time roles, contract work, and collaborations on web apps, APIs, and data-driven products.",
  email: "hello@winstencoellins.com",
  linkedin: "https://linkedin.com",
  github: "https://github.com",
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
    initial: "WCS",
    description:
      "Leading the migration of enterprise applications from OutSystems to a modern Next.js and NestJS architecture, leveraging AI-assisted development to accelerate delivery, enhance code quality, and improve scalability and maintainability.",
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
    initial: "UW-M",
    description:
      "Established a barcode scanning system to optimize item check-in and check-out workflows, while developing accessible web solutions using semantic HTML to ensure accurate screen-reader support for students with disabilities.",
  },
] as const;

export const freelanceProjects = [
  {
    title: "Tenant Management System",
    client: "Sky Cherry Kost",
    period: "2026",
    description:
      "Full-stack admin dashboard with authentication, role-based access, and reporting—delivered on a fixed timeline as a freelance engagement.",
    href: "#projects",
    initial: "CSK",
  },
  {
    title: "Freight Forwarding System",
    client: "PT. Mitra Laju Interocean",
    period: "2026",
    description:
      "Built data visualization and export features for a growing product team, improving how stakeholders tracked key performance metrics.",
    href: "#projects",
    initial: "MLI",
  },
  {
    title: "Court Scheduling System",
    client: "Quantum Sports",
    period: "2025",
    description:
      "Built a court scheduling system with availability management and streamlined operations for facility staff.",
    href: "#projects",
    initial: "QS",
  },
  {
    title: "Content Management System (CMS)",
    client: "Chez Bakery & Cafe",
    period: "2025",
    description:
    "Responsive marketing site with CMS-friendly structure, performance-focused delivery, and a polished handoff for the client team.",
    href: "#projects",
    initial: "CH",
  },
  {
    title: "Academic Operational Management System (AOMS)",
    client: "Yanks & Brits English Institute",
    period: "2024",
    description:
      "Designed and implemented REST APIs and third-party integrations to connect existing tools into a single, maintainable workflow.",
    href: "#projects",
    initial: "YB",
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
    { name: "Zustand", icon: "zustand" },
    { name: "HTML5", icon: "html5", color: "E34F26" },
    { name: "CSS3", icon: "css", color: "1572B6" },
    { name: "JavaScript", icon: "javascript", color: "F7DF1E" },
    { name: "TypeScript", icon: "typescript", color: "3178C6" },
    { name: "Python", icon: "python", color: "3776AB" },
    { name: "FastAPI", icon: "fastapi", color: "009688" },
    { name: "Django", icon: "django", color: "092E20" },
    { name: "Elysia", icon: "elysia" },
    { name: "Express", icon: "express" },
    { name: "Node.js", icon: "nodedotjs", color: "339933" },
    { name: "Better Auth" },
    { name: "PostgreSQL", icon: "postgresql", color: "4169E1" },
    { name: "Prisma", icon: "prisma" },
    { name: "Bun", icon: "bun" },
    { name: "NestJS", icon: "nestjs", color: "E0234E" },
    { name: "Docker", icon: "docker", color: "2496ED" },
    { name: "AWS", icon: "amazonwebservices", color: "FF9900" },
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
      "Full-stack dashboard with role-based auth, real-time metrics, and a normalized Postgres schema.",
    image: mitraLajuInterocean,
  },
  {
    title: "Court Scheduling System",
    category: "Sports & Recreation",
    summary:
      "Court booking and scheduling platform with availability management and streamlined operations for facility staff.",
    image: quantumSports,
  },
  {
    title: "Tenant Management System",
    category: "Property Management",
    summary:
      "Admin dashboard with authentication, role-based access, and reporting for property and tenant workflows.",
    image: cherrySkyKost,
  },
  {
    title: "Academic Operational Management System (AOMS)",
    category: "Education",
    summary:
      "Academic operational management system with role-based auth, real-time metrics, and a normalized Postgres schema.",
    image: yanksBritsEnglishInstitute,
  },
  {
    title: "Content Management System (CMS)",
    category: "Marketing",
    summary:
      "Responsive marketing site with CMS-friendly structure, performance-focused delivery, and a polished client handoff.",
    image: chezBakeryCafe,
  },
] as const;

export const socialLinks = [
  { label: "LinkedIn", href: site.linkedin },
  { label: "GitHub", href: site.github },
] as const;

export const freelanceProjectsSectionTitle = "Freelance Projects";
export const educationSectionTitle = "Education";
