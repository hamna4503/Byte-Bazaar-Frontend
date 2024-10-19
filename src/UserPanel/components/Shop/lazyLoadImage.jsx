import { useEffect, useState } from "react";

const useLazyLoadImage = (src) => {
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    const imgObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setImageSrc(src); 
          imgObserver.unobserve(entry.target); 
        }
      });
    });
    
    const imgElement = document.createElement("img");
    imgElement.src = src;
    imgElement.onload = () => {
      setImageSrc(src);
      imgObserver.disconnect();
    };

    imgElement.onerror = () => {
      console.error("Image failed to load:", src);
      setImageSrc("");
    };

    imgObserver.observe(imgElement);

    return () => {
      imgObserver.disconnect();
    };
  }, [src]);

  return { imgSrc: imageSrc }; 
};

export default useLazyLoadImage;

