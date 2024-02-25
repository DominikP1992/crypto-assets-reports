import React, { useState } from 'react';
import { Button, ButtonProps, Popover, Typography, Box } from '@mui/material';
import { useAuth } from '@/providers/AuthContext/AuthContext';
import MetaMaskLogo from '@/components/Icons/MetaMaskLogo';

export default function ConnectWalletButton(props: ButtonProps) {
  const { isAuth, login, logout, account } = useAuth();
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!isAuth) {
      login();
    } else {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleDisconnect = () => {
    logout();
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'disconnect-popover' : undefined;

  return (
    <>
      <Button
        {...props}
        color="primary"
        variant="contained"
        size="small"
        onClick={handleClick}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 1,
        }}
      >
        {account ? `${account.substring(0, 7)}...` : 'Connect Wallet'}
        <MetaMaskLogo width={20} />
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Box p={2}>
          <Typography>
            Are you sure you want to disconnect your wallet?
          </Typography>
          <Box mt={2} display="flex" justifyContent="flex-end" gap={1}>
            <Button variant="outlined" onClick={handleClose}>
              Cancel
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={handleDisconnect}
              autoFocus
            >
              Disconnect
            </Button>
          </Box>
        </Box>
      </Popover>
    </>
  );
}
