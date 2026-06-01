"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { projects } from "@/app/lib/data";
import { Button } from "@/app/components/ui/Button";
import { Container } from "@/app/components/ui/Container";
import { FadeIn, FadeInItem, FadeInStagger } from "@/app/components/ui/FadeIn";
import { SectionHeading } from "@/app/components/ui/SectionHeading";

export function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28">
      <Container>
        <FadeIn>
          <SectionHeading title="Selected Projects" className="mb-12 md:mb-16" />
        </FadeIn>
        <FadeInStagger className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <FadeInItem key={project.title}>
              <motion.article
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="group overflow-hidden rounded-[var(--radius-card)] border border-border bg-surface shadow-[var(--shadow-card)] transition-shadow duration-300 hover:shadow-[var(--shadow-card-hover)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-border">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <span className="inline-block rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted">
                    {project.category}
                  </span>
                  <h3 className="mt-4 text-2xl font-semibold tracking-tight text-foreground">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted md:text-base">
                    {project.summary}
                  </p>
                  <div className="mt-6">
                    <Button href="#contact" variant="secondary">
                      View Project
                    </Button>
                  </div>
                </div>
              </motion.article>
            </FadeInItem>
          ))}
        </FadeInStagger>
      </Container>
    </section>
  );
}
