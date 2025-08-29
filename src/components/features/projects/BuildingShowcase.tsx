'use client';

import React, { useState } from 'react';
import { CldImage } from 'next-cloudinary';

type UnitType = 'Studio' | '1 Bedroom' | '2 Bedroom';

interface FloorOverlay {
  id: string;
  name: string;
  position: { top: string; left: string };
  floorArea: {
    top: string;
    left: string;
    width: string;
    height: string;
  };
}

interface FloorPlan {
  id: string;
  name: string;
  totalArea: string;
  internal: string;
  outdoor: string;
  view: string;
  unitNumber: string;
  floors: string;
}

const BackgroundComponent: React.FC = () => {
  const [showFloorPlan, setShowFloorPlan] = useState(false);
  const [selectedUnit, setSelectedUnit] = useState<UnitType>('Studio');
  const [selectedFloor, setSelectedFloor] = useState<string>('');
  const floors: FloorOverlay[] = [
    {
      id: 'ground',
      name: 'Ground Floor',
      position: { top: '85%', left: '55%' },
      floorArea: { top: '80%', left: '25%', width: '30%', height: '50%' }
    },
    {
      id: 'first',
      name: 'First Floor',
      position: { top: '72%', left: '55%' },
      floorArea: { top: '68%', left: '25%', width: '35%', height: '8%' }
    },
    {
      id: 'typical',
      name: 'Typical Floor',
      position: { top: '35%', left: '55%' },
      floorArea: { top: '20%', left: '25%', width: '25%', height: '45%' }
    }
  ];

  const floorPlans: Record<UnitType, FloorPlan> = {
    'Studio': {
      id: 'studio',
      name: 'Studio',
      totalArea: '479 - 533 sq.ft.',
      internal: '363.17 sq.ft.',
      outdoor: '116 - 171 sq.ft.',
      view: 'Island View',
      unitNumber: 'XX - XX',
      floors: 'Typical Floor'
    },
    '1 Bedroom': {
      id: '1bed',
      name: '1 Bedroom',
      totalArea: '680 - 750 sq.ft.',
      internal: '520.25 sq.ft.',
      outdoor: '160 - 230 sq.ft.',
      view: 'Ocean View',
      unitNumber: 'XX - XX',
      floors: 'Typical Floor'
    },
    '2 Bedroom': {
      id: '2bed',
      name: '2 Bedroom',
      totalArea: '950 - 1100 sq.ft.',
      internal: '750.40 sq.ft.',
      outdoor: '200 - 350 sq.ft.',
      view: 'Panoramic View',
      unitNumber: 'XX - XX',
      floors: 'Typical Floor'
    }
  };

  const handleFloorClick = (floorId: string, floorName: string) => {
    setSelectedFloor(floorName);
    setShowFloorPlan(true);
  };

  return (
    <div className="relative w-full h-[90vh] overflow-hidden mt-24">
      {/* Background Image with Enhanced Quality */}
      <CldImage
        src="imgi_13_1729680048-image2-copy_okmsf1"
        alt="Luxury waterfront building"
        fill
        className="object-cover"
        priority
        quality="auto:best"
        format="auto"
        dpr="auto"
        sizes="100vw"
        crop="fill"
        gravity="auto"

      />

      {/* Floor Options - Left Bottom Column */}
      <div className="absolute left-8 bottom-8 space-y-4 z-30">
        {floors.map((floor) => (
          <div
            key={floor.id}
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => handleFloorClick(floor.id, floor.name)}
          >
            {/* Dot */}
            <div className="w-4 h-4 rounded-full border-2 border-white/80 bg-transparent" />
            
            {/* Label */}
            <span className="text-white font-normal text-lg whitespace-nowrap">
              {floor.name}
            </span>
          </div>
        ))}
      </div>

      {/* Floor Plan Details Modal */}
      {showFloorPlan && (
        <div 
          className="absolute inset-0 bg-black/50 flex items-center justify-center z-40"
          onClick={() => setShowFloorPlan(false)}
        >
          <div 
            className="bg-white/95 backdrop-blur-sm p-6 rounded-lg shadow-2xl relative max-w-xl w-full mx-8"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-3xl font-light text-gray-900 mb-4">{selectedFloor}</h2>
            
            {/* Unit Type Selector */}
            <div className="flex space-x-3 mb-6">
              {(['Studio', '1 Bedroom', '2 Bedroom'] as UnitType[]).map((unit) => (
                <button
                  key={unit}
                  onClick={() => setSelectedUnit(unit)}
                  className={`px-4 py-2 text-sm border transition-all duration-300 ${
                    selectedUnit === unit
                      ? 'bg-gray-900 text-white border-gray-900'
                      : 'bg-white text-gray-700 border-gray-300 hover:border-gray-500'
                  }`}
                >
                  {unit}
                </button>
              ))}
            </div>

            {/* Floor Plan Details */}
            <div className="space-y-3 mb-6">
              <div className="flex justify-between py-1.5 border-b border-gray-200">
                <span className="font-medium text-gray-600 text-sm">ROOM</span>
                <span className="text-gray-900 text-sm">{floorPlans[selectedUnit].name}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-gray-200">
                <span className="font-medium text-gray-600 text-sm">TOTAL AREA</span>
                <span className="text-gray-900 text-sm">{floorPlans[selectedUnit].totalArea}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-gray-200">
                <span className="font-medium text-gray-600 text-sm">INTERNAL</span>
                <span className="text-gray-900 text-sm">{floorPlans[selectedUnit].internal}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-gray-200">
                <span className="font-medium text-gray-600 text-sm">OUTDOOR</span>
                <span className="text-gray-900 text-sm">{floorPlans[selectedUnit].outdoor}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-gray-200">
                <span className="font-medium text-gray-600 text-sm">VIEW</span>
                <span className="text-gray-900 text-sm">{floorPlans[selectedUnit].view}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-gray-200">
                <span className="font-medium text-gray-600 text-sm">UNIT NUMBER</span>
                <span className="text-gray-900 text-sm">{floorPlans[selectedUnit].unitNumber}</span>
              </div>
              <div className="flex justify-between py-1.5">
                <span className="font-medium text-gray-600 text-sm">FLOORS</span>
                <span className="text-gray-900 text-sm">{floorPlans[selectedUnit].floors}</span>
              </div>
            </div>

            {/* Enquire Button */}
            <button className="bg-gray-900 text-white px-6 py-2.5 rounded-full hover:bg-gray-800 transition-colors duration-300 text-sm">
              Enquire Now
            </button>

            {/* Close Button */}
            <button 
              onClick={() => setShowFloorPlan(false)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors duration-300"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BackgroundComponent;