import React from "react";
import { Building, Home, Building2, Ruler } from "lucide-react";
import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import { TfiRulerPencil } from "react-icons/tfi";

const Features = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-8 leading-tight">
            Each and Every Residence, a<br />
            Panorama of the Sea.
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl font-thin mx-auto leading-relaxed">
            At Beach Vista, contemporary luxury meets panoramic coastal beauty.
            Designed for those with a taste for the extraordinary, this exquisite
            waterfront escape offers modern interiors, sweeping sea views, and an
            effortless connection to Al Marjan Island's vibrant lifestyle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
          {/* Quantity */}
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <HiOutlineBuildingLibrary className="w-32 h-32 text-gray-600 stroke-[1.5]" />
            </div>
            <h3 className="text-sm font-light text-gray-900 mb-2 uppercase tracking-wider">QUANTITY</h3>
            <p className="text-gray-600">151 apartments</p>
          </div>

          {/* Separator */}
          <div className="hidden md:flex justify-center">
            <div className="w-px h-16 bg-gray-300"></div>
          </div>

          {/* Studio Apartments */}
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Home className="w-12 h-12 text-gray-600 stroke-[1.5]" />
            </div>
            <h3 className="text-sm font-light text-gray-900 mb-2 uppercase tracking-wider">STUDIO APARTMENTS</h3>
            <p className="text-gray-600">14 Apartments</p>
          </div>

          {/* Separator */}
          <div className="hidden md:flex justify-center">
            <div className="w-px h-16 bg-gray-300"></div>
          </div>

          {/* 1-Bedroom Apartments */}
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Building2 className="w-12 h-12 text-gray-600 stroke-[1.5]" />
            </div>
            <h3 className="text-sm font-light text-gray-900 mb-2 uppercase tracking-wider">1-BEDROOM APARTMENTS</h3>
            <p className="text-gray-600">120 Apartments</p>
          </div>

          {/* Separator */}
          <div className="hidden md:flex justify-center">
            <div className="w-px h-16 bg-gray-300"></div>
          </div>

          {/* 2-Bedroom Apartments */}
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Building className="w-12 h-12 text-gray-600 stroke-[1.5]" />
            </div>
            <h3 className="text-sm font-light text-gray-900 mb-2 uppercase tracking-wider">2-BEDROOM APARTMENTS</h3>
            <p className="text-gray-600">17 Apartments</p>
          </div>

          {/* Separator */}
          <div className="hidden md:flex justify-center">
            <div className="w-px h-16 bg-gray-300"></div>
          </div>

          {/* Room Sizes */}
          <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-4 flex items-center justify-center">
              <TfiRulerPencil className="w-12 h-12 text-gray-600 stroke-[1.5]" />
            </div>
            <h3 className="text-sm font-light text-gray-900 mb-2 uppercase tracking-wider">ROOM SIZES</h3>
            <p className="text-gray-600">479 sq ft - 1,709 sq ft</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;