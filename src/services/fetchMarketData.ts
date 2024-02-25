export interface MarketStatsResponse {
  marketCap: number;
  volume24h: number;
  circulatingSupply: number;
  typicalHoldTime: number;
  popularity: string;
  allTimeHigh: number;
  priceChange1h: number;
  priceChange24h: number;
  priceChange7d: number;
}

export default async function fetchMarketData(
  assetId: string,
  delay: number = 0,
): Promise<MarketStatsResponse> {
  const mockStatsData: MarketStatsResponse = {
    marketCap: 4000000,
    volume24h: 59300,
    circulatingSupply: 19600,
    typicalHoldTime: 91,
    popularity: '#1',
    allTimeHigh: 258244.06,
    priceChange1h: 0.0064,
    priceChange24h: 0.0084,
    priceChange7d: 0.0049,
  };

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockStatsData);
    }, delay);
  });
}
