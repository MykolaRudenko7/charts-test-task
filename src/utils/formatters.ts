import { FinancialMetric } from 'types/financial';

export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};

export const transformMetricsToChartData = (metrics: FinancialMetric[]) => {
  return metrics.map((metric) => ({
    name: metric.name,
    value: metric.currentValue,
  }));
};
