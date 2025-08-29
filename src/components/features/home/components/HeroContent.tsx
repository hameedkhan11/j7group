const HeroContent = () => (
  <div 
    className="h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black relative overflow-hidden"
    style={{
      backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><defs><linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%23111827;stop-opacity:1" /><stop offset="50%" style="stop-color:%231f2937;stop-opacity:1" /><stop offset="100%" style="stop-color:%23000000;stop-opacity:1" /></linearGradient></defs><rect width="1000" height="1000" fill="url(%23bg)"/></svg>')`,
    }}
  >
    <div className="absolute inset-0 bg-black/20"></div>
    <div className="relative z-10 h-full flex items-center justify-center">
      <div className="text-center text-white px-8">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-thin tracking-[0.2em] mb-6">
          LUXURY
        </h1>
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-light tracking-[0.1em] mb-8">
          REDEFINED
        </h2>
        <p className="text-sm md:text-base tracking-[0.15em] uppercase opacity-80 max-w-md mx-auto">
          Experience unparalleled elegance in Ras Al Khaimah's most exclusive developments
        </p>
      </div>
    </div>
  </div>
);

export default HeroContent;