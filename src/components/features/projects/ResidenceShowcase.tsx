import React from "react";
import { HiOutlineOfficeBuilding, HiOutlineHome, HiOutlineCube, HiOutlineViewGrid, HiOutlineScale } from "react-icons/hi";

const Features = () => {
  const features = [
    {
      icon: HiOutlineOfficeBuilding,
      title: "QUANTITY",
      value: "151 apartments"
    },
    {
      icon: HiOutlineHome,
      title: "STUDIO APARTMENTS", 
      value: "14 Apartments"
    },
    {
      icon: HiOutlineCube,
      title: "1-BEDROOM APARTMENTS",
      value: "120 Apartments"
    },
    {
      icon: HiOutlineViewGrid,
      title: "2-BEDROOM APARTMENTS",
      value: "17 Apartments"
    },
    {
      icon: HiOutlineScale,
      title: "ROOM SIZES",
      value: "479 sq ft - 1,709 sq ft"
    }
  ];

  return (
    <div className="bg-[#ECE4D9] py-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-6 leading-tight">
            Each and Every Residence, a<br />
            Panorama of the Sea.
          </h2>
          <p className="text-base max-w-2xl mx-auto leading-relaxed text-gray-700 font-light">
            At Beach Vista, contemporary luxury meets panoramic coastal beauty.
            Designed for those with a taste for the extraordinary, this exquisite
            waterfront escape offers modern interiors, sweeping sea views, and an
            effortless connection to Al Marjan Island's vibrant lifestyle.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-5 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="group text-center">
                {/* Icon Container */}
                <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-xl shadow-sm border border-gray-200/50 flex items-center justify-center group-hover:shadow-md group-hover:border-gray-300/70 transition-all duration-300">
                  <IconComponent className="w-8 h-8 text-gray-600 group-hover:text-gray-800 transition-colors duration-300" />
                </div>

                {/* Content */}
                <h3 className="text-xs font-semibold text-gray-800 mb-2 uppercase tracking-wider">
                  {feature.title}
                </h3>
                
                <p className="text-sm text-gray-600 font-medium leading-relaxed">
                  {feature.value}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Features;