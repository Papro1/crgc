import { useEffect, useState } from "react";

const NAV = [
  { label: "S'inscrire", href: "#register" },
  { label: "Soumettre un abstract", href: "#abstract" },
  { label: "Directives", href: "#guidelines" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-blue-900 to-blue-700 shadow-lg">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:inset-x-0 focus:top-2 focus:mx-auto focus:w-max bg-white text-blue-900 px-3 py-1 rounded-md font-medium"
      >
        Skip to content
      </a>

      <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center rounded-full bg-white px-3 py-1 text-sm font-extrabold text-blue-900 shadow">
              CRGC
            </span>
            <span className="text-white font-semibold text-sm sm:text-base">
              <span className="hidden sm:inline">Climate Change Research & Resilience</span>
              <span className="sm:hidden">Climate & Resilience</span>
            </span>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-3">
              {NAV.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="px-4 py-2 rounded-lg text-white font-medium hover:bg-white/20 transition"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen(!open)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-white hover:bg-white/20 transition"
            >
              <span className="sr-only">Open menu</span>
              <MenuIcon />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-20 transition-transform duration-300 ease-in-out transform ${
          open ? "translate-x-0" : "translate-x-full"
        } md:hidden flex`}
      >
        <div
          className="absolute inset-0 "
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />

        <div className="ml-auto h-full w-2/3 max-w-xs bg-blue-700 text-white shadow-xl p-4 flex flex-col">
          <div className="flex items-center justify-between h-12 mb-6">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center rounded-full bg-white px-2.5 py-1 text-xs font-extrabold text-blue-900 shadow">
                CRGC
              </span>
              <span className="text-white font-semibold text-sm">Conference</span>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center p-2 hover:bg-white/20 rounded-lg transition"
            >
              <span className="sr-only">Close menu</span>
              <XIcon />
            </button>
          </div>

          <nav className="mt-2 flex flex-col gap-2" aria-label="Mobile Primary">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 rounded-lg text-white font-medium hover:bg-white/20 transition"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="mt-auto pt-4 text-sm text-white/70">
            <p>© {new Date().getFullYear()} CRGC</p>
          </div>
        </div>
      </div>
    </header>
  );
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path strokeLinecap="round" d="M6 6l12 12M18 6l-12 12" />
    </svg>
  );
}
