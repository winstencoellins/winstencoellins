"use client";

import { motion } from "framer-motion";
import { techStack } from "@/app/lib/data";
import { Button } from "@/app/components/ui/Button";
import { Container } from "@/app/components/ui/Container";
import { FadeIn } from "@/app/components/ui/FadeIn";
import { TechStackIcon } from "@/app/components/ui/TechStackIcon";

export function TechStack() {
  return (
    <section id="services" className="py-20 md:py-28">
      <Container>
        <FadeIn>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="max-w-lg">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-sm text-foreground shadow-[var(--shadow-card)]">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-foreground"
                  aria-hidden
                >
                  <path
                    d="M12 2l1.8 5.5H19l-4.5 3.3 1.7 5.5L12 14.5 7.8 16.3 9.5 10.8 5 7.5h5.2L12 2z"
                    fill="currentColor"
                  />
                </svg>
                {techStack.badge}
              </div>

              <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-5xl">
                {techStack.title}
              </h2>

              <p className="mt-6 text-base leading-relaxed text-muted md:text-lg">
                {techStack.description}
              </p>

              <div className="mt-8">
                <Button href={techStack.ctaHref} variant="primary">
                  {techStack.ctaLabel}
                </Button>
              </div>
            </div>

            <div className="rounded-[var(--radius-card)] border border-border bg-foreground/[0.04] p-5 shadow-[var(--shadow-card)] md:p-6">
              <div className="grid grid-cols-4 gap-3 sm:grid-cols-5 md:gap-4">
                {techStack.technologies.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.92 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{
                      duration: 0.35,
                      delay: index * 0.03,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    whileHover={{ y: -3, scale: 1.04 }}
                    title={tech.name}
                    className="flex aspect-square items-center justify-center rounded-xl border border-border/60 bg-surface p-3 shadow-[0_2px_8px_rgb(0_0_0_/0.06)] transition-shadow hover:shadow-[var(--shadow-card-hover)]"
                  >
                    <TechStackIcon
                      name={tech.name}
                      icon={"icon" in tech ? tech.icon : undefined}
                      color={"color" in tech && tech.color ? tech.color : undefined}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
