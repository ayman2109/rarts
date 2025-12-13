"use client"
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// No need for props — all data hardcoded inside
const SignBoards = () => {
    const title = "SIGN BOARDS & LETTERS";
    const description =
        "Explore our diverse range of sign boards and letters, crafted to elevate your brand's visibility and aesthetic appeal.";
    const buttonUrl = "/contact-us";
    const buttonText = "Get in Touch";

    // Hardcoded Feature List
    const features = [
        {
            id: "feature-1",
            heading: "Steel Letters",
            description:
                "Clean and intuitive interface built with the latest design principles. Optimized for the best user experience.",
            image: "/images/work/w-s.jpg",
            url: "https://shadcnblocks.com",
        },
        {
            id: "feature-2",
            heading: "Acrylic Boards",
            description:
                "Fully responsive design that works seamlessly across all devices and screen sizes. Perfect for any platform.",
            image: "/images/work/w-1.jpeg",
            url: "https://shadcnblocks.com",
        },
        {
            id: "feature-3",
            heading: "Pylon Boards",
            description:
                "Simple integration process with comprehensive documentation and dedicated support team.",
            image: "/images/work/w-p.png",
            url: "",
        },
        {
            id: "f-4",
            heading: "SS (Stainless Steel) Letters with LED modules",
            description:
                "Powerful analytics tools to help you understand your users and make data-driven decisions.",
            image: "/images/ledboards/b-7.jpeg",
            url: "https://shadcnblocks.com",
        },
        {
            id: "f-5",
            heading: "Neon Signs",
            description:
                "Powerful analytics tools to help you understand your users and make data-driven decisions.",
            image: "/images/work/w-9.jpeg",
            url: "https://shadcnblocks.com",
        },
        // ------- ADD MORE TYPES BELOW --------
        
        
        {
            id: "f-8",
            heading: "3D Letters",
            description:
                "High‑quality 3D lettering for shops, offices, and commercial branding.",
            image: "/images/work/logos.jpeg",
            url: "https://shadcnblocks.com",
        },
        {
            id: "f-9",
            heading: "Flex Boards",
            description:
                "Budget‑friendly and durable printing solution for large outdoor advertisements.",
            image: "/images/work/flex.jpeg",
            url: "https://shadcnblocks.com",
        },
    ];

    return (
        <section className="py-32">
            <div className="container">
                <div className="mb-8 lg:max-w-sm">
                    <h2 className="mb-3 text-3xl italic font-mono bg-gradient-to-r from-red-400 py-1 px-3 text-center rounded-sm to-yellow-200 font-semibold md:mb-4 md:text-4xl lg:mb-6">
  {title}
</h2>

                    
                    

                    {buttonUrl && (
                        <Button variant="link" asChild>
                            <a
                                href={buttonUrl}
                                className="group flex items-center font-medium md:text-base lg:text-lg"
                            >
                                {buttonText}
                                <ArrowRight />
                            </a>
                        </Button>
                    )}
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
                    <div
                        className="border-border flex flex-col overflow-clip rounded-xl border"
                    >
                        <video
                            src="/images/work/led-boards.mp4"
                            autoPlay
                            loop
                            muted
                            controls={false}
                            className="aspect-16/9 h-full w-full object-cover object-center transition-opacity hover:opacity-80"
                        />

                        <div className="px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
                            <h3 className="mb-3 text-lg font-semibold md:mb-4 md:text-2xl lg:mb-6">
                                LED Sign Boards in Action ( Nampally PistaHouse )
                            </h3>
                            <p className="text-muted-foreground lg:text-lg">
                                You imagine it — we make it real.
                            </p>
                        </div>
                    </div>
                    <div
                        className="border-border flex flex-col overflow-clip rounded-xl border"
                    >
                        <video
                            src="/images/work/led-vid.mp4"
                            autoPlay
                            loop
                            muted
                            controls={false}
                            className="aspect-16/9 h-full w-full object-cover object-center transition-opacity hover:opacity-80"
                        />

                        <div className="px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
                            <h3 className="mb-3 text-lg font-semibold md:mb-4 md:text-2xl lg:mb-6">
                                Work at pista house ( sarath city capital mall )
                            </h3>
                            <p className="text-muted-foreground lg:text-lg">
                                High‑visibility signage with long‑lasting materials and premium finish.
                            </p>
                        </div>
                    </div>
                    <div
                        className="border-border flex flex-col overflow-clip rounded-xl border"
                    >
                        <video
                            src="/images/work/slp-vid.mp4"
                            autoPlay
                            loop
                            muted
                            controls={false}
                            className="aspect-16/9 h-full w-full object-cover object-center transition-opacity hover:opacity-80"
                        />

                        <div className="px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
                            <h3 className="mb-3 text-lg font-semibold md:mb-4 md:text-2xl lg:mb-6">
                                LED GLOW LETTERS - SLP jewellers 
                            </h3>
                            <p className="text-muted-foreground lg:text-lg">
                                High‑visibility signage with long‑lasting materials and premium finish.
                            </p>
                        </div>
                    </div>
                    <div
                        className="border-border flex flex-col overflow-clip rounded-xl border"
                    >
                        <video
                            src="/images/work/kond-vid.mp4"
                            autoPlay
                            loop
                            muted
                            controls={false}
                            className="aspect-16/9 h-full w-full object-cover object-center transition-opacity hover:opacity-80"
                        />

                        <div className="px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
                            <h3 className="mb-3 text-lg font-semibold md:mb-4 md:text-2xl lg:mb-6">
                                Neon Wings + LOGO  - Pista House Kondapur
                            </h3>
                            <p className="text-muted-foreground lg:text-lg">
                                High‑visibility signage with long‑lasting materials and premium finish.
                            </p>
                        </div>
                    </div>
                    {features.map((feature) => (
                        <div
                            key={feature.id}
                            className="border-border flex flex-col overflow-clip rounded-xl border"
                        >
                            <a href={feature.url}>
                                <img
                                    src={feature.image}
                                    alt={feature.heading}
                                    className="aspect-16/9 h-full w-full object-cover object-center transition-opacity hover:opacity-80"
                                />
                            </a>

                            <div className="px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
                                <h3 className="mb-3 text-lg font-semibold md:mb-4 md:text-2xl lg:mb-6">
                                    {feature.heading}
                                </h3>
                                <p className="text-muted-foreground lg:text-lg">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                    

                </div>
            </div>
        </section>
    );
};

export { SignBoards };
