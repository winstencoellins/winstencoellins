"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { site } from "@/app/lib/data";
import { Button } from "@/app/components/ui/Button";
import { Container } from "@/app/components/ui/Container";
import profile from "@/public/images/profile.jpeg";

export function Hero() {
  return (
    <section id="home" className="pt-28 pb-20 md:pt-36 md:pb-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative mb-8 h-16 w-16 overflow-hidden rounded-full border border-border bg-surface shadow-[var(--shadow-card)]">
              <Image
                src={profile}
                alt={site.name}
                fill
                className="object-cover"
                sizes="64px"
                priority
              />
            </div>
            <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
              Hello, I&apos;m{" "}
              <span className="block">{site.name}</span>
            </h1>
            <p className="mt-4 text-lg text-muted md:text-xl">{site.title}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:pl-8"
          >
            <p className="text-lg font-medium text-foreground md:text-xl">
              {site.tagline}
            </p>
            <p className="mt-4 max-w-md text-base leading-relaxed text-muted md:text-lg">
              {site.bio}
            </p>
            <div className="mt-8">
              <Button href="#contact" variant="primary">
                Get in Touch
              </Button>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
