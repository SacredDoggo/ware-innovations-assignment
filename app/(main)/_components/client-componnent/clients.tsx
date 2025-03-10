"use client";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { ClientCard } from "./client-card";

const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 1280 }, items: 5 }, // 4 cards on large screens
    desktop: { breakpoint: { max: 1280, min: 1024 }, items: 4 }, // 3 cards
    laptop: { breakpoint: { max: 1024, min: 768 }, items: 3 }, // 2 cards
    tablet: { breakpoint: { max: 768, min: 464 }, items: 2 }, // 1 card
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }, // 1 card on small screens
};

export const Clients = () => {
    return (
        <div className="w-full flex flex-col gap-y-4 items-center">
            <p className="text-[20px] font-bold">Out Clients</p>
            <div className="w-full">
            <Carousel
                responsive={responsive}
                infinite
                centerMode
                autoPlay
                autoPlaySpeed={3000}
                keyBoardControl
                showDots
                containerClass="carousel-container px-4"
                itemClass="mx-10"
            >
                <ClientCard imageSrc="/images/clients/bayroute_mumbai_ware_innovations_restaurant_crockery.webp" title="Bayroute, All branches, Mumbai" subTitle="Mediterranean Cuisine" />
                <ClientCard imageSrc="/images/clients/amelia_mumbai_ware_innovations_restaurant_crockery.webp" title={`Amelia's, Mumbai`} subTitle="Continental, Italian" />
                <ClientCard imageSrc="/images/clients/bastian_ware_innovations_restaurant_crockery.webp" title="Bastian, All Branches" subTitle="Seafood, continental" />
                <ClientCard imageSrc="/images/clients/k_s_charcoal_surat_ware_innovations_restaurant_crockery.webp" title={`K's Charcoal, Surat`} subTitle="Italian Cuisine" />
                <ClientCard imageSrc="/images/clients/Nandan_coffee_house_ceramic_tableware_ware_innovation__restaurant_crockery.webp" title="Nandan Coffee House, Mumbai" subTitle="Coffeehouse" />
                <ClientCard imageSrc="/images/clients/papa_s_bombay_ceramic_tableware_ware_innovation.webp" title={`Papa's Bombay, Mumbai`} subTitle="Modern Indian" />
                <ClientCard imageSrc="/images/clients/craft_of_food_2.0_ceramic_tableware_ware_innovation.webp" title={`Craft of Food 2.0, Mumbai`} subTitle="Fast Food, Pizzas" />
                <ClientCard imageSrc="/images/clients/maffei_artisan_kitchen_bengaluru_ware_innovations__restaurant_crockery.webp" title={`Maffei Fine Artizan Kitchen, Bengaluru`} subTitle="Lebanese Restaurant" />
                <ClientCard imageSrc="/images/clients/Dee_beans_cafe_surat_ceramic_tableware_ware_innovations_restaurant_crockery.webp" title={`Dee Beans Cafe, Surat`} subTitle="Coffee & Food" />
            </Carousel>
            </div>
        </div>
    );
}