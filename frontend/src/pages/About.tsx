import { Shield, Award, Users, Heart } from "lucide-react";
import aboutImg from "@/assets/ab.jpg";
import ReviewForm from "../components/common/ReviewForm";

const About = () => {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">About Us</h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Coimbatore ARC Travels — your reliable travel companion since 2014.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Our Story</span>
              <h2 className="font-heading text-3xl font-bold text-foreground mt-2 mb-4">A Decade of Trusted Travel</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Founded with a vision to make travel from Coimbatore accessible, affordable, and enjoyable, ARC Travels has grown from a modest taxi service into one of the city's most trusted travel agencies.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We specialize in outstation taxi services, curated tour packages to South India's finest destinations, romantic honeymoon getaways, and reliable local car rentals. Every trip is planned with care, ensuring our travellers experience comfort, safety, and value for money.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With a fleet of well-maintained vehicles and a team of experienced, courteous drivers, we've served over 5,000 happy travellers and continue to set new standards in the travel industry.
              </p>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-secondary/10 rounded-2xl transform rotate-3 transition-transform group-hover:rotate-6"></div>
              <img
                src={aboutImg}
                alt="ARC Travels Fleet"
                className="rounded-2xl shadow-xl w-full h-[350px] object-cover relative z-10"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Shield, label: "Safe Journeys", value: "100%" },
              { icon: Award, label: "Years Active", value: "10+" },
              { icon: Users, label: "Happy Travellers", value: "5000+" },
              { icon: Heart, label: "Repeat Customers", value: "80%" },
            ].map((s, i) => (
              <div key={i} className="bg-travel-cream rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <s.icon className="w-8 h-8 text-secondary mx-auto mb-3" />
                <div className="font-heading text-3xl font-bold text-foreground mb-1">{s.value}</div>
                <div className="text-muted-foreground text-base font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-travel-cream">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-xl p-8 shadow-card">
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">Our Mission</h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                To provide world-class travel experiences at affordable prices, ensuring every journey from Coimbatore is safe, comfortable, and memorable. We aim to be the first choice for travellers seeking reliable transportation and thoughtfully crafted tour packages.
              </p>
            </div>
            <div className="bg-card rounded-xl p-8 shadow-card">
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">Our Vision</h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                To become South India's leading travel and taxi service provider, known for exceptional customer service, innovative travel solutions, and an unwavering commitment to passenger safety and satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <ReviewForm />
        </div>
      </section>
    </>
  );
};

export default About;
