import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from 'react';
import {
  createTheme,
  ThemeProvider as MUIThemeProvider,
} from '@mui/material/styles';
import { PaletteMode } from '@mui/material';
import getTheme from '@/styles/getTheme';

interface ThemeContextType {
  mode: PaletteMode;
  toggleColorMode: () => void;
}

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const themeStorageKey = 'themeStorageKey';

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [mode, setMode] = useState<PaletteMode>('light');

  useEffect(() => {
    const localMode = localStorage.getItem(themeStorageKey) as PaletteMode;
    if (localMode && (localMode === 'light' || localMode === 'dark')) {
      setMode(localMode);
    }
  }, []);

  useEffect(() => {
    localStorage?.setItem(themeStorageKey, mode);
  }, [mode]);

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === 'dark' ? 'light' : 'dark'));
  };

  const theme = createTheme(getTheme(mode));

  return (
    <ThemeContext.Provider value={{ mode, toggleColorMode }}>
      <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return context;
}
