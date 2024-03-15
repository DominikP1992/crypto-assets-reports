import * as React from 'react';
import { Avatar, Button, alpha } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import mockedCrypto from '@/mock/cryptoReportsMock';
import normalizePath from '@/utils/normalizePath';
import Link from 'next/link';
import ReportsSearch from '@/components/molecules/ReportsSearch/ReportsSearch';
import Head from 'next/head';

export default function Page() {
  return (
    <>
      <Head>
        <title>Crypto Assets Reports - homepage</title>
        <meta
          name="description"
          content="Explore in-depth reports and analyses of the latest trends in the crypto market. Discover valuable insights into various cryptocurrencies, their performance, market predictions, and more. Stay informed with Crypto Assets Reports."
        />
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
          <Stack
            spacing={2}
            useFlexGap
            sx={{ width: { xs: '100%', sm: '70%' } }}
          >
            <Typography
              component="h1"
              variant="h1"
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column' },
                alignSelf: 'center',
                textAlign: 'center',
              }}
            >
              Search for&nbsp;
              <Typography
                component="span"
                variant="h1"
                sx={{
                  color: (theme) =>
                    theme.palette.mode === 'light'
                      ? 'primary.main'
                      : 'primary.light',
                }}
              >
                Crypto Assets Reports
              </Typography>
            </Typography>
            <Typography
              variant="body1"
              textAlign="center"
              color="text.secondary"
            >
              Discover the essential insights into cryptocurrency markets with
              our streamlined dashboard. Access detailed reports on major crypto
              assets, including market trends and analytics, to inform your
              investment decisions. Elevate your strategy with our
              precision-tailored data and insights. Begin your informed
              investment journey now.
            </Typography>
            <Stack alignSelf="center" spacing={1} useFlexGap mt={2}>
              <ReportsSearch />
            </Stack>
          </Stack>

          <Box
            sx={(theme) => ({
              pt: 2,
              pl: 2,
              pr: 2,
              mt: { xs: 8, sm: 10 },
              alignSelf: 'center',
              width: '100%',
              borderRadius: '10px',
              outlineColor:
                theme.palette.mode === 'light'
                  ? alpha('#BFCCD9', 0.5)
                  : alpha('#9CCCFC', 0.1),
              boxShadow:
                theme.palette.mode === 'light'
                  ? `0 0 12px 8px ${alpha('#9CCCFC', 0.2)}`
                  : `0 0 24px 12px ${alpha('#033363', 0.2)}`,
            })}
          >
            <Typography
              component="h2"
              variant="h2"
              align="center"
              sx={{
                whiteSpace: 'pre-wrap',
                color: (theme) =>
                  theme.palette.mode === 'light'
                    ? 'primary.main'
                    : 'primary.light',
              }}
            >
              Popular reports
            </Typography>
            <Box
              display={'flex'}
              flexWrap={'wrap'}
              justifyContent={'center'}
              mt={4}
              mb={4}
              gap={2}
            >
              {mockedCrypto.slice(0, 40).map(({ name, symbol }) => (
                <Link
                  href={`/reports/${normalizePath(name)}`}
                  passHref
                  key={name}
                  style={{ textDecoration: 'none' }}
                >
                  <Button
                    key={name}
                    variant="outlined"
                    sx={{
                      display: 'flex',
                      gap: 1,
                      alignItems: 'center',
                      justifyContent: 'start',
                      width: { xs: 150, sm: 200 },
                      paddingX: 2,
                    }}
                  >
                    <Avatar
                      src={`/icons/color/${symbol}.svg`.toLowerCase()}
                      alt={name}
                      sx={{ width: 24, height: 24 }}
                    />
                    <Box
                      style={{
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {name}{' '}
                      <Typography component={'span'} variant="caption">
                        {symbol} *
                      </Typography>
                    </Box>
                  </Button>
                </Link>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
