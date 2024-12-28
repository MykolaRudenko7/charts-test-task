import type { FinancialMetric } from 'types/financial';
import financialData from 'data/financial-data.json';
import { addDelay } from 'utils/delay';

export class FinancialService {
  async getAllMetrics(): Promise<FinancialMetric[]> {
    try {
      await addDelay(300);

      if (!financialData.metrics) {
        throw new Error('Metrics data not found');
      }
      return financialData.metrics;
    } catch (error) {
      throw new Error(`Failed to fetch metrics: ${(error as Error).message}`);
    }
  }

  async getMetricById(id: string): Promise<FinancialMetric | null> {
    try {
      await addDelay(300);

      if (!financialData.metrics) {
        throw new Error('Metrics data not found');
      }
      const metric = financialData.metrics.find((metric) => metric.id === id);
      if (!metric) {
        throw new Error(`Metric with id ${id} not found`);
      }
      return metric;
    } catch (error) {
      throw new Error(
        `Failed to fetch metric with id ${id}: ${(error as Error).message}`,
      );
    }
  }
}

export const financialService = new FinancialService();
