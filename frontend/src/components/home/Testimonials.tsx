import { Star, Quote } from "lucide-react";
import { useReviews } from "@/hooks/useReviews";
import { motion } from "framer-motion";

const Testimonials = () => {
  const { reviews } = useReviews();

  // Create a looped array for the auto-slide effect
  const loopedReviews = [...reviews, ...reviews];

  return (
    <section className="py-20 md:py-28 bg-travel-cream overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <div className="text-center">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider bg-secondary/10 px-4 py-1.5 rounded-full inline-block mb-4">
            Guest Experiences
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
            What Our Travellers Say
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            Real stories from real travelers who explored South India with Coimbatore ARC Travels.
          </p>
        </div>
      </div>

      {/* Auto-sliding track */}
      <div className="flex relative mt-10">
        <motion.div
          className="flex gap-6 px-4"
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ width: "fit-content" }}
        >
          {loopedReviews.map((t, i) => (
            <div
              key={i}
              className="bg-card rounded-3xl p-8 shadow-card border border-border/50 min-w-[320px] md:min-w-[400px] flex flex-col justify-between group hover:border-secondary/30 transition-colors"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star
                        key={j}
                        className={`w-5 h-5 ${j < t.rating ? "fill-accent text-accent" : "text-border"
                          }`}
                      />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-primary/10 group-hover:text-primary/20 transition-colors" />
                </div>
                <p className="text-foreground/80 italic text-lg leading-relaxed mb-8">
                  "{t.text}"
                </p>
              </div>
              <div className="flex items-center gap-4 border-t border-border pt-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center font-heading font-bold text-primary text-xl">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-heading font-bold text-foreground">{t.name}</div>
                  <div className="text-sm text-secondary font-medium">{t.trip}</div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="container mx-auto px-4 mt-16 text-center">
        <div className="inline-flex items-center gap-4 p-1 pl-4 bg-white/50 border border-border/10 rounded-full text-sm">
          <span className="text-muted-foreground mr-1">Join our happy travelers?</span>
          <a
            href="/reviews"
            className="bg-primary text-primary-foreground px-6 py-2 rounded-full font-bold hover:brightness-110 transition-all shadow-button text-xs"
          >
            Leave a Review
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
