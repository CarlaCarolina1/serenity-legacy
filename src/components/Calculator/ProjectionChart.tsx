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
  // Create gradient for gold bars
  const createGoldGradient = (ctx: CanvasRenderingContext2D) => {
    const gradient = ctx.createLinearGradient(0, 0, 0, 400)
    gradient.addColorStop(0, '#FFD700') // Light gold
    gradient.addColorStop(0.5, '#D4AF37') // Medium gold
    gradient.addColorStop(1, '#B8860B') // Dark gold
    return gradient
  }

  const data = {
    labels: yearlyData.map((d) => `Year ${d.year}`),
    datasets: [
      {
        label: 'Principal Paid',
        data: yearlyData.map((d) => d.principal),
        backgroundColor: '#DC143C', // Scarlet Red
      },
      {
        label: 'Interest Paid',
        data: yearlyData.map((d) => d.interest),
        backgroundColor: (context: any) => {
          const chart = context.chart
          const { ctx, chartArea } = chart
          if (!chartArea) {
            return '#D4AF37' // Fallback
          }
          return createGoldGradient(ctx)
        },
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

