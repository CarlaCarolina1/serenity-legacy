import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { formatCurrency } from '../../utils/currency'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

interface YearlyData {
  year: number
  principal: number
  interest: number
  balance: number
}

interface ProjectionChartProps {
  yearlyData: YearlyData[]
}

const ProjectionChart = ({ yearlyData }: ProjectionChartProps) => {
  const data = {
    labels: yearlyData.map((d) => `Year ${d.year}`),
    datasets: [
      {
        label: 'Principal Paid',
        data: yearlyData.map((d) => d.principal),
        backgroundColor: '#8B4513', // Brown
      },
      {
        label: 'Interest Paid',
        data: yearlyData.map((d) => d.interest),
        backgroundColor: '#D4AF37', // Gold
      },
    ],
  }

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      tooltip: {
        callbacks: {
          label: (context: any) => {
            const label = context.dataset.label || ''
            const value = formatCurrency(context.raw)
            return `${label}: ${value}`
          },
        },
      },
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
        ticks: {
          callback: (value: any) => formatCurrency(value),
        },
      },
    },
  }

  return (
    <div className="projection-chart-container">
      <Bar data={data} options={options} />
    </div>
  )
}

export default ProjectionChart

