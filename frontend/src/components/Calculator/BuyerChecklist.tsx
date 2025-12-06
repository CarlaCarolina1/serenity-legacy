import { useState } from 'react'
import './BuyerChecklist.css'

interface ChecklistItem {
  id: string
  text: string
  checked: boolean
}

interface BuyerChecklistProps {
  onScheduleConsultation?: () => void
}

const BuyerChecklist = ({ onScheduleConsultation }: BuyerChecklistProps) => {
  const [activeTab, setActiveTab] = useState<'first-time' | 'investment' | 'international' | 'relocating'>('first-time')
  const [checklists, setChecklists] = useState<Record<string, ChecklistItem[]>>({
    'first-time': [
      { id: 'ft1', text: 'Check credit score (aim for 620+)', checked: false },
      { id: 'ft2', text: 'Save for down payment (3.5-5%)', checked: false },
      { id: 'ft3', text: 'Get pre-approved', checked: false },
      { id: 'ft4', text: 'Research first-time buyer programs', checked: false },
      { id: 'ft5', text: 'Find a realtor (Carla!)', checked: false },
      { id: 'ft6', text: 'Start house hunting', checked: false },
    ],
    investment: [
      { id: 'inv1', text: 'Credit score 680+', checked: false },
      { id: 'inv2', text: '20-25% down payment ready', checked: false },
      { id: 'inv3', text: '6 months cash reserves (PITI)', checked: false },
      { id: 'inv4', text: 'Understand rental market', checked: false },
      { id: 'inv5', text: 'Calculate ROI', checked: false },
    ],
    international: [
      { id: 'int1', text: 'Understand US real estate process', checked: false },
      { id: 'int2', text: 'Secure financing or cash', checked: false },
      { id: 'int3', text: 'Get ITIN if needed', checked: false },
      { id: 'int4', text: 'Understand tax obligations (FIRPTA)', checked: false },
      { id: 'int5', text: 'Plan for remote closing', checked: false },
    ],
    relocating: [
      { id: 'rel1', text: 'Get current home appraised', checked: false },
      { id: 'rel2', text: 'Decide: sell first or bridge loan', checked: false },
      { id: 'rel3', text: 'Get pre-approved for new purchase', checked: false },
      { id: 'rel4', text: 'Research new area/neighborhoods', checked: false },
      { id: 'rel5', text: 'Plan timing carefully', checked: false },
    ],
  })

  const handleCheckboxChange = (tab: string, id: string) => {
    setChecklists((prev) => ({
      ...prev,
      [tab]: prev[tab].map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      ),
    }))
  }

  const getActiveChecklist = () => {
    return checklists[activeTab] || []
  }

  return (
    <div className="checklist-container">
      <h3>What You'll Need</h3>
      
      <div className="buyer-tabs">
        <button
          className={`buyer-tab ${activeTab === 'first-time' ? 'active' : ''}`}
          onClick={() => setActiveTab('first-time')}
        >
          First-Time
        </button>
        <button
          className={`buyer-tab ${activeTab === 'investment' ? 'active' : ''}`}
          onClick={() => setActiveTab('investment')}
        >
          Investment
        </button>
        <button
          className={`buyer-tab ${activeTab === 'international' ? 'active' : ''}`}
          onClick={() => setActiveTab('international')}
        >
          International
        </button>
        <button
          className={`buyer-tab ${activeTab === 'relocating' ? 'active' : ''}`}
          onClick={() => setActiveTab('relocating')}
        >
          Relocating
        </button>
      </div>

      <div className="checklist-content">
        {activeTab === 'first-time' && (
          <div>
            <h4>First-Time Buyer Checklist</h4>
            <ul>
              {getActiveChecklist().map((item) => (
                <li key={item.id}>
                  <input
                    type="checkbox"
                    checked={item.checked}
                    onChange={() => handleCheckboxChange('first-time', item.id)}
                  />
                  <label>{item.text}</label>
                </li>
              ))}
            </ul>
            <h4>Down Payment Options</h4>
            <p>FHA: 3.5% minimum. Conventional: 3-5% minimum. Ask me about down payment assistance!</p>
          </div>
        )}

        {activeTab === 'investment' && (
          <div>
            <h4>Investment Buyer Checklist</h4>
            <ul>
              {getActiveChecklist().map((item) => (
                <li key={item.id}>
                  <input
                    type="checkbox"
                    checked={item.checked}
                    onChange={() => handleCheckboxChange('investment', item.id)}
                  />
                  <label>{item.text}</label>
                </li>
              ))}
            </ul>
          </div>
        )}

        {activeTab === 'international' && (
          <div>
            <h4>International Buyer Checklist</h4>
            <ul>
              {getActiveChecklist().map((item) => (
                <li key={item.id}>
                  <input
                    type="checkbox"
                    checked={item.checked}
                    onChange={() => handleCheckboxChange('international', item.id)}
                  />
                  <label>{item.text}</label>
                </li>
              ))}
            </ul>
          </div>
        )}

        {activeTab === 'relocating' && (
          <div>
            <h4>Relocating Buyer Checklist</h4>
            <ul>
              {getActiveChecklist().map((item) => (
                <li key={item.id}>
                  <input
                    type="checkbox"
                    checked={item.checked}
                    onChange={() => handleCheckboxChange('relocating', item.id)}
                  />
                  <label>{item.text}</label>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="cta-box">
        <p>Like these numbers? Let's talk!</p>
        <button
          className="btn btn-primary cta-button"
          onClick={onScheduleConsultation}
        >
          Schedule a Consultation
        </button>
      </div>
    </div>
  )
}

export default BuyerChecklist

