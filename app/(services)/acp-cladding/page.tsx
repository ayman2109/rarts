"use client";
import React from "react";
import { motion } from "framer-motion";
import { Service } from "@/components/Service";
const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: (i = 1) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.15, duration: 0.8 }
    })
};

const ImageCard = ({ title, src, index }: { title: string, src: string, index: number }) => (
    <motion.div
        custom={index}
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        whileHover={{ scale: 1.04 }}
        className="flex flex-col items-center gap-3 p-4 rounded-xl shadow-md bg-white 
                   transition-all duration-300 hover:shadow-2xl cursor-pointer"
    >
        <h2 className="text-lg font-semibold">{title}</h2>

        <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
            src={src}
            alt={title}
            className="rounded-lg shadow object-contain w-full max-h-[500px] bg-black/5 p-2 transition-all duration-300"
        />
    </motion.div>
);

const Page = () => {
    return (
        <div className="mx-4">
        <div className="pt-40 mb-20">

            {/* 🌟 HERO SECTION */}
            <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="relative w-full h-[60vh] md:h-[70vh] rounded-xl overflow-hidden shadow-xl"
            >
                <img
                    src="/images/before-after/g-a.jpeg"
                    alt="ACP Cladding Work"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40"></div>

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white drop-shadow-xl"
                    >
                        Premium ACP Cladding Projects
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 1 }}
                        className="text-white mt-6 text-lg sm:text-xl md:text-2xl max-w-3xl drop-shadow-md leading-relaxed"
                    >
                        Durable, Stylish & Professional Aluminium Composite Panel Cladding
                        For Shops, Buildings & Commercial Spaces.
                    </motion.p>
                </div>
            </motion.div>

            {/* SECTION TITLE */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="py-16 text-center"
            >
                <motion.h2
                    initial={{ backgroundPosition: "0% 50%", opacity: 0 }}
                    animate={{ backgroundPosition: "100% 50%", opacity: 1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    className="
     font-bold p-4 sm:text-4xl md:text-5xl lg:text-6xl
    bg-gradient-to-r from-yellow-500 via-red-500 to-orange-500
    bg-clip-text text-transparent
  "
                >
                    Our Recent ACP Cladding + Signage Projects
                </motion.h2>


            </motion.div>

            {/* ⭐ LUXURY GALLERY SECTION */}
            <div className="space-y-10 mt-5">

                {/* 🔥 PROJECT BLOCK — REUSABLE */}
                {[
                    {
                        title: "Malakpet Pista House 📍 Hyderabad",
                        items: [
                            { title: "Before", type: "image", src: "/images/before-after/m-bb.png" },
                            { title: "Design", type: "image", src: "/images/acp/m-d.jpeg" },
                            { title: "After", type: "image", src: "/images/before-after/m-a.jpeg" },
                        ]
                    },
                    {
                        title: "Pista House Kondapur 📍 Hyderabad",
                        items: [
                            { title: "Design", type: "image", src: "/images/acp/p-d.jpeg" },
                            { title: "After", type: "image", src: "/images/acp/p-a.jpeg" },
                            { title: "After", type: "video", src: "/images/acp/p-v.mp4" },
                            { title: "After", type: "video", src: "/images/acp/k-va].mp4" },
                        ]
                    },
                    {
                        title: "Kanchi Cafe Kompally 📍 Hyderabad",
                        items: [
                            { title: "Contruction", type: "image", src: "/images/acp/k-c.jpeg" },
                            { title: "After", type: "image", src: "/images/acp/k-a.jpeg" },
                            { title: "Video", type: "video", src: "/images/acp/k-v.mp4" },

                        ]
                    },
                    {
                        title: "Pista House Bahadurpally 📍 Hyderabad",
                        items: [
                            { title: "After", type: "image", src: "/images/acp/p-1.jpeg" },
                            { title: "Video", type: "video", src: "/images/acp/b-v.mp4" },
                            { title: "Completed", type: "image", src: "/images/acp/b-1.jpeg" },
                        ]
                    }
                ].map((project, pIndex) => (
                    <motion.div
                        key={pIndex}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9 }}
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        {/* Title */}
                        <h2 className="text-4xl font-bold text-center text-gray-800">
                            {project.title}
                        </h2>

                        {/* Horizontal Showcase */}
                        <div className="flex flex-col md:flex-row gap-10 justify-center items-center">

                            {project.items.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.2, duration: 0.8 }}
                                    viewport={{ once: true }}
                                    className="w-full md:w-[32%] group"
                                >
                                    <h3 className="text-xl font-semibold mb-4 text-center">
                                        {item.title}
                                    </h3>

                                    {/* Image */}
                                    {item.type === "image" && (
                                        <motion.img
                                            whileHover={{ scale: 1.03 }}
                                            transition={{ duration: 0.4 }}
                                            src={item.src}
                                            className="rounded-2xl shadow-lg w-full object-cover max-h-[500px] group-hover:shadow-2xl"
                                        />
                                    )}

                                    {/* Video */}
                                    {item.type === "video" && (
                                        <motion.video
                                            whileHover={{ scale: 1.02 }}
                                            transition={{ duration: 0.4 }}
                                            src={item.src}
                                            autoPlay
                                            loop
                                            muted
                                            controls={false}
                                            className="rounded-2xl shadow-xl w-full max-h-[500px] object-cover"
                                        />
                                    )}
                                </motion.div>
                            ))}

                        </div>
                        <hr className="border-t-2 border-gray-400" />
                    </motion.div>


                ))}

            </div>

        </div>
        <div className="px-20"><Service /></div>
         
        </div>
    );
};

export default Page;
