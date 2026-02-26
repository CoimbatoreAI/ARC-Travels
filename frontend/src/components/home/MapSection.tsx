import { MapPin, Phone, Clock } from "lucide-react";

const MapSection = () => {
    return (
        <section className="py-16 md:py-24 bg-travel-cream overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="bg-card rounded-3xl shadow-xl overflow-hidden border border-border">
                    <div className="grid lg:grid-cols-2">
                        {/* Info Side */}
                        <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-primary text-primary-foreground relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
                            <div className="relative z-10">
                                <span className="text-secondary font-semibold text-sm uppercase tracking-widest mb-3 block">Find Us</span>
                                <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">Our Office Location</h2>
                                <p className="text-primary-foreground/70 text-lg mb-10 max-w-md">
                                    Visit us in the heart of Coimbatore for personalized travel consultations and booking enquiries.
                                </p>

                                <div className="space-y-8">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-2xl bg-secondary/20 flex items-center justify-center shrink-0 border border-secondary/30">
                                            <MapPin className="w-6 h-6 text-secondary" />
                                        </div>
                                        <div>
                                            <h3 className="font-heading font-bold text-xl mb-1 text-accent">Office Address</h3>
                                            <p className="text-primary-foreground/80 leading-relaxed">
                                                50/3, Rangasamy Gounden Pudhur,<br />
                                                Mahalaiamman Kovil Street,<br />
                                                Avinashi Road, RG Pudur,<br />
                                                Coimbatore – 641062
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-2xl bg-secondary/20 flex items-center justify-center shrink-0 border border-secondary/30">
                                            <Phone className="w-6 h-6 text-secondary" />
                                        </div>
                                        <div>
                                            <h3 className="font-heading font-bold text-xl mb-1 text-accent">Contact Support</h3>
                                            <div className="flex flex-col gap-1 text-primary-foreground/80">
                                                <a href="tel:9655975077" className="hover:text-secondary transition-colors underline decoration-secondary/30 underline-offset-4">+91 96559 75077</a>
                                                <a href="tel:9884845077" className="hover:text-secondary transition-colors underline decoration-secondary/30 underline-offset-4">+91 98848 45077</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-2xl bg-secondary/20 flex items-center justify-center shrink-0 border border-secondary/30">
                                            <Clock className="w-6 h-6 text-secondary" />
                                        </div>
                                        <div>
                                            <h3 className="font-heading font-bold text-xl mb-1 text-accent">Service Hours</h3>
                                            <p className="text-primary-foreground/80">24/7 — Round the Clock Availability</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map Side */}
                        <div className="h-[400px] lg:h-auto min-h-[450px] relative">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14888.115959035453!2d77.0359357421071!3d11.055230876526132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba857d33b9f77b5%3A0xda13456ba14121c9!2sRangasamy%20Gounden%20Pudur%2C%20Coimbatore%2C%20Tamil%20Nadu!5e1!3m2!1sen!2sin!4v1771321013566!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Office Location"
                                className="filter grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
                            />
                            <div className="absolute bottom-6 left-6 right-6 lg:hidden">
                                <a
                                    href="https://www.google.com/maps/search/?api=1&query=50/3,+Rangasamy+Gounden+Pudhur,+Mahalaiamman+Kovil+Street,+Avinashi+Road,+RG+Pudur,+Coimbatore+641062"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full bg-secondary text-secondary-foreground py-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg"
                                >
                                    <MapPin className="w-5 h-5" /> Get Directions
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MapSection;
