import { Link } from "react-router-dom";
import tsIcon from "@/assets/ts.png";
import tpIcon from "@/assets/tp.png";
import hmpIcon from "@/assets/hmp.png";
import tpaIcon from "@/assets/tpa.png";

const services = [
  {
    image: tsIcon,
    title: "Taxi Services",
    desc: "Reliable local rentals, airport transfers, and outstation taxi services with transparent billing and experienced drivers.",
    link: "/tariff",
  },
  {
    image: tpIcon,
    title: "Tour Packages",
    desc: "Comprehensive tour packages covering South India's best destinations. From spiritual journeys to hill station retreats.",
    link: "/tour-packages",
  },
  {
    image: hmpIcon,
    title: "Honeymoon Packages",
    desc: "Romantic getaways to Ooty, Kodaikanal, Munnar, and Coorg designed for couples, with private transfers and scenic stays.",
    link: "/tour-packages",
  },
  {
    image: tpaIcon,
    title: "One Day Trips",
    desc: "Quick and refreshing one-day tours to nearby attractions like Malampuzha Dam, Isha Yoga Center, and historical temples.",
    link: "/tour-packages/one-day",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-travel-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">What We Offer</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-3">Our Premium Services</h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-xl">
            From daily commutes to dream vacations — we cover every mile of your journey with comfort and care.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <Link
              key={i}
              to={s.link}
              className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 border border-border/50"
            >
              <div className="w-20 h-20 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors p-3 mx-auto sm:mx-0">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-contain drop-shadow-sm group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="font-heading font-bold text-2xl text-foreground mb-3">{s.title}</h3>
              <p className="text-muted-foreground text-base leading-relaxed">{s.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
