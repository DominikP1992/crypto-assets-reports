import { Divider, Drawer } from '@mui/material';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import SidebarMenu from '../Navigation/Navigation';
import { Menu } from '@mui/icons-material';
import AppLogoLink from '../AppLogoLink/AppLogoLink';
import ConnectWalletButton from '../ConnectWalletButton/ConnectWalletButton';
import ToggleColorMode from '../ToggleColorMode/ToggleColorMode';
import { useRouter } from 'next/router';

function AppBar() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  useEffect(() => {
    const handleRouteChange = () => {
      setOpen(false);
    };

    router.events.on('routeChangeStart', handleRouteChange);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router.events]);

  return (
    <MuiAppBar
      position="fixed"
      sx={{
        boxShadow: 0,
        bgcolor: 'transparent',
        backgroundImage: 'none',
        zIndex: 10,
      }}
    >
      <Toolbar
        variant="regular"
        sx={(theme) => ({
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexShrink: 0,
          bgcolor:
            theme.palette.mode === 'light'
              ? 'rgba(255, 255, 255, 0.4)'
              : 'rgba(0, 0, 0, 0.4)',
          backdropFilter: 'blur(24px)',
          maxHeight: 40,
          border: '1px solid',
          borderColor: 'divider',
          boxShadow:
            theme.palette.mode === 'light'
              ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
              : '0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)',
        })}
      >
        <Box
          sx={{
            flexGrow: 1,
            display: 'flex',
            alignItems: 'center',
            px: 0,
          }}
        >
          <Button
            color="primary"
            aria-label="menu"
            size="small"
            onClick={toggleDrawer(true)}
            sx={{
              minWidth: '30px',
              p: '4px',
              mr: 1,
              display: { sm: '', md: 'none' },
            }}
            variant="outlined"
          >
            <Menu />
          </Button>
          <AppLogoLink />
        </Box>
        <Box mr={1}>
          <ToggleColorMode />
        </Box>
        <ConnectWalletButton />
      </Toolbar>
      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        <Box pl={3} pb={1} pt={2}>
          <AppLogoLink />
        </Box>
        <Divider />
        <Box pt={1}>
          <SidebarMenu />
        </Box>
      </Drawer>
    </MuiAppBar>
  );
}

export default AppBar;
