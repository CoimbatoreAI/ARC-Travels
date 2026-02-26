import { Car, Plane, MapPin, Briefcase, ArrowRight, Phone } from "lucide-react";
import WhatsAppIcon from "../components/common/WhatsAppIcon";

const services = [
  {
    icon: Car,
    title: "Local Car Rental",
    desc: "Convenient hourly and full-day car rentals within Coimbatore. Whether it's a business meeting, shopping trip, or family outing, our clean AC vehicles and professional drivers ensure a smooth ride every time.",
    price: "Starting from ₹1,500/day",
    vehicles: ["Hatchback (Swift)", "Sedan (Dzire/Etios)", "SUV (Innova/Ertiga)"],
  },
  {
    icon: Plane,
    title: "Airport Pickup & Drop",
    desc: "Never miss a flight with our punctual airport transfer service. We monitor flight timings and adjust pickup accordingly. Enjoy a comfortable ride to and from Coimbatore, Bangalore, and Kochi Airports.",
    price: "Fixed Packages Available",
    vehicles: ["Sedan (Dzire)", "SUV (Innova)", "Premium Sedan"],
    link: "/tariff/airport-packages"
  },
  {
    icon: MapPin,
    title: "Outstation Taxi",
    desc: "Planning a trip beyond Coimbatore? Our outstation taxi service covers all major destinations — Ooty, Kodaikanal, Munnar, Bangalore, Chennai, Madurai, and more. One-way and round-trip options available.",
    price: "Starting from ₹12/km",
    vehicles: ["Sedan", "SUV", "Tempo Traveller"],
  },
  {
    icon: Briefcase,
    title: "Corporate Travel",
    desc: "Tailored corporate transportation solutions for businesses in Coimbatore. Monthly packages, employee commute services, and executive car rentals. Dedicated account management and billing.",
    price: "Custom Packages",
    vehicles: ["Sedan Fleet", "SUV Fleet", "Tempo Traveller"],
  },
];

const TaxiServices = () => {
  return (
    <>
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Taxi Services</h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Reliable, affordable, and comfortable taxi services in Coimbatore for every occasion.
          </p>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <div className="space-y-12">
          {services.map((s, i) => (
            <div key={i} className={`flex flex-col md:flex-row gap-8 items-center ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
              <div className="flex-1">
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                  <s.icon className="w-7 h-7 text-secondary" />
                </div>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">{s.title}</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
                <div className="text-secondary font-bold text-xl mb-4">{s.price}</div>
                <div className="mb-6">
                  <h4 className="font-heading font-semibold text-foreground text-sm mb-2">Available Vehicles:</h4>
                  <div className="flex flex-wrap gap-2">
                    {s.vehicles.map((v) => (
                      <span key={v} className="bg-travel-cream text-foreground text-xs px-3 py-1.5 rounded-full">
                        {v}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://wa.me/919884845077"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full font-semibold shadow-button hover:brightness-110 transition-all"
                  >
                    <WhatsAppIcon className="w-5 h-5" /> Enquire Now
                  </a>
                  {s.link && (
                    <a
                      href={s.link}
                      className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold shadow-button hover:bg-primary/90 transition-all"
                    >
                      View Packages <ArrowRight className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
              <div className="flex-1 w-full">
                <div className="bg-gradient-to-br from-travel-green/5 to-travel-cream rounded-2xl h-64 md:h-80 flex items-center justify-center">
                  <s.icon className="w-24 h-24 text-primary/20" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default TaxiServices;
