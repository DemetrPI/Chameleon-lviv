
import "../../src/assets/random-image.css"
// import React, { useEffect, useState } from 'react';


// const imagesArray = [
//   firstimage, secondimage, thirdimage
//   // Add more image paths as needed
// ];

const RandomImages = () => {
//   const [visibleImages, setVisibleImages] = useState([]);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (visibleImages.length < 3) {
//         const image = imagesArray[Math.floor(Math.random() * imagesArray.length)];
//         const xPos = Math.random() * (window.innerWidth - 100); // Assuming image width of 100px
//         const yPos = Math.random() * (window.innerHeight - 100); // Assuming image height of 100px
//         const rotation = Math.random() * 20 - 10; // Random rotation between -10 and 10 degrees

//         const newImage = {
//           src: image,
//           style: {
//             left: `${xPos}px`,
//             top: `${yPos}px`,
//             transform: `rotate(${rotation}deg)`, // Apply random rotation
//           },
//           id: Date.now(), // Unique ID for key prop and removing later
//         };

//         setVisibleImages((prevImages) => [...prevImages, newImage]);

//         // Schedule removal of this image
//         setTimeout(() => {
//           setVisibleImages((prevImages) => prevImages.filter((img) => img.id !== newImage.id));
//         }, 5000); // 5 seconds = 3s visible + 2s fade out
//       }
//     }, 2000); // Check every 2 seconds

//     return () => clearInterval(interval); // Cleanup on unmount
//   }, [visibleImages]);

//   return (
//     <>
//       {visibleImages.map((img) => (
//         <img key={img.id} src={img.src} className="random-image" style={img.style} alt="" />
//       ))}
//     </>
//   );
// };
}
export default RandomImages;
