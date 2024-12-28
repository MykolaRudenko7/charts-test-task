import { Suspense } from 'react';
import { RetrieveMetricDetails } from 'components/metrics/RetrieveMetricDetails';
import { LoadingSpinner } from 'components/ui/LoadingSpinner';

interface MetricPageProperties {
  params: Promise<{ id: string }>;
}

export default async function MetricPage({ params }: MetricPageProperties) {
  const { id } = await params;

  return (
    <main className='p-8'>
      <Suspense fallback={<LoadingSpinner />}>
        <RetrieveMetricDetails id={id} />
      </Suspense>
    </main>
  );
}
