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
      <div className="testimonials-header">
        <h2 className="testimonials-title">{title}</h2>
        <p className="testimonials-subtitle">{subtitle}</p>
      </div>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <span className="testimonial-quote-mark">"</span>
            <div className="testimonial-content">
              <p className="testimonial-text">{testimonial.quote}</p>
              <div className="testimonial-author">
                <p className="testimonial-name">— {testimonial.clientName}</p>
                <p className="testimonial-location">{testimonial.location}</p>
              </div>
            </div>
            <span className="testimonial-quote-mark testimonial-quote-mark-end">"</span>
          </div>
        ))}
      </div>
      <p className="testimonials-closing">{closingText}</p>
    </section>
  )
}

export default Testimonials
