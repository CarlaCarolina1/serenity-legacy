import { formatCurrency } from '../../utils/currency'

interface YearlyData {
  year: number
  principal: number
  interest: number
  balance: number
}

interface ProjectionTableProps {
  yearlyData: YearlyData[]
}

const ProjectionTable = ({ yearlyData }: ProjectionTableProps) => {
  return (
    <div className="projection-table-container">
      <table className="projection-table">
        <thead>
          <tr>
            <th>Year</th>
            <th>Principal Paid</th>
            <th>Interest Paid</th>
            <th>Remaining Balance</th>
          </tr>
        </thead>
        <tbody>
          {yearlyData.map((data) => (
            <tr key={data.year}>
              <td>Year {data.year}</td>
              <td>{formatCurrency(data.principal)}</td>
              <td>{formatCurrency(data.interest)}</td>
              <td>{formatCurrency(data.balance)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ProjectionTable

