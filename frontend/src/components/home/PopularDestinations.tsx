import { Link } from "react-router-dom";
import { MapPin, Clock, Star } from "lucide-react";
import ootyImg from "@/assets/ooty.jpg";
import kodaiImg from "@/assets/kodaikanal.jpg";
import munnarImg from "@/assets/munnar.jpg";
import valparaiImg from "@/assets/valparai.jpg";
import cbeImg from "@/assets/coimbatore.jpg";
import InquiryModal from "../common/InquiryModal";
import WhatsAppIcon from "../common/WhatsAppIcon";

const destinations = [
  {
    name: "Ooty",
    image: ootyImg,
    duration: "2N/3D",
    rating: "4.8",
    price: "₹4,999",
    desc: "Queen of Hill Stations",
    link: "/tour-packages/two-days"
  },
  {
    name: "Kodaikanal",
    image: kodaiImg,
    duration: "2N/3D",
    rating: "4.7",
    price: "₹5,499",
    desc: "Princess of Hill Stations",
    link: "/tour-packages/two-days"
  },
  {
    name: "Munnar",
    image: munnarImg,
    duration: "2N/3D",
    rating: "4.9",
    price: "₹5,999",
    desc: "Tea Garden Paradise",
    link: "/tour-packages/three-days"
  },
  {
    name: "Valparai",
    image: valparaiImg,
    duration: "1N/2D",
    rating: "4.6",
    price: "₹3,499",
    desc: "Hidden Gem of Western Ghats",
    link: "/tour-packages/two-days"
  },
  {
    name: "Coimbatore",
    image: cbeImg,
    duration: "1 Day",
    rating: "4.5",
    price: "₹1,999",
    desc: "City Sightseeing Tour",
    link: "/tour-packages/one-day"
  },
];

const PopularDestinations = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Popular Destinations</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mt-3">Trending Tour Packages</h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-lg">
            Discover the most sought-after destinations from Coimbatore. Handcrafted itineraries for every traveller.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {destinations.map((d, i) => (
            <div
              key={i}
              className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 border border-border/50 flex flex-col"
            >
              <Link to={d.link} className="h-48 overflow-hidden relative block">
                <img
                  src={d.image}
                  alt={d.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-bold flex items-center gap-1 shadow-sm text-primary">
                  <Star className="w-3 h-3 fill-travel-gold text-travel-gold" /> {d.rating}
                </div>
              </Link>

              <div className="p-5 flex flex-col flex-1">
                <Link to={d.link}>
                  <h3 className="font-heading font-bold text-xl text-foreground mb-1 group-hover:text-secondary transition-colors">{d.name}</h3>
                </Link>
                <p className="text-muted-foreground text-xs mb-4 line-clamp-1">{d.desc}</p>

                <div className="flex items-center justify-between text-xs border-b border-border/50 pb-3 mb-3">
                  <span className="flex items-center gap-1.5 text-muted-foreground font-medium">
                    <Clock className="w-3.5 h-3.5 text-secondary" /> {d.duration}
                  </span>
                  <span className="flex items-center gap-1 text-primary font-medium">
                    <MapPin className="w-3.5 h-3.5 text-secondary" /> From Coimbatore
                  </span>
                </div>

                <div className="flex items-center justify-between mt-auto">
                  <div>
                    <span className="text-xs text-muted-foreground block">Starting from</span>
                    <span className="text-secondary font-bold text-lg">{d.price}</span>
                  </div>

                  <InquiryModal
                    type="tour"
                    defaultPackage={d.name}
                    trigger={
                      <button className="bg-[#25D366] text-white text-xs font-bold px-4 py-2 rounded-full flex items-center gap-1.5 hover:bg-[#128C7E] transition-all shadow-sm hover:shadow-md">
                        <WhatsAppIcon className="w-3.5 h-3.5 text-white fill-current" />
                        Inquiry
                      </button>
                    }
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;
