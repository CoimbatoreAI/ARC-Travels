import { useState } from "react";
import { Phone, MapPin, Clock, Send, Mail } from "lucide-react";
import WhatsAppIcon from "../components/common/WhatsAppIcon";
import ReviewForm from "../components/common/ReviewForm";

const Contact = () => {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi! I'm ${form.name}.\nPhone: ${form.phone}\nEmail: ${form.email}\nMessage: ${form.message}`;
    window.open(`https://wa.me/919884845077?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <>
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Contact Us</h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Get in touch with us for bookings, enquiries, or custom travel plans.
          </p>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Get In Touch</h2>
            <div className="space-y-5 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground">Phone Numbers</h3>
                  <a href="tel:9655975077" className="text-muted-foreground hover:text-secondary transition-colors block">+91 9655975077</a>
                  <a href="tel:9884845077" className="text-muted-foreground hover:text-secondary transition-colors block">+91 9884845077</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground">Office Address</h3>
                  <p className="text-muted-foreground text-base">
                    50/3, Rangasamy Gounden Pudhur,<br />
                    Mahalaiamman Kovil Street,<br />
                    Avinashi Road, RG Pudur,<br />
                    Coimbatore – 641062
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground">Working Hours</h3>
                  <p className="text-muted-foreground text-base">24/7 — We're always available for you</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground">Email Support</h3>
                  <a href="mailto:support@coimbatore24x7calltaxi.com" className="text-muted-foreground hover:text-secondary transition-colors block">
                    support@coimbatore24x7calltaxi.com
                  </a>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <a
                href="tel:9884845077"
                className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-full font-semibold shadow-button hover:brightness-110 transition-all"
              >
                <Phone className="w-4 h-4" /> Call Now
              </a>
              <a
                href="https://wa.me/919884845077"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full font-semibold hover:brightness-110 transition-all"
              >
                <WhatsAppIcon className="w-5 h-5" /> WhatsApp
              </a>
            </div>

            {/* Map */}
            <div className="mt-8 rounded-xl overflow-hidden shadow-card">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14888.115959035453!2d77.0359357421071!3d11.055230876526132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba857d33b9f77b5%3A0xda13456ba14121c9!2sRangasamy%20Gounden%20Pudur%2C%20Coimbatore%2C%20Tamil%20Nadu!5e1!3m2!1sen!2sin!4v1771321013566!5m2!1sen!2sin"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
              />
            </div>
          </div>

          {/* Enquiry Form */}
          <div className="bg-card rounded-2xl shadow-card p-8">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Send an Enquiry</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="text-base font-medium text-muted-foreground mb-1.5 block">Your Name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-base focus:ring-2 focus:ring-secondary focus:border-transparent outline-none"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label className="text-base font-medium text-muted-foreground mb-1.5 block">Phone Number</label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-base focus:ring-2 focus:ring-secondary focus:border-transparent outline-none"
                  placeholder="Enter phone number"
                  required
                />
              </div>
              <div>
                <label className="text-base font-medium text-muted-foreground mb-1.5 block">Email Address</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-base focus:ring-2 focus:ring-secondary focus:border-transparent outline-none"
                  placeholder="Enter email"
                />
              </div>
              <div>
                <label className="text-base font-medium text-muted-foreground mb-1.5 block">Your Message</label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-base focus:ring-2 focus:ring-secondary focus:border-transparent outline-none resize-none"
                  placeholder="Tell us about your travel plans..."
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#25D366] text-white px-6 py-3 rounded-lg font-semibold shadow-button hover:brightness-110 transition-all flex items-center justify-center gap-2"
              >
                <WhatsAppIcon className="w-4 h-4" /> Send Enquiry via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="py-16 bg-travel-cream">
        <div className="container mx-auto px-4 max-w-4xl">
          <ReviewForm />
        </div>
      </section>
    </>
  );
};

export default Contact;
