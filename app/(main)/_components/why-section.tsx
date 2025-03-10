import Image from "next/image";

export const WhySection = () => {
    return (
        <div className="flex flex-col items-center w-full gap-y-10 px-32">
            <h2 className="text-[22px] font-bold">Why choose Ware for your restaurant?</h2>
            <div className="flex flex-col sm:flex-row p-2 w-full">
                <div className="w-[50%] flex justify-center items-center">
                    <div className="flex flex-col w-[80%] px-2 text-center gap-y-4">
                        <h2 className="text-[20px] font-bold">High quality tableware</h2>
                        <p>Our high-fired stoneware ceramicware is known for its durability, it will last you for many years without losing its finish. All our ceramicware are Microwave, oven, and dishwasher friendly.</p>
                    </div>
                </div>
                <div className="w-[50%] flex items-center justify-center">
                    <Image 
                        src="/images/high_quality_tableware.jpg"
                        alt="high_quality_tableware"
                        height={200}
                        width={300}
                        className="w-full"
                    />
                </div>
            </div>
            <div className="flex flex-col sm:flex-row p-2 w-full">
                <div className="w-[50%] flex items-center justify-center">
                    <Image 
                        src="/images/no_minimum_quantity_order.webp"
                        alt="no_minimum_quantity_orders"
                        height={200}
                        width={300}
                        className="w-full"
                    />
                </div>
                <div className="w-[50%] flex justify-center items-center">
                    <div className="flex flex-col w-[80%] px-2 text-center gap-y-4">
                        <h2 className="text-[20px] font-bold">No minimum quantity order</h2>
                        <p>You can order as few as 3 pieces.</p>
                        <p>{`So you don’t have to maintain extra stock in your restaurant.`}</p>
                    </div>
                </div>
                
            </div>
            <div className="flex flex-col sm:flex-row p-2 w-full">
                <div className="w-[50%] flex justify-center items-center">
                    <div className="flex flex-col w-[80%] px-2 text-center gap-y-4">
                        <h2 className="text-[20px] font-bold">Bulk discount on every purchase</h2>
                        <p>Get a fixed bulk discount on every small or big purchase throughout the year.</p>
                    </div>
                </div>
                <div className="w-[50%] flex items-center justify-center">
                    <Image 
                        src="/images/bulk_discount.webp"
                        alt="bulk_discount"
                        height={200}
                        width={300}
                        className="w-full"
                    />
                </div>
            </div>
            <div className="flex flex-col sm:flex-row p-2 w-full">
                <div className="w-[50%] flex items-center justify-center">
                    <Image 
                        src="/images/deliveredon5.webp"
                        alt="no_minimum_quantity_orders"
                        height={200}
                        width={300}
                        className="w-full"
                    />
                </div>
                <div className="w-[50%] flex justify-center items-center">
                    <div className="flex flex-col w-[80%] px-2 text-center gap-y-4">
                        <h2 className="text-[20px] font-bold">Crockery delivered in 5 days</h2>
                        <p>As a retail brand, we maintain the stock for our existing designs.</p>
                        <p>{`For MOQ below 50, you can expect the delivery in 5 days.`}</p>
                    </div>
                </div>
                
            </div>
            <div className="flex flex-col sm:flex-row p-2 w-full">
                <div className="w-[50%] flex justify-center items-center">
                    <div className="flex flex-col w-[80%] px-2 text-center gap-y-4">
                        <h2 className="text-[20px] font-bold">Original designs Handmade in India</h2>
                        <p>Every piece of ware is designed from scratch by our team of product designers and meticulously crafted in India.</p>
                    </div>
                </div>
                <div className="w-[50%] flex items-center justify-center">
                    <Image 
                        src="/images/original_design.webp"
                        alt="original_design"
                        height={200}
                        width={300}
                        className="w-full"
                    />
                </div>
            </div>
        </div>
    );
}