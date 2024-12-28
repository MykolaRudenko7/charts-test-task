import { financialService } from 'services/financialService';
import { getRelatedMetrics } from 'utils/getRelatedMetrics';
import { ErrorMessage } from 'components/ui/ErrorMessage';
import { MetricDetails } from 'components/metrics/MetricDetails';

export async function RetrieveMetricDetails({ id }: { id: string }) {
  try {
    const metric = await financialService.getMetricById(id);
    if (!metric) return <ErrorMessage message='Metric not found' />;

    const relatedMetrics = await getRelatedMetrics(id);

    return <MetricDetails metric={metric} relatedMetrics={relatedMetrics} />;
  } catch {
    return (
      <ErrorMessage message='An error occurred while fetching the metric data' />
    );
  }
}
