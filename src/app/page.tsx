import { Suspense } from 'react';
import { MetricsList } from 'components/metrics/MetricsList';
import { LoadingSpinner } from 'components/ui/LoadingSpinner';

export default function DashboardPage() {
  return (
    <main className='p-8'>
      <h1 className='mb-8 text-3xl font-bold'>Financial Metrics Dashboard</h1>
      <Suspense fallback={<LoadingSpinner />}>
        <MetricsList />
      </Suspense>
    </main>
  );
}
