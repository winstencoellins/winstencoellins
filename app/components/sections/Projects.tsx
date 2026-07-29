"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { projects } from "@/app/lib/data";
import { Button } from "@/app/components/ui/Button";
import { Container } from "@/app/components/ui/Container";
import { FadeIn, FadeInItem, FadeInStagger } from "@/app/components/ui/FadeIn";
import { SectionHeading } from "@/app/components/ui/SectionHeading";

export function Projects() {
  const [featured, ...rest] = projects;

  return (
    <section id="projects" className="relative overflow-hidden py-24 md:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 atmosphere opacity-70"
      />

      <Container className="relative">
        <FadeIn>
          <SectionHeading
            eyebrow="Selected work"
            title="Projects that ship"
            description="Product systems for logistics, scheduling, property, education, and more—built end to end."
            className="mb-14 md:mb-16"
          />
        </FadeIn>

        {featured ? (
          <FadeIn className="mb-8 md:mb-10">
            <motion.article
              whileHover={{ y: -3 }}
              transition={{ duration: 0.3 }}
              className="group glass overflow-hidden rounded-[var(--radius-card)]"
            >
              <div className="grid lg:grid-cols-2">
                <div className="relative aspect-[16/10] bg-white/40 lg:aspect-auto lg:min-h-[380px]">
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                </div>
                <div className="flex flex-col justify-center p-7 md:p-10 lg:p-12">
                  <p className="text-xs font-medium uppercase tracking-[0.14em] text-highlight">
                    {featured.category} · {featured.period}
                  </p>
                  <h3 className="mt-3 font-display text-3xl tracking-tight text-foreground md:text-4xl">
                    {featured.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted">{featured.client}</p>
                  <p className="mt-4 text-base leading-relaxed text-muted">
                    {featured.summary}
                  </p>
                  <div className="mt-8">
                    {featured.href ? (
                      <Button href={featured.href} variant="primary" external>
                        View project
                      </Button>
                    ) : (
                      <Button href="#contact" variant="primary">
                        Discuss this project
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          </FadeIn>
        ) : null}

        <FadeInStagger className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((project) => (
            <FadeInItem key={project.title}>
              <motion.article
                whileHover={{ y: -3 }}
                transition={{ duration: 0.3 }}
                className="group glass flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] transition-shadow duration-300 hover:shadow-[var(--shadow-hover)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-white/40">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-medium uppercase tracking-[0.12em] text-highlight">
                    {project.category} · {project.period}
                  </p>
                  <h3 className="mt-2 font-display text-2xl tracking-tight text-foreground">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted">{project.client}</p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                    {project.summary}
                  </p>
                  <div className="mt-5">
                    {project.href ? (
                      <Button
                        href={project.href}
                        variant="ghost"
                        external
                        className="px-0"
                      >
                        View project →
                      </Button>
                    ) : (
                      <Button href="#contact" variant="ghost" className="px-0">
                        Discuss →
                      </Button>
                    )}
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
