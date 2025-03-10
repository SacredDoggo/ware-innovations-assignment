"use client";

import { useRef } from "react";

import { CatalougeRequest } from "./_components/catalouge-request";
import { Clients } from "./_components/client-componnent/clients";
import { ContactUs } from "./_components/contact-us";
import { Directions } from "./_components/directions";
import { Footer } from "./_components/footer";
import { Header } from "./_components/header";
import { IntroImage } from "./_components/intro-image";
import { OfferHeader } from "./_components/offer-header";
import { Uunatii } from "./_components/uunatii";
import { WhySection } from "./_components/why-section";
import { Reviews } from "./_components/review-components/reviews";

const HomePage = () => {
  const contactRef = useRef<HTMLDivElement | null>(null);

  const scrollToContact = () => {
    if (contactRef.current) window.scrollTo({
      top: contactRef.current.offsetTop,
      behavior: "smooth"
    })
  }
  return (
    <div className="w-full md:w-[80%] flex flex-col gap-y-10 relative">
      <div className="w-full flex flex-col">
        <OfferHeader />
        <Header />
        <IntroImage />
      </div>
      <Uunatii contactClick={scrollToContact} />
      <WhySection />
      <Reviews />
      <Clients />
      <Directions />
      <CatalougeRequest />
      <div ref={contactRef} className="w-full"><ContactUs /></div>
      <Footer />
    </div >
  );
};

export default HomePage;