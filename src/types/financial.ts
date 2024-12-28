export interface MetricData {
  date: string;
  value: number;
}

export interface FinancialMetric {
  id: string;
  name: string;
  currentValue: number;
  data: MetricData[];
}
