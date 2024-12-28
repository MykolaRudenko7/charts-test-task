import Link from 'next/link';
import { AnalyticsLineChart } from 'components/metrics/AnalyticsLineChart';
import type { FinancialMetric } from 'types/financial';
import { NAVIGATION_URLS } from 'types/enums';

interface MetricDetailsProperties {
  metric: FinancialMetric;
  relatedMetrics?: FinancialMetric[];
}

export function MetricDetails({
  metric,
  relatedMetrics,
}: MetricDetailsProperties) {
  return (
    <div className='space-y-8'>
      <Link
        href={NAVIGATION_URLS.HOME}
        className='mb-4 inline-block text-blue-600 hover:underline'
      >
        ← Back to Dashboard
      </Link>
      <h1 className='mb-8 text-3xl font-bold'>{metric.name} Trends</h1>

      <AnalyticsLineChart data={metric.data} />
      {relatedMetrics && (
        <>
          <h2 className='mb-4 text-2xl font-bold'>Component Metrics</h2>
          <div className='space-y-8'>
            {relatedMetrics.map((relatedMetric) => (
              <AnalyticsLineChart
                key={relatedMetric.id}
                data={relatedMetric.data}
                title={relatedMetric.name}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
