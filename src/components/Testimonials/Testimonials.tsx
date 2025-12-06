import React from 'react'
import './Testimonials.css'

interface Testimonial {
  quote: string
  clientName: string
  location: string
}

interface TestimonialsProps {
  title: string
  testimonials: Testimonial[]
}

const Testimonials: React.FC<TestimonialsProps> = ({ title, testimonials }) => {
  return (
    <section className="testimonials-section">
      <div className="container">
        <h2 className="testimonials-title">{title}</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-quote">
                <svg width="40" height="32" viewBox="0 0 40 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.6667 0L6.66667 8H0V32H13.3333V16H6.66667L10.6667 0ZM40 0L36 8H29.3333V32H42.6667V16H36L40 0Z" fill="var(--color-secondary)" fillOpacity="0.3"/>
                </svg>
                <p className="testimonial-text">"{testimonial.quote}"</p>
              </div>
              <div className="testimonial-author">
                <p className="testimonial-name">{testimonial.clientName}</p>
                <p className="testimonial-location">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

