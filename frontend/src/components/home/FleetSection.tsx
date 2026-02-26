import { Users, Wind } from "lucide-react";
import sedanImg from "@/assets/se.png";
import muvImg from "@/assets/er.png";
import suvImg from "@/assets/suv.png";
import vanImg from "@/assets/ur.png";
import InquiryModal from "../common/InquiryModal";
import WhatsAppIcon from "../common/WhatsAppIcon";

const vehicles = [
  {
    name: "Sedan (4+1)",
    type: "Etios / Dzire / Ciaz",
    image: sedanImg,
    seats: "4 Passengers",
    ac: true,
    price: "₹13/km",
    best: "Small Family"
  },
  {
    name: "MUV (6+1)",
    type: "Ertiga / Rumion / Carens",
    image: muvImg,
    seats: "6 Passengers",
    ac: true,
    price: "₹16/km",
    best: "Family Trips"
  },
  {
    name: "Premium SUV (7+1)",
    type: "Innova Crysta / Hycross",
    image: suvImg,
    seats: "7 Passengers",
    ac: true,
    price: "₹22/km",
    best: "Luxury Travel"
  },
  {
    name: "Luxury Van (12+)",
    type: "Force Urbania / Traveller",
    image: vanImg,
    seats: "12 - 26 Seats",
    ac: true,
    price: "Check Tariff",
    best: "Group Tours"
  },
];

const FleetSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Our Fleet</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mt-3">Well-Maintained Vehicles</h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-lg">
            Choose from our extensive range of clean, comfortable, and fully insured vehicles for any journey.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {vehicles.map((v, i) => (
            <div key={i} className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 group hover:-translate-y-2 border border-border/50">
              <div className="h-56 bg-gradient-to-br from-secondary/5 to-primary/5 flex items-center justify-center p-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img
                  src={v.image}
                  alt={v.name}
                  className="w-full h-full object-contain drop-shadow-lg group-hover:scale-110 group-hover:-rotate-2 transition-all duration-500 relative z-10"
                />
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-heading font-bold text-foreground text-xl group-hover:text-secondary transition-colors">{v.name}</h3>
                    <p className="text-muted-foreground text-xs mt-1 font-medium">{v.type}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 text-xs text-muted-foreground mb-6">
                  <span className="flex items-center gap-1.5 bg-secondary/10 px-2.5 py-1.5 rounded-md text-primary font-semibold">
                    <Users className="w-3.5 h-3.5" /> {v.seats}
                  </span>
                  <span className="flex items-center gap-1.5 bg-primary/10 px-2.5 py-1.5 rounded-md text-primary font-semibold">
                    AC
                  </span>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <div>
                    <span className="text-[10px] text-muted-foreground uppercase tracking-wide block mb-0.5">Starting at</span>
                    <span className="text-lg font-bold text-foreground">{v.price}</span>
                  </div>
                  <InquiryModal
                    type="taxi"
                    defaultVehicle={v.name}
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

export default FleetSection;
