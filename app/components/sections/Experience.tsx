import Image, { type StaticImageData } from "next/image";
import { education, educationSectionTitle, experience } from "@/app/lib/data";
import { Container } from "@/app/components/ui/Container";
import { FadeIn, FadeInItem, FadeInStagger } from "@/app/components/ui/FadeIn";
import { SectionHeading } from "@/app/components/ui/SectionHeading";

function LogoMark({
  initial,
  logo,
  alt,
}: {
  initial: string;
  logo?: StaticImageData;
  alt: string;
}) {
  return (
    <div className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-border bg-white/70 text-[10px] font-semibold shadow-[var(--shadow)] backdrop-blur-md">
      {logo ? (
        <Image
          src={logo}
          alt={alt}
          className="h-6 w-6 object-contain"
          sizes="24px"
        />
      ) : (
        initial
      )}
    </div>
  );
}

export function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden py-24 md:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-transparent"
      />

      <Container className="relative">
        <FadeIn>
          <SectionHeading
            eyebrow="Career"
            title="Experience"
            description="Roles shipping products, mentoring teams, and building systems that hold up in production."
            className="mb-14 md:mb-16"
          />
        </FadeIn>

        <FadeInStagger className="space-y-4">
          {experience.map((item) => (
            <FadeInItem key={`${item.company}-${item.period}`}>
              <article className="glass rounded-[var(--radius-card)] p-6 transition-shadow duration-300 hover:shadow-[var(--shadow-hover)] md:p-8">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex items-start gap-4">
                    <LogoMark
                      initial={item.initial}
                      logo={item.logo}
                      alt={`${item.company} logo`}
                    />
                    <div>
                      <h3 className="text-lg font-semibold tracking-tight text-foreground md:text-xl">
                        {item.role}
                      </h3>
                      <p className="mt-0.5 text-sm text-muted">{item.company}</p>
                    </div>
                  </div>
                  <p className="shrink-0 text-sm font-medium text-highlight sm:pt-1">
                    {item.period}
                  </p>
                </div>
                <p className="mt-5 max-w-3xl text-sm leading-relaxed text-muted md:text-[15px]">
                  {item.description}
                </p>
              </article>
            </FadeInItem>
          ))}
        </FadeInStagger>

        <FadeIn className="mt-16 md:mt-20">
          <h3 className="mb-6 text-xs font-medium uppercase tracking-[0.16em] text-highlight">
            {educationSectionTitle}
          </h3>
          <ul className="grid gap-4 sm:grid-cols-2">
            {education.map((item) => (
              <li key={item.title}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass flex items-center gap-4 rounded-[var(--radius-card)] p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-hover)]"
                >
                  <LogoMark initial="UW" logo={item.logo} alt={item.subtitle} />
                  <div className="min-w-0">
                    <p className="font-semibold tracking-tight text-foreground">
                      {item.title}
                    </p>
                    <p className="mt-0.5 text-sm text-muted">{item.subtitle}</p>
                    <p className="mt-1 text-xs text-highlight">{item.date}</p>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </FadeIn>
      </Container>
    </section>
  );
}
