import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";

export const Directions = () => {
    return (
        <div className="w-full relative">
            <Image
                src="/images/directions.jpg"
                alt="directions"
                height={650}
                width={1000}
                className="w-full hidden sm:block"
            />
            <Image
                src="/images/directions_small.jpg"
                alt="directions"
                height={675}
                width={1000}
                className="w-full block sm:hidden"
            />
            <div className="absolute bottom-10 left-10 text-white">
                <h1 className="text-[36px] font-bold">Want to see our Ware?</h1>
                <div className="flex gap-x-4 items-center">
                    <h2>Come visit our store in Mumbai</h2>
                    <button className="flex font-medium items-center border-2 border-white p-3 hover:bg-white hover:text-black transition cursor-pointer">
                        Get Directions
                        <ArrowRightIcon className="h-4 w-4 ml-2" />
                    </button>
                </div>
            </div>
        </div>
    );
};