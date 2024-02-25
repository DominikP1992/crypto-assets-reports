import AssetReport from '@/components/molecules/AssetReport/AssetReport';
import AssetChart from '@/components/molecules/Chart/Chart';
import MarketStatItem from '@/components/molecules/MarketStatItem/MarketStatItem';
import fetchAssetOverview, {
  AssetOverviewResponse,
} from '@/services/fetchAssetOverview';
import fetchChartData, {
  fetchChartDataResponse,
} from '@/services/fetchChartData';
import fetchCryptoReports from '@/services/fetchCryptoReports';
import fetchMarketData, {
  MarketStatsResponse,
} from '@/services/fetchMarketData';
import formatStatsData from '@/utils/formatStatsData';
import {
  Avatar,
  Box,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
  Link,
} from '@mui/material';
import { GetServerSideProps } from 'next';
import Head from 'next/head';

type ProductProps = {
  assetData: {
    id: string;
    name: string;
    symbol: string;
  };
  chartData: fetchChartDataResponse;
  marketData: MarketStatsResponse;
  assetOverview: AssetOverviewResponse;
};

const ProductPage = ({
  assetData,
  chartData,
  marketData,
  assetOverview,
}: ProductProps) => {
  const quote = 'USD';
  const metaDescription = `Dive into the comprehensive report of ${assetData.name} (${assetData.symbol}) covering the latest market trends, performance analysis, and future predictions. Gain insights into ${assetData.name}'s current status and its potential impact on the crypto market. Keep ahead with Crypto Assets Reports.`;
  const formattedStats = formatStatsData({
    stats: marketData,
    currency: assetData.symbol,
    quote,
  });

  return (
    <>
      <Head>
        <title>{`${assetData.name} (${assetData.symbol}) Report`}</title>
        <meta name="description" content={metaDescription} />
      </Head>
      <Container maxWidth={false} sx={{ pt: 10 }}>
        <Box component={'section'}>
          <Stack direction="row" alignItems="center" spacing={2}>
            <Typography
              variant="h4"
              gutterBottom
              component={'h1'}
              sx={{ lineHeight: '40px', pb: 1 }}
            >
              {`${assetData.name} (${assetData.symbol}) report`}
            </Typography>
            <Avatar
              src={`/icons/color/${assetData.symbol}.svg`.toLowerCase()}
              alt={`${assetData.name} logo`}
              sx={{ width: 40, height: 40 }}
            />
          </Stack>
          <Typography variant="body1" paragraph>
            {assetOverview?.description}
          </Typography>
          <Typography variant="body2" color="textSecondary" paragraph>
            {assetOverview?.launchDate}
          </Typography>
          <Typography variant="body2" color="textSecondary" paragraph>
            Creators: {assetOverview?.creators.join(', ')}
          </Typography>
          <Link
            href={assetOverview?.whitepaperUrl}
            target="_blank"
            rel="noopener"
          >
            <Typography
              variant="body2"
              color="textSecondary"
              component={'span'}
            >
              Read the Whitepaper
            </Typography>
          </Link>
        </Box>
        <Divider sx={{ mt: 2, mb: 2 }} />
        <Box component={'section'}>
          <Typography variant="h4" gutterBottom component={'h2'}>
            Price chart
          </Typography>
          <AssetChart data={chartData.data} quote={quote} />
        </Box>
        <Divider sx={{ mt: 2, mb: 2 }} />
        <Box component={'section'}>
          <Typography variant="h4" gutterBottom component={'h2'}>
            Market data
          </Typography>

          <Grid container spacing={2}>
            {Object.values(formattedStats).map(({ label, value }) => (
              <MarketStatItem key={label} label={label} value={value} />
            ))}
          </Grid>
        </Box>
        <Divider sx={{ mt: 2, mb: 2 }} />
        <Box component={'section'}>
          <Typography variant="h4" gutterBottom component={'h2'}>
            Report
          </Typography>
          <AssetReport assetName={assetData.name} />
        </Box>
      </Container>
    </>
  );
};

export default ProductPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context;
  const assetName = (params?.report as string).split('-').join(' ');

  const data = await fetchCryptoReports(assetName, 0);

  const asset = data.find(
    ({ name }) => name.toLowerCase() === assetName.toLowerCase(),
  );

  if (!asset) {
    return { notFound: true };
  }

  const chartData = await fetchChartData(asset.name, 0);
  const marketData = await fetchMarketData(asset.name, 0);
  const assetOverview = await fetchAssetOverview(asset.name, asset.symbol, 0);

  const assetData = {
    id: asset.id,
    name: asset.name,
    symbol: asset.symbol,
  };

  return {
    props: {
      assetData,
      chartData,
      marketData,
      assetOverview,
    },
  };
};
