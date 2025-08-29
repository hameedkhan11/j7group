"use client";
import React from "react";
import { CldImage } from "next-cloudinary";

const J7GroupAbout = () => {
  return (
    <div
      className="min-h-screen py-22 px-4 md:px-16 bg-[#51301F]"
    >
      <div className="mx-auto">
        <div className="flex gap-16">
          {/* Left Content */}
          <div className="space-y-8 max-w-2xl">
            <div>
              <h1 className="text-5xl mb-8 text-white">About</h1>

              <div className="space-y-6 leading-relaxed">
                <p className="text-base text-white">
                  J7 Group is a Dubai-based team of real estate and development
                  specialists. Their mission is to provide clients with a
                  dynamic set of tools to help realize their real estate goals.
                  With an in-depth market knowledge, an impeccable eye for
                  detail, J7 Group sees full efforts into every listing and
                  acquisition — without compromise.
                </p>

                <p className="text-base text-white">
                  Premium, bespoke properties & elegance is at the core of J7
                  Group.
                </p>
              </div>
            </div>
          </div>

          {/* Right Visual Content */}
          <div className="relative flex gap-2 max-w-5xl">
            {/* Left vertical image */}
            <div className="relative w-[580px] h-[490px] shadow-lg">
              <CldImage
                src="imgi_43_1743686885-web-4_fcgswq"
                alt="J7 Group brochure vertical"
                fill
                className="object-cover"
              />
            </div>

            {/* Right column with two stacked images */}
            <div className="flex flex-col gap-2">
              <div className="relative h-[240px] w-84 shadow-lg">
                <CldImage
                  src="imgi_42_1743686885-web-6_qy5uap"
                  alt="J7 Group brochure top"
                  fill
                  className="object-cover rounded-sm"
                />
              </div>
              <div className="relative h-[240px] shadow-lg">
                <CldImage
                  src="imgi_60_1730716138-16-nicole-franzen-111-w57th_bedroom-1_013-copy_iux5dy"
                  alt="J7 Group brochure bottom"
                  fill
                  className="object-cover rounded-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default J7GroupAbout;
