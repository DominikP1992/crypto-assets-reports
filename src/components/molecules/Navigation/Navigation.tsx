import { sidebarWidth } from '@/styles/getTheme';
import {
  ImageSearch,
  Person,
  Settings,
  Summarize,
  ManageSearch,
  School,
  AssignmentInd,
  Notifications,
} from '@mui/icons-material';
import { Box, Divider } from '@mui/material';
import React from 'react';
import NavItem, { NavItemTypes } from '../NavItem/NavItem';
import { useAuth } from '@/providers/AuthContext/AuthContext';
import ConnectWalletButton from '../ConnectWalletButton/ConnectWalletButton';

// menu buttons are disabled as routes doesn't exist
const publicRoutes: NavItemTypes[] = [
  { name: 'Reports', url: '/', Icon: Summarize, disabled: false },
  { name: 'Audits', url: '/audits', Icon: ManageSearch, disabled: true },
  { name: 'Learn center', url: '/learn-center', Icon: School, disabled: true },
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
        <ConnectWalletButton fullWidth />
      )}
    </Box>
  );
}
