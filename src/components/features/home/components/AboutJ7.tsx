import React from 'react';

const J7GroupAbout = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 md:px-8 lg:px-16">
      <div className="mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-6xl md:text-7xl font-light text-gray-300 mb-8">
                About
              </h1>
              
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p className="text-lg font-regular">
                  J7 Group is a Dubai-based team of real estate and 
                  development specialists. Their mission is to provide clients 
                  with a dynamic set of tools to help realize their real estate 
                  goals. With an in-depth market knowledge, an impeccable 
                  eye for detail, J7 Group sees full efforts into every listing 
                  and acquisition — without compromise.
                </p>
                
                <p className="text-lg font-regular">
                  Premium, bespoke properties & elegance is at the core of 
                  J7 Group.
                </p>
              </div>
            </div>
          </div>

          {/* Right Visual Content */}
          <div className="relative">
            {/* Main scattered documents effect */}
            <div className="relative w-full h-[600px]">
              
              {/* Document 1 - Top left angled */}
              <div 
                className="absolute top-0 left-8 w-64 h-80 bg-white shadow-2xl transform -rotate-12 z-10"
                style={{ filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.15))' }}
              >
                <div className="p-8 h-full flex flex-col">
                  <div className="flex-1 space-y-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-blue-700 rounded-lg flex items-center justify-center mb-6">
                      <span className="text-white font-bold text-xl">J7</span>
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                      <div className="h-2 bg-gray-200 rounded w-1/2"></div>
                    </div>
                  </div>
                  <div className="border-t pt-4">
                    <div className="text-2xl font-light text-gray-800 tracking-wider">
                      NEW<br />
                      <span className="text-lg">LISTING</span>
                    </div>
                    <div className="text-xs text-gray-500 mt-2 tracking-wide">
                      PREMIUM PROPERTIES
                    </div>
                  </div>
                </div>
              </div>

              {/* Document 2 - Center main */}
              <div 
                className="absolute top-12 left-24 w-72 h-96 bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl transform rotate-3 z-20"
                style={{ filter: 'drop-shadow(0 15px 40px rgba(0,0,0,0.2))' }}
              >
                <div className="p-8 h-full flex flex-col text-white">
                  <div className="flex-1">
                    <div className="w-12 h-12 border-2 border-white/30 rounded-lg mb-8 flex items-center justify-center">
                      <span className="text-xs font-light">J7</span>
                    </div>
                    <div className="space-y-3">
                      <div className="h-1 bg-white/20 rounded w-full"></div>
                      <div className="h-1 bg-white/20 rounded w-4/5"></div>
                      <div className="h-1 bg-white/20 rounded w-3/5"></div>
                    </div>
                  </div>
                  <div className="border-t border-white/20 pt-6">
                    <div className="text-3xl font-light tracking-wider">
                      NEW<br />
                      <span className="text-xl">LISTING</span>
                    </div>
                    <div className="text-xs text-white/60 mt-3 tracking-widest">
                      LUXURY DEVELOPMENTS
                    </div>
                  </div>
                </div>
              </div>

              {/* Document 3 - Right background */}
              <div 
                className="absolute top-4 right-0 w-56 h-72 bg-white shadow-xl transform rotate-6 z-5"
                style={{ filter: 'drop-shadow(0 8px 25px rgba(0,0,0,0.1))' }}
              >
                <div className="p-6 h-full">
                  <div className="text-right text-xs text-gray-400 mb-4 tracking-wider">
                    BUILDING
                  </div>
                  <div className="space-y-3 mb-8">
                    <div className="h-1 bg-gray-100 rounded"></div>
                    <div className="h-1 bg-gray-100 rounded"></div>
                    <div className="h-1 bg-gray-100 rounded w-3/4"></div>
                  </div>
                  <div className="w-full h-32 bg-gray-100 rounded mb-4"></div>
                  <div className="space-y-2">
                    <div className="h-1 bg-gray-200 rounded w-full"></div>
                    <div className="h-1 bg-gray-200 rounded w-2/3"></div>
                  </div>
                </div>
              </div>

              {/* Document 4 - Bottom right overlay */}
              <div 
                className="absolute bottom-8 right-12 w-80 h-64 bg-gradient-to-r from-blue-50 to-blue-100 shadow-lg transform -rotate-2 z-15"
                style={{ filter: 'drop-shadow(0 12px 35px rgba(0,0,0,0.12))' }}
              >
                <div className="p-8 h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl font-light text-gray-700 tracking-widest mb-2">
                      J7 GROUP
                    </div>
                    <div className="w-16 h-px bg-gray-400 mx-auto mb-4"></div>
                    <div className="text-xs text-gray-500 tracking-wider">
                      PREMIUM REAL ESTATE
                    </div>
                  </div>
                </div>
              </div>

              {/* Brochure corner peek */}
              <div 
                className="absolute bottom-0 right-4 w-48 h-32 bg-white shadow-lg transform rotate-12 z-25"
                style={{ filter: 'drop-shadow(0 6px 20px rgba(0,0,0,0.08))' }}
              >
                <div className="p-4 h-full">
                  <div className="text-xs text-gray-400 mb-2">PORTFOLIO</div>
                  <div className="grid grid-cols-2 gap-1">
                    <div className="h-8 bg-gray-100 rounded"></div>
                    <div className="h-8 bg-gray-100 rounded"></div>
                    <div className="h-8 bg-blue-100 rounded"></div>
                    <div className="h-8 bg-gray-100 rounded"></div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute top-32 right-8 w-3 h-3 bg-blue-300 rounded-full opacity-60"></div>
              <div className="absolute bottom-32 left-16 w-2 h-2 bg-gray-300 rounded-full opacity-40"></div>
              <div className="absolute top-48 left-4 w-1 h-8 bg-blue-200 opacity-30"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default J7GroupAbout;