import React, { useMemo } from 'react';
import { Typography, useTheme } from '@mui/material';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

interface ChartDataPoint {
  date: string;
  price: number;
}

interface AssetChartProps {
  data: ChartDataPoint[];
  quote?: string;
}

const AssetChart: React.FC<AssetChartProps> = ({ data, quote = 'USD' }) => {
  const theme = useTheme();

  const numberFormatter = useMemo(
    () =>
      new Intl.NumberFormat('en-us', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
        style: 'currency',
        currency: quote,
      }),
    [quote],
  );

  if (!data || data.length === 0) {
    return (
      <ResponsiveContainer width="100%" height={400}>
        <Typography variant="body1">No data available</Typography>
      </ResponsiveContainer>
    );
  }

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="date"
          angle={-70}
          textAnchor="end"
          height={70}
          tick={{ fontSize: '10px' }}
        />
        <YAxis tickFormatter={(value) => numberFormatter.format(value)} />
        <Tooltip
          contentStyle={{
            backgroundColor: '#333',
            color: '#fff',
            border: '1px solid #777',
            borderRadius: '5px',
          }}
          formatter={(value) => {
            return [numberFormatter.format(Number(value)), 'Price'];
          }}
        />
        <Line
          type="monotone"
          dataKey="price"
          stroke={theme.palette.primary[500]}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default AssetChart;
