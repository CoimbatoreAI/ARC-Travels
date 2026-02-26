import { Clock, MapPin, IndianRupee, ArrowRight, Car } from "lucide-react";
import WhatsAppIcon from "../components/common/WhatsAppIcon";

const trips = [
  {
    name: "Isha Yoga Center",
    desc: "Visit the world-renowned Isha Foundation at the foothills of Velliangiri Mountains. Experience the serene Dhyanalinga and the stunning 112-foot Adiyogi statue.",
    duration: "Full Day (8-10 hours)",
    distance: "35 km from Coimbatore",
    pricing: [
      { vehicle: "Sedan", price: "₹1,800" },
      { vehicle: "SUV", price: "₹2,500" },
    ],
  },
  {
    name: "Black Thunder Theme Park",
    desc: "South India's biggest water and amusement theme park located in Mettupalayam. Perfect for families and groups looking for a fun-filled day.",
    duration: "Full Day (10-12 hours)",
    distance: "42 km from Coimbatore",
    pricing: [
      { vehicle: "Sedan", price: "₹2,000" },
      { vehicle: "SUV", price: "₹2,800" },
    ],
  },
  {
    name: "Siruvani Dam",
    desc: "Known for having the second tastiest water in the world. A scenic drive through lush forests leads to this beautiful dam and reservoir.",
    duration: "Half Day (5-6 hours)",
    distance: "37 km from Coimbatore",
    pricing: [
      { vehicle: "Sedan", price: "₹1,500" },
      { vehicle: "SUV", price: "₹2,200" },
    ],
  },
  {
    name: "Aliyar Dam",
    desc: "A picturesque dam surrounded by hills, offering boating, an aquarium, and a mini theme park. Great for a relaxing day out with family.",
    duration: "Full Day (8-10 hours)",
    distance: "65 km from Coimbatore",
    pricing: [
      { vehicle: "Sedan", price: "₹2,200" },
      { vehicle: "SUV", price: "₹3,000" },
    ],
  },
  {
    name: "Marudhamalai Temple",
    desc: "An ancient hilltop temple dedicated to Lord Murugan, offering panoramic views of Coimbatore. A short yet spiritually enriching trip.",
    duration: "Half Day (3-4 hours)",
    distance: "15 km from Coimbatore",
    pricing: [
      { vehicle: "Sedan", price: "₹1,000" },
      { vehicle: "SUV", price: "₹1,500" },
    ],
  },
];

const OneDayTrips = () => {
  return (
    <>
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">One Day Trips</h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Quick getaways from Coimbatore — perfect for a refreshing day out with family or friends.
          </p>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trips.map((trip, i) => (
            <div key={i} className="bg-card rounded-xl shadow-card hover:shadow-card-hover transition-all overflow-hidden">
              <div className="h-36 bg-gradient-to-br from-primary/10 to-travel-cream flex items-center justify-center">
                <MapPin className="w-12 h-12 text-primary/20" />
              </div>
              <div className="p-6">
                <h2 className="font-heading text-xl font-bold text-foreground mb-2">{trip.name}</h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{trip.desc}</p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {trip.duration}</span>
                  <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {trip.distance}</span>
                </div>
                <div className="space-y-2 mb-4">
                  {trip.pricing.map((p) => (
                    <div key={p.vehicle} className="flex items-center justify-between bg-travel-cream rounded-lg px-3 py-2 text-sm">
                      <span className="flex items-center gap-2 text-foreground">
                        <Car className="w-4 h-4 text-primary" /> {p.vehicle}
                      </span>
                      <span className="font-bold text-secondary">{p.price}</span>
                    </div>
                  ))}
                </div>
                <a
                  href="https://wa.me/919884845077"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] text-white px-5 py-2.5 rounded-full font-semibold text-sm shadow-button hover:brightness-110 transition-all w-full justify-center"
                >
                  <WhatsAppIcon className="w-5 h-5" /> Book This Trip
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default OneDayTrips;
