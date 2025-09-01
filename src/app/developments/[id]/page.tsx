import { Hero } from "@/components/features/home/components/hero-section";
import AmenitiesSection from "@/components/features/projects/AmenitySection";
import BuildingShowcase from "@/components/features/projects/BuildingShowcase";
import GalleryComponent from "@/components/features/projects/GalleryComponent";
import PropertySection from "@/components/features/projects/PropertySection";
import ResidenceShowcase from "@/components/features/projects/ResidenceShowcase";
import React from "react";

const page = () => {
  return (
    <div className="bg-[#51301F]">
      <Hero
        isHomePage={false}
        backgroundType="video"
        backgroundSrc="Render_animation_desktop_zqweot"
        overlay="light"
        ariaLabel="Hero section"
        enableAnimations={true}
      />
      <PropertySection />
      <ResidenceShowcase />
      <AmenitiesSection />
      <BuildingShowcase />
      <GalleryComponent />
    </div>
  );
};

export default page;
