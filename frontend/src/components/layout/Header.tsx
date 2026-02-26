import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, MapPin, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  {
    label: "Tour Packages",
    to: "/tour-packages",
    subLinks: [
      { label: "One Day Tour Packages", to: "/tour-packages/one-day" },
      { label: "Two Days Tour Packages", to: "/tour-packages/two-days" },
      { label: "Three Days Tour Packages", to: "/tour-packages/three-days" },
      { label: "Four Days Tour Packages", to: "/tour-packages/four-days" },
      { label: "Five Days Tour Packages", to: "/tour-packages/five-days" },
      { label: "Six Days Tour Packages", to: "/tour-packages/six-days" },
      { label: "Seven Days Tour Packages", to: "/tour-packages/seven-days" },
      { label: "Eight Days Tour Packages", to: "/tour-packages/eight-days" },
      { label: "Nine Days Tour Packages", to: "/tour-packages/nine-days" },
      { label: "Navagraha Temple Package", to: "/tour-packages/navagraha" },
      { label: "Pilgrim Temple Packages", to: "/tour-packages/pilgrim" },
      { label: "Honeymoon Packages", to: "/honeymoon-packages" },
    ],
  },
  {
    label: "Tariff",
    to: "/tariff",
    subLinks: [
      { label: "Car Rental & Taxi Services", to: "/tariff/car-rental" },
      { label: "Outstation Tariff (KM Basis)", to: "/tariff/outstation-km" },
      { label: "Outstation Tariff (Daily Basis)", to: "/tariff/outstation-daily" },
      { label: "One Way Drop (KM Basis)", to: "/tariff/one-way-km" },
      { label: "One Way Drop (Fixed)", to: "/tariff/one-way-fixed" },
      { label: "Airport Pickup & Drop", to: "/tariff/airport-packages" },
    ],
  },
  { label: "Our Vehicles", to: "/our-vehicles" },
  { label: "Travel Info", to: "/travel-info" },
  { label: "Gallery", to: "/gallery" },
  { label: "Reviews", to: "/reviews" },
  { label: "Contact", to: "/contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[70] transition-all duration-500 ${scrolled
        ? "bg-primary/95 backdrop-blur-md shadow-2xl py-3"
        : "bg-primary py-4"
        }`}
    >
      {/* Top bar */}
      <div className="hidden md:block border-b border-primary-foreground/10 py-2">
        <div className="container mx-auto flex justify-between items-center text-primary-foreground/80 text-sm px-4">
          <div className="flex items-center gap-4">
            <a href="tel:9884845077" className="flex items-center gap-1 hover:text-secondary transition-colors">
              <Phone className="w-3 h-3" /> 98848 45077
            </a>
            <span className="hidden lg:inline">|</span>
            <a href="tel:9655975077" className="hidden lg:flex items-center gap-1 hover:text-secondary transition-colors">
              +91 9655975077
            </a>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="w-3 h-3" />
            <span className="truncate max-w-xs">Avinashi Road, RG Pudur, Coimbatore</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 md:gap-5">
          <img
            src="/logo.png"
            alt="ARC Travels"
            className={`w-auto transition-all duration-500 transform ${scrolled
              ? "h-16 md:h-20 lg:h-24 scale-110"
              : "h-14 md:h-18 lg:h-20"
              }`}
          />
          <div className={`font-cinzel font-bold leading-none text-accent uppercase tracking-tight transition-all duration-500 origin-left ${scrolled
            ? "w-0 opacity-0 scale-95 pointer-events-none -translate-x-4 overflow-hidden"
            : "w-auto opacity-100 scale-100"
            }`}>
            <span className="block text-2xl md:text-3xl lg:text-4xl">Coimbatore</span>
            <span className="block text-base md:text-lg lg:text-xl tracking-[0.25em] mt-1 lg:mt-2">ARC Travels</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            link.subLinks ? (
              <DropdownMenu key={link.label}>
                <DropdownMenuTrigger
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1 outline-none ${location.pathname.startsWith(link.to)
                    ? "bg-secondary text-secondary-foreground"
                    : "text-primary-foreground/90 hover:bg-primary-foreground/10 hover:text-primary-foreground"
                    }`}
                >
                  {link.label} <ChevronDown className="w-3 h-3" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-primary border-primary-foreground/10 text-primary-foreground min-w-[220px]">
                  {link.subLinks.map((sub) => (
                    <DropdownMenuItem key={sub.to} asChild className="focus:bg-secondary focus:text-secondary-foreground cursor-pointer">
                      <Link to={sub.to} className="w-full">{sub.label}</Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${location.pathname === link.to
                  ? "bg-secondary text-secondary-foreground"
                  : "text-primary-foreground/90 hover:bg-primary-foreground/10 hover:text-primary-foreground"
                  }`}
              >
                {link.label}
              </Link>
            )
          ))}
        </nav>

        {/* CTA + Mobile toggle */}
        <div className="flex items-center gap-3">
          <a
            href="tel:9884845077"
            className="hidden md:flex items-center gap-2 bg-secondary text-secondary-foreground px-5 py-2.5 rounded-full text-sm font-semibold shadow-button hover:brightness-110 transition-all animate-pulse-glow"
          >
            <Phone className="w-4 h-4" />
            Call Now
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-primary-foreground p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden bg-primary border-t border-primary-foreground/10 absolute top-full left-0 right-0 animate-fade-in max-h-[calc(100vh-80px)] overflow-y-auto shadow-2xl">
          <nav className="container mx-auto px-4 py-8 flex flex-col gap-3">
            {navLinks.map((link) => (
              <div key={link.label} className="border-b border-primary-foreground/5 last:border-0 pb-2">
                {link.subLinks ? (
                  <>
                    <button
                      onClick={() => setActiveDropdown(activeDropdown === link.label ? null : link.label)}
                      className={`w-full flex justify-between items-center px-5 py-4 rounded-xl text-lg font-semibold transition-all ${location.pathname.startsWith(link.to)
                        ? "bg-secondary text-secondary-foreground shadow-button"
                        : "text-primary-foreground/90 hover:bg-primary-foreground/10"
                        }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${activeDropdown === link.label ? 'rotate-180 text-secondary-foreground' : 'text-accent'}`} />
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ${activeDropdown === link.label ? 'max-h-[600px] mt-2 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className="pl-4 space-y-1 bg-black/20 rounded-xl py-3 mb-2">
                        {link.subLinks.map((sub) => (
                          <Link
                            key={sub.to}
                            to={sub.to}
                            className={`block px-6 py-3.5 text-base font-medium transition-colors ${location.pathname === sub.to ? 'text-secondary font-bold' : 'text-primary-foreground/70 hover:text-secondary'}`}
                          >
                            <span className="opacity-50 mr-2">•</span> {sub.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    to={link.to}
                    className={`block px-5 py-4 rounded-xl text-lg font-semibold transition-all ${location.pathname === link.to
                      ? "bg-secondary text-secondary-foreground shadow-button"
                      : "text-primary-foreground/90 hover:bg-primary-foreground/10"
                      }`}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="mt-6 pt-6 border-t border-primary-foreground/10">
              <a
                href="tel:9884845077"
                className="flex items-center justify-center gap-3 bg-secondary text-secondary-foreground px-6 py-5 rounded-full text-lg font-bold shadow-button pulse-glow"
              >
                <Phone className="w-5 h-5" />
                Call Now: 98848 45077
              </a>
              <div className="mt-6 flex flex-col items-center gap-3 text-primary-foreground/60 text-sm">
                <p className="flex items-center gap-2 text-accent font-medium text-center">
                  <MapPin className="w-4 h-4 shrink-0" />
                  Avinashi Road, RG Pudur, Coimbatore
                </p>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
