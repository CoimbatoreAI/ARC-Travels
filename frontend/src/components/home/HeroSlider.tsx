import { useState, useEffect, useCallback } from "react";
import { Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import WhatsAppIcon from "../common/WhatsAppIcon";
import heroHills from "@/assets/hero-hills.jpg";
import heroHoneymoon from "@/assets/hero-honeymoon.jpg";
import heroTaxi from "@/assets/hero-taxi.jpg";

const slides = [
  {
    image: heroHills,
    title: "Explore the Majestic Hill Stations",
    subtitle: "Ooty, Kodaikanal, Munnar & more — curated trips from Coimbatore",
  },
  {
    image: heroHoneymoon,
    title: "Romantic Honeymoon Getaways",
    subtitle: "Celebrate love with our exclusive honeymoon packages to scenic destinations.",
  },
  {
    image: heroTaxi,
    title: "Premium Taxi Service You Can Trust",
    subtitle: "24/7 reliable taxi service in Coimbatore — local, airport, and outstation.",
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative h-[600px] md:h-[700px] overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? "opacity-100" : "opacity-0"
            }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
            loading={i === 0 ? "eager" : "lazy"}
          />
          <div className="absolute inset-0 gradient-hero" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full container mx-auto px-4 flex flex-col justify-center">
        <div key={current} className="max-w-2xl animate-fade-in">
          <span className="inline-block bg-secondary text-secondary-foreground text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Trusted Taxi & Tour Partner
          </span>
          <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-4">
            {slides[current].title}
          </h1>
          <p className="text-primary-foreground/90 text-lg md:text-xl mb-8 max-w-lg">
            {slides[current].subtitle}
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="tel:9884845077"
              className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-5 py-2.5 md:px-6 md:py-3 rounded-full font-semibold shadow-button hover:brightness-110 transition-all text-sm md:text-base"
            >
              <Phone className="w-4 h-4 md:w-5 md:h-5" />
              Call Now
            </a>
            <a
              href="https://wa.me/919884845077"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-primary-foreground px-5 py-2.5 md:px-6 md:py-3 rounded-full font-semibold hover:brightness-110 transition-all text-sm md:text-base"
            >
              <WhatsAppIcon className="w-4 h-4 md:w-5 md:h-5" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all ${i === current ? "w-8 bg-secondary" : "w-2 bg-primary-foreground/50"
              }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
