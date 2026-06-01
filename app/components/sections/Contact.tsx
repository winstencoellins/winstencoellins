import { site, socialLinks } from "@/app/lib/data";
import { Button } from "@/app/components/ui/Button";
import { Container } from "@/app/components/ui/Container";
import { FadeIn } from "@/app/components/ui/FadeIn";

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28">
      <Container>
        <FadeIn>
          <div className="rounded-[var(--radius-card)] border border-border bg-surface px-8 py-16 text-center shadow-[var(--shadow-card)] md:px-16 md:py-24">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-5xl">
              Let&apos;s Build Something Together
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
              {site.contactBlurb}
            </p>

            <ul className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="font-medium text-foreground underline-offset-4 transition-colors hover:underline"
                >
                  Email
                </a>
              </li>
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <Button href={`mailto:${site.email}`} variant="primary">
                Get in Touch
              </Button>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
