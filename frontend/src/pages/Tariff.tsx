import { Phone } from "lucide-react";
import WhatsAppIcon from "../components/common/WhatsAppIcon";
import ReviewForm from "../components/common/ReviewForm";

const tariffData = [
  {
    vehicle: "Hatchback",
    model: "Swift / Similar",
    perKm: "₹12",
    driverBata: "₹400/day",
    waiting: "₹100/hr",
    minKm: "250 km/day",
  },
  {
    vehicle: "Sedan",
    model: "Dzire / Etios",
    perKm: "₹14",
    driverBata: "₹400/day",
    waiting: "₹100/hr",
    minKm: "250 km/day",
  },
  {
    vehicle: "SUV",
    model: "Innova / Ertiga",
    perKm: "₹18",
    driverBata: "₹500/day",
    waiting: "₹150/hr",
    minKm: "300 km/day",
  },
  {
    vehicle: "Honeymoon Spcl",
    model: "Sedan (All-Inc)",
    perKm: "₹3,750",
    driverBata: "Included",
    waiting: "N/A",
    minKm: "200 km/day",
    isSpecial: true
  },
];

const Tariff = () => {
  return (
    <>
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Tariff / Pricing</h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Transparent pricing with no hidden charges. Best rates guaranteed for all vehicle types.
          </p>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        {/* Desktop Table */}
        <div className="hidden md:block bg-card rounded-2xl shadow-card overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-primary">
                <th className="text-left p-4 text-primary-foreground font-heading font-semibold">Vehicle Type</th>
                <th className="text-left p-4 text-primary-foreground font-heading font-semibold">Model</th>
                <th className="text-center p-4 text-primary-foreground font-heading font-semibold">Per KM</th>
                <th className="text-center p-4 text-primary-foreground font-heading font-semibold">Driver Bata</th>
                <th className="text-center p-4 text-primary-foreground font-heading font-semibold">Waiting Charge</th>
                <th className="text-center p-4 text-primary-foreground font-heading font-semibold">Min. KM/Day</th>
              </tr>
            </thead>
            <tbody>
              {tariffData.map((t, i) => (
                <tr key={i} className={`border-b border-border ${i % 2 === 1 ? "bg-travel-cream" : ""}`}>
                  <td className="p-4 font-heading font-semibold text-foreground">{t.vehicle}</td>
                  <td className="p-4 text-muted-foreground">{t.model}</td>
                  <td className="p-4 text-center text-secondary font-bold text-lg">{t.perKm}</td>
                  <td className="p-4 text-center text-foreground">{t.driverBata}</td>
                  <td className="p-4 text-center text-foreground">{t.waiting}</td>
                  <td className="p-4 text-center text-foreground">{t.minKm}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-4">
          {tariffData.map((t, i) => (
            <div key={i} className="bg-card rounded-xl shadow-card p-5">
              <h3 className="font-heading font-bold text-lg text-foreground">{t.vehicle}</h3>
              <p className="text-muted-foreground text-sm mb-3">{t.model}</p>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="bg-travel-cream rounded-lg p-3 text-center">
                  <div className="text-muted-foreground text-xs">Per KM</div>
                  <div className="text-secondary font-bold text-lg">{t.perKm}</div>
                </div>
                <div className="bg-travel-cream rounded-lg p-3 text-center">
                  <div className="text-muted-foreground text-xs">Driver Bata</div>
                  <div className="font-semibold text-foreground">{t.driverBata}</div>
                </div>
                <div className="bg-travel-cream rounded-lg p-3 text-center">
                  <div className="text-muted-foreground text-xs">Waiting</div>
                  <div className="font-semibold text-foreground">{t.waiting}</div>
                </div>
                <div className="bg-travel-cream rounded-lg p-3 text-center">
                  <div className="text-muted-foreground text-xs">Min KM</div>
                  <div className="font-semibold text-foreground">{t.minKm}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-travel-cream rounded-xl p-6 text-center">
          <p className="text-muted-foreground text-sm mb-3">
            * Toll charges, parking fees, and inter-state permits are extra. Prices may vary during peak seasons.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:9884845077"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold shadow-button hover:brightness-110 transition-all"
            >
              <Phone className="w-4 h-4" /> Call for Custom Quote
            </a>
            <a
              href="https://wa.me/919884845077"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full font-semibold shadow-button hover:brightness-110 transition-all"
            >
              <WhatsAppIcon className="w-5 h-5" /> WhatsApp Booking
            </a>
          </div>
        </div>
      </section>
      <section className="py-20 bg-travel-cream">
        <div className="container mx-auto px-4 max-w-4xl">
          <ReviewForm />
        </div>
      </section>
    </>
  );
};

export default Tariff;
