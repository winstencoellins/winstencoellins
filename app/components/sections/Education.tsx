import Link from "next/link";
import { education, educationSectionTitle } from "@/app/lib/data";
import { Container } from "@/app/components/ui/Container";
import {
  FadeIn,
  FadeInItem,
  FadeInStagger,
} from "@/app/components/ui/FadeIn";
import { SectionHeading } from "@/app/components/ui/SectionHeading";

export function Education() {
  return (
    <section id="education" className="py-20 md:py-28">
      <Container>
        <FadeIn>
          <SectionHeading title={educationSectionTitle} className="mb-10 md:mb-12" />
          <FadeInStagger className="grid gap-4 sm:grid-cols-2">
            {education.map((item) => (
              <FadeInItem key={item.title}>
                <Link
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full items-start justify-between gap-4 rounded-[var(--radius-card)] border border-border bg-surface p-6 shadow-[var(--shadow-card)] transition-all duration-300 hover:border-foreground/20 hover:shadow-[var(--shadow-card-hover)]"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-background text-foreground"
                      aria-hidden
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M12 3L2 9l10 6 10-6-10-6zM2 15l10 6 10-6M2 12l10 6 10-6"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">{item.title}</h3>
                      <p className="mt-1 text-sm text-muted">{item.subtitle}</p>
                      <p className="mt-1 text-xs text-muted">{item.date}</p>
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
                </Link>
              </FadeInItem>
            ))}
          </FadeInStagger>
        </FadeIn>
      </Container>
    </section>
  );
}
