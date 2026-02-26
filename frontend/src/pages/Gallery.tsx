import { useState } from "react";
import { X } from "lucide-react";
import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import g3 from "@/assets/g3.jpg";
import g4 from "@/assets/g4.jpg";
import g5 from "@/assets/g5.jpg";
import g6 from "@/assets/g6.jpg";
import g7 from "@/assets/g7.jpg";
import g8 from "@/assets/g8.jpg";
import g9 from "@/assets/g9.jpg";
import g10 from "@/assets/g10.jpg";
import g11 from "@/assets/g11.jpg";
import g12 from "@/assets/g12.jpg";
import g13 from "@/assets/g13.jpg";
import g14 from "@/assets/g14.jpg";
import g15 from "@/assets/g15.jpg";
import g16 from "@/assets/g16.jpg";
import g17 from "@/assets/g17.jpg";
import g18 from "@/assets/g18.jpg";
import g19 from "@/assets/g19.jpg";
import g20 from "@/assets/g20.jpg";
import g21 from "@/assets/g21.jpg";
import g22 from "@/assets/g22.jpg";
import g23 from "@/assets/g23.jpg";

const images = [
  { src: g1, alt: "Happy Travellers" },
  { src: g2, alt: "Scenic Destinations" },
  { src: g3, alt: "Coimbatore ARC Moments" },
  { src: g4, alt: "Travel Diaries" },
  { src: g5, alt: "Memorable Trips" },
  { src: g6, alt: "Customer Experiences" },
  { src: g7, alt: "Beautiful Landscapes" },
  { src: g8, alt: "Tour Highlights" },
  { src: g9, alt: "Journey Memories" },
  { src: g10, alt: "Group Tours" },
  { src: g11, alt: "Family Vacations" },
  { src: g12, alt: "Honeymoon Specials" },
  { src: g13, alt: "Temple Visits" },
  { src: g14, alt: "Hill Station Vibes" },
  { src: g15, alt: "Road Trip Fun" },
  { src: g16, alt: "Safe Travel" },
  { src: g17, alt: "Luxury Fleet" },
  { src: g18, alt: "Happy Faces" },
  { src: g19, alt: "Travel Stories" },
  { src: g20, alt: "Best Service" },
  { src: g21, alt: "Coimbatore Tourism" },
  { src: g22, alt: "South India Tours" },
  { src: g23, alt: "Unforgettable Moments" },
];

const Gallery = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <>
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Gallery</h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Glimpses of journeys, destinations, and happy travellers.
          </p>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
          {images.map((img, i) => (
            <div key={i} className="break-inside-avoid mb-4">
              <button
                onClick={() => setSelected(i)}
                className="group relative overflow-hidden rounded-xl w-full shadow-card hover:shadow-card-hover transition-all block"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/30 transition-colors flex items-center justify-center">
                  <span className="text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity font-heading font-semibold text-sm">
                    View
                  </span>
                </div>
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-[100] bg-foreground/90 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelected(null)}
        >
          <button
            className="absolute top-4 right-4 text-primary-foreground hover:text-secondary transition-colors"
            onClick={() => setSelected(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={images[selected].src}
            alt={images[selected].alt}
            className="max-w-full max-h-[85vh] object-contain rounded-lg animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};

export default Gallery;
