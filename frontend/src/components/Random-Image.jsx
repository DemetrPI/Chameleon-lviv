import React, { useEffect, useState } from 'react';
import "../../src/assets/random-image.css";

function importAll(r) {
  return r.keys().map(r);
}

const imagesArray = importAll(require.context('../../src/assets/chameleons', false, /\.(png|jpe?g|svg)$/));

const RandomImages = () => {
  const [visibleImages, setVisibleImages] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (visibleImages.length < 3) {
        const imageIndex = Math.floor(Math.random() * imagesArray.length);
        const image = imagesArray[imageIndex];
        const xPos = Math.random() * (window.innerWidth - 100); 
        const yPos = Math.random() * (window.innerHeight - 100);
        const rotation = Math.random() * 20 - 10; // Random rotation between -10 and 10 degrees

        const newImage = {
          src: image,
          style: {
            left: `${xPos}px`,
            top: `${yPos}px`,
            transform: `scale(0.8) rotate(${rotation}deg)`, // Apply scale and random rotation
            transition: 'transform 0.5s',
          },
          id: Date.now(),
        };

        setVisibleImages(prevImages => [...prevImages, newImage]);

        setTimeout(() => {
          setVisibleImages(prevImages => prevImages.filter(img => img.id !== newImage.id));
        }, 5000); // Adjust based on how long you want the image to stay before starting to fade out
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [visibleImages]);

  const handleClick = (id) => {
    setVisibleImages(prevImages =>
      prevImages.map(img =>
        img.id === id ? { ...img, style: { ...img.style, transform: 'scale(0)', transition: 'transform 0.5s' }} : img
      )
    );
    setTimeout(() => {
      setVisibleImages(prevImages => prevImages.filter(img => img.id !== id));
    }, 500); // This ensures the image is removed after the shrink animation completes
  };

  return (
    <>
      {visibleImages.map(img => (
        <img
          key={img.id}
          src={img.src}
          className="random-image"
          style={{ ...img.style, maxWidth: '100px', maxHeight: '100px' }}
          alt=""
          onClick={() => handleClick(img.id)}
        />
      ))}
    </>
  );
};

export default RandomImages;
