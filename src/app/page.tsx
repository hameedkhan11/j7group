import PropertySection from "@/components/features/home/components/featured-projects";
import FeaturedBlogPosts from "@/components/features/home/components/FeaturedBlogs";
import FontCOlor from "@/components/features/home/components/FontCOlor";
import LuxuryGallery from "@/components/features/home/components/GalleryComponent";
import { Hero } from "@/components/features/home/components/hero-section";
import J7Detail from "@/components/features/home/components/j7-detail";
import LuxuryRealEstateComponent from "@/components/features/home/components/NewComponent";
import LuxuryRealEstateComponent2 from "@/components/features/home/components/NewComponent2";
import CostaMareHero from "@/components/features/home/components/PropertyGallery";
import TestimonialsSection from "@/components/features/home/components/Testimonials";
import React from "react";

const page = () => {
  return (
    <div className="relative">
      {/* Main content sections */}
      <main className="relative z-10">
        <Hero
          title=""
          isHomePage={true}
          backgroundType="video"
          overlay="light"
          backgroundSrc="Luxury_Real_Estate_Brochure_كتيب_العقارات_الفاخرة_Behance_i8fhci"
          ariaLabel="Altaf Development Home Section"
          contentAlignment="center"
        />
        <J7Detail />
        <LuxuryGallery />
        <PropertySection />
        <CostaMareHero />
        <LuxuryRealEstateComponent />
        {/* <LuxuryRealEstateComponent2 /> */}
        <TestimonialsSection />
        <FeaturedBlogPosts />
        <FontCOlor />
      </main>
    </div>
  );
};

export default page;
