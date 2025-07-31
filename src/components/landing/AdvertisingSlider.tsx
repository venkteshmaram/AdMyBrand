import React, { useState, useEffect } from 'react';

const images = [
  { src: "/ADMYBRANDIMAGES/Gemini_Generated_Image_1ehbvu1ehbvu1ehb.png", alt: "Image 1" },
  { src: "/ADMYBRANDIMAGES/Gemini_Generated_Image_4f3ez64f3ez64f3e.png", alt: "Image 2" },
  { src: "/ADMYBRANDIMAGES/Gemini_Generated_Image_5w39pj5w39pj5w39.png", alt: "Image 3" },
  { src: "/ADMYBRANDIMAGES/Gemini_Generated_Image_c0z5jpc0z5jpc0z5.png", alt: "Image 4" },
  { src: "/ADMYBRANDIMAGES/Gemini_Generated_Image_g832dyg832dyg832.png", alt: "Image 5" },
  { src: "/ADMYBRANDIMAGES/Gemini_Generated_Image_tpykd8tpykd8tpyk.png", alt: "Image 6" },
  { src: "/ADMYBRANDIMAGES/Gemini_Generated_Image_trd19ctrd19ctrd1.png", alt: "Image 7" },
  { src: "/ADMYBRANDIMAGES/Gemini_Generated_Image_vr412dvr412dvr41.png", alt: "Image 8" },
  { src: "/ADMYBRANDIMAGES/Gemini_Generated_Image_wf4hojwf4hojwf4h.png", alt: "Image 9" },
];

const AdvertisingSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-lg h-[500px] overflow-hidden">
      {images.map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt={image.alt}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
    </div>
  );
};

export default AdvertisingSlider;
