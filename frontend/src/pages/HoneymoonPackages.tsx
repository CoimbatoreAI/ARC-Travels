import { Heart, Clock, MapPin, ArrowRight, Star } from "lucide-react";
import WhatsAppIcon from "../components/common/WhatsAppIcon";

const packages = [
  {
    name: "Ooty Honeymoon Escape",
    duration: "2 Nights / 3 Days",
    price: "₹6,999",
    highlights: ["Romantic boat ride on Ooty Lake", "Candlelight dinner arrangement", "Private viewpoint visits", "Rose Garden stroll", "Tea plantation drive"],
    places: ["Ooty Lake", "Botanical Gardens", "Doddabetta", "Rose Garden", "Pine Forest"],
  },
  {
    name: "Kodaikanal Romance Retreat",
    duration: "2 Nights / 3 Days",
    price: "₹7,499",
    highlights: ["Couple boat ride on Kodai Lake", "Misty morning walk at Coaker's Walk", "Sunset at Green Valley View", "Private sightseeing", "Scenic photography spots"],
    places: ["Kodai Lake", "Pillar Rocks", "Coaker's Walk", "Silver Cascade", "Green Valley"],
  },
  {
    name: "Munnar Bliss Honeymoon",
    duration: "3 Nights / 4 Days",
    price: "₹8,999",
    highlights: ["Mattupetty Dam couples' boating", "Spice garden walk", "Sunrise at Top Station", "Tea tasting experience", "Waterfall visits"],
    places: ["Mattupetty Dam", "Echo Point", "Top Station", "Tea Museum", "Eravikulam"],
  },
  {
    name: "Special Honeymoon Roundtrip",
    duration: "Customizable Day Wise",
    price: "₹3,750 / Day",
    highlights: ["Sedan Vehicle (Etios/Swift Dzire)", "200 KM Free per day", "Inclusive of Parking & Toll", "Inclusive of State Permit", "Comfortable 4+1 Seating"],
    places: ["Any Destination", "Round Trip Service"],
    isSpecial: true,
    extraInfo: "Extra KM: ₹13/km after 200km"
  },
];

const HoneymoonPackages = () => {
  return (
    <>
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4 text-center">
          <Heart className="w-12 h-12 text-secondary mx-auto mb-4" />
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Honeymoon Packages</h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Begin your forever with a romantic getaway. Specially curated honeymoon trips from Coimbatore.
          </p>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages.map((pkg, i) => (
            <div key={i} className="bg-card rounded-2xl shadow-card overflow-hidden hover:shadow-card-hover transition-all group">
              <div className="h-48 bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center relative">
                <Heart className="w-16 h-16 text-secondary/30" />
                <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full">
                  Romantic
                </div>
              </div>
              <div className="p-6">
                <h2 className="font-heading text-xl font-bold text-foreground mb-2">{pkg.name}</h2>
                <div className="flex items-center gap-4 text-base text-muted-foreground mb-4">
                  <span className="flex items-center gap-1"><Clock className="w-5 h-5" /> {pkg.duration}</span>
                  <span className="flex items-center gap-1"><MapPin className="w-5 h-5" /> {pkg.places.length} Places</span>
                </div>

                <h4 className="font-heading font-semibold text-base text-foreground mb-2">Highlights:</h4>
                <ul className="space-y-1.5 mb-4">
                  {pkg.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-base text-muted-foreground">
                      <Star className="w-4 h-4 text-accent shrink-0" /> {h}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div>
                    <div className="text-sm text-muted-foreground">{pkg.price.includes('/') ? 'Rate' : 'Starting from'}</div>
                    <div className="text-2xl font-bold text-secondary">{pkg.price}</div>
                    {'extraInfo' in pkg && <div className="text-[10px] text-muted-foreground mt-1 font-medium">{pkg.extraInfo}</div>}
                  </div>
                  <a
                    href="https://wa.me/919884845077"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#25D366] text-white px-5 py-2.5 rounded-full font-semibold text-sm shadow-button hover:brightness-110 transition-all"
                  >
                    <WhatsAppIcon className="w-4 h-4" /> Book
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

export default HoneymoonPackages;
