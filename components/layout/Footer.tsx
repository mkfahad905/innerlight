import Image from "next/image";
import Link from "next/link";

const footerLinks = {
  Services: [
    { label: "Individual Therapy", href: "#services" },
    { label: "Couples Counselling", href: "#services" },
    { label: "Anxiety & Stress", href: "#services" },
    { label: "Depression Support", href: "#services" },
    { label: "Trauma Recovery", href: "#services" },
    { label: "Life Transitions", href: "#services" },
  ],
  Company: [
    { label: "About", href: "#about" },
    { label: "Why Choose Us", href: "#why-us" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
  ],
};

const socialLinks = [
  {
    label: "Instagram",
    href: "https://instagram.com/innerlight_counselling",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      className="bg-sage-900 text-white"
    >
      {/* Upper section */}
      <div className="container-custom py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand column */}
        <div className="lg:col-span-1 flex flex-col gap-5">
          <Link href="/" aria-label="InnerLight Counselling homepage" className="flex items-center gap-2.5 w-fit">
            <Image
              src="/innerlight-logo-dark.svg"
              alt=""
              width={190}
              height={58}
              className="w-[190px] h-auto"
              aria-hidden="true"
            />
          </Link>
          <p className="text-sage-300 text-sm leading-relaxed max-w-xs">
            A safe, compassionate space to explore your inner world and move toward lasting emotional wellbeing.
          </p>
          {/* Social icons */}
          <div className="flex items-center gap-3" aria-label="Social media links">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={`Follow us on ${social.label}`}
                className="w-9 h-9 rounded-full bg-sage-800 hover:bg-sage-500 flex items-center justify-center text-sage-300 hover:text-white transition-all duration-200"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Links columns */}
        {Object.entries(footerLinks).map(([heading, links]) => (
          <div key={heading}>
            <h3 className="font-semibold text-white text-sm uppercase tracking-widest mb-4">
              {heading}
            </h3>
            <ul className="flex flex-col gap-2.5" role="list">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sage-300 hover:text-white text-sm transition-colors duration-200 hover:translate-x-0.5 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="border-t border-sage-800" />

      {/* Bottom bar */}
      <div className="container-custom py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sage-300 text-sm">
        <p>© {currentYear} InnerLight Counselling. All rights reserved.</p>
        <p className="text-sage-300">
          Designed with{" "}
          <span aria-label="care" role="img">
            🌿
          </span>{" "}
          for your wellbeing
        </p>
      </div>
    </footer>
  );
}
