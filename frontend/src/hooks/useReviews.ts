import { useState, useEffect } from 'react';

export interface Review {
    _id?: string;
    name: string;
    text: string;
    rating: number;
    trip: string;
    date: string;
}

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api/reviews';

export const useReviews = () => {
    const [reviews, setReviews] = useState<Review[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchReviews = async () => {
        try {
            const response = await fetch(API_URL);
            if (response.ok) {
                const data = await response.json();
                setReviews(data);
            }
        } catch (error) {
            console.error('Error fetching reviews:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchReviews();
    }, []);

    const addReview = async (newReview: Omit<Review, 'date' | '_id'>) => {
        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newReview),
            });

            if (response.ok) {
                const savedReview = await response.json();
                setReviews(prev => [savedReview, ...prev]);
                return true;
            }
            return false;
        } catch (error) {
            console.error('Error adding review:', error);
            return false;
        }
    };

    return { reviews, addReview, loading };
};
