import React from 'react'

const LogoClients = () => {
  return (
    <div className='my-10'>
        <div className='text-center py-4'>
            <h1 className='text-4xl'>Our Partners</h1>
        </div>
        <HorizontalInfiniteScroll direction="left" />
        <HorizontalInfiniteScroll direction="right" />
    </div>
  )
}

export default LogoClients



type LogoItem = {
  id: number;
  src: string;
  alt: string;
};

type Props = {
  direction?: "left" | "right";
};

const logos: LogoItem[] = [
  { id: 1, src: "/images/logos/p.png", alt: "pista house" },
  { id: 2, src: "/images/logos/c.webp", alt: "cmr" },
  { id: 3, src: "/images/logos/e.png", alt: "KFC" },
  { id: 4, src: "/images/logos/k.png", alt: "Dominos" },
  { id: 5, src: "/images/logos/kanchi.png", alt: "Titan" },
  { id: 6, src: "/images/logos/m.png", alt: "Pizza Hut" },
];
const HorizontalInfiniteScroll: React.FC<Props> = ({ direction = "left" }) => {
  const animationClass =
    direction === "left" ? "animate-scroll-left" : "animate-scroll-right";

  return (
    <div className="w-full overflow-hidden bg-white py-6 my-6">
      {/* Make container exactly 200% wide for perfect infinite loop */}
      <div className={`flex min-w-max items-center ${animationClass}`}>
        {[...logos, ...logos].map((logo, index) => (
          <div key={index} className="mx-8 flex items-center justify-center">
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-20 sm:h-24 md:h-28 lg:h-30 w-auto object-contain"
            />
          </div>
        ))}
      </div>

      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        .animate-scroll-left {
          animation: scroll-left 18s linear infinite;
        }

        .animate-scroll-right {
          animation: scroll-right 18s linear infinite;
        }
      `}</style>
    </div>
  );
};


