import { ArrowRight } from "lucide-react";
import InquiryModal from "../common/InquiryModal";
import WhatsAppIcon from "../common/WhatsAppIcon";

const CTABanner = () => {
  return (
    <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">Ready to Start Your Journey?</h2>
        <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
          Book your taxi or tour package today with Coimbatore's most trusted travel partner.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <InquiryModal
            trigger={
              <button className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-secondary hover:text-white transition-all shadow-lg hover:scale-105">
                <WhatsAppIcon className="w-5 h-5 fill-current" />
                Get a Quote
              </button>
            }
            type="general"
          />
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
