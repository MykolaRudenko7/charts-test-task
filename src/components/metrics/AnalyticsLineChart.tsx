'use client';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { formatCurrency } from 'utils/formatters';
import type { MetricData } from 'types/financial';
import { COLORS } from 'types/enums';

interface AnalyticsLineChartProperties {
  data: MetricData[];
  title?: string;
}

export function AnalyticsLineChart({
  data,
  title,
}: AnalyticsLineChartProperties) {
  return (
    <div className='h-auto w-full overflow-x-auto rounded-lg bg-white p-4 shadow-lg'>
      {title && (
        <h3 className='mb-4 text-lg font-semibold sm:text-xl md:text-2xl'>
          {title}
        </h3>
      )}
      <div className='min-w-[300px]'>
        <ResponsiveContainer width='100%' height={400}>
          <LineChart
            data={data}
            margin={{ top: 20, right: 20, left: 20, bottom: 20 }}
          >
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='date' />
            <YAxis stroke={COLORS.BLACK} />
            <Tooltip formatter={(value) => formatCurrency(value as number)} />
            <Line
              type='monotone'
              dataKey='value'
              stroke={COLORS.BLUE}
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
