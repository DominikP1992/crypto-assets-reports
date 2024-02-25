export interface ChartDataPoint {
  date: string;
  price: number;
}

export interface fetchChartDataResponse {
  data: ChartDataPoint[];
}

function generateMockedChartData(
  days = 30,
  startPrice = 5000,
): fetchChartDataResponse {
  const data: ChartDataPoint[] = [];
  let currentDate = new Date();
  currentDate.setDate(currentDate.getDate() - days);
  let currentPrice = startPrice;

  for (let i = 0; i < days; i++) {
    const priceChange = (Math.random() * 0.3 - 0.1) * currentPrice;
    currentPrice += priceChange;

    const formattedDate = currentDate.toISOString().split('T')[0];

    data.push({
      date: formattedDate,
      price: parseFloat(currentPrice.toFixed(2)),
    });
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return { data };
}

export default async function fetchChartData(
  assetId: string,
  delay: number = 300,
): Promise<fetchChartDataResponse> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const mockedData = generateMockedChartData();
      resolve(mockedData);
    }, delay);
  });
}
