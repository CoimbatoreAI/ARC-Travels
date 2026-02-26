import WhatsAppIcon from "../common/WhatsAppIcon";

const WhatsAppWidget = () => {
  const phone = "919884845077";
  const message = encodeURIComponent("Hi! I'm interested in booking a taxi/tour package. Please share details.");

  return (
    <>
      {/* WhatsApp floating button */}
      <a
        href={`https://wa.me/${phone}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-3 right-3 md:bottom-6 md:right-6 z-50 w-11 h-11 md:w-14 md:h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform animate-pulse-glow"
        aria-label="Chat on WhatsApp"
      >
        <WhatsAppIcon className="w-5 h-5 md:w-8 md:h-8 text-white" />
      </a>

      {/* Floating call button (mobile) */}
      <a
        href="tel:9884845077"
        className="fixed bottom-3 left-3 z-50 w-11 h-11 bg-secondary rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform md:hidden"
        aria-label="Call us"
      >
        <svg className="w-5 h-5 text-secondary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      </a>
    </>
  );
};

export default WhatsAppWidget;
