import { Clients } from "./_components/clients";
import { Header } from "./_components/header";
import { IntroImage } from "./_components/intro-image";
import { OfferHeader } from "./_components/offer-header";
import { Uunatii } from "./_components/uunatii";
import { WhySection } from "./_components/why-section";

const HomePage = () => {
  return (
    <div className="w-full md:w-[80%] flex flex-col gap-y-10">
      <div className="w-full flex flex-col">
        <OfferHeader />
        <Header />
        <IntroImage />
      </div>
      <Uunatii />
      <WhySection />
      <Clients />
    </div>
  );
};

export default HomePage;