import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main footer */}
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Company */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src="/logo.png" alt="ARC Travels" className="h-10 w-auto" />
            <div>
              <div className="font-cinzel font-bold uppercase tracking-tight text-accent leading-none">
                <span className="block text-2xl md:text-4xl mb-1">Coimbatore</span>
                <span className="block text-sm md:text-lg tracking-[0.25em]">ARC Travels</span>
              </div>
            </div>
          </div>
          <p className="text-primary-foreground/80 text-sm leading-relaxed mb-4">
            Your trusted travel partner in Coimbatore for reliable taxi services, curated tour packages, and unforgettable holiday experiences across South India.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-heading font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2.5">
            {[
              { label: "Home", to: "/" },
              { label: "About Us", to: "/about" },
              { label: "Tour Packages", to: "/tour-packages" },
              { label: "Our Vehicles", to: "/our-vehicles" },
              { label: "Tariff / Pricing", to: "/tariff/car-rental" },
              { label: "Travel Info", to: "/travel-info" },
              { label: "Gallery", to: "/gallery" },
              { label: "Reviews", to: "/reviews" },
              { label: "Contact Us", to: "/contact" },
            ].map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-heading font-semibold text-lg mb-4">Our Services</h3>
          <ul className="space-y-2.5 text-sm text-primary-foreground/80">
            <li>Local Car Rental</li>
            <li>Airport Pickup & Drop</li>
            <li>Outstation Taxi Service</li>
            <li>Corporate Travel Solutions</li>
            <li>Wedding Car Rental</li>
            <li>Tour Packages</li>
            <li>Honeymoon Packages</li>
            <li>One Day Trips</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-heading font-semibold text-lg mb-4">Contact Us</h3>
          <div className="space-y-3 text-sm">
            <div className="flex items-start gap-3 text-primary-foreground/80">
              <Phone className="w-4 h-4 mt-0.5 shrink-0" />
              <div className="flex flex-col gap-1">
                <a href="tel:9655975077" className="hover:text-secondary transition-colors">+91 96559 75077</a>
                <a href="tel:9884845077" className="hover:text-secondary transition-colors">+91 98848 45077</a>
              </div>
            </div>
            <div className="flex items-start gap-3 text-primary-foreground/80">
              <Mail className="w-4 h-4 mt-0.5 shrink-0" />
              <a href="mailto:support@coimbatore24x7calltaxi.com" className="hover:text-secondary transition-colors truncate">
                support@coimbatore24x7calltaxi.com
              </a>
            </div>
            <div className="flex items-start gap-3 text-primary-foreground/80">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
              <div>
                50/3, Rangasamy Gounden Pudhur,<br />
                Mahalaiamman Kovil Street,<br />
                Avinashi Road, RG Pudur,<br />
                Coimbatore – 641062
              </div>
            </div>
            <div className="flex items-center gap-3 text-primary-foreground/80">
              <Clock className="w-4 h-4 shrink-0" />
              <span>24/7 Service Available</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10 py-3 md:py-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-xs md:text-sm text-primary-foreground/60 gap-2 md:gap-0 text-center md:text-left">
          <p>© {new Date().getFullYear()} Coimbatore ARC Travels. All Rights Reserved.</p>
          <p>Trusted Taxi & Tour Partner in Coimbatore</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
