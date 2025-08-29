import React from "react";
import { FaMapMarkerAlt, FaSun, FaBuilding } from "react-icons/fa"; // Use these instead of custom SVGs
import CldImage from "../home/components/Cld-Image";

// Feature data with proper titles and descriptions
const propertyFeatures = [
  {
    icon: <FaMapMarkerAlt size={48} />,
    title: "Prime Location",
    description: "Situated directly opposite the Wynn Al Marjan.",
  },
  {
    icon: <FaSun size={48} />,
    title: "Direct Beach Access",
    description: "Only 151 exclusive units designed with immediate beach access.",
  },
  {
    icon: <FaBuilding size={48} />,
    title: "Luxury Amenities",
    description: "Pristine swimming pool, a premier gym & a sophisticated co-working space.",
  },
];

const PropertySection = () => {
  return (
    <section className="w-full bg-[#F4EFE6] py-16 md:py-24 relative overflow-hidden">
      {/* Background overlay for depth */}
      <div className="absolute inset-0 opacity-10 bg-black"></div>

      <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-12">
        {/* Left Side - Content */}
        <div className="flex-1 max-w-3xl order-2 lg:order-1">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-extralight leading-tight mb-8 text-gray-900 tracking-tight">
              Discover the Ultimate in Island Living and Entertainment
            </h1>

            <p className="text-base text-black leading-relaxed mb-10 font-light">
              Introducing The Beach Vista in Al Marjan Island – featuring luxurious studio, 1-bedroom, and 2-bedroom apartments. Located directly across from Wynn Marjan Island and offering breathtaking views of the Arabian Gulf, The Beach Vista’s architectural design is inspired by the serene beauty of the coastline. Each residence is designed to provide a serene beachfront living experience, emphasizing sophistication and elegance.
            </p>

            <button className="bg-black font-light text-white px-8 py-4 rounded-full shadow-lg hover:bg-transparent hover:border hover:border-black transition-all duration-300 ease-in transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50">
              Enquire Now
            </button>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16">
            {propertyFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="font-light  text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="flex-1 order-1 lg:order-2 relative">
          <CldImage
            src="imgi_14_67c7bc857d870bdadf59bf7f_5_axfszh"
            width={800}
            height={800}
            alt="The Beach Vista Interior"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default PropertySection;