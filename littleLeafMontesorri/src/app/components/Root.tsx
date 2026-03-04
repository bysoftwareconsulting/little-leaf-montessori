
import { Outlet, Link, useLocation } from "react-router";
import { Leaf, Menu, X } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";

export function Root() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const { translations } = useLanguage();

  const navLinks = [
    { path: "/", label: translations.nav.home },
    { path: "/about", label: translations.nav.about },
    { path: "/programs", label: translations.nav.programs },
    { path: "/contact", label: translations.nav.contact },
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <header className="bg-white border-b border-stone-200 sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <img
                  src="/favicon.png"
                  alt="Montessori Garden Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-stone-800">Little Leaf Montesorri</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="flex flex-row gap-4" >
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`transition-colors ${location.pathname === link.path
                    ? "text-emerald-700"
                    : "text-stone-600 hover:text-emerald-600"
                    }`}
                >
                  {link.label}
                </Link>
              ))}

            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-stone-600"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
            <div className="flex bg-stone-100 rounded-full p-1 text-sm">
              <button
                onClick={() => setLanguage("en")}
                className={`px-3 py-1 rounded-full cursor-pointer ${language === "en" ? "bg-white shadow text-emerald-600" : "text-stone-500"
                  }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage("ja")}
                className={`px-3 py-1 rounded-full cursor-pointer ${language === "ja" ? "bg-white shadow text-emerald-600" : "text-stone-500"
                  }`}
              >
                JP
              </button>
            </div>
            </div>

          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-stone-200">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-2 transition-colors ${location.pathname === link.path
                    ? "text-emerald-700"
                    : "text-stone-600"
                    }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-stone-800 text-stone-200 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8  rounded-full flex items-center justify-center">
                  <img
                    src="/favicon.png"
                    alt="Montessori Garden Logo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span>{translations.footer.name}</span>
              </div>
              <p className="text-stone-400 text-sm">
                {translations.footer.motto}
              </p>
            </div>
            <div>
              <h3 className="mb-4">{translations.footer.quickLinks}</h3>
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="text-stone-400 hover:text-emerald-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h3 className="mb-4">{translations.footer.contact}</h3>
              <p className="text-stone-400 text-sm">
                {translations.footer.address1}
                <br />
                {translations.footer.address2}
                <br />
                <br />
                {translations.footer.email}
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-stone-700 text-center text-stone-400 text-sm">
            © {new Date().getFullYear()} Montessori Garden. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
