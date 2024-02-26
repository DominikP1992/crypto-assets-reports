export default function getDomain(): string {
  const domain = process.env.DOMAIN_NAME || 'localhost:3000';
  const protocol = domain.includes('localhost') ? 'http' : 'https';
  return `${protocol}://${domain}`;
}
