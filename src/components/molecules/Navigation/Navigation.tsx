import { sidebarWidth } from '@/styles/getTheme';
import {
  ImageSearch,
  Person,
  Settings,
  ManageSearch,
  School,
  AssignmentInd,
  Notifications,
  Home,
  Visibility,
  Download,
} from '@mui/icons-material';
import { Box, Divider, MenuItem } from '@mui/material';
import React from 'react';
import NavItem, { NavItemTypes } from '../NavItem/NavItem';
import { useAuth } from '@/providers/AuthContext/AuthContext';
import ConnectWalletButton from '../ConnectWalletButton/ConnectWalletButton';

// menu buttons are disabled as routes doesn't exist
const publicRoutes: NavItemTypes[] = [
  { name: 'Dashboard', url: '/', Icon: Home, disabled: false },
  { name: 'Screener', url: '/screener', Icon: ManageSearch, disabled: false },
  { name: 'Learn center', url: '/learn-center', Icon: School, disabled: false },
  { name: 'Watchlist', url: '/watchlist', Icon: Visibility, disabled: false },
  { name: 'Downloads', url: '/downloads', Icon: Download, disabled: false },
];

const privateRoutes: NavItemTypes[] = [
  {
    name: 'My Reports',
    url: '/my-reports',
    Icon: AssignmentInd,
    disabled: true,
  },
  { name: 'My Audits', url: '/my-audits', Icon: ImageSearch, disabled: true },
  { name: 'My Account', url: '/my-account', Icon: Person, disabled: true },
  {
    name: 'Notifications',
    url: '/my-account',
    Icon: Notifications,
    disabled: true,
  },
  { name: 'Settings', url: '/settings', Icon: Settings, disabled: true },
];

export default function SidebarMenu() {
  const { isAuth } = useAuth();

  return (
    <Box component="nav" pl={2} pr={2} width={sidebarWidth} role="menu">
      {publicRoutes.map((props) => {
        return <NavItem key={props.name} {...props} />;
      })}
      <Divider sx={{ mt: 2, mb: 2 }} />
      {isAuth ? (
        privateRoutes.map((props) => {
          return <NavItem key={props.name} {...props} />;
        })
      ) : (
        <MenuItem>
          <ConnectWalletButton fullWidth />
        </MenuItem>
      )}
    </Box>
  );
}
