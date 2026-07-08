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

type LoanType = 'conventional' | 'fha' | 'va' | 'usda'

// Loan-program rules (estimates — see disclaimer). upfrontMi = % of base loan financed
// into the loan (FHA UFMIP / VA funding fee / USDA guarantee fee). annualMi = % of loan
// per year charged monthly. Conventional PMI only applies while LTV > 80%.
const LOAN_PROGRAMS: Record<LoanType, {
  label: string
  minDownPct: number
  upfrontMiPct: number
  annualMiPct: number
  hasPmiRule: boolean // true = MI drops off above 20% down (conventional)
  note: string
}> = {
  conventional: { label: 'Conventional', minDownPct: 3, upfrontMiPct: 0, annualMiPct: 0.5, hasPmiRule: true, note: 'PMI applies when your down payment is under 20%, and drops off once you reach 20% equity.' },
  fha: { label: 'FHA', minDownPct: 3.5, upfrontMiPct: 1.75, annualMiPct: 0.55, hasPmiRule: false, note: 'FHA loans require 3.5% down, an upfront MIP (1.75%, financed) and monthly MIP for most buyers.' },
  va: { label: 'VA', minDownPct: 0, upfrontMiPct: 2.15, annualMiPct: 0, hasPmiRule: false, note: 'VA loans (eligible veterans/service members) allow 0% down and have no monthly mortgage insurance — a one-time funding fee applies (financed).' },
  usda: { label: 'USDA', minDownPct: 0, upfrontMiPct: 1.0, annualMiPct: 0.35, hasPmiRule: false, note: 'USDA loans (eligible rural/suburban areas) allow 0% down with a 1% upfront guarantee fee (financed) and a small annual fee.' },
}

// Current average mortgage rates — national estimate, updated periodically. This is NOT a
// live per-lender quote. A weekly automated feed (e.g. Freddie Mac PMMS) can be wired via the
// backend later; until then update these values and the asOf date.
const CURRENT_RATES: { asOf: string; byTerm: Record<number, number> } = {
  asOf: 'July 2026',
  byTerm: { 30: 6.8, 20: 6.5, 15: 6.0 },
}

interface CalculationResult {
  principalAndInterest: number
  propertyTax: number
  insurance: number
  hoa: number
  mortgageInsurance: number
  miLabel: string
  totalMonthly: number
  downPayment: number
  downPaymentPercent: number
  loanAmount: number
  upfrontFee: number
  totalInterest: number
  totalOfPayments: number
  monthsSaved: number
  interestSaved: number
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
  const [loanType, setLoanType] = useState<LoanType>('conventional')
  const [interestRate, setInterestRate] = useState(CURRENT_RATES.byTerm[30])
  const [interestRateInput, setInterestRateInput] = useState(String(CURRENT_RATES.byTerm[30]))
  const [loanTerm, setLoanTerm] = useState(30)
  const [tax, setTax] = useState(propertyTax)
  const [insurance, setInsurance] = useState(propertyInsurance)
  const [hoa, setHoa] = useState(hoaFee)
  const [extraPayment, setExtraPayment] = useState(0)
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

  // Detailed 3-year principal/interest/balance projection
  const calculateYearlyProjection = (
    loanAmount: number,
    monthlyRate: number,
    pAndI: number
  ): YearlyData[] => {
    let balance = loanAmount
    const data: YearlyData[] = []
    for (let year = 1; year <= 3; year++) {
      let totalInterestYear = 0
      let totalPrincipalYear = 0
      for (let month = 1; month <= 12; month++) {
        const interestPayment = monthlyRate > 0 ? balance * monthlyRate : 0
        const principalPayment = pAndI - interestPayment
        balance -= principalPayment
        totalInterestYear += interestPayment
        totalPrincipalYear += principalPayment
      }
      data.push({ year, principal: totalPrincipalYear, interest: totalInterestYear, balance: Math.max(0, balance) })
    }
    return data
  }

  // Simulate payoff with an optional extra monthly principal payment.
  // Returns number of months to payoff and total interest paid.
  const simulatePayoff = (
    loanAmount: number,
    monthlyRate: number,
    pAndI: number,
    extra: number
  ): { months: number; interest: number } => {
    let balance = loanAmount
    let interest = 0
    let months = 0
    const maxMonths = 12 * 40 // safety cap
    while (balance > 0 && months < maxMonths) {
      const interestPayment = monthlyRate > 0 ? balance * monthlyRate : 0
      let principalPayment = pAndI - interestPayment + extra
      if (principalPayment <= 0) break // payment never covers interest — avoid infinite loop
      if (principalPayment > balance) principalPayment = balance
      balance -= principalPayment
      interest += interestPayment
      months++
    }
    return { months, interest }
  }

  const calculateMortgage = () => {
    if (price <= 0) return null

    let actualDownPayment = downPayment
    if (downPaymentType === '%') {
      actualDownPayment = (price * downPaymentPercent) / 100
    }

    const baseLoan = price - actualDownPayment
    if (baseLoan <= 0) return null

    const program = LOAN_PROGRAMS[loanType]
    // Upfront fee (FHA UFMIP / VA funding fee / USDA guarantee) is financed into the loan.
    const upfrontFee = (baseLoan * program.upfrontMiPct) / 100
    const loanAmount = baseLoan + upfrontFee

    const monthlyRate = interestRate / 100 / 12
    const numPayments = loanTerm * 12

    let principalAndInterest: number
    if (interestRate === 0 || monthlyRate === 0) {
      principalAndInterest = loanAmount / numPayments
    } else {
      principalAndInterest =
        (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numPayments))) /
        (Math.pow(1 + monthlyRate, numPayments) - 1)
    }

    // Mortgage insurance (monthly) by program
    const downPaymentPercentActual = (actualDownPayment / price) * 100
    let mortgageInsurance = 0
    let miLabel = 'Mortgage Insurance'
    if (loanType === 'conventional') {
      miLabel = 'PMI'
      mortgageInsurance = downPaymentPercentActual < 20 ? (loanAmount * (program.annualMiPct / 100)) / 12 : 0
    } else if (loanType === 'fha') {
      miLabel = 'FHA MIP'
      mortgageInsurance = (loanAmount * (program.annualMiPct / 100)) / 12
    } else if (loanType === 'usda') {
      miLabel = 'USDA Annual Fee'
      mortgageInsurance = (loanAmount * (program.annualMiPct / 100)) / 12
    } // VA: none

    const monthlyTax = tax > 0 ? tax / 12 : 0
    const monthlyInsurance = insurance > 0 ? insurance / 12 : 0
    const totalMonthly = principalAndInterest + monthlyTax + monthlyInsurance + (hoa || 0) + mortgageInsurance

    // Lifetime totals (principal & interest only)
    const baseline = simulatePayoff(loanAmount, monthlyRate, principalAndInterest, 0)
    const totalInterest = baseline.interest
    const totalOfPayments = loanAmount + totalInterest

    // Extra-payment savings
    let monthsSaved = 0
    let interestSaved = 0
    if (extraPayment > 0) {
      const withExtra = simulatePayoff(loanAmount, monthlyRate, principalAndInterest, extraPayment)
      monthsSaved = Math.max(0, baseline.months - withExtra.months)
      interestSaved = Math.max(0, totalInterest - withExtra.interest)
    }

    const projection = calculateYearlyProjection(loanAmount, monthlyRate, principalAndInterest)

    return {
      principalAndInterest,
      propertyTax: monthlyTax,
      insurance: monthlyInsurance,
      hoa: hoa || 0,
      mortgageInsurance,
      miLabel,
      totalMonthly,
      downPayment: actualDownPayment,
      downPaymentPercent: downPaymentPercentActual,
      loanAmount,
      upfrontFee,
      totalInterest,
      totalOfPayments,
      monthsSaved,
      interestSaved,
      projection,
    }
  }

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
  }, [price, downPayment, downPaymentPercent, downPaymentType, loanType, interestRate, loanTerm, tax, insurance, hoa, extraPayment])

  useEffect(() => {
    if (interestRate.toString() !== interestRateInput) {
      setInterestRateInput(interestRate.toString())
    }
  }, [interestRate])

  const handleDownPaymentTypeToggle = (type: '%' | '$') => {
    setDownPaymentType(type)
    if (type === '%' && price > 0) {
      setDownPaymentPercent((downPayment / price) * 100)
    } else if (type === '$' && price > 0) {
      setDownPayment((price * downPaymentPercent) / 100)
    }
  }

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

  const applyCurrentRate = () => {
    const rate = CURRENT_RATES.byTerm[loanTerm] ?? CURRENT_RATES.byTerm[30]
    setInterestRate(rate)
    setInterestRateInput(String(rate))
  }

  const formatInputValue = (value: number): string => {
    if (value === 0) return ''
    return value.toLocaleString('en-US', { maximumFractionDigits: 0 })
  }

  const currentAvgForTerm = CURRENT_RATES.byTerm[loanTerm] ?? CURRENT_RATES.byTerm[30]

  const formatMonths = (totalMonths: number): string => {
    const y = Math.floor(totalMonths / 12)
    const m = totalMonths % 12
    const parts: string[] = []
    if (y > 0) parts.push(`${y} yr${y > 1 ? 's' : ''}`)
    if (m > 0) parts.push(`${m} mo`)
    return parts.join(' ') || '0 mo'
  }

  return (
    <div className="calculator-wrapper">
      <div className="calculator-container">
        <h1 className="calculator-title">Home Ownership Calculator</h1>

        {/* Current average rate panel */}
        <div className="rate-banner">
          <div className="rate-banner-info">
            <span className="rate-banner-label">Current avg {loanTerm}-yr rate</span>
            <span className="rate-banner-value">{currentAvgForTerm}%</span>
            <span className="rate-banner-asof">national est., as of {CURRENT_RATES.asOf}</span>
          </div>
          <button type="button" className="rate-apply-btn" onClick={applyCurrentRate}>
            Use this rate
          </button>
        </div>

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

            {/* Loan Type */}
            <div className="form-group full-width">
              <label htmlFor="loan-type">Loan Type</label>
              <select
                id="loan-type"
                value={loanType}
                onChange={(e) => setLoanType(e.target.value as LoanType)}
              >
                {(Object.keys(LOAN_PROGRAMS) as LoanType[]).map((key) => (
                  <option key={key} value={key}>
                    {LOAN_PROGRAMS[key].label}
                  </option>
                ))}
              </select>
              <p className="field-hint">{LOAN_PROGRAMS[loanType].note}</p>
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
                  step="0.01"
                  min="0"
                  max="100"
                  inputMode="decimal"
                  value={
                    downPaymentType === '%'
                      ? downPaymentPercent.toFixed(2)
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
              {downPaymentPercent < LOAN_PROGRAMS[loanType].minDownPct && (
                <p className="field-hint field-hint-warn">
                  {LOAN_PROGRAMS[loanType].label} loans typically require at least{' '}
                  {LOAN_PROGRAMS[loanType].minDownPct}% down.
                </p>
              )}
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

            {/* Extra Monthly Payment */}
            <div className="form-group">
              <label htmlFor="extra">Extra Monthly Payment</label>
              <div className="input-wrapper">
                <span className="input-prefix">$</span>
                <input
                  id="extra"
                  type="text"
                  value={formatInputValue(extraPayment)}
                  onChange={(e) => setExtraPayment(parseCurrency(e.target.value))}
                  placeholder="Optional — pay off faster"
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
                <div>Principal &amp; Interest</div>
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
              {result.mortgageInsurance > 0 && (
                <div className="breakdown-item">
                  <div>{result.miLabel}</div>
                  <div>{formatCurrency(result.mortgageInsurance)}</div>
                </div>
              )}
            </div>

            {/* Loan summary totals */}
            <div className="loan-summary">
              <div className="loan-summary-item">
                <span className="loan-summary-label">Loan Amount</span>
                <span className="loan-summary-value">{formatCurrency(result.loanAmount)}</span>
              </div>
              {result.upfrontFee > 0 && (
                <div className="loan-summary-item">
                  <span className="loan-summary-label">Upfront Fee (financed)</span>
                  <span className="loan-summary-value">{formatCurrency(result.upfrontFee)}</span>
                </div>
              )}
              <div className="loan-summary-item">
                <span className="loan-summary-label">Total Interest ({loanTerm} yrs)</span>
                <span className="loan-summary-value">{formatCurrency(result.totalInterest)}</span>
              </div>
              <div className="loan-summary-item">
                <span className="loan-summary-label">Total of Payments</span>
                <span className="loan-summary-value">{formatCurrency(result.totalOfPayments)}</span>
              </div>
            </div>

            {/* Extra payment savings */}
            {extraPayment > 0 && result.monthsSaved > 0 && (
              <div className="savings-callout">
                Paying an extra {formatCurrency(extraPayment)}/mo pays your loan off{' '}
                <strong>{formatMonths(result.monthsSaved)} sooner</strong> and saves{' '}
                <strong>{formatCurrency(result.interestSaved)}</strong> in interest.
              </div>
            )}

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
              <strong>This is an estimate only, not a final quote or a loan offer.</strong> Loan-program
              rules, mortgage-insurance rates, taxes, and insurance are approximations and vary by
              lender, credit, and eligibility. Current rates shown are national averages, not a
              personalized quote. Consult a licensed mortgage professional for accurate figures.
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
