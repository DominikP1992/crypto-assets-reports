const fs = require('fs');
const path = require('path');

const generateRobotsTxt = () => {
  const domain = process.env.DOMAIN_NAME || 'localhost:3000';
  const protocol = domain.includes('localhost') ? 'http' : 'https';
  const robotsContent = `
User-agent: *
Disallow: /api/
Sitemap: ${protocol}://${domain}/sitemap.xml
`;

  const publicPath = path.join(__dirname, '../public/robots.txt');
  fs.writeFileSync(publicPath, robotsContent.trim());
};

generateRobotsTxt();
