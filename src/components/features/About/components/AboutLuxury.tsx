import React from "react";
import CldImage from "../../home/components/Cld-Image";

const RedefiningLuxury = () => {
  return (
    <div className="py-16">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="flex">
              <h2 className="text-4xl lg:text-5xl font-light text-gray-900 leading-tight">
                Redefining Luxury, One Destination at a Time
              </h2>
            </div>
              <p className="font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus sunt quasi blanditiis veniam aperiam possimus sequi sint, esse illum in. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit doloribus veniam, deserunt similique repellendus rem ratione iste aliquid delectus perspiciatis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente autem debitis quia deserunt unde possimus a quae expedita, eum quisquam dolores cupiditate libero perspiciatis facere eveniet id odio saepe nemo.</p>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-left">
                <div className="text-4xl lg:text-5xl font-light text-gray-900 mb-2">
                  10<span className="text-2xl lg:text-3xl">+</span>
                </div>
                <p className="text-sm lg:text-base text-gray-600 uppercase tracking-wider font-medium">
                  PROPERTIES
                </p>
              </div>
              <div className="text-left">
                <div className="text-4xl lg:text-5xl font-light text-gray-900 mb-2">
                  10<span className="text-2xl lg:text-3xl">+</span>
                </div>
                <p className="text-sm lg:text-base text-gray-600 uppercase tracking-wider font-medium">
                  YEARS OF
                  <br />
                  EXPERIENCE
                </p>
              </div>
              <div className="text-left">
                <div className="text-4xl lg:text-5xl font-light text-gray-900 mb-2">
                  100<span className="text-2xl lg:text-3xl">+</span>
                </div>
                <p className="text-sm lg:text-base text-gray-600 uppercase tracking-wider font-medium">
                  DELIGHTED CLIENTS
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-lg overflow-hidden">
              <CldImage 
              src="imgi_41_1743686885-web-3_woh2od"
              alt="abc"
              className="w-full h-full object-cover"
              fill
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RedefiningLuxury;
