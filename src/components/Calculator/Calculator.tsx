import { useState, useEffect } from 'react'
import ProjectionChart from './ProjectionChart'
import ProjectionTable from './ProjectionTable'
import BuyerChecklist from './BuyerChecklist'
import { formatCurrency, parseCurrency } from '../../utils/currency'
import './Calculator.css'

interface CalculatorProps {
  propertyPrice?: number
  propertyTax?: number
  propertyInsurance?: number
  hoaFee?: number
}

interface CalculationResult {
  monthlyPayment: number
  principalAndInterest: number
  propertyTax: number
  insurance: number
  hoa: number
  pmi: number
  totalMonthly: number
  downPayment: number
  downPaymentPercent: number
  loanAmount: number
}

interface YearlyData {
  year: number
  principal: number
  interest: number
  balance: number
}

const Calculator = ({
  propertyPrice = 0,
  propertyTax = 0,
  propertyInsurance = 0,
  hoaFee = 0,
}: CalculatorProps) => {
  const [price, setPrice] = useState(propertyPrice)
  const [downPayment, setDownPayment] = useState(0)
  const [downPaymentPercent, setDownPaymentPercent] = useState(20)
  const [downPaymentType, setDownPaymentType] = useState<'%' | '$'>('%')
  const [interestRate, setInterestRate] = useState(6.5)
  const [interestRateInput, setInterestRateInput] = useState('6.5')
  const [loanTerm, setLoanTerm] = useState(30)
  const [tax, setTax] = useState(propertyTax)
  const [insurance, setInsurance] = useState(propertyInsurance)
  const [hoa, setHoa] = useState(hoaFee)
  const [result, setResult] = useState<CalculationResult | null>(null)
  const [yearlyData, setYearlyData] = useState<YearlyData[]>([])
  const [projectionView, setProjectionView] = useState<'graph' | 'table'>('graph')

  // Update price when propertyPrice prop changes
  useEffect(() => {
    if (propertyPrice > 0) {
      setPrice(propertyPrice)
      const defaultDown = propertyPrice * 0.2
      setDownPayment(defaultDown)
      setDownPaymentPercent(20)
    }
  }, [propertyPrice])

  // Update tax/insurance/HOA when props change
  useEffect(() => {
    if (propertyTax > 0) setTax(propertyTax)
    if (propertyInsurance > 0) setInsurance(propertyInsurance)
    if (hoaFee > 0) setHoa(hoaFee)
  }, [propertyTax, propertyInsurance, hoaFee])

  // Calculate detailed 3-year projection
  const calculateYearlyProjection = (
    loanAmount: number,
    monthlyRate: number,
    pAndI: number
  ): YearlyData[] => {
    let balance = loanAmount
    const yearlyData: YearlyData[] = []

    for (let year = 1; year <= 3; year++) {
      let totalInterestYear = 0
      let totalPrincipalYear = 0

      for (let month = 1; month <= 12; month++) {
        // Handle interest-free loans
        const interestPayment = monthlyRate > 0 ? balance * monthlyRate : 0
        const principalPayment = pAndI - interestPayment
        balance -= principalPayment

        totalInterestYear += interestPayment
        totalPrincipalYear += principalPayment
      }

      yearlyData.push({
        year,
        principal: totalPrincipalYear,
        interest: totalInterestYear,
        balance: Math.max(0, balance),
      })
    }

    return yearlyData
  }

  // Calculate mortgage payment
  const calculateMortgage = () => {
    if (price <= 0) return null

    let actualDownPayment = downPayment
    if (downPaymentType === '%') {
      actualDownPayment = (price * downPaymentPercent) / 100
    }

    const loanAmount = price - actualDownPayment
    if (loanAmount <= 0) return null

    const monthlyRate = interestRate / 100 / 12
    const numPayments = loanTerm * 12

    // Principal and Interest
    // Handle interest-free loans (0% interest rate)
    let principalAndInterest: number
    if (interestRate === 0 || monthlyRate === 0) {
      // Interest-free loan: just divide principal by number of payments
      principalAndInterest = loanAmount / numPayments
    } else {
      // Standard mortgage formula
      principalAndInterest =
        loanAmount *
        (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) /
        (Math.pow(1 + monthlyRate, numPayments) - 1)
    }

    // PMI (if down payment < 20%)
    const downPaymentPercentActual = (actualDownPayment / price) * 100
    const pmi = downPaymentPercentActual < 20 ? (loanAmount * 0.005) / 12 : 0

    // Monthly totals (allow zero values for tax, insurance, HOA)
    const monthlyTax = tax > 0 ? tax / 12 : 0
    const monthlyInsurance = insurance > 0 ? insurance / 12 : 0
    const monthlyPayment =
      principalAndInterest + monthlyTax + monthlyInsurance + (hoa || 0) + pmi

    // Calculate 3-year projection
    const projection = calculateYearlyProjection(
      loanAmount,
      monthlyRate,
      principalAndInterest
    )

    return {
      monthlyPayment,
      principalAndInterest,
      propertyTax: monthlyTax,
      insurance: monthlyInsurance,
      hoa: hoa || 0,
      pmi,
      totalMonthly: monthlyPayment,
      downPayment: actualDownPayment,
      downPaymentPercent: downPaymentPercentActual,
      loanAmount,
      projection,
    }
  }

  // Recalculate when inputs change
  useEffect(() => {
    const calculated = calculateMortgage()
    if (calculated) {
      const { projection, ...resultData } = calculated
      setResult(resultData)
      setYearlyData(projection)
    } else {
      setResult(null)
      setYearlyData([])
    }
  }, [price, downPayment, downPaymentPercent, downPaymentType, interestRate, loanTerm, tax, insurance, hoa])

  // Sync interestRateInput when interestRate changes externally
  useEffect(() => {
    if (interestRate.toString() !== interestRateInput) {
      setInterestRateInput(interestRate.toString())
    }
  }, [interestRate])

  // Handle down payment type toggle
  const handleDownPaymentTypeToggle = (type: '%' | '$') => {
    setDownPaymentType(type)
    if (type === '%' && price > 0) {
      setDownPaymentPercent((downPayment / price) * 100)
    } else if (type === '$' && price > 0) {
      setDownPayment((price * downPaymentPercent) / 100)
    }
  }

  // Handle down payment changes
  const handleDownPaymentChange = (value: number) => {
    setDownPayment(value)
    if (price > 0 && downPaymentType === '$') {
      setDownPaymentPercent((value / price) * 100)
    }
  }

  const handleDownPaymentPercentChange = (percent: number) => {
    setDownPaymentPercent(percent)
    if (price > 0 && downPaymentType === '%') {
      setDownPayment((price * percent) / 100)
    }
  }

  // Format input value for display
  const formatInputValue = (value: number): string => {
    if (value === 0) return ''
    return value.toLocaleString('en-US', { maximumFractionDigits: 0 })
  }

  return (
    <div className="calculator-wrapper">
      <div className="calculator-container">
        <h1 className="calculator-title">Home Ownership Calculator</h1>

        <form className="calculator-form" onSubmit={(e) => e.preventDefault()}>
          <div className="calculator-inputs">
            {/* Property Price */}
            <div className="form-group full-width">
              <label htmlFor="price">Property Price</label>
              <div className="input-wrapper">
                <span className="input-prefix">$</span>
                <input
                  id="price"
                  type="text"
                  value={formatInputValue(price)}
                  onChange={(e) => setPrice(parseCurrency(e.target.value))}
                  placeholder="Enter property price"
                />
              </div>
            </div>

            {/* Down Payment */}
            <div className="form-group full-width">
              <div className="down-payment-header">
                <label htmlFor="down-payment">Down Payment</label>
                <div className="down-payment-toggle">
                  <button
                    type="button"
                    className={`dp-toggle ${downPaymentType === '%' ? 'active' : ''}`}
                    onClick={() => handleDownPaymentTypeToggle('%')}
                  >
                    %
                  </button>
                  <button
                    type="button"
                    className={`dp-toggle ${downPaymentType === '$' ? 'active' : ''}`}
                    onClick={() => handleDownPaymentTypeToggle('$')}
                  >
                    $
                  </button>
                </div>
              </div>
              <div className="input-wrapper">
                <input
                  id="down-payment"
                  type="text"
                  value={
                    downPaymentType === '%'
                      ? downPaymentPercent.toFixed(1)
                      : formatInputValue(downPayment)
                  }
                  onChange={(e) => {
                    if (downPaymentType === '%') {
                      handleDownPaymentPercentChange(parseFloat(e.target.value) || 0)
                    } else {
                      handleDownPaymentChange(parseCurrency(e.target.value))
                    }
                  }}
                  placeholder={downPaymentType === '%' ? 'Enter percentage' : 'Enter amount'}
                />
                <span className="input-suffix">{downPaymentType}</span>
              </div>
              <div className="slider-wrapper">
                <input
                  type="range"
                  min="0"
                  max={downPaymentType === '%' ? 100 : price}
                  value={downPaymentType === '%' ? downPaymentPercent : downPayment}
                  onChange={(e) => {
                    const value = parseFloat(e.target.value)
                    if (downPaymentType === '%') {
                      handleDownPaymentPercentChange(value)
                    } else {
                      handleDownPaymentChange(value)
                    }
                  }}
                  className="down-payment-slider"
                />
              </div>
            </div>

            {/* Loan Term */}
            <div className="form-group">
              <label htmlFor="loan-term">Loan Term</label>
              <select
                id="loan-term"
                value={loanTerm}
                onChange={(e) => setLoanTerm(Number(e.target.value))}
              >
                <option value="15">15 Years</option>
                <option value="20">20 Years</option>
                <option value="30">30 Years</option>
              </select>
            </div>

            {/* Interest Rate */}
            <div className="form-group">
              <label htmlFor="interest-rate">Interest Rate</label>
              <div className="input-wrapper">
                <input
                  id="interest-rate"
                  type="text"
                  inputMode="decimal"
                  value={interestRateInput}
                  onChange={(e) => {
                    const value = e.target.value
                    // Allow decimal input: allow numbers, single decimal point, and empty string
                    if (value === '' || /^\d*\.?\d*$/.test(value)) {
                      setInterestRateInput(value)
                      const numValue = parseFloat(value)
                      if (!isNaN(numValue)) {
                        setInterestRate(numValue)
                      } else if (value === '' || value === '.') {
                        setInterestRate(0)
                      }
                    }
                  }}
                  onBlur={() => {
                    // Ensure valid number on blur
                    const numValue = parseFloat(interestRateInput)
                    if (isNaN(numValue) || interestRateInput === '') {
                      setInterestRateInput('0')
                      setInterestRate(0)
                    } else {
                      setInterestRateInput(numValue.toString())
                    }
                  }}
                  placeholder="0.0"
                />
                <span className="input-suffix">%</span>
              </div>
            </div>

            {/* Property Taxes */}
            <div className="form-group">
              <label htmlFor="tax">Property Taxes (Annual)</label>
              <div className="input-wrapper">
                <span className="input-prefix">$</span>
                <input
                  id="tax"
                  type="text"
                  value={formatInputValue(tax)}
                  onChange={(e) => setTax(parseCurrency(e.target.value))}
                  placeholder="Auto-filled if available"
                />
              </div>
            </div>

            {/* Home Insurance */}
            <div className="form-group">
              <label htmlFor="insurance">Home Insurance (Annual)</label>
              <div className="input-wrapper">
                <span className="input-prefix">$</span>
                <input
                  id="insurance"
                  type="text"
                  value={formatInputValue(insurance)}
                  onChange={(e) => setInsurance(parseCurrency(e.target.value))}
                  placeholder="Auto-filled if available"
                />
              </div>
            </div>

            {/* HOA Fees */}
            <div className="form-group">
              <label htmlFor="hoa">HOA Fees (Monthly)</label>
              <div className="input-wrapper">
                <span className="input-prefix">$</span>
                <input
                  id="hoa"
                  type="text"
                  value={formatInputValue(hoa)}
                  onChange={(e) => setHoa(parseCurrency(e.target.value))}
                  placeholder="Auto-filled if available"
                />
              </div>
            </div>
          </div>
        </form>

        {/* Results Section */}
        {result && (
          <div className="calculator-results">
            <h2 className="results-header">Your Estimated Payment</h2>
            <div className="total-monthly-payment">
              {formatCurrency(result.totalMonthly)}
            </div>

            <div className="payment-breakdown">
              <div className="breakdown-item">
                <div>Principal & Interest</div>
                <div>{formatCurrency(result.principalAndInterest)}</div>
              </div>
              <div className="breakdown-item">
                <div>Property Taxes</div>
                <div>{formatCurrency(result.propertyTax)}</div>
              </div>
              <div className="breakdown-item">
                <div>Home Insurance</div>
                <div>{formatCurrency(result.insurance)}</div>
              </div>
              {result.hoa > 0 && (
                <div className="breakdown-item">
                  <div>HOA Fees</div>
                  <div>{formatCurrency(result.hoa)}</div>
                </div>
              )}
              {result.pmi > 0 && (
                <div className="breakdown-item">
                  <div>PMI</div>
                  <div>{formatCurrency(result.pmi)}</div>
                </div>
              )}
            </div>

            {/* 3-Year Projection */}
            {yearlyData.length > 0 && (
              <div className="projection-section">
                <h3>Your 3-Year Projection</h3>
                <div className="projection-tabs">
                  <button
                    className={`proj-tab ${projectionView === 'graph' ? 'active' : ''}`}
                    onClick={() => setProjectionView('graph')}
                  >
                    Graph
                  </button>
                  <button
                    className={`proj-tab ${projectionView === 'table' ? 'active' : ''}`}
                    onClick={() => setProjectionView('table')}
                  >
                    Table
                  </button>
                </div>

                {projectionView === 'graph' && (
                  <div className="projection-content active">
                    <ProjectionChart yearlyData={yearlyData} />
                  </div>
                )}

                {projectionView === 'table' && (
                  <div className="projection-content active">
                    <ProjectionTable yearlyData={yearlyData} />
                  </div>
                )}
              </div>
            )}

            {/* Disclaimer */}
            <div className="calculator-disclaimer">
              <strong>This is an estimate only, not a final quote.</strong> Actual amounts may
              vary. Property taxes, insurance rates, and other costs are estimates based on
              available data. Consult with a mortgage professional for accurate figures.
            </div>
          </div>
        )}
      </div>

      {/* Buyer Checklist Sidebar */}
      <BuyerChecklist
        onScheduleConsultation={() => {
          window.location.href = '/contact'
        }}
      />
    </div>
  )
}

export default Calculator
