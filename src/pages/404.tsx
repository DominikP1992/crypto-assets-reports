import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import Link from 'next/link';

const Custom404 = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        textAlign: 'center',
      }}
    >
      <Typography variant="h1" sx={{ mb: 2 }}>
        404
      </Typography>
      <Typography variant="h4" component={'h2'} sx={{ mb: 3 }}>
        Oops! The page you&apos;re looking for was not found.
      </Typography>
      <Link href="/" passHref>
        <Button variant="contained" color="primary">
          Go Back Home
        </Button>
      </Link>
    </Box>
  );
};

export default Custom404;
