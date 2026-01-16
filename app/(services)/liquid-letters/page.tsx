import React from "react";

const Page = () => {
  return (
    <div className="container mx-auto px-4 pt-24">
      {/* Heading */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
          Liquid Letter Work
        </h1>
        <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
          Premium liquid letter signage crafted to elevate brand visibility with
          a sleek, glowing finish — perfect for shops, cafes, and commercial spaces.
        </p>
      </div>

      {/* Images Grid */}
      <div className="grid gap-6 md:grid-cols-3">
        {/* Image 1 */}
        <div className="overflow-hidden rounded-2xl border shadow-sm group">
          <img
            src="/images/work/w-2.jpeg"
            alt="Liquid Letter Work Sample 1"
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="mt-16 max-w-3xl mx-auto rounded-2xl  bg-white p-8 ">
        <p className="text-lg leading-relaxed text-gray-700">
          Liquid letter signage combines modern aesthetics with durability,
          offering a smooth acrylic surface illuminated evenly for a premium glow.
          Ideal for storefronts and interiors, this signage enhances brand identity
          both day and night while maintaining a professional, high-end appearance.
        </p>
      </div>

      </div>


       <div className="grid gap-6 md:grid-cols-2">

        {/* Image 2 */}
        <div className="overflow-hidden rounded-2xl border shadow-sm group">
          <img
            src="/images/ledboards/p-9.jpeg"
            alt="Liquid Letter Work Sample 2"
            className="h-72 w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Image 3 */}
        <div className="overflow-hidden rounded-2xl border shadow-sm group">
          <img
            src="/images/new/hc.jpeg "
            alt="Liquid Letter Work Sample 3"
            className="h-150  w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </div>

      {/* Description Section */}
      
    </div>
  );
};

export default Page;
