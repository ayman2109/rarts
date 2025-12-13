import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ImageTextCard from "./ImageTextCard";

const data = [
    {
        src: "/images/before-after/gandi.jpeg",
        title: "ACP Cladding",
        description: "Premium exterior ACP facade work",
    },
    {
        src: "/images/ledboards/b-1.jpeg",
        title: "Signage Installation",
        description: "High quality LED signage projects",
    },
    {
        src: "/images/ledboards/b-2.jpeg",
        title: "Glass Facade",
        description: "Modern architectural glass work",
    },
    {
        src: "/images/acp/alu.jpeg",
        title: "Aluminium Rafters",
        description: "Durable aluminium rafters for ceilings/walls",
    },
    {
        src: "/images/acp/pb-1.jpeg",
        title: "Profile Lighting",
        description: "Elegant profile lighting solutions",
    }
];

export default function WorkScrollStack() {
    const containerRef = useRef<HTMLDivElement | null>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    return (
        <div
            ref={containerRef}
            style={{ minHeight: `${data.length * 120}vh` }}
            className="relative flex flex-col gap-40"
        >

            {data.map((item, index) => {
                // ✅ Each card gets its own animated progress range
                const progress = useTransform(
                    scrollYProgress,
                    [index / data.length, 1],
                    [0, 1]
                );

                return (
                    <ImageTextCard
                        key={index}

                        {...item}
                        progress={progress} // ✅ LIVE animated MotionValue
                    />
                );
            })}
        </div>
    );
}
