import React, { useCallback } from 'react';
import {
  MenuItem,
  Box,
  Typography,
  useTheme,
  SvgIconTypeMap,
} from '@mui/material';
import Link from 'next/link';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { useNotification } from '@/providers/NotificationContext/NotificationContext';
import { useRouter } from 'next/router';

export interface NavItemTypes {
  name: string;
  url: string;
  Icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>;
  disabled: boolean;
}

const NavItem = ({ name, url, Icon, disabled }: NavItemTypes) => {
  const theme = useTheme();
  const { showNotification } = useNotification();
  const router = useRouter();

  const handleClick = useCallback(
    (evt: React.MouseEvent) => {
      evt.preventDefault();

      disabled
        ? showNotification(
            'This is a demo version of the application. Active links are marked with an asterisk (*).',
            'info',
          )
        : router.push(url);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [disabled],
  );

  return (
    <MenuItem key={name} sx={{ py: '6px', px: '12px' }}>
      <Link
        href={url}
        style={{
          textDecoration: 'none',
        }}
        passHref
        onClick={handleClick}
      >
        <Box display={'flex'} gap={2} alignItems={'center'}>
          <Icon style={{ color: theme.palette.text.primary }} />
          <Typography variant="body2" color="text.primary">
            {`${name}${disabled ? '' : '*'}`}
          </Typography>
        </Box>
      </Link>
    </MenuItem>
  );
};

export default NavItem;
