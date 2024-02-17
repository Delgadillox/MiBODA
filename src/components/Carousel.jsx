import React, { useState } from 'react';
import '../styles/carousel.css'; // Asegúrate de tener los estilos CSS
import salon1 from "../assets/salon1.jpg"
import salon2 from "../assets/salon2.jpg"
import salon3 from "../assets/salon3.jpg"


const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [salon1, salon2, salon3];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel">
        
      <div className="slider" style={{ transform: `translateX(${-currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <img
            key={index}
            className={index === currentIndex ? 'slide active' : 'slide'}
            src={image}
            alt={`Slide ${index + 1}`}
          />
        ))}        
      </div>
      <button className="arrow left" onClick={prevSlide}>&lt;</button>
      <button className="arrow right" onClick={nextSlide}>&gt;</button>
    </div>
  );
};

// Example usage:


export default Carousel;