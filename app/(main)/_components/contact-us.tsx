"use client";

import { useState } from "react";
import { toast } from "sonner";

export const ContactUs = () => {
    const [sent, setSent] = useState(false);
    const [name, setName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const handleSubmit = () => {
        const nameVerify = firstName.trim() + " " + lastName.trim();
        console.log(nameVerify);
        
        if (nameVerify.length > 1) {
            setName(nameVerify);
            setSent(true);
        } else {
            toast.info("Name is required!")
        }
    }

    const handleReset = () => {
        setFirstName("");
        setLastName("");
        setSent(false);
    }

    return (
        <div className="flex justify-center p-10 m-2 bg-secondary">
            {sent ? <div className="flex flex-col gap-y-4">
                <div className="text-xl">Thank you for reaching out {name}!</div>
                <button onClick={handleReset} className="bg-primary cursor-pointer text-white p-3">Send another message?</button>
                </div> :
                <div className="w-full max-w-[1000px] gap-y-10 flex flex-col">
                    <p className="w-full text-center text-[20px] font-bold">
                        Get in touch
                    </p>
                    <div className="w-full flex flex-col gap-y-6">
                        <div className="flex gap-x-6">
                            <div className="flex flex-col w-[50%] gap-y-2">
                                <input placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="bg-white w-full p-2" />
                            </div>
                            <div className="flex flex-col w-[50%] gap-y-2">
                                <input placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} className="bg-white w-full p-2" />
                            </div>
                        </div>
                        <div className="flex flex-col w-full gap-y-6">
                            <input placeholder="Email" className="bg-white w-full p-2" />
                            <input placeholder="Phone" className="bg-white w-full p-2" />
                            <input placeholder="Restaurant/ company name" className="bg-white w-full p-2" />
                        </div>
                        <button onClick={handleSubmit} className="py-3 px-6 bg-primary cursor-pointer text-white">Send</button>
                    </div>
                </div>
            }
        </div>
    );
}