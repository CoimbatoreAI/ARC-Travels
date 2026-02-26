import { useState } from "react";
import { Calendar, MapPin, Car, ArrowRight } from "lucide-react";
import WhatsAppIcon from "../common/WhatsAppIcon";

const carTypes = ["Sedan (4+1)", "MUV (6+1)", "Premium SUV (7+1)", "Tempo Traveller", "Luxury Van (Urbania)", "Mini Bus"];

const BookingForm = () => {
  const [form, setForm] = useState({ pickup: "", drop: "", date: "", car: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi! I want to book a taxi.\nPickup: ${form.pickup}\nDrop: ${form.drop}\nDate: ${form.date}\nCar: ${form.car}`;
    window.open(`https://wa.me/919884845077?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section className="relative -mt-6 md:-mt-16 z-20 container mx-auto px-4">
      <div className="bg-card rounded-2xl shadow-card p-6 md:p-8 border border-border/50">
        <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-6 text-center">
          Book Your Ride Instantly
        </h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 md:gap-3 items-end">
          <div className="sm:col-span-1">
            <label className="text-sm font-medium text-muted-foreground mb-1.5 block">Pickup Location</label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Enter pickup"
                value={form.pickup}
                onChange={(e) => setForm({ ...form, pickup: e.target.value })}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm focus:ring-2 focus:ring-secondary focus:border-transparent outline-none"
                required
              />
            </div>
          </div>
          <div className="sm:col-span-1">
            <label className="text-sm font-medium text-muted-foreground mb-1.5 block">Drop Location</label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Enter drop"
                value={form.drop}
                onChange={(e) => setForm({ ...form, drop: e.target.value })}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm focus:ring-2 focus:ring-secondary focus:border-transparent outline-none"
                required
              />
            </div>
          </div>
          <div className="sm:col-span-1">
            <label className="text-sm font-medium text-muted-foreground mb-1.5 block">Travel Date</label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="date"
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm focus:ring-2 focus:ring-secondary focus:border-transparent outline-none"
                required
              />
            </div>
          </div>
          <div className="sm:col-span-1">
            <label className="text-sm font-medium text-muted-foreground mb-1.5 block">Car Type</label>
            <div className="relative">
              <Car className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <select
                value={form.car}
                onChange={(e) => setForm({ ...form, car: e.target.value })}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm focus:ring-2 focus:ring-secondary focus:border-transparent outline-none appearance-none"
                required
              >
                <option value="">Select car</option>
                {carTypes.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="sm:col-span-2 md:col-span-1 mt-4 md:mt-0">
            <button
              type="submit"
              className="w-full bg-[#25D366] text-white px-6 py-3 rounded-lg font-bold shadow-button hover:brightness-110 transition-all flex items-center justify-center gap-2"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Book Now
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default BookingForm;
