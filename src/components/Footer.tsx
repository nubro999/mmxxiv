import Image from "next/image";

const footerLinks = [
  { label: "maurice@byzentine.capital", href: "mailto:maurice@byzentine.capital" },
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Security Audit", href: "#" },
  { label: "Github", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-black">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between px-4 py-10 md:flex-row">
        <div className="mb-6 text-center md:mb-0 md:text-left">
          <div className="mb-1">
            <Image
              src="/assets/logo-signature-white.png"
              alt="MMXXIV"
              width={600}
              height={120}
              className="h-7 w-auto"
            />
          </div>
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
