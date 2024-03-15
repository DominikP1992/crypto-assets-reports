import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Head from 'next/head';

export default function Page() {
  return (
    <>
      <Head>
        <title>Watchlist</title>
        <meta name="description" content="Watchlist description" />
      </Head>

      <Box>
        <Container
          maxWidth={false}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            pt: { xs: 14, sm: 20 },
            pb: { xs: 8, sm: 12 },
          }}
        >
          <Typography component={'h1'} variant="h1">
            Watchlist Page
          </Typography>
        </Container>
      </Box>
    </>
  );
}
