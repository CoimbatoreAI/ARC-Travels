import { ReactNode } from "react";
import { Phone, CheckCircle2, Info } from "lucide-react";
import WhatsAppIcon from "../common/WhatsAppIcon";

interface TariffPricing {
    vehicle: string;
    amount: string;
    extraHour?: string;
    extraKm?: string;
    driverBata?: string;
    freeKm?: string;
    inclusions?: string;
}

interface TariffLayoutProps {
    title: string;
    subtitle: string;
    intro?: string;
    features: string[];
    pricingTables: {
        title?: string;
        description?: string;
        columns: string[];
        data: TariffPricing[];
        footerNote?: string;
    }[];
    children?: ReactNode;
    generalNote?: string;
}

const TariffLayout = ({ title, subtitle, intro, features, pricingTables, generalNote }: TariffLayoutProps) => {
    return (
        <div className="pt-24 pb-16">
            <section className="bg-primary py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground mb-4">{title}</h1>
                    <p className="text-primary-foreground/90 text-lg max-w-2xl mx-auto italic">{subtitle}</p>
                </div>
            </section>

            <section className="py-12 container mx-auto px-4">
                <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-12">
                        {intro && (
                            <div className="bg-travel-cream rounded-2xl p-6 shadow-sm border border-secondary/10">
                                <p className="text-foreground/80 leading-relaxed">{intro}</p>
                            </div>
                        )}

                        {pricingTables.map((table, index) => (
                            <div key={index} className="bg-card rounded-2xl shadow-card overflow-hidden border border-border">
                                {table.title && (
                                    <div className="bg-secondary p-4 text-secondary-foreground font-heading font-bold text-center text-xl">
                                        {table.title}
                                    </div>
                                )}
                                {table.description && (
                                    <div className="p-4 bg-muted/30 text-center text-sm text-muted-foreground border-b border-border">
                                        {table.description}
                                    </div>
                                )}
                                {/* Desktop View: Table */}
                                <div className="hidden md:block overflow-x-auto">
                                    <table className="w-full text-base">
                                        <thead>
                                            <tr className="bg-muted/50 border-b border-border">
                                                {table.columns.map((col, i) => (
                                                    <th key={i} className="p-4 text-left font-heading font-semibold whitespace-nowrap">{col}</th>
                                                ))}
                                                <th className="p-4 text-center font-heading font-semibold">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {table.data.map((item, i) => (
                                                <tr key={i} className="border-b border-border hover:bg-muted/30 transition-colors">
                                                    <td className="p-4 font-semibold text-foreground">{item.vehicle}</td>
                                                    <td className="p-4 text-secondary font-bold text-base">{item.amount}</td>
                                                    {item.extraHour && <td className="p-4 text-muted-foreground">{item.extraHour}</td>}
                                                    {item.freeKm && <td className="p-4 text-muted-foreground">{item.freeKm}</td>}
                                                    {item.extraKm && <td className="p-4 text-muted-foreground">{item.extraKm}</td>}
                                                    {item.driverBata && <td className="p-4 text-muted-foreground">{item.driverBata}</td>}
                                                    {item.inclusions && <td className="p-4 text-muted-foreground text-sm">{item.inclusions}</td>}
                                                    <td className="p-4 text-center">
                                                        <a
                                                            href={`https://wa.me/919884845077?text=${encodeURIComponent(`I want to book ${item.vehicle} for ${table.title || title}`)}`}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="inline-flex items-center gap-1.5 bg-[#25D366] text-white px-4 py-1.5 rounded-full text-xs font-bold hover:brightness-110 transition-all whitespace-nowrap"
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
                                <div className="md:hidden divide-y divide-border">
                                    {table.data.map((item, i) => (
                                        <div key={i} className="p-5 space-y-4">
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <h3 className="font-bold text-foreground text-lg">{item.vehicle}</h3>
                                                    <p className="text-secondary font-bold text-xl">{item.amount}</p>
                                                </div>
                                                <a
                                                    href={`https://wa.me/919884845077?text=${encodeURIComponent(`I want to book ${item.vehicle} for ${table.title || title}`)}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="bg-[#25D366] text-white px-4 py-2 rounded-full text-xs font-bold shadow-sm"
                                                >
                                                    Book Now
                                                </a>
                                            </div>

                                            <div className="grid grid-cols-2 gap-3 text-sm">
                                                {item.freeKm && (
                                                    <div className="bg-muted/50 p-2 rounded-lg">
                                                        <span className="text-[10px] uppercase text-muted-foreground block">Free KM</span>
                                                        <span className="font-semibold">{item.freeKm}</span>
                                                    </div>
                                                )}
                                                {item.extraKm && (
                                                    <div className="bg-muted/50 p-2 rounded-lg">
                                                        <span className="text-[10px] uppercase text-muted-foreground block">Extra KM</span>
                                                        <span className="font-semibold">{item.extraKm}</span>
                                                    </div>
                                                )}
                                                {item.extraHour && (
                                                    <div className="bg-muted/50 p-2 rounded-lg">
                                                        <span className="text-[10px] uppercase text-muted-foreground block">Extra Hour</span>
                                                        <span className="font-semibold">{item.extraHour}</span>
                                                    </div>
                                                )}
                                                {item.driverBata && (
                                                    <div className="bg-muted/50 p-2 rounded-lg">
                                                        <span className="text-[10px] uppercase text-muted-foreground block">Driver Bata</span>
                                                        <span className="font-semibold">{item.driverBata}</span>
                                                    </div>
                                                )}
                                            </div>
                                            {item.inclusions && (
                                                <div className="bg-accent/10 border border-accent/20 p-3 rounded-lg text-xs italic text-accent-foreground">
                                                    <strong>Inclusions:</strong> {item.inclusions}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                                {table.footerNote && (
                                    <div className="p-4 bg-muted/20 text-sm text-muted-foreground whitespace-pre-line border-t border-border">
                                        <div className="flex gap-2">
                                            <Info className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                                            <div>{table.footerNote}</div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}

                        {generalNote && (
                            <div className="bg-travel-cream rounded-xl p-6 shadow-sm border border-secondary/10 text-base text-muted-foreground">
                                <h4 className="font-heading font-bold text-foreground mb-2 flex items-center gap-2">
                                    <Info className="w-4 h-4 text-secondary" /> Important Notes
                                </h4>
                                <div className="whitespace-pre-line leading-relaxed">{generalNote}</div>
                            </div>
                        )}
                    </div>

                    <div className="space-y-6">
                        <div className="bg-travel-cream rounded-2xl p-6 shadow-sm border border-secondary/20 sticky top-24">
                            <h3 className="font-heading font-bold text-xl text-foreground mb-4">Why Choose Us?</h3>
                            <ul className="space-y-3 mb-8">
                                {features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 text-base text-muted-foreground">
                                        <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <div className="bg-card rounded-xl p-6 shadow-card border border-border">
                                <h3 className="font-heading font-bold text-xl text-foreground mb-4">Quick Booking</h3>
                                <div className="grid gap-4">
                                    <a
                                        href="tel:9884845077"
                                        className="flex items-center justify-center gap-3 bg-primary text-white py-3 rounded-xl font-bold hover:brightness-110 transition-all"
                                    >
                                        <Phone className="w-5 h-5" /> Call Now
                                    </a>
                                    <a
                                        href={`https://wa.me/919884845077?text=${encodeURIComponent(`Hi, I'm enquiring about ${title}.`)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-3 bg-[#25D366] text-white py-3 rounded-xl font-bold hover:brightness-110 transition-all"
                                    >
                                        <WhatsAppIcon className="w-5 h-5" /> WhatsApp
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TariffLayout;
