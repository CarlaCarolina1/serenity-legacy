import { useState } from 'react'
import './HomeValuation.css'

const HomeValuation = () => {
    const [formData, setFormData] = useState({
        address: '',
        city: '',
        zip: '',
        name: '',
        email: '',
        phone: '',
    })
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        // TODO: Integrate with backend API
        console.log('Home valuation request:', formData)
        setSubmitted(true)

        // Reset form after 3 seconds
        setTimeout(() => {
            setSubmitted(false)
            setFormData({
                address: '',
                city: '',
                zip: '',
                name: '',
                email: '',
                phone: '',
            })
        }, 3000)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <section className="home-valuation-section">
            <div className="home-valuation-container">
                <div className="home-valuation-content">
                    <h2 className="home-valuation-title">What's Your Home Worth?</h2>
                    <p className="home-valuation-subtitle">
                        Get a FREE, no-obligation market analysis of your property.
                        Discover your home's current market value in minutes.
                    </p>
                    <ul className="home-valuation-benefits">
                        <li>✓ Accurate market valuation based on recent sales</li>
                        <li>✓ Comparative market analysis (CMA)</li>
                        <li>✓ Expert insights on maximizing your home's value</li>
                        <li>✓ No obligation - completely free service</li>
                    </ul>
                </div>

                <div className="home-valuation-form-wrapper">
                    {submitted ? (
                        <div className="home-valuation-success">
                            <div className="success-icon">✓</div>
                            <h3>Thank You!</h3>
                            <p>
                                Your home valuation request has been received.
                                Carla will contact you within 24 hours with your personalized market analysis.
                            </p>
                        </div>
                    ) : (
                        <form className="home-valuation-form" onSubmit={handleSubmit}>
                            <h3>Get Your Free Home Valuation</h3>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="address">Property Address *</label>
                                    <input
                                        type="text"
                                        id="address"
                                        name="address"
                                        value={formData.address}
                                        onChange={handleChange}
                                        placeholder="123 Main Street"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="city">City *</label>
                                    <input
                                        type="text"
                                        id="city"
                                        name="city"
                                        value={formData.city}
                                        onChange={handleChange}
                                        placeholder="Orlando"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="zip">ZIP Code *</label>
                                    <input
                                        type="text"
                                        id="zip"
                                        name="zip"
                                        value={formData.zip}
                                        onChange={handleChange}
                                        placeholder="32801"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="name">Your Name *</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="John Doe"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="email">Email *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="john@example.com"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">Phone *</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="(954) 303-3456"
                                        required
                                    />
                                </div>
                            </div>

                            <button type="submit" className="valuation-submit-btn">
                                Get My Free Valuation
                            </button>

                            <p className="form-disclaimer">
                                Your information is secure and will never be shared.
                                By submitting, you agree to be contacted about your property valuation.
                            </p>
                        </form>
                    )}
                </div>
            </div>
        </section>
    )
}

export default HomeValuation
