export interface AssetOverviewResponse {
  description: string;
  launchDate: string;
  creators: string[];
  whitepaperUrl: string;
}

const fetchAssetOverview = async (
  assetName: string,
  assetSymbol: string,
  delay: number = 0,
): Promise<AssetOverviewResponse> => {
  const mockData: AssetOverviewResponse = {
    description: `${assetName} (${assetSymbol}) stands at the forefront of the cryptocurrency revolution, offering a groundbreaking approach to digital transactions. As a leading digital asset, ${assetName} harnesses blockchain technology to ensure fast, secure, and cost-effective transfers across the globe. Beyond its utility as a medium of exchange, ${assetName} serves as a foundation for a wide array of decentralized applications, driving innovation in sectors ranging from finance to digital identity. With its commitment to scalability and sustainability, ${assetName} continues to attract a growing community of users and developers, solidifying its position as a key player in the future of digital commerce.`,
    launchDate: '2021-03-01',
    creators: ['John Doe', 'Jane Smith'],
    whitepaperUrl: 'https://bitcoin.org/bitcoin.pdf',
  };

  return new Promise((resolve) => {
    setTimeout(() => resolve(mockData), delay);
  });
};

export default fetchAssetOverview;
