import { ReactNode } from "react";
import { Clock, MapPin, Check, X, Info } from "lucide-react";
import WhatsAppIcon from "../common/WhatsAppIcon";

interface PackagePricing {
    vehicle: string;
    amount: string;
}

interface PackageLayoutProps {
    title: string;
    subtitle?: string;
    intro?: string;
    highlights?: string[];
    duration: string;
    places: string[];
    inclusions: string[];
    exclusions: string[];
    price: string;
    itinerary: string[];
    pricingTable?: PackagePricing[];
    footerNote?: string;
    children?: ReactNode;
}

const PackageLayout = ({
    title,
    subtitle,
    intro,
    highlights,
    duration,
    places,
    inclusions,
    exclusions,
    price,
    itinerary,
    pricingTable,
    footerNote,
}: PackageLayoutProps) => {
    return (
        <div className="pt-24 pb-16">
            <section className="bg-primary py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground mb-4">{title}</h1>
                    {subtitle && <p className="text-primary-foreground/90 text-xl font-heading mb-4 italic">{subtitle}</p>}
                    <div className="flex justify-center items-center gap-6 text-primary-foreground/80">
                        <span className="flex items-center gap-2"><Clock className="w-5 h-5" /> {duration}</span>
                        <span className="flex items-center gap-2"><MapPin className="w-5 h-5" /> {places.length} Places</span>
                    </div>
                </div>
            </section>

            <section className="py-12 container mx-auto px-4">
                {intro && (
                    <div className="bg-travel-cream rounded-2xl p-8 mb-12 shadow-sm border border-secondary/10">
                        <p className="text-foreground/80 leading-relaxed text-lg italic text-center max-w-4xl mx-auto">
                            "{intro}"
                        </p>
                    </div>
                )}

                {highlights && highlights.length > 0 && (
                    <div className="mb-12">
                        <h2 className="font-heading text-2xl font-bold text-foreground mb-6 text-center">Package Highlights</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {highlights.map((h, i) => (
                                <div key={i} className="flex items-start gap-3 bg-card p-4 rounded-xl shadow-sm border border-border">
                                    <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center shrink-0">
                                        <Check className="w-4 h-4 text-secondary" />
                                    </div>
                                    <p className="text-sm text-muted-foreground">{h}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                <div className="bg-card rounded-2xl shadow-card overflow-hidden">
                    <div className="bg-gradient-to-r from-primary to-travel-green-light p-6 md:p-8 flex flex-col md:flex-row justify-between items-center gap-4">
                        <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground">Package Details</h2>
                        <div className="text-center md:text-right">
                            <div className="text-primary-foreground/70 text-sm">Starting from</div>
                            <div className="text-3xl font-bold text-accent">{price}</div>
                        </div>
                    </div>

                    <div className="p-6 md:p-8 grid md:grid-cols-3 gap-12 border-b border-border">
                        <div>
                            <h3 className="font-heading font-bold text-xl text-foreground mb-4">Places Covered</h3>
                            <div className="flex flex-wrap gap-2">
                                {places.map((p) => (
                                    <span key={p} className="bg-travel-cream text-foreground text-sm px-4 py-2 rounded-full">{p}</span>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="font-heading font-bold text-xl text-foreground mb-4">Inclusions & Exclusions</h3>
                            <div className="space-y-6">
                                <div>
                                    <h4 className="font-semibold text-foreground mb-2">Inclusions:</h4>
                                    <ul className="space-y-2">
                                        {inclusions.map((inc) => (
                                            <li key={inc} className="flex items-center gap-3 text-muted-foreground text-sm">
                                                <Check className="w-4 h-4 text-green-500 shrink-0" /> {inc}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-foreground mb-2">Exclusions:</h4>
                                    <ul className="space-y-2">
                                        {exclusions.map((exc) => (
                                            <li key={exc} className="flex items-center gap-3 text-muted-foreground text-sm">
                                                <X className="w-4 h-4 text-destructive shrink-0" /> {exc}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-heading font-bold text-xl text-foreground mb-4">Itinerary</h3>
                            <div className="space-y-3 mb-8">
                                {itinerary.map((day, i) => (
                                    <div key={i} className="bg-travel-cream p-4 rounded-xl text-sm text-muted-foreground leading-relaxed">
                                        {day}
                                    </div>
                                ))}
                            </div>
                            <a
                                href={`https://wa.me/919884845077?text=${encodeURIComponent(`Hi, I'm interested in the ${title} package.`)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-4 rounded-full font-bold shadow-lg hover:brightness-110 transition-all text-lg"
                            >
                                <WhatsAppIcon className="w-6 h-6" /> Book via WhatsApp
                            </a>
                        </div>
                    </div>

                    {pricingTable && pricingTable.length > 0 && (
                        <div className="p-6 md:p-8">
                            <h3 className="font-heading font-bold text-xl text-foreground mb-6">Package Pricing (By Vehicle)</h3>
                            {/* Desktop View: Table */}
                            <div className="hidden md:block overflow-x-auto rounded-xl border border-border">
                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className="bg-muted/50 border-b border-border">
                                            <th className="p-4 text-left font-heading font-semibold">Vehicle Type</th>
                                            <th className="p-4 text-center font-heading font-semibold">Package Amount</th>
                                            <th className="p-4 text-center font-heading font-semibold">Booking</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {pricingTable.map((p, i) => (
                                            <tr key={i} className="border-b border-border hover:bg-muted/30 transition-colors">
                                                <td className="p-4 font-semibold text-foreground">{p.vehicle}</td>
                                                <td className="p-4 text-center text-secondary font-bold text-lg">{p.amount}</td>
                                                <td className="p-4 text-center">
                                                    <a
                                                        href={`https://wa.me/919884845077?text=${encodeURIComponent(`Hi, I'd like to book the ${title} with a ${p.vehicle}.`)}`}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-1.5 bg-[#25D366] text-white px-4 py-1.5 rounded-full text-xs font-bold hover:brightness-110 transition-all"
                                                    >
                                                        <WhatsAppIcon className="w-3.5 h-3.5" /> Book Now
                                                    </a>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            {/* Mobile View: Cards */}
                            <div className="md:hidden space-y-4">
                                {pricingTable.map((p, i) => (
                                    <div key={i} className="bg-muted/30 p-4 rounded-xl border border-border flex justify-between items-center">
                                        <div>
                                            <h4 className="font-bold text-foreground text-sm uppercase tracking-tight">{p.vehicle}</h4>
                                            <p className="text-secondary font-bold text-xl">{p.amount}</p>
                                        </div>
                                        <a
                                            href={`https://wa.me/919884845077?text=${encodeURIComponent(`Hi, I'd like to book the ${title} with a ${p.vehicle}.`)}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-[#25D366] text-white px-4 py-2 rounded-full text-xs font-bold"
                                        >
                                            Book Now
                                        </a>
                                    </div>
                                ))}
                            </div>
                            {footerNote && (
                                <div className="mt-4 flex items-center gap-2 text-muted-foreground text-xs italic">
                                    <Info className="w-4 h-4 text-secondary shrink-0" />
                                    {footerNote}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default PackageLayout;
