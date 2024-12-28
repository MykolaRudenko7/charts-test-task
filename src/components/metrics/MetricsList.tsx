import { financialService } from 'services/financialService';
import { MetricSmallCard } from 'components/metrics/MetricSmallCard';
import { OverviewBarChart } from 'components/metrics/OverviewBarChart';

export async function MetricsList() {
  const metrics = await financialService.getAllMetrics();

  return (
    <>
      <div className='mb-8 grid grid-cols-1 gap-6 md:grid-cols-3'>
        {metrics.map((metric) => (
          <MetricSmallCard key={metric.id} metric={metric} />
        ))}
      </div>

      <OverviewBarChart metrics={metrics} />
    </>
  );
}
