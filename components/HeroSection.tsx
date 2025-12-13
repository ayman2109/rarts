"use client";

import { ArrowDownRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { HeroCarousel } from "@/components/HeroCarousal";

const HeroSection = () => {
  return (
    <section className="pt-[110px] bg-linear-to-b from-background to-muted/40">
      <div className="container grid items-center gap-20 lg:grid-cols-2">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto flex flex-col items-center text-center lg:items-start lg:text-left"
        >
          {/* Badge */}
          
          {/* Heading */}
          <h1 className="mt-2 mb-6 text-balance text-4xl font-extrabold tracking-tight lg:text-6xl xl:text-7xl leading-tight">
            Transform Your Space with
            <br />
            <motion.span
              initial={{ backgroundSize: "0% 100%" }}
              animate={{ backgroundSize: "100% 100%" }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
              className="bg-gradient-to-r from-primary to-yellow-500 bg-clip-text text-transparent"
            >
              Cladding & Signage
            </motion.span>{" "}
            Excellence
          </h1>

          {/* Subtitle */}
          <p className="text-muted-foreground mb-10 max-w-xl text-base lg:text-xl leading-relaxed">
            Raichuri Arts delivers premium cladding and signage solutions with
            precision, durability, and innovative design—enhancing both aesthetics
            and functionality of your property.
          </p>

          {/* CTA Buttons */}
          <div className="flex w-full flex-col gap-3 sm:flex-row lg:justify-start">
            <Button size="lg" asChild className="w-full sm:w-auto shadow-md shadow-primary/20">
              <a href="#contact">Get a Quote</a>
            </Button>

            <Button
              size="lg"
              asChild
              variant="outline"
              className="w-full sm:w-auto border-primary text-primary hover:bg-primary hover:text-white transition"
            >
              <a href="#projects" className="flex items-center gap-2">
                Our Work <ArrowDownRight className="size-4" />
              </a>
            </Button>
          </div>
        </motion.div>

        {/* RIGHT CAROUSEL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex justify-center lg:justify-end"
        >
          <HeroCarousel />
        </motion.div>

        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary"
          >
            ⭐ 60+ Years of Excellence in the Signage Industry
          </motion.div>


      </div>
    </section>
  );
};

export { HeroSection };
