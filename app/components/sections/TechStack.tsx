import { techStack } from "@/app/lib/data";
import { Container } from "@/app/components/ui/Container";
import { FadeIn, FadeInItem, FadeInStagger } from "@/app/components/ui/FadeIn";
import { SectionHeading } from "@/app/components/ui/SectionHeading";
import { TechStackIcon } from "@/app/components/ui/TechStackIcon";

export function TechStack() {
  return (
    <section id="tech" className="relative overflow-hidden py-24 md:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 atmosphere opacity-60"
      />

      <Container className="relative">
        <FadeIn>
          <SectionHeading
            eyebrow="Tools"
            title={techStack.title}
            description={techStack.description}
            className="mb-14 md:mb-16"
          />
        </FadeIn>

        <FadeInStagger className="grid gap-5 md:grid-cols-2">
          {techStack.categories.map((category) => (
            <FadeInItem key={category.label}>
              <div className="glass h-full rounded-[var(--radius-card)] p-6 md:p-7">
                <h3 className="text-xs font-medium uppercase tracking-[0.16em] text-highlight">
                  {category.label}
                </h3>
                <ul className="mt-5 grid grid-cols-2 gap-2">
                  {category.items.map((tech) => (
                    <li
                      key={tech.name}
                      className="flex items-center gap-3 rounded-2xl border border-transparent px-2.5 py-2.5 transition-all duration-200 hover:border-border hover:bg-white/60"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/70 shadow-[var(--shadow)]">
                        <TechStackIcon
                          name={tech.name}
                          icon={"icon" in tech ? tech.icon : undefined}
                          color={"color" in tech ? tech.color : undefined}
                          src={"src" in tech ? tech.src : undefined}
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground">
                        {tech.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeInItem>
          ))}
        </FadeInStagger>
      </Container>
    </section>
  );
}
