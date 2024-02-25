import React from 'react';
import { Box, Grid, Typography, Tooltip } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';

interface StatItemProps {
  label: string;
  value: string;
}

const MarketStatItem: React.FC<StatItemProps> = ({ label, value }) => {
  return (
    <Grid item xs={6} md={4}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="start"
        justifyContent="space-between"
        my={2}
      >
        <Typography variant="caption" gutterBottom>
          <Box display={'flex'} alignItems={'center'} gap={1}>
            {label.toUpperCase()}{' '}
            <Tooltip title="Info">
              <InfoIcon fontSize="small" />
            </Tooltip>
          </Box>
        </Typography>
        <Typography variant="h6" component={'p'}>
          {value}
        </Typography>
      </Box>
    </Grid>
  );
};

export default MarketStatItem;
