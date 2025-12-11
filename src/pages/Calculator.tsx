import { useSearchParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Calculator from '../components/Calculator'
import { propertyApi, Property } from '../services/api'
import { getFallbackPropertyById } from '../data/properties'
import './CalculatorPage.css'

interface PrefillState {
  propertyPrice?: number
  propertyTax?: number
  propertyInsurance?: number
  hoaFee?: number
}

const mapPropertyToPrefill = (property: Property): PrefillState => ({
  propertyPrice: property.price,
  propertyTax: property.property_tax ?? undefined,
  propertyInsurance: property.insurance_estimate ?? undefined,
  hoaFee: property.hoa_fee ?? undefined,
})

const CalculatorPage = () => {
  const [searchParams] = useSearchParams()
  const propertyId = searchParams.get('property')
  const [prefill, setPrefill] = useState<PrefillState>({})

  useEffect(() => {
    let isMounted = true

    const applyPrefill = (property: Property | undefined) => {
      if (!isMounted) return
      if (property) {
        setPrefill(mapPropertyToPrefill(property))
      } else {
        setPrefill({})
      }
    }

    if (!propertyId) {
      applyPrefill(undefined)
      return () => {
        isMounted = false
      }
    }

    const numericId = Number(propertyId)
    if (!Number.isNaN(numericId)) {
      propertyApi
        .getById(numericId)
        .then(applyPrefill)
        .catch(() => {
          applyPrefill(getFallbackPropertyById(propertyId))
        })
    } else {
      applyPrefill(getFallbackPropertyById(propertyId))
    }

    return () => {
      isMounted = false
    }
  }, [propertyId])

  return (
    <div className="calculator-page">
      <section className="calculator-hero">
        <div className="container">
          <h1>Mortgage Calculator</h1>
          <p>Calculate your monthly payment and explore financing options for your dream home</p>
        </div>
      </section>
      <section className="calculator-content">
        <div className="container">
          <Calculator
            propertyPrice={prefill.propertyPrice}
            propertyTax={prefill.propertyTax}
            propertyInsurance={prefill.propertyInsurance}
            hoaFee={prefill.hoaFee}
          />
        </div>
      </section>
    </div>
  )
}

export default CalculatorPage

