import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";

export const Uunatii = ({ contactClick }: { contactClick: () => void }) => {
    return (
        <div className="flex justify-center mt-8">
            <div className="flex flex-col sm:flex-row justify-center items-center w-full sm:w-[90%]">
                <div>
                    <Image
                        src="/images/uunatii.webp"
                        alt="uunatii"
                        height={308}
                        width={308}
                        className="rounded-[50%] w-[500px] h-[500px] sm:h-[308px] sm:w-[308px] object-cover"
                    />
                </div>
                <div className="px-10 flex justify-end sm:w-[50%] text-[14px] mt-4 sm:mt-0">
                    <div className="w-full sm:w-[80%]">
                        <h2 className="text-[20px] font-bold mb-6">
                            {`Hi, I'm Uunatii from Ware.`}
                        </h2>
                        <p className="mb-6">
                            We create beautiful ceramic tableware for eateries, from dinner plates to espresso & cappuccino cups. Our hospitality tableware is durable for busy hotels or restaurants.
                        </p>
                        <p className="mb-6">
                            {`Whether you need pieces for a fancy fine dining spot or restaurant crockery in bulk for your chain, let me know. I'll help you find pieces that'll make your guests smile :)`}
                        </p>
                        <button onClick={contactClick} className="px-4 py-2 flex items-center font-medium cursor-pointer bg-primary text-white mb-6">
                            Get in touch
                            <ArrowRightIcon className="h-4 w-4 ml-2" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}