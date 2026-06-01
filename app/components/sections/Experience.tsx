import {
  experience,
  freelanceProjects,
  freelanceProjectsSectionTitle,
} from "@/app/lib/data";
import { AnchorLink } from "@/app/components/ui/AnchorLink";
import { Container } from "@/app/components/ui/Container";
import {
  FadeIn,
  FadeInItem,
  FadeInStagger,
} from "@/app/components/ui/FadeIn";
import { SectionHeading } from "@/app/components/ui/SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28">
      <Container>
        <FadeIn>
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <SectionHeading title="Experience" className="mb-10" />
              <FadeInStagger className="divide-y divide-border rounded-[var(--radius-card)] border border-border bg-surface shadow-[var(--shadow-card)]">
                {experience.map((item) => (
                  <FadeInItem key={`${item.company}-${item.period}`}>
                    <article className="flex items-center gap-4 p-6 transition-colors hover:bg-foreground/[0.02]">
                      <div
                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border bg-background text-xs font-semibold text-foreground"
                        aria-hidden
                      >
                        {item.initial}
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="font-medium text-foreground">{item.role}</h3>
                        <p className="text-sm text-muted">
                          {item.company} · {item.period}
                        </p>
                        <p className="mt-1 text-sm leading-relaxed text-muted">
                          {item.description}
                        </p>
                      </div>
                    </article>
                  </FadeInItem>
                ))}
              </FadeInStagger>
            </div>

            <div>
              <SectionHeading
                title={freelanceProjectsSectionTitle}
                className="mb-10"
              />
              <FadeInStagger className="space-y-3">
                {freelanceProjects.map((item) => (
                  <FadeInItem key={item.title}>
                    <AnchorLink
                      href={item.href}
                      className="group flex items-start justify-between gap-4 rounded-[var(--radius-card)] border border-border bg-surface p-5 shadow-[var(--shadow-card)] transition-all duration-300 hover:border-foreground/20 hover:shadow-[var(--shadow-card-hover)]"
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-background text-xs font-semibold text-foreground"
                          aria-hidden
                        >
                          {item.initial}
                        </div>
                        <div>
                          <h3 className="font-medium text-foreground">
                            {item.title}
                          </h3>
                          <p className="text-sm text-muted">
                            {item.client} · {item.period}
                          </p>
                          <p className="mt-2 text-sm leading-relaxed text-muted">
                            {item.description}
                          </p>
                        </div>
                      </div>
                      <svg
                        className="mt-1 shrink-0 text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden
                      >
                        <path
                          d="M7 17L17 7M17 7H7M17 7v10"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </AnchorLink>
                  </FadeInItem>
                ))}
              </FadeInStagger>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
