const footerLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Security Audit", href: "#" },
  { label: "Github", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between px-12 py-16 md:flex-row">
        <div className="mb-8 text-center md:mb-0 md:text-left">
          <span className="mb-2 block font-[family-name:var(--font-dm-serif)] text-lg text-white">
            MMXXIV
          </span>
          <p className="text-[0.6875rem] uppercase tracking-[0.05em] text-white/30">
            &copy; MMXXIV. ALL RIGHTS RESERVED.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8 text-[0.6875rem] uppercase tracking-[0.05em]">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-white/30 transition-colors hover:text-rose"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
