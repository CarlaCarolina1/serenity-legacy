import { useState, useEffect } from 'react'
import './HeroSlider.css'

interface HeroImage {
  src: string
  alt: string
}

const heroImages: HeroImage[] = [
  {
    src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80',
    alt: 'Luxury modern home in Central Florida'
  },
  {
    src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2053&q=80',
    alt: 'Beautiful Central Florida home exterior'
  },
  {
    src: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2032&q=80',
    alt: 'Elegant home in Orlando'
  },
  {
    src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    alt: 'Stunning Central Florida property'
  }
]

const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length)
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="hero-slider">
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`hero-slide ${index === currentIndex ? 'active' : ''}`}
        >
          <img src={image.src} alt={image.alt} />
        </div>
      ))}
      <div className="hero-slider-overlay"></div>
    </div>
  )
}

export default HeroSlider

