"use client";
import { motion } from "framer-motion";

export function BeforeAfterBlock({ before, after }: { before: string; after: string }) {
  return (
    <div className="relative py-12">
      {/* Soft Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-black opacity-80 rounded-3xl blur-2xl" />

      <div className="relative grid md:grid-cols-2 gap-10 items-center z-10">
        
        {/* BEFORE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative rounded-2xl overflow-hidden shadow-[0_0_25px_rgba(0,0,0,0.4)] border border-white/10"
        >
          <p className="absolute top-3 left-3 bg-white/10 backdrop-blur-md text-white px-4 py-1.5 rounded-lg text-sm font-semibold border border-white/20">
            BEFORE
          </p>

          <img
            src={before}
            alt="before"
            className="w-full h-[420px] transition-transform duration-700 hover:scale-105"
          />
        </motion.div>

        {/* AFTER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="relative rounded-2xl overflow-hidden shadow-[0_0_25px_rgba(0,0,0,0.4)] border border-white/10"
        >
          <p className="absolute top-3 left-3 bg-green-500/20 backdrop-blur-md text-green-300 px-4 py-1.5 rounded-lg text-sm font-semibold border border-green-400/20">
            AFTER
          </p>

          <img
            src={after}
            alt="after"
            className="w-full h-[420px] object-cover transition-transform duration-700 hover:scale-105"
          />
        </motion.div>

      </div>
    </div>
  );
}
