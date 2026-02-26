import { Shield, Clock, Award, HeadphonesIcon, IndianRupee, Users } from "lucide-react";

const reasons = [
  { icon: Shield, title: "Safe & Secure", desc: "Verified drivers and well-maintained vehicles for your safety" },
  { icon: Clock, title: "24/7 Available", desc: "Round-the-clock service — book anytime, travel anytime" },
  { icon: Award, title: "10+ Years Experience", desc: "A decade of trusted travel service in Coimbatore" },
  { icon: HeadphonesIcon, title: "Dedicated Support", desc: "Personal trip coordinators for seamless travel" },
  { icon: IndianRupee, title: "Best Pricing", desc: "Competitive rates with no hidden charges" },
  { icon: Users, title: "5000+ Happy Travellers", desc: "Join thousands of satisfied customers" },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 md:py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mt-2">
            The ARC Travels Advantage
          </h2>
          <p className="text-primary-foreground/70 mt-3 max-w-xl mx-auto">
            We go the extra mile to ensure your journey is comfortable, affordable, and memorable.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <div
              key={i}
              className="flex items-start gap-4 bg-primary-foreground/5 rounded-xl p-6 border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center shrink-0">
                <r.icon className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-primary-foreground mb-1">{r.title}</h3>
                <p className="text-primary-foreground/70 text-sm">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
