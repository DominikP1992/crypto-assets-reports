import mockedCryptoReports from '@/mock/cryptoReportsMock';
import getDomain from '@/utils/getDomain';
import { GetServerSideProps } from 'next';
import normalizePath from '@/utils/normalizePath';

function generateSiteMap(): string {
  const domain = getDomain();
  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>${domain}</loc>
      </url>
      ${mockedCryptoReports
        .map(({ name }) => {
          return `
        <url>
            <loc>${`${domain}/reports/${normalizePath(name)}`}</loc>
        </url>
      `;
        })
        .join('')}
    </urlset>
  `;
}

const SiteMap: React.FC = () => {
  return null;
};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const sitemap = generateSiteMap();

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default SiteMap;
