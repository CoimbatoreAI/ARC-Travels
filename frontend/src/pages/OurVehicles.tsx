import { Users, Phone } from "lucide-react";
import WhatsAppIcon from "../components/common/WhatsAppIcon";
import sedanImg from "@/assets/se.png";
import muvImg from "@/assets/er.png";
import ticImg from "@/assets/tic.png";
import ttImg from "@/assets/tt.png";
import urImg from "@/assets/ur.png";
import mbImg from "@/assets/mb.png";

const vehicles = [
    {
        name: "Toyota Etios / Swift Dzire / Ciaz",
        seats: "4+1",
        category: "Sedan",
        image: sedanImg
    },
    {
        name: "Maruthi Ertiga / Toyota Rumion",
        seats: "6+1",
        category: "MUV",
        image: muvImg
    },
    {
        name: "Toyota Innova Crysta",
        seats: "7+1",
        category: "Premium SUV",
        image: ticImg
    },
    {
        name: "Tempo Traveller",
        seats: "12+1, 17+1, 18+1",
        category: "Van",
        image: ttImg
    },
    {
        name: "Urbania",
        seats: "12+1, 16+1",
        category: "Luxury Van",
        image: urImg
    },
    {
        name: "Mini Bus",
        seats: "20+1, 35+1",
        category: "Bus",
        image: mbImg
    },
];

const OurVehicles = () => {
    return (
        <>
            <section className="bg-primary pt-32 pb-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Our Vehicles</h1>
                    <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
                        Choose from our wide range of well-maintained vehicles for a comfortable and safe journey.
                    </p>
                </div>
            </section>

            <section className="py-16 container mx-auto px-4">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {vehicles.map((vehicle, index) => (
                        <div key={index} className="bg-card rounded-2xl shadow-card p-6 border border-border/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                            <div className="h-52 bg-gradient-to-b from-secondary/5 to-white rounded-xl p-4 flex items-center justify-center mb-6 relative overflow-hidden border border-border/30">
                                <img
                                    src={vehicle.image}
                                    alt={vehicle.name}
                                    className="w-full h-full object-contain drop-shadow-lg hover:scale-110 transition-transform duration-500"
                                />
                                <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-primary text-[10px] font-bold px-2 py-1 rounded shadow-sm uppercase tracking-wider">
                                    {vehicle.category}
                                </span>
                            </div>

                            <h3 className="font-heading text-xl font-bold text-foreground mb-3 min-h-[56px] flex items-center leading-tight">
                                {vehicle.name}
                            </h3>

                            <div className="flex items-center gap-2 text-muted-foreground mb-6 bg-muted/30 p-3 rounded-lg">
                                <Users className="w-5 h-5 text-secondary" />
                                <span className="font-medium text-sm">Seating Capacity:</span>
                                <span className="text-foreground font-bold">{vehicle.seats}</span>
                            </div>

                            <div className="grid gap-3">
                                <a
                                    href={`https://wa.me/919655975077?text=${encodeURIComponent(`I'm interested in booking ${vehicle.name}`)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-xl font-bold hover:brightness-110 transition-all shadow-md hover:shadow-lg"
                                >
                                    <WhatsAppIcon className="w-5 h-5 fill-current" /> Book via WhatsApp
                                </a>
                                <a
                                    href="tel:9655975077"
                                    className="w-full flex items-center justify-center gap-2 bg-primary text-white py-3 rounded-xl font-bold hover:bg-primary/90 transition-all shadow-md"
                                >
                                    <Phone className="w-5 h-5" /> Call to Book
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default OurVehicles;
