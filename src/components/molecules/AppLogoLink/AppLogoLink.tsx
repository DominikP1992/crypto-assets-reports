import AppLogo from '@/components/Icons/AppLogo';
import { Box, Typography } from '@mui/material';
import Link from 'next/link';

export default function AppLogoLink() {
  return (
    <Link href="/" style={{ textDecoration: 'none' }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          textDecoration: 'none',
        }}
      >
        <AppLogo />{' '}
        <Typography
          sx={{
            color: (theme) =>
              theme.palette.mode === 'light' ? 'primary.main' : 'primary.light',
          }}
          display={{ xs: 'none', sm: 'initial' }}
        >
          TokenScreen
        </Typography>
      </Box>
    </Link>
  );
}
