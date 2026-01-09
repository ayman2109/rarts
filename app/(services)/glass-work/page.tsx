"use client"

import { ArrowDown } from "lucide-react"
import Image from "next/image"

const Page = () => {
  return (
    <div className="mx-auto max-w-7xl px-6 py-24">
      {/* Heading */}
      <div className="mb-16 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          CMR College Glass Work
        </h1>
        <p className="mt-4 flex items-center justify-center gap-2 text-muted-foreground">
          Project Showcase <ArrowDown size={18} />
        </p>
      </div>

      {/* Hero Image */}
      <div className="mb-24 flex justify-center">
        <div className="relative w-full max-w-3xl overflow-hidden rounded-2xl shadow-xl">
          <Image
            src="/images/glass/glasswork.jpeg"
            alt="CMR College Glass Work"
            width={1200}
            height={800}
            className="h-auto w-full object-cover transition-transform duration-500 hover:scale-105"
            priority
          />
        </div>
      </div>

      {/* Gallery */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div className="group overflow-hidden rounded-xl border bg-white shadow-sm transition hover:shadow-lg">
          <div className="relative h-56 w-full overflow-hidden">
            <Image
              src="/images/glass/glass_sign.jpeg"
              alt="LED Letters on Glass Wall"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <div className="p-6">
            <h3 className="text-lg font-semibold">
              LED Letters on Glass Wall
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              📍 Preston Prime Mall, Gachibowli
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
