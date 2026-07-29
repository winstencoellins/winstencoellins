import { site, socialLinks } from "@/app/lib/data";
import { Button } from "@/app/components/ui/Button";
import { Container } from "@/app/components/ui/Container";
import { FadeIn } from "@/app/components/ui/FadeIn";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-24 md:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute top-1/2 left-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d9e6f5]/50 blur-3xl" />
      </div>

      <Container className="relative">
        <FadeIn>
          <div className="glass-strong mx-auto max-w-4xl overflow-hidden rounded-[1.75rem] p-8 md:p-12 lg:p-14">
            <div className="grid gap-10 md:grid-cols-[1.25fr_0.75fr] md:gap-14">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-highlight">
                  Contact
                </p>
                <h2 className="mt-4 font-display text-4xl tracking-tight text-foreground md:text-5xl">
                  Let&apos;s build something solid
                </h2>
                <p className="mt-4 max-w-lg text-base leading-relaxed text-muted md:text-lg">
                  {site.contactBlurb}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button href={`mailto:${site.email}`} variant="primary">
                    Email me
                  </Button>
                  <Button href={site.resume} variant="secondary" download>
                    Resume
                  </Button>
                </div>
              </div>

              <div className="border-t border-border pt-8 md:border-t-0 md:border-l md:pt-0 md:pl-10">
                <dl className="space-y-6">
                  <div>
                    <dt className="text-xs font-medium uppercase tracking-[0.14em] text-muted">
                      Email
                    </dt>
                    <dd className="mt-1.5">
                      <a
                        href={`mailto:${site.email}`}
                        className="text-sm font-medium text-foreground underline-offset-4 transition-colors hover:text-highlight hover:underline"
                      >
                        {site.email}
                      </a>
                    </dd>
                  </div>
                  {socialLinks.map((link) => (
                    <div key={link.label}>
                      <dt className="text-xs font-medium uppercase tracking-[0.14em] text-muted">
                        {link.label}
                      </dt>
                      <dd className="mt-1.5">
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-medium text-foreground underline-offset-4 transition-colors hover:text-highlight hover:underline"
                        >
                          {link.href.replace(/^https?:\/\//, "")}
                        </a>
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
