"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { site } from "@/app/lib/data";
import { Button } from "@/app/components/ui/Button";
import { Container } from "@/app/components/ui/Container";
import profile from "@/public/images/profile.jpeg";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] overflow-hidden atmosphere"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute -top-24 left-[-10%] h-[420px] w-[420px] rounded-full bg-[#d5e4f4]/70 blur-3xl orb-drift" />
        <div className="absolute top-[20%] right-[-8%] h-[480px] w-[480px] rounded-full bg-[#e4ebf3]/80 blur-3xl orb-drift-delayed" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgb(245_247_251/0.35)_70%,rgb(245_247_251/0.75)_100%)]" />
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-full md:w-[55%]"
      >
        <Image
          src={profile}
          alt=""
          fill
          priority
          className="object-cover object-[center_18%] opacity-[0.22] saturate-[0.9] contrast-[1.02] md:opacity-[0.38]"
          sizes="(max-width: 768px) 100vw, 55vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--background)] via-[rgb(245_247_251/0.5)] to-transparent md:from-[rgb(245_247_251/0.95)] md:via-[rgb(245_247_251/0.35)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-transparent to-[rgb(245_247_251/0.4)]" />
      </div>

      <Container className="relative flex min-h-[100svh] flex-col justify-center pt-28 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            className="text-sm font-medium tracking-wide text-highlight"
          >
            Open to opportunities · Remote & Medan, Indonesia
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease }}
            className="mt-5 font-display text-5xl leading-[1.08] tracking-tight text-foreground sm:text-6xl lg:text-7xl"
          >
            {site.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16, ease }}
            className="mt-3 text-lg font-medium text-foreground/75 md:text-xl"
          >
            {site.title}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.24, ease }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg"
          >
            {site.bio}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.34, ease }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Button href="#projects" variant="primary">
              View work
            </Button>
            <Button href={site.resume} variant="secondary" download>
              Resume
            </Button>
            <Button href="#contact" variant="ghost">
              Get in touch
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
