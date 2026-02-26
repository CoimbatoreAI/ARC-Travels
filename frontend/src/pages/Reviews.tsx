import { Star, MessageSquare } from "lucide-react";
import ReviewForm from "../components/common/ReviewForm";
import { useReviews } from "@/hooks/useReviews";

const Reviews = () => {
    const { reviews, loading } = useReviews();

    return (
        <>
            <section className="bg-primary py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Guest Reviews</h1>
                    <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
                        Your feedback is the heart of our service. Share your experience with Coimbatore ARC Travels.
                    </p>
                </div>
            </section>

            <section className="py-16 container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Left side: Form */}
                    <div className="sticky top-32">
                        <ReviewForm />
                    </div>

                    {/* Right side: List of reviews */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                                <MessageSquare className="w-6 h-6 text-secondary" />
                            </div>
                            <h2 className="font-heading text-3xl font-bold text-foreground">Recent Feedback</h2>
                        </div>

                        {loading ? (
                            <div className="flex justify-center py-12">
                                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                            </div>
                        ) : reviews.length === 0 ? (
                            <div className="text-center py-12 bg-travel-cream rounded-2xl border border-dashed border-border/50">
                                <p className="text-muted-foreground italic">No reviews yet. Be the first to share your experience!</p>
                            </div>
                        ) : (
                            <div className="space-y-6">
                                {reviews.map((r, i) => (
                                    <div key={r._id || i} className="bg-card rounded-2xl p-6 shadow-card border border-border/50 hover:border-secondary/30 transition-colors">
                                        <div className="flex justify-between items-start mb-4">
                                            <div className="flex gap-1">
                                                {Array.from({ length: 5 }).map((_, j) => (
                                                    <Star
                                                        key={j}
                                                        className={`w-4 h-4 ${j < r.rating ? "fill-accent text-accent" : "text-border"}`}
                                                    />
                                                ))}
                                            </div>
                                            <span className="text-xs text-muted-foreground">{r.date}</span>
                                        </div>
                                        <p className="text-foreground/80 italic mb-6">"{r.text}"</p>
                                        <div className="flex items-center gap-3 pt-4 border-t border-border">
                                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-heading font-bold text-primary">
                                                {r.name.charAt(0)}
                                            </div>
                                            <div>
                                                <div className="font-heading font-bold text-sm text-foreground">{r.name}</div>
                                                <div className="text-xs text-secondary font-medium">{r.trip}</div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Reviews;
