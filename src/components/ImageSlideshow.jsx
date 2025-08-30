import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ImageSlideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { url: "/msa/slide-1.png", alt: "Crowning success" },
    { url: "/msa/slide-2.png", alt: "Elegant evening" },
    { url: "/msa/slide-3.png", alt: "Sisterhood and service" },
    { url: "/msa/slide-4.png", alt: "Leadership and poise" },
  ];

  const FALLBACK_URL = "https://via.placeholder.com/1600x900?text=Image+Unavailable";

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[600px] overflow-hidden rounded-2xl">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex].url}
          alt={images[currentIndex].alt}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 w-full h-full object-contain bg-black/5"
          loading="lazy"
          decoding="async"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = FALLBACK_URL;
          }}
        />
      </AnimatePresence>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? "bg-white w-4" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlideshow;
