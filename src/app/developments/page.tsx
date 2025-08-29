import AmenitiesSection from '@/components/features/projects/AmenitySection'
import BuildingShowcase from '@/components/features/projects/BuildingShowcase'
import Features from '@/components/features/projects/Features'
import GalleryComponent from '@/components/features/projects/GalleryComponent'
import PropertySection from '@/components/features/projects/PropertySection'
import ResidenceShowcase from '@/components/features/projects/ResidenceShowcase'
import React from 'react'

const page = () => {
  return (
    <div>
        <PropertySection />
        <ResidenceShowcase />
        <AmenitiesSection />
        <BuildingShowcase />
        <GalleryComponent />
    </div>
  )
}

export default page