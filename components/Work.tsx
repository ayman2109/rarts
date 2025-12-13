"use client";

import { Cog, Lightbulb, ListChecks } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const features = [
    {
        id: "feature-1",
        heading: "Pista House, 📍 Gandimaisamma Hyderabad.",
        icon: <Lightbulb className="size-4" />,
        description: "ACP cladding work + Signages + Profile Ligths to give that wow factor.",
        images: [
            "/images/before-after/BEFORE.png",
            "/images/before-after/g-a.jpeg",
        ],
        url: "https://shadcnblocks.com",
        isDefault: true,
    },
    {
        id: "feature-2",
        heading: "📍Malakpet Pista House",
        icon: <ListChecks className="size-4" />,
        description:
            "Beutified the whole facade of the building with ACP cladding and Signages.",
        images: [
            "/images/before-after/m-bb.png",
            "/images/before-after/m-a.jpeg",
        ],
        url: "https://shadcnblocks.com",
        isDefault: false,
    },
    {
        id: "feature-3",
        heading: "Kanchi Cafe Kompally 📍 Hyderabad",
        icon: <Cog className="size-4" />,
        description:
            "Unique looking structure with ACP cladding to attract more customers.",
        images: [
            "/images/before-after/kanchi.jpg",
            "/images/before-after/kanchi-1.jpeg",
        ],
        url: "https://shadcnblocks.com",
        isDefault: false,
    },
];

export default function RecentWork() {
    const defaultTab =
        features.find((tab) => tab.isDefault)?.id || features[0].id;

    return (
        <section className="py-22">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-12">
                OUR <span className="text-primary">RECENT WORK</span>
            </h2>

            <div className="container">
                <Tabs defaultValue={defaultTab} className="p-0">
                    {/* Tabs List */}
                    <TabsList
  className="
    bg-background flex h-auto w-full p-2
    overflow-x-scroll no-scrollbar gap-3 
    snap-x snap-mandatory flex-nowrap
    touch-pan-x scroll-smooth
    md:overflow-visible md:flex-wrap
  "
>

                        {features.map((tab) => (
                            <TabsTrigger
                                key={tab.id}
                                value={tab.id}
                                className="
        group flex w-[85%] sm:min-w-[260px] flex-col snap-center
        items-start justify-start gap-1 rounded-xl border 
        p-4 transition-all duration-300 whitespace-normal
        bg-white/5 hover:bg-white/10 backdrop-blur-md
        hover:shadow-md hover:shadow-purple-300/20
        data-[state=active]:bg-gradient-to-r 
        data-[state=active]:from-yellow-600/40 
        data-[state=active]:to-yellow-400/80
        border-white/10
      "
                            >
                                <p className="text-lg font-semibold">{tab.heading}</p>
                                <p className="text-sm opacity-80">{tab.description}</p>
                            </TabsTrigger>
                        ))}
                    </TabsList>


                    {/* Tabs Content */}
                    {features.map((tab) => (
                        <TabsContent
                            key={tab.id}
                            value={tab.id}
                            className="transition-opacity duration-300"
                        >
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl mx-auto">
                                {tab.images.map((img, idx) => (
                                    <div key={idx} className="w-full flex justify-center">
                                        <img
                                            src={img}
                                            alt={tab.heading}
                                            className="rounded-md object-contain max-h-[400px] w-full"
                                        />
                                    </div>
                                ))}
                            </div>
                        </TabsContent>
                    ))}
                </Tabs>
            </div>
        </section>
    );
}
