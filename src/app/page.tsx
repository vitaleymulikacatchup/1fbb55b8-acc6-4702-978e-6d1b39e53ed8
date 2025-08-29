"use client";
import BillboardHero from '@/components/sections/layouts/hero/BillboardHero';
import SplitAbout from '@/components/sections/layouts/about/SplitAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import TextGridTokenomics from '@/components/sections/layouts/tokenomics/TextGridTokenomics';
import NavbarBase from '@/components/navigation/NavbarBase';
import CentralFAQ from '@/components/sections/layouts/faq/CentralFAQ';

export default function Home() {
  return (
    <>
      <NavbarBase
        brand="PhotonFlux"
        leftActionLabel="Menu"
        rightActionLabel="Book a Shoot"
        onLeftAction={() => {}}
        onRightAction={() => {}}
      />

      <BillboardHero
        title="Welcome to PhotonFlux"
        subtitle="Your gateway to stunning photography"
      />

      <SplitAbout
        heading="About the Photographer"
        description="PhotonFlux is dedicated to capturing the elusive beauty of light and nature through immersive photography."
      />

      <HowToBuy3D
        heading="How to Book a Shoot"
        items={[
          { title: "Step 1", description: "Choose a style" },
          { title: "Step 2", description: "Select a date" },
          { title: "Step 3", description: "Confirm your booking" },
        ]}
      />

      <TextGridTokenomics
        title="Key Metrics"
        description="Explore our core statistics and values."
        tokenData={[
          { value: "100+", description: "Clients served" },
          { value: "$9999", description: "Average Shoot Price" },
        ]}
      />

      <CentralFAQ
        items={[
          { title: "What is PhotonFlux?", content: "PhotonFlux is a photography service that specializes in capturing stunning imagery." },
          { title: "How can I book a shoot?", content: "Simply navigate to the booking section and follow the steps." },
        ]}
      />
    </>
  );
}
