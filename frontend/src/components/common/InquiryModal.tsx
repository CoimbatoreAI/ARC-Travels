import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import WhatsAppIcon from "./WhatsAppIcon";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface InquiryModalProps {
    trigger?: React.ReactNode;
    defaultVehicle?: string;
    defaultPackage?: string;
    type?: "taxi" | "tour" | "general";
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
}

const InquiryModal = ({ trigger, defaultVehicle, defaultPackage, type = "general", open, onOpenChange }: InquiryModalProps) => {
    const [date, setDate] = useState<Date>();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        mobile: "",
        pickup: "",
        drop: "",
        vehicle: defaultVehicle || "",
        package: defaultPackage || "",
        passengers: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSelectChange = (name: string, value: string) => {
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        // Simulate validation/submission delay
        setTimeout(() => {
            let message = `*New Website Inquiry*\n\n`;
            message += `*Name:* ${formData.name}\n`;
            message += `*Mobile:* ${formData.mobile}\n`;

            if (date) message += `*Date:* ${format(date, "dd MMM yyyy")}\n`;
            if (formData.passengers) message += `*Passengers:* ${formData.passengers}\n`;

            if (type === "taxi" || type === "general") {
                if (formData.pickup) message += `*Pickup:* ${formData.pickup}\n`;
                if (formData.drop) message += `*Drop:* ${formData.drop}\n`;
                if (formData.vehicle) message += `*Preferred Vehicle:* ${formData.vehicle}\n`;
            }

            if (type === "tour" || defaultPackage) {
                if (formData.package) message += `*Package:* ${formData.package}\n`;
                // For tour, pickup location implies start point
                if (formData.pickup) message += `*Starting From:* ${formData.pickup}\n`;
            }

            const encodedMessage = encodeURIComponent(message);
            window.open(`https://wa.me/919884845077?text=${encodedMessage}`, "_blank");

            setLoading(false);
            if (onOpenChange) onOpenChange(false);
        }, 800);
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogTrigger asChild>
                {trigger}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-2">
                        <WhatsAppIcon className="w-5 h-5 text-[#25D366]" />
                        {type === "tour" ? "Tour Inquiry" : type === "taxi" ? "Taxi Booking" : "Quick Inquiry"}
                    </DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4 pt-2">
                    <div className="grid gap-2">
                        <Label htmlFor="name">Full Name <span className="text-red-500">*</span></Label>
                        <Input id="name" name="name" required placeholder="Enter your name" value={formData.name} onChange={handleChange} />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="mobile">Mobile Number <span className="text-red-500">*</span></Label>
                        <Input id="mobile" name="mobile" required type="tel" placeholder="10-digit mobile number" value={formData.mobile} onChange={handleChange} />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                            <Label>Travel Date <span className="text-red-500">*</span></Label>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button
                                        variant={"outline"}
                                        className={cn(
                                            "w-full justify-start text-left font-normal",
                                            !date && "text-muted-foreground"
                                        )}
                                    >
                                        <CalendarIcon className="mr-2 h-4 w-4" />
                                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0">
                                    <Calendar
                                        mode="single"
                                        selected={date}
                                        onSelect={setDate}
                                        initialFocus
                                        disabled={(date) => date < new Date()}
                                    />
                                </PopoverContent>
                            </Popover>
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="passengers">Passengers</Label>
                            <Input id="passengers" name="passengers" type="number" min="1" placeholder="Ex: 4" value={formData.passengers} onChange={handleChange} />
                        </div>
                    </div>

                    {(type === "taxi" || type === "general") && (
                        <div className="grid grid-cols-2 gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="pickup">Pickup City</Label>
                                <Input id="pickup" name="pickup" placeholder="Ex: Coimbatore" value={formData.pickup} onChange={handleChange} />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="drop">Drop City</Label>
                                <Input id="drop" name="drop" placeholder="Ex: Ooty" value={formData.drop} onChange={handleChange} />
                            </div>
                        </div>
                    )}

                    {type === "tour" && (
                        <div className="grid gap-2">
                            <Label htmlFor="package">Package Name</Label>
                            <Input id="package" name="package" value={formData.package} onChange={handleChange} placeholder="Preferred Package" />
                        </div>
                    )}

                    {type === "taxi" && (
                        <div className="grid gap-2">
                            <Label htmlFor="vehicle">Preferred Vehicle</Label>
                            <Select name="vehicle" onValueChange={(v) => handleSelectChange("vehicle", v)} defaultValue={formData.vehicle}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select Vehicle" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Sedan">Sedan (4+1)</SelectItem>
                                    <SelectItem value="MUV">MUV (6+1)</SelectItem>
                                    <SelectItem value="SUV">SUV (7+1)</SelectItem>
                                    <SelectItem value="Tempo">Tempo Traveller</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    )}

                    <Button type="submit" className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold" disabled={loading}>
                        {loading ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <WhatsAppIcon className="w-4 h-4 mr-2 text-white fill-current" />}
                        Send Inquiry
                    </Button>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default InquiryModal;
