"use client";

import { useState } from "react";

import { PlusIcon } from "lucide-react";
import { Rating } from "react-simple-star-rating";
import { toast } from "sonner";

const reviews_static: { rating: number, message: string, name: string, designation: string, restaurant: string }[] = [
    {
        rating: 5,
        message: "Great service, great products",
        name: "Neeta Singh",
        designation: "Chef",
        restaurant: "xyz restaurant"
    },
    {
        rating: 5,
        message: "Complete overhaul of my business",
        name: "Abhishek Kumar",
        designation: "Chef",
        restaurant: "zzz restaurant"
    },
    {
        rating: 5,
        message: "My personal recommendation!",
        name: "Neeta Kaur",
        designation: "Vegetable Peeler",
        restaurant: "abc restaurant"
    },
    {
        rating: 5,
        message: "I am just a hater",
        name: "papeeta Singh",
        designation: "Owner",
        restaurant: "Same service provider"
    },
];

export const Reviews = () => {
    const [reviews, setReviews] = useState(reviews_static);
    const [addingReview, setAddingReview] = useState(false);

    const [rating, setRating] = useState(0);
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [designation, setDesignation] = useState("");
    const [restaurant, setRestaurant] = useState("");

    const handleReset = () => {
        setRating(0);
        setName("");
        setMessage("");
        setDesignation("");
        setRestaurant("");

        setAddingReview(false);
    }

    const handleSubmit = () => {
        const n = name.trim();
        const m = message.trim();
        const d = designation.trim();
        const r = restaurant.trim();

        if (!n.length || !m.length || !d.length || !r.length) {
            toast.info("All field are necessary to post review");
            return;
        }
        setReviews([{
            rating: rating,
            name: n,
            message: m,
            designation: d,
            restaurant: r
        }, ...reviews]);

        handleReset();
    }

    return (
        <div className="w-full flex flex-col">
            <div className="w-full flex gap-x-2">
                <button onClick={() => setAddingReview(true)} className="text-primary h-40 min-w-40 flex cursor-pointer flex-col items-center justify-center"><PlusIcon className="h-20 w-20 mb-2" /> <p>Add a review</p></button>
                <div className="w-[calc(100% - 160px)] flex gap-x-2 overflow-x-auto">
                    {reviews.map((review, _index) => (
                        <div key={_index} className="h-40 min-w-60 bg-secondary p-4 flex flex-col gap-y-2 rounded-md pt-8 relative">
                            <div className="h-5 w-full">
                                <Rating initialValue={review.rating} readonly size={25} fillColor="#bf5e35" />
                            </div>
                            <p className="text-[12px]">{`"${review.message}"`}</p>
                            <div className="absolute bottom-4 left-4">
                                <p className="text-[10px] font-bold">{review.name}</p>
                                <p className="text-[10px] italic">{`${review.designation} at ${review.restaurant}`}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {addingReview &&
                <div className="flex justify-center p-10 m-2 bg-secondary">
                    <div className="w-full max-w-[1000px] gap-y-10 flex flex-col">
                        <p className="w-full text-center text-[20px] font-bold">
                            Write a review
                        </p>
                        <div className="flex justify-center">
                            <Rating initialValue={rating} onClick={(rate: number) => setRating(rate)} fillColor="#bf5e35" />
                        </div>
                        <div className="w-full flex flex-col gap-y-6">
                            <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className="bg-white w-full p-2" />
                            <input placeholder="Review" value={message} onChange={(e) => setMessage(e.target.value)} className="bg-white w-full p-2" />
                            <input placeholder="Designation" value={designation} onChange={(e) => setDesignation(e.target.value)} className="bg-white w-full p-2" />
                            <input placeholder="Restaurant/ company name" value={restaurant} onChange={(e) => setRestaurant(e.target.value)} className="bg-white w-full p-2" />
                            <button onClick={handleSubmit} className="py-3 px-6 bg-primary cursor-pointer text-white">Submit</button>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}