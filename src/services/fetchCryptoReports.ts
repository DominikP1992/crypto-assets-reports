import mockedCrypto from '@/mock/cryptoReportsMock';

export interface FetchCryptoReportsResult {
  name: string;
  id: string;
  symbol: string;
}

export default async function fetchCryptoReports(
  name: string,
  delay: number,
): Promise<FetchCryptoReportsResult[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filteredAssets = mockedCrypto.filter((asset) =>
        asset.name.toLowerCase().includes(name.toLowerCase()),
      );
      resolve(filteredAssets);
    }, delay);
  });
}
