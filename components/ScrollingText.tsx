import React from "react";

export default function ScrollingText() {
  return (
    <div className="w-full mt-3 overflow-hidden bg-black py-4 whitespace-nowrap">
      <style>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 80s linear infinite;
        }
      `}</style>


      <div className="animate-scroll-left flex w-[300%] space-x-10">
        <span className="text-white text-2xl font-semibold">
          🚀 LED BOARDS • ACP CLADDING • NAMEPLATES • BASE SIGNS • ALUMINIUM WORKS
        </span>

        <span className="text-white text-2xl font-semibold">
          🚀 LED BOARDS • ACP CLADDING • NAMEPLATES • BASE SIGNS • ALUMINIUM WORKS
        </span>

        <span className="text-white text-2xl font-semibold">
          🚀 LED BOARDS • ACP CLADDING • NAMEPLATES • BASE SIGNS • ALUMINIUM WORKS
        </span>
        <span className="text-white text-2xl font-semibold">
          🚀 LED BOARDS • ACP CLADDING • NAMEPLATES • BASE SIGNS • ALUMINIUM WORKS
        </span>
        <span className="text-white text-2xl font-semibold">
          🚀 LED BOARDS • ACP CLADDING • NAMEPLATES • BASE SIGNS • ALUMINIUM WORKS
        </span>
      </div>
    </div>
  );
}
