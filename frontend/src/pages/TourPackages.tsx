import { Clock, MapPin, Check, X, ArrowRight } from "lucide-react";
import WhatsAppIcon from "../components/common/WhatsAppIcon";

const packages = [
  {
    name: "Special Honeymoon Roundtrip",
    duration: "Day Wise",
    places: ["Any Destination", "Round Trip Service"],
    inclusions: ["Sedan Vehicle (Etios/Dzire)", "200 KM Free/Day", "Parking & Toll Included", "State Permit Included", "Driver Allowance Included"],
    exclusions: ["Hotel Stay", "Food & Beverages", "Entry Tickets"],
    price: "₹3,750 / Day",
    itinerary: [
      "Flexible: Day-based roundtrip service from Coimbatore.",
      "Included: 200 KM free usage per day.",
      "Extra: ₹13/km for usage beyond 200 KM."
    ],
  },
  {
    name: "Ooty Tour Package",
    duration: "2 Nights / 3 Days",
    places: ["Botanical Gardens", "Ooty Lake", "Doddabetta Peak", "Tea Factory", "Rose Garden", "Pykara Falls"],
    inclusions: ["AC Vehicle", "Driver Allowance", "Toll & Parking", "Fuel Charges"],
    exclusions: ["Hotel Stay", "Food & Beverages", "Entry Tickets"],
    price: "₹4,999",
    itinerary: [
      "Day 1: Pickup from Coimbatore → Drive to Ooty → Botanical Gardens → Ooty Lake → Hotel check-in",
      "Day 2: Doddabetta Peak → Tea Factory → Rose Garden → Pine Forest → Evening leisure",
      "Day 3: Pykara Falls & Lake → Return to Coimbatore",
    ],
  },
  {
    name: "Kodaikanal Tour Package",
    duration: "2 Nights / 3 Days",
    places: ["Kodai Lake", "Pillar Rocks", "Coaker's Walk", "Silver Cascade", "Bryant Park", "Green Valley View"],
    inclusions: ["AC Vehicle", "Driver Allowance", "Toll & Parking", "Fuel Charges"],
    exclusions: ["Hotel Stay", "Food & Beverages", "Entry Tickets"],
    price: "₹5,499",
    itinerary: [
      "Day 1: Coimbatore to Kodaikanal → Kodai Lake boating → Coaker's Walk → Bryant Park",
      "Day 2: Pillar Rocks → Green Valley View → Moir Point → Pine Forest → Guna Caves",
      "Day 3: Silver Cascade → Berijam Lake → Return to Coimbatore",
    ],
  },
  {
    name: "Munnar Tour Package",
    duration: "2 Nights / 3 Days",
    places: ["Mattupetty Dam", "Echo Point", "Top Station", "Eravikulam National Park", "Tea Museum", "Flower Garden"],
    inclusions: ["AC Vehicle", "Driver Allowance", "Toll & Parking", "Fuel Charges"],
    exclusions: ["Hotel Stay", "Food & Beverages", "Entry Tickets"],
    price: "₹5,999",
    itinerary: [
      "Day 1: Coimbatore to Munnar → Cheeyappara Falls → Spice Garden → Hotel check-in",
      "Day 2: Eravikulam National Park → Mattupetty Dam → Echo Point → Top Station",
      "Day 3: Tea Museum → Flower Garden → Return to Coimbatore",
    ],
  },
  {
    name: "Valparai Tour Package",
    duration: "1 Night / 2 Days",
    places: ["Monkey Falls", "Sholayar Dam", "Nallamudi Viewpoint", "Balaji Temple", "Tea Estates"],
    inclusions: ["AC Vehicle", "Driver Allowance", "Toll & Parking", "Fuel Charges"],
    exclusions: ["Hotel Stay", "Food & Beverages", "Entry Tickets"],
    price: "₹3,499",
    itinerary: [
      "Day 1: Coimbatore to Valparai via 40 hairpin bends → Monkey Falls → Sholayar Dam → Check-in",
      "Day 2: Nallamudi Viewpoint → Tea Estates → Return to Coimbatore",
    ],
  },
  {
    name: "Coimbatore Sightseeing",
    duration: "1 Day",
    places: ["Marudhamalai Temple", "VOC Park", "Gedee Car Museum", "Brookefields Mall", "ISHA Yoga Center"],
    inclusions: ["AC Vehicle", "Driver Allowance", "Fuel Charges"],
    exclusions: ["Food & Beverages", "Entry Tickets"],
    price: "₹1,999",
    itinerary: [
      "Full Day: Marudhamalai Temple → VOC Park → Gedee Car Museum → Lunch break → ISHA Yoga Center → Return",
    ],
  },
  {
    name: "Bangalore Airport Roundtrip",
    duration: "1-2 Days",
    places: ["Coimbatore", "Bangalore International Airport", "Return"],
    inclusions: ["AC Sedan/SUV", "Fuel Charges", "Driver Allowance", "Toll & State Permit"],
    exclusions: ["Parking Fees", "Food & Beverages"],
    price: "₹10,500",
    itinerary: [
      "Pickup from Coimbatore → Travel to BLR Airport → Drop/Wait → Return to Coimbatore",
    ],
  },
  {
    name: "Kochi Airport Roundtrip",
    duration: "1 Day",
    places: ["Coimbatore", "Nedumbassery Airport", "Return"],
    inclusions: ["AC Sedan/SUV", "Fuel Charges", "Driver Allowance", "Toll & State Permit"],
    exclusions: ["Parking Fees", "Food & Beverages"],
    price: "₹5,500",
    itinerary: [
      "Pickup from Coimbatore → Travel to Kochi Airport → Drop/Wait → Return to Coimbatore",
    ],
  },
  {
    name: "Coimbatore Airport Roundtrip",
    duration: "Same Day",
    places: ["Local Pickup", "Coimbatore International Airport", "Return"],
    inclusions: ["AC Sedan/SUV", "Fuel Charges", "Driver Allowance"],
    exclusions: ["Toll & Parking", "Wait Time > 2hrs"],
    price: "₹1,500",
    itinerary: [
      "Pickup from Point A → Drop at CJB Airport → Return to Point A (Ideal for guest drops)",
    ],
  },
];

const TourPackages = () => {
  return (
    <>
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Tour Packages</h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Handcrafted tour packages from Coimbatore to South India's most beautiful destinations.
          </p>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <div className="space-y-16">
          {packages.map((pkg, i) => (
            <div key={i} className="bg-card rounded-2xl shadow-card overflow-hidden">
              <div className="bg-gradient-to-r from-primary to-travel-green-light p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground">{pkg.name}</h2>
                    <div className="flex items-center gap-4 mt-2 text-primary-foreground/80 text-base">
                      <span className="flex items-center gap-1"><Clock className="w-5 h-5" /> {pkg.duration}</span>
                      <span className="flex items-center gap-1"><MapPin className="w-5 h-5" /> {pkg.places.length} Places</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-primary-foreground/70 text-base">Starting from</div>
                    <div className="text-3xl font-bold text-accent">{pkg.price}</div>
                  </div>
                </div>
              </div>
              <div className="p-6 md:p-8 grid md:grid-cols-3 gap-8">
                {/* Places */}
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-3">Places Covered</h3>
                  <div className="flex flex-wrap gap-2">
                    {pkg.places.map((p) => (
                      <span key={p} className="bg-travel-cream text-foreground text-sm px-3 py-1.5 rounded-full">{p}</span>
                    ))}
                  </div>
                </div>
                {/* Inclusions/Exclusions */}
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-3">Inclusions</h3>
                  <ul className="space-y-1.5 text-base mb-4">
                    {pkg.inclusions.map((inc) => (
                      <li key={inc} className="flex items-center gap-2 text-muted-foreground">
                        <Check className="w-5 h-5 text-green-500 shrink-0" /> {inc}
                      </li>
                    ))}
                  </ul>
                  <h3 className="font-heading font-semibold text-foreground mb-3">Exclusions</h3>
                  <ul className="space-y-1.5 text-base">
                    {pkg.exclusions.map((exc) => (
                      <li key={exc} className="flex items-center gap-2 text-muted-foreground">
                        <X className="w-5 h-5 text-destructive shrink-0" /> {exc}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Itinerary */}
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-3">Itinerary</h3>
                  <div className="space-y-2">
                    {pkg.itinerary.map((day, j) => (
                      <div key={j} className="text-base text-muted-foreground bg-travel-cream rounded-lg p-3">
                        {day}
                      </div>
                    ))}
                  </div>
                  <a
                    href="https://wa.me/919884845077"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full font-semibold shadow-button hover:brightness-110 transition-all w-full justify-center"
                  >
                    <WhatsAppIcon className="w-5 h-5" /> Book Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default TourPackages;
