import { MarketStatsResponse } from '@/services/fetchMarketData';

function formatNumber({
  number,
  style = 'decimal',
  currency = 'USD',
  locale = 'en-US',
}: {
  number: number;
  style?: 'decimal' | 'currency';
  currency?: string;
  locale?: string;
}) {
  const options: Intl.NumberFormatOptions =
    style === 'currency' ? { style, currency } : { style };
  return new Intl.NumberFormat(locale, options).format(number);
}

export default function formatStatsData({
  stats,
  currency,
  quote = 'USD',
  locale = 'en-US',
}: {
  stats: MarketStatsResponse;
  currency?: string;
  locale?: string;
  quote?: string;
}) {
  return {
    marketCap: {
      label: 'Market Cap',
      value: formatNumber({
        number: stats.marketCap,
        style: 'currency',
        currency: quote,
        locale,
      }),
    },
    volume24h: {
      label: '24h Volume',
      value: formatNumber({
        number: stats.volume24h,
        style: 'currency',
        currency: quote,
        locale,
      }),
    },
    circulatingSupply: {
      label: 'Circulating Supply',
      value: `${formatNumber({
        number: stats.circulatingSupply,
        locale,
      })} ${currency?.toUpperCase()}`,
    },
    typicalHoldTime: {
      label: 'Typical Hold Time',
      value: `${stats.typicalHoldTime} days`,
    },
    popularity: {
      label: 'Popularity',
      value: stats.popularity,
    },
    allTimeHigh: {
      label: 'All Time High',
      value: formatNumber({
        number: stats.allTimeHigh,
        style: 'currency',
        currency: quote,
        locale,
      }),
    },
    priceChange1h: {
      label: 'Price Change (1h)',
      value: `${formatNumber({ number: stats.priceChange1h * 100, locale })}%`,
    },
    priceChange24h: {
      label: 'Price Change (24h)',
      value: `${formatNumber({ number: stats.priceChange24h * 100, locale })}%`,
    },
    priceChange7d: {
      label: 'Price Change (7d)',
      value: `${formatNumber({ number: stats.priceChange7d * 100, locale })}%`,
    },
  };
}
