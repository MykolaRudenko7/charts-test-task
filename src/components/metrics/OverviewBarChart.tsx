'use client';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { formatCurrency, transformMetricsToChartData } from 'utils/formatters';
import type { FinancialMetric } from 'types/financial';
import { COLORS } from 'types/enums';

interface OverviewBarChartProperties {
  metrics: FinancialMetric[];
}

export function OverviewBarChart({ metrics }: OverviewBarChartProperties) {
  const chartData = transformMetricsToChartData(metrics);

  return (
    <div className='h-auto w-full overflow-x-auto rounded-lg bg-white p-4 shadow-lg'>
      <h2 className='mb-4 text-lg font-semibold sm:text-xl md:text-2xl'>
        Metrics Overview
      </h2>
      <div className='min-w-[300px]'>
        <ResponsiveContainer width='100%' height={400}>
          <BarChart
            data={chartData}
            margin={{ top: 20, right: 20, left: 20, bottom: 20 }}
          >
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='name' />
            <YAxis stroke={COLORS.BLACK} />
            <Tooltip formatter={(value) => formatCurrency(value as number)} />
            <Bar dataKey='value' fill={COLORS.BLUE} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
