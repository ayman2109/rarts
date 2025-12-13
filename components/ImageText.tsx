import React from 'react'
import { motion } from 'framer-motion'
const ImageText = ({src, title, description}: {src: string, title: string, description: string}) => {
  return (
    <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="relative w-full h-[60vh] md:h-[70vh] rounded-xl overflow-hidden shadow-xl"
            >
                <img
                    src={src}
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
                        {title}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 1 }}
                        className="text-white mt-6 text-lg sm:text-xl md:text-2xl max-w-3xl drop-shadow-md leading-relaxed"
                    >
                       {description}
                    </motion.p>
                </div>
            </motion.div>
  )
}

export default ImageText