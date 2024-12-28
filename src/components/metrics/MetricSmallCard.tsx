import Link from 'next/link';
import { formatCurrency } from 'utils/formatters';
import type { FinancialMetric } from 'types/financial';
import { NAVIGATION_URLS } from 'types/enums';

interface MetricCardProperties {
  metric: FinancialMetric;
}

export function MetricSmallCard({ metric }: MetricCardProperties) {
  const { id, name, currentValue } = metric;

  return (
    <Link
      href={`${NAVIGATION_URLS.METRIC}/${id}`}
      className='rounded-lg bg-white p-6 shadow-lg transition-shadow hover:shadow-xl'
    >
      <h2 className='mb-2 text-xl font-semibold'>{name}</h2>
      <p className='text-2xl text-blue-600'>{formatCurrency(currentValue)}</p>
    </Link>
  );
}
