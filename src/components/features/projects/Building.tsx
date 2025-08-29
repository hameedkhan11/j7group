// "use client";
// import React, { useState } from 'react';
// import CldImage from '../home/components/Cld-Image';

// type FloorType = 'Ground' | 'First' | 'Typical';
// type UnitType = 'Studio' | '1 Bedroom' | '2 Bedroom';

// interface FloorPlan {
//   id: string;
//   name: string;
//   totalArea: string;
//   internal: string;
//   outdoor: string;
//   view: string;
//   unitNumber: string;
//   floors: string;
// }

// const InteractiveBuildingComponent = () => {
//   const [activeFloor, setActiveFloor] = useState<FloorType>('Typical');
//   const [hoverFloor, setHoverFloor] = useState<FloorType | null>(null);
//   const [selectedUnit, setSelectedUnit] = useState<UnitType>('Studio');
//   const [showFloorPlan, setShowFloorPlan] = useState(false);

//   const floorPlans: Record<UnitType, FloorPlan> = {
//     'Studio': {
//       id: 'studio',
//       name: 'Studio',
//       totalArea: '479 - 533 sq.ft.',
//       internal: '363.17 sq.ft.',
//       outdoor: '116 - 171 sq.ft.',
//       view: 'Island View',
//       unitNumber: 'XX - XX',
//       floors: 'Typical Floor'
//     },
//     '1 Bedroom': {
//       id: '1bed',
//       name: '1 Bedroom',
//       totalArea: '680 - 750 sq.ft.',
//       internal: '520.25 sq.ft.',
//       outdoor: '160 - 230 sq.ft.',
//       view: 'Ocean View',
//       unitNumber: 'XX - XX',
//       floors: 'Typical Floor'
//     },
//     '2 Bedroom': {
//       id: '2bed',
//       name: '2 Bedroom',
//       totalArea: '950 - 1100 sq.ft.',
//       internal: '750.40 sq.ft.',
//       outdoor: '200 - 350 sq.ft.',
//       view: 'Panoramic View',
//       unitNumber: 'XX - XX',
//       floors: 'Typical Floor'
//     }
//   };

//   const handleFloorClick = (floor: FloorType) => {
//     setActiveFloor(floor);
//     if (floor === 'Typical') {
//       setShowFloorPlan(true);
//     }
//   };

//   return (
//     <div className="w-full h-screen bg-gray-900 relative overflow-hidden">
//       {/* Background */}
//       <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900"></div>

//       {/* Main Content */}
//       <div className="relative z-10 flex items-center justify-between h-full px-8 lg:px-16">
        
//         {/* Left Side - Building Image */}
//         <div className="flex-1 flex items-center justify-center relative">
//           <div className="relative">
//             {/* Building Image using Cloudinary */}
//             <CldImage 
//               src="imgi_19_67bfeae088cadc030cc65ff8_Beach_Vista_2_p6owd4"
//               alt="Luxury Building"
//               fill
//               className="w-auto h-[600px] object-cover rounded-lg shadow-2xl cursor-pointer"
//               onClick={() => handleFloorClick('Typical')}
//             />
            
//             {/* Floor Labels */}
//             <div className="absolute right-[-120px] top-1/2 transform -translate-y-1/2 space-y-8">
//               <div 
//                 className={`flex items-center space-x-3 cursor-pointer transition-all duration-300 ${
//                   activeFloor === 'Typical' || hoverFloor === 'Typical' ? 'scale-110' : ''
//                 }`}
//                 onClick={() => handleFloorClick('Typical')}
//               >
//                 <div className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${
//                   activeFloor === 'Typical' ? 'border-white bg-white' : 'border-white/60 bg-white/20'
//                 }`}></div>
//                 <span className="text-white text-lg font-light">Typical Floor</span>
//               </div>
//               <div 
//                 className={`flex items-center space-x-3 cursor-pointer transition-all duration-300 ${
//                   activeFloor === 'First' || hoverFloor === 'First' ? 'scale-110' : ''
//                 }`}
//                 onClick={() => handleFloorClick('First')}
//               >
//                 <div className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${
//                   activeFloor === 'First' ? 'border-white bg-white' : 'border-white/60 bg-white/20'
//                 }`}></div>
//                 <span className="text-white text-lg font-light">First Floor</span>
//               </div>
//               <div 
//                 className={`flex items-center space-x-3 cursor-pointer transition-all duration-300 ${
//                   activeFloor === 'Ground' || hoverFloor === 'Ground' ? 'scale-110' : ''
//                 }`}
//                 onClick={() => handleFloorClick('Ground')}
//               >
//                 <div className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${
//                   activeFloor === 'Ground' ? 'border-white bg-white' : 'border-white/60 bg-white/20'
//                 }`}></div>
//                 <span className="text-white text-lg font-light">Ground Floor</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Right Side - Content */}
//         <div className="flex-1 max-w-2xl">
//           {!showFloorPlan ? (
//             // Initial View
//             <div className="text-white">
//               <h1 className="text-5xl lg:text-6xl font-light mb-6 leading-tight">
//                 Find Your<br />Dream Home
//               </h1>
//               <p className="text-xl opacity-80 font-light">
//                 Click on the building to view the floorplan.
//               </p>
//             </div>
//           ) : (
//             // Floor Plan View
//             <div className="bg-white/95 backdrop-blur-sm p-8 rounded-lg shadow-2xl relative">
//               <h2 className="text-4xl font-light text-gray-900 mb-6">Typical Floor</h2>
              
//               {/* Unit Type Selector */}
//               <div className="flex space-x-4 mb-8">
//                 {(['Studio', '1 Bedroom', '2 Bedroom'] as UnitType[]).map((unit) => (
//                   <button
//                     key={unit}
//                     onClick={() => setSelectedUnit(unit)}
//                     className={`px-6 py-3 border transition-all duration-300 ${
//                       selectedUnit === unit
//                         ? 'bg-gray-900 text-white border-gray-900'
//                         : 'bg-white text-gray-700 border-gray-300 hover:border-gray-500'
//                     }`}
//                   >
//                     {unit}
//                   </button>
//                 ))}
//               </div>

//               {/* Floor Plan Details */}
//               <div className="space-y-4 mb-8">
//                 <div className="flex justify-between py-2 border-b border-gray-200">
//                   <span className="font-medium text-gray-600">ROOM</span>
//                   <span className="text-gray-900">{floorPlans[selectedUnit].name}</span>
//                 </div>
//                 <div className="flex justify-between py-2 border-b border-gray-200">
//                   <span className="font-medium text-gray-600">TOTAL AREA</span>
//                   <span className="text-gray-900">{floorPlans[selectedUnit].totalArea}</span>
//                 </div>
//                 <div className="flex justify-between py-2 border-b border-gray-200">
//                   <span className="font-medium text-gray-600">INTERNAL</span>
//                   <span className="text-gray-900">{floorPlans[selectedUnit].internal}</span>
//                 </div>
//                 <div className="flex justify-between py-2 border-b border-gray-200">
//                   <span className="font-medium text-gray-600">OUTDOOR</span>
//                   <span className="text-gray-900">{floorPlans[selectedUnit].outdoor}</span>
//                 </div>
//                 <div className="flex justify-between py-2 border-b border-gray-200">
//                   <span className="font-medium text-gray-600">VIEW</span>
//                   <span className="text-gray-900">{floorPlans[selectedUnit].view}</span>
//                 </div>
//                 <div className="flex justify-between py-2 border-b border-gray-200">
//                   <span className="font-medium text-gray-600">UNIT NUMBER</span>
//                   <span className="text-gray-900">{floorPlans[selectedUnit].unitNumber}</span>
//                 </div>
//                 <div className="flex justify-between py-2">
//                   <span className="font-medium text-gray-600">FLOORS</span>
//                   <span className="text-gray-900">{floorPlans[selectedUnit].floors}</span>
//                 </div>
//               </div>

//               {/* Enquire Button */}
//               <button className="bg-gray-900 text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors duration-300">
//                 Enquire Now
//               </button>

//               {/* Close Button */}
//               <button 
//                 onClick={() => setShowFloorPlan(false)}
//                 className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors duration-300"
//               >
//                 ✕
//               </button>
//             </div>
//           )}
//         </div>

//         {/* Right Side - 3D Floor Plan (when floor plan is shown) */}
//         {showFloorPlan && (
//           <div className="absolute right-8 bottom-8">
//             <div className="relative">
//               {/* 3D Floor Plan Image */}
//               <img 
//                 src="https://res.cloudinary.com/demo/image/upload/c_fill,w_300,h_200,q_auto,f_auto/floor_plan_3d"
//                 alt="3D Floor Plan"
//                 className="w-[300px] h-[200px] object-cover rounded-lg shadow-xl"
//               />
              
//               {/* Unit Type Legend */}
//               <div className="absolute -bottom-12 left-0 flex space-x-6 text-sm">
//                 <div className="flex items-center space-x-2">
//                   <div className="w-4 h-4 bg-yellow-200 border"></div>
//                   <span className="text-white">Studio</span>
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <div className="w-4 h-4 bg-gray-300 border"></div>
//                   <span className="text-white">1-Bedroom</span>
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <div className="w-4 h-4 bg-pink-200 border"></div>
//                   <span className="text-white">2-Bedroom</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default InteractiveBuildingComponent;