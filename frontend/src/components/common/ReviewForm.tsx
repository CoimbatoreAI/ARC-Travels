import { useState } from "react";
import { Star, Send } from "lucide-react";
import { useReviews } from "@/hooks/useReviews";
import { useToast } from "@/hooks/use-toast";

const ReviewForm = () => {
    const [name, setName] = useState("");
    const [trip, setTrip] = useState("");
    const [text, setText] = useState("");
    const [rating, setRating] = useState(5);
    const [hoveredRating, setHoveredRating] = useState(0);
    const { addReview } = useReviews();
    const { toast } = useToast();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name || !text || !trip) {
            toast({
                title: "Missing Information",
                description: "Please fill in all fields before submitting.",
                variant: "destructive",
            });
            return;
        }

        addReview({ name, trip, text, rating });
        toast({
            title: "Review Submitted!",
            description: "Thank you for your feedback. It will be displayed in our reviews section.",
        });

        // Reset form
        setName("");
        setTrip("");
        setText("");
        setRating(5);
    };

    return (
        <div className="bg-card rounded-2xl shadow-card p-6 md:p-8 border border-border/50">
            <h3 className="font-heading text-2xl font-bold text-foreground mb-2">Rate Us & Feedback</h3>
            <p className="text-muted-foreground mb-6 text-sm">Your feedback helps us improve our services for future travelers.</p>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-foreground">Rating</label>
                    <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <button
                                key={star}
                                type="button"
                                onClick={() => setRating(star)}
                                onMouseEnter={() => setHoveredRating(star)}
                                onMouseLeave={() => setHoveredRating(0)}
                                className="focus:outline-none transition-transform hover:scale-110"
                            >
                                <Star
                                    className={`w-8 h-8 ${star <= (hoveredRating || rating)
                                            ? "fill-accent text-accent"
                                            : "text-border"
                                        }`}
                                />
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                        <label htmlFor="name" className="text-sm font-semibold text-foreground">Full Name</label>
                        <input
                            id="name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="John Doe"
                            className="w-full bg-travel-cream border-none rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        />
                    </div>
                    <div className="space-y-1.5">
                        <label htmlFor="trip" className="text-sm font-semibold text-foreground">Trip / Service</label>
                        <input
                            id="trip"
                            type="text"
                            value={trip}
                            onChange={(e) => setTrip(e.target.value)}
                            placeholder="e.g., Ooty Tour, Airport Drop"
                            className="w-full bg-travel-cream border-none rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        />
                    </div>
                </div>

                <div className="space-y-1.5">
                    <label htmlFor="feedback" className="text-sm font-semibold text-foreground">Your Feedback</label>
                    <textarea
                        id="feedback"
                        rows={4}
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Tell us about your experience..."
                        className="w-full bg-travel-cream border-none rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground py-4 rounded-xl font-bold shadow-button hover:brightness-110 transition-all group"
                >
                    Submit Review <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
            </form>
        </div>
    );
};

export default ReviewForm;
