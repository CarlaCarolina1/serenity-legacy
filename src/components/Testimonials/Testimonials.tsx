import React from 'react'
import './Testimonials.css'

interface Testimonial {
  quote: string
  clientName: string
  location: string
}

interface TestimonialsProps {
  title: string
  subtitle: string
  testimonials: Testimonial[]
  closingText: string
}

const Testimonials: React.FC<TestimonialsProps> = ({ title, subtitle, testimonials, closingText }) => {
  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="testimonials-header">
          <h2 className="testimonials-title">{title}</h2>
          <p className="testimonials-subtitle">{subtitle}</p>
        </div>
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
                <p className="testimonial-name">— {testimonial.clientName}</p>
                <p className="testimonial-location">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="testimonials-closing">{closingText}</p>
      </div>
    </section>
  )
}

export default Testimonials

