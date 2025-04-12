import React, { useState } from "react";

export default function ProjectMediaSlider({ media }) {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((current + 1) % media.length);
  const prev = () => setCurrent((current - 1 + media.length) % media.length);

  return (
    <div className="relative w-full h-48 sm:h-56 md:h-64 overflow-hidden rounded-xl shadow-lg bg-gray-900">
      <img
        src={media[current]}
        alt={`Slide ${current}`}
        className="w-full h-full object-contain transition-all duration-500"
      />

      {/* Navigation Buttons */}
      <button
  onClick={prev}
  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full shadow-lg hover:scale-110 transition-all duration-300 border border-white/20 hover:border-white/30"
  aria-label="Previous"
>
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
</button>
<button
  onClick={next}
  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full shadow-lg hover:scale-110 transition-all duration-300 border border-white/20 hover:border-white/30"
  aria-label="Next"
>
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
</button>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2">
        {media.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === current ? "bg-white" : "bg-gray-500"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
