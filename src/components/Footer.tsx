const footerLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Security Audit", href: "#" },
  { label: "Github", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-black">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between px-6 py-10 md:flex-row">
        <div className="mb-6 text-center md:mb-0 md:text-left">
          <span className="mb-1 block font-[family-name:var(--font-dm-serif)] text-lg text-white">
            MMXXIV
          </span>
          <p className="text-xs text-white/30">&copy; MMXXIV. All rights reserved.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-6 text-xs">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-white/30 transition-colors hover:text-white/60"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
