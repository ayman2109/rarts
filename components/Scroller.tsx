import React from "react";

type Item = {
  id: number;
  label: string;
};

type Props = {
  direction?: "left" | "right";
};

const items: Item[] = [
  { id: 1, label: "ACP CLADDING" },
  { id: 2, label: "SIGN BOARDS" },
  { id: 3, label: "EXTERIOR DESIGNS" },
  { id: 4, label: "GLASS WORK" },
  { id: 5, label: "HPL/WPL CLADDING" },
  { id: 6, label: "ALUMINIUM WORKS" },
];

const HorizontalInfiniteScroll: React.FC<Props> = ({ direction = "left" }) => {
  const animationClass =
    direction === "left" ? "animate-scroll-left" : "animate-scroll-right";

  return (
    <div className="w-full overflow-hidden bg-black  my-4">
      <div className={`flex w-[200%] ${animationClass}`}>
        {[...items, ...items].map((item, index) => (
          <div
            key={index}
            className="mx-4 min-w-40 rounded-xl px-6 py-4 text-center font-extrabold text-white "
          >
            {item.label}
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
          animation: scroll-left 15s linear infinite;
        }

        .animate-scroll-right {
          animation: scroll-right 15s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default HorizontalInfiniteScroll;
