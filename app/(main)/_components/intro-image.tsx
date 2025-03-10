import Image from "next/image";

export const IntroImage = () => {
    return (
        <div className="w-full flex flex-col h-[500px] sm:h-[650px] relative">
            <div className="relative">
                <Image
                    src="/images/ware_innovations_restaurant_crockery.gif"
                    alt="Intro"
                    height={0}
                    width={0}
                    className="object-cover h-[500px] sm:h-[650px] w-full hidden md:block"
                />
                <Image
                    src="/images/ware_innovations_restaurant_crockery_small.gif"
                    alt="Intro"
                    height={650}
                    width={0}
                    className="object-cover h-[500px] sm:h-[650px] w-full block md:hidden"
                />
                <div className="text-white font-bold text-xl absolute bottom-5 w-full text-center">
                    <h1>Premium Crockery &</h1>
                    <h1>Tableware for Restaurants and Cafes</h1>
                </div>
            </div>
        </div>
    );
}