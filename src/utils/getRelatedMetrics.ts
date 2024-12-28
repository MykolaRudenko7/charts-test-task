import { financialService } from 'services/financialService';
import { METRICS_NAMES } from 'types/enums';
import { FinancialMetric } from 'types/financial';

export async function getRelatedMetrics(
  id: string,
): Promise<FinancialMetric[] | undefined> {
  if (id !== METRICS_NAMES.EBITDAR) return undefined;

  const [revenue, expenses] = await Promise.all([
    financialService.getMetricById(METRICS_NAMES.REVENUE),
    financialService.getMetricById(METRICS_NAMES.EXPENSES),
  ]);

  return revenue && expenses ? [revenue, expenses] : undefined;
}
