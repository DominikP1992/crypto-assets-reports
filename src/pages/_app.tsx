import { AppProps } from 'next/app';
import { Box, CssBaseline, Divider, useTheme } from '@mui/material';
import { sidebarWidth } from '@/styles/getTheme';
import { ThemeProvider } from '@/providers/ThemeContext/ThemeContext';
import { AuthProvider } from '@/providers/AuthContext/AuthContext';
import dynamic from 'next/dynamic';
import { NotificationProvider } from '@/providers/NotificationContext/NotificationContext';
import Head from 'next/head';

const Footer = dynamic(() => import('@/components/molecules/Footer/Footer'));
const SidebarMenu = dynamic(
  () => import('@/components/molecules/Navigation/Navigation'),
);
const AppBar = dynamic(() => import('@/components/molecules/AppBar/AppBar'));

function App({ Component, pageProps }: AppProps) {
  const theme = useTheme();

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <CssBaseline />
      <AppBar />
      <Box
        position={'fixed'}
        pt={10}
        borderRight={`1px solid ${theme.palette.divider}`}
        height={'100%'}
        sx={{
          display: { xs: 'none', md: 'initial' },
        }}
      >
        <SidebarMenu />
      </Box>
      <Box
        sx={{
          ml: { xs: '', md: sidebarWidth },
        }}
      >
        <Component {...pageProps} />
        <Footer />
      </Box>
      <Divider />
    </>
  );
}

export default function AppWithProviders(props: AppProps) {
  return (
    <NotificationProvider>
      <AuthProvider>
        <ThemeProvider>
          <App {...props} />
        </ThemeProvider>
      </AuthProvider>
    </NotificationProvider>
  );
}