"use client"
import { ArrowDown } from 'lucide-react';

import ImageText from '@/components/ImageText'
const page = () => {
    return (
        <div className='py-32 px-20'>
            <h1>CMR College glass work <ArrowDown /></h1>
            <div className="w-full mb-20">
                <img
                    src="/images/glass/glasswork.jpeg"
                    className="
      w-full 
      rounded-2xl 
      shadow-xl 
      object-cover 
      transition-all 
      duration-500 
      ease-out 
      hover:scale-[1.02] 
      opacity-0 
      animate-fadeIn
    "
                />
            </div>

            <div className='top-100 container'>
                <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
                    <div
                        className="border-border flex flex-col overflow-clip rounded-xl border"
                    >
                        <img
                            src="/images/glass/glass_sign.jpeg"

                            className="aspect-16/9 h-full w-full object-cover object-center transition-opacity hover:opacity-80"
                        />

                        <div className="px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
                            <h3 className="mb-3 text-lg font-semibold md:mb-4 md:text-2xl lg:mb-6">
                                LED Letters Hanged on glass wall ( 📍 Preston Prime Mall Gachi Bowli )
                            </h3>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default page