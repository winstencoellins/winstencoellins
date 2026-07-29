import { navLinks, site, socialLinks } from "@/app/lib/data";
import { AnchorLink } from "@/app/components/ui/AnchorLink";
import { Container } from "@/app/components/ui/Container";

export function Footer() {
  return (
    <footer className="relative overflow-hidden pb-10 pt-6">
      <Container>
        <div className="glass rounded-[var(--radius-card)] px-6 py-10 md:px-8 md:py-12">
          <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
            <div>
              <AnchorLink
                href="#home"
                className="text-sm font-semibold tracking-tight text-foreground"
              >
                {site.name.split(" ")[0]}
              </AnchorLink>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
                {site.footerTagline}
              </p>
            </div>

            <nav aria-label="Footer navigation">
              <ul className="flex flex-wrap gap-x-5 gap-y-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <AnchorLink
                      href={link.href}
                      className="text-sm text-muted transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </AnchorLink>
                  </li>
                ))}
              </ul>
            </nav>

            <ul className="flex flex-wrap gap-4">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-10 border-t border-border pt-6 text-sm text-muted">
            © {new Date().getUTCFullYear()} {site.name}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
