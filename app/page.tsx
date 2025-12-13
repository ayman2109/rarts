"use client"
import { HeroSection } from "@/components/HeroSection";
import RecentWork from "@/components/Work";
import ImageText from "@/components/ImageText";
import WorkScrollStack from "@/components/WorkScrollStack";
import { Service } from "@/components/Service";
import Image from "next/image";
import ScrollingText from "@/components/ScrollingText";
import HorizontalInfiniteScroll from "@/components/Scroller";
import LogoClients from "@/components/LogoClients";
import InfiniteScroller from "@/components/Xyz";
export default function Home() {
  return (
    <div className="px-10 lg:px-32">
            <ScrollingText/>

      <HeroSection />
      
      <HorizontalInfiniteScroll direction="right" />
      <LogoClients />
      <Service />
      <WorkScrollStack />
      
      
      <div className="container">
        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          <div
            className="border-border flex flex-col overflow-clip rounded-xl border"
          >
            <video
              src="/images/hoarding/w-v.mp4"
              autoPlay
              loop
              muted
              controls={false}
              className="aspect-16/9 h-full w-full object-cover object-center transition-opacity hover:opacity-80"
            />

            <div className="px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
              <h3 className="mb-3 text-lg font-semibold md:mb-4 md:text-2xl lg:mb-6">
                Profile Lights + LED Letters ( 📍 Shankarpalle PistaHouse )
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
              src="/images/work/led-boards.mp4"
              autoPlay
              loop
              muted
              controls={false}
              className="aspect-16/9 h-full w-full object-cover object-center transition-opacity hover:opacity-80"
            />

            <div className="px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
              <h3 className="mb-3 text-lg font-semibold md:mb-4 md:text-2xl lg:mb-6">
                LED Sign Boards in Action (📍 Nampally PistaHouse )
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
              src="/images/hoarding/w-a.mp4"
              autoPlay
              loop
              muted
              controls={false}
              className="aspect-16/9 h-full w-full object-cover object-center transition-opacity hover:opacity-80"
            />

            <div className="px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
              <h3 className="mb-3 text-lg font-semibold md:mb-4 md:text-2xl lg:mb-6">
                CMR Technical Campus ( Large Iron Hoarding on a tall building )
              </h3>
              <p className="text-muted-foreground lg:text-lg">
                We can do A-Z of signages — big or small.
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
                Kondapur pistahouse ( Neon Signs )
              </h3>
              <p className="text-muted-foreground lg:text-lg">
                We can do A-Z of signages — big or small.
              </p>
            </div>
          </div>
        </div>
      </div>

     
      


    </div>
  );
}
