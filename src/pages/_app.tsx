import { AppProps } from 'next/app';
import { Box, CssBaseline, Divider, useTheme } from '@mui/material';
import { sidebarWidth } from '@/styles/getTheme';
import { ThemeProvider } from '@/providers/ThemeContext/ThemeContext';
import { AuthProvider } from '@/providers/AuthContext/AuthContext';
import { NotificationProvider } from '@/providers/NotificationContext/NotificationContext';
import Head from 'next/head';
import Footer from '@/components/molecules/Footer/Footer';
import SidebarMenu from '@/components/molecules/Navigation/Navigation';
import AppBar from '@/components/molecules/AppBar/AppBar';
import NextNProgress from 'nextjs-progressbar';

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
        display={{ xs: 'none', md: 'initial' }}
      >
        <SidebarMenu />
      </Box>
      <Box ml={{ xs: '', md: sidebarWidth }}>
        <Component {...pageProps} />
        <Footer />
      </Box>
      <Divider />
      <NextNProgress />
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
