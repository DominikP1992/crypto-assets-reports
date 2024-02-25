import React, { useState, useEffect } from 'react';
import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  CircularProgress,
  Box,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useAuth } from '@/providers/AuthContext/AuthContext';
import fetchAssetReport, {
  AssetReportResponse,
} from '@/services/fetchAssetReport';
import ConnectWalletButton from '../ConnectWalletButton/ConnectWalletButton';

const sections: { key: keyof AssetReportResponse; label: string }[] = [
  { key: 'summary', label: 'Summary' },
  { key: 'detailedAnalysis', label: 'Detailed Analysis' },
  { key: 'futureOutlook', label: 'Future Outlook' },
  { key: 'technicalAnalysis', label: 'Technical Analysis' },
  { key: 'recommendations', label: 'Recommendations' },
];

const AssetReport = ({ assetName }: { assetName: string }) => {
  const { isAuth } = useAuth();
  const [report, setReport] = useState<AssetReportResponse | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isAuth) {
      setLoading(true);
      const fetchReport = async () => {
        const data = await fetchAssetReport({ assetName, delay: 500 });
        setReport(data);
        setLoading(false);
      };

      fetchReport();
    }
  }, [assetName, isAuth]);

  return (
    <Box sx={{ position: 'relative', width: '100%' }}>
      {loading && (
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backdropFilter: 'blur(4px)',
            zIndex: 2,
          }}
        >
          <CircularProgress />
        </Box>
      )}

      {!isAuth && (
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            borderRadius: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 2,
            backdropFilter: 'blur(4px)',
          }}
        >
          <Typography
            variant="h6"
            component={'p'}
            fontWeight={'bold'}
            gutterBottom
            align="center"
          >
            Connect wallet in order <br />
            to see full report
          </Typography>
          <ConnectWalletButton />
        </Box>
      )}

      {sections.map(({ key, label }) => (
        <Accordion key={key} disabled={!isAuth}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight={'bold'}>{label}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{report?.[key]}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default AssetReport;
