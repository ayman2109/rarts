"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState, useRef } from "react"

const images = [
  
  "/images/acp/pb-1.jpeg",
  "/images/acp/alu.jpeg",
  "/images/slp.jpeg",
  "/images/ledboards/b-1.jpeg",
  "/images/ledboards/b-5.jpeg",
]

export function HeroCarousel() {
  const [index, setIndex] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const [direction, setDirection] = useState(1)
  const [paused, setPaused] = useState(false)

  const startAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)

    intervalRef.current = setInterval(() => {
      setDirection(1)
      setIndex((i) => (i + 1) % images.length)
    }, 4200) // ✅ slower & premium
  }

  const stopAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)
  }

  useEffect(() => {
    startAutoSlide()
    return () => stopAutoSlide()
  }, [])

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 120 : -120,
      opacity: 0,
      scale: 0.98,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -120 : 120,
      opacity: 0,
      scale: 0.98,
    }),
  }

  return (
    <div
      onMouseEnter={() => {
        stopAutoSlide()
        setPaused(true)
      }}
      onMouseLeave={() => {
        startAutoSlide()
        setPaused(false)
      }}
      className="
  relative 
  h-[200px] sm:h-[260px] md:h-[380px] lg:h-[420px]
  w-full overflow-hidden rounded-2xl sm:rounded-3xl
  shadow-[0_12px_50px_rgba(0,0,0,0.35)]
  bg-black/20 border border-white/10
"
    >
      {/* Soft cinematic gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-[3]" />

      {/* Blurred background */}
      <img
        src={images[index]}
        className="
    absolute inset-0 w-full h-full 
    object-cover scale-110 
    opacity-60
    blur-lg sm:blur-3xl
  "
      />


      {/* MAIN SLIDE */}
      <AnimatePresence custom={direction} mode="wait">
        <motion.img
          key={index}
          src={images[index]}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1], // ✅ cinematic easing
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.7}
          dragMomentum={true}
          onDragEnd={(_, info) => {
            if (info.offset.x < -80) {
              setDirection(1)
              setIndex((i) => (i + 1) % images.length)
            }
            if (info.offset.x > 80) {
              setDirection(-1)
              setIndex((i) => (i - 1 + images.length) % images.length)
            }
          }}
          className="
  absolute inset-0 
  m-auto h-full w-full  aspect-16/9 h-full w-full object-cover object-center
 
  z-10 cursor-grab active:cursor-grabbing
"

        />
      </AnimatePresence>
      {/* MOBILE NAV ARROWS */}
      <div className="absolute inset-0 flex items-center justify-between px-3 z-30 sm:hidden">
        <button
          onClick={() => {
            setDirection(-1)
            setIndex((i) => (i - 1 + images.length) % images.length)
          }}
          className="h-9 w-9 rounded-full bg-black/40 backdrop-blur-md text-white text-lg flex items-center justify-center active:scale-90"
        >
          ‹
        </button>

        <button
          onClick={() => {
            setDirection(1)
            setIndex((i) => (i + 1) % images.length)
          }}
          className="h-9 w-9 rounded-full bg-black/40 backdrop-blur-md text-white text-lg flex items-center justify-center active:scale-90"
        >
          ›
        </button>
      </div>

      {/* PROGRESS BAR */}
      <motion.div
        key={index}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: paused ? 0 : 1 }}
        transition={{ duration: 4.2, ease: "linear" }}
        className="absolute bottom-0 left-0 right-0 h-[3px] bg-white/70 origin-left z-20"
      />

      {/* DOTS */}
      <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-3 z-30">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > index ? 1 : -1)
              setIndex(i)
            }}
            className={`
              h-2.5 w-2.5 rounded-full transition-all
              ${i === index
                ? "bg-white scale-125 shadow-[0_0_12px_rgba(255,255,255,0.9)]"
                : "bg-white/40"
              }
            `}
          />
        ))}
      </div>
    </div>
  )
}
