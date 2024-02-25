import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useCallback,
} from 'react';
import { Snackbar } from '@mui/material';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

// eslint-disable-next-line react/display-name
const NotificationComponent = React.forwardRef<HTMLDivElement, AlertProps>(
  (props, ref) => (
    <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
  ),
);

interface NotificationMessage {
  message: string;
  severity: AlertProps['severity'];
}

interface NotificationContextType {
  showNotification: (message: string, severity: AlertProps['severity']) => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(
  undefined,
);

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (context === undefined) {
    throw new Error(
      'useNotification must be used within a NotificationProvider',
    );
  }
  return context;
};

export const NotificationProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const [notification, setNotification] = useState<NotificationMessage>({
    message: '',
    severity: 'info',
  });

  const showNotification = useCallback(
    (message: string, severity: AlertProps['severity'] = 'info') => {
      setNotification({ message, severity });
      setOpen(true);
    },
    [],
  );

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <NotificationContext.Provider value={{ showNotification }}>
      {children}
      <Snackbar
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <NotificationComponent
          onClose={handleClose}
          severity={notification.severity}
          sx={{ width: '100%' }}
        >
          {notification.message}
        </NotificationComponent>
      </Snackbar>
    </NotificationContext.Provider>
  );
};
