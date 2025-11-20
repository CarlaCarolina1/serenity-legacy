/**
 * Currency formatting utilities
 */

export const formatCurrency = (amount: number): string => {
  return '$' + amount.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
}

export const parseCurrency = (value: string): number => {
  return parseFloat(value.replace(/[$,]/g, '')) || 0
}

export const formatNumber = (value: number, decimals: number = 0): string => {
  return value.toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })
}

