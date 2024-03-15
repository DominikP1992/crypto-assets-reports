import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import FacebookIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/X';
import AppLogo from '@/components/Icons/AppLogo';
import { useNotification } from '@/providers/NotificationContext/NotificationContext';
import { Link } from '@mui/material';

export default function Footer() {
  const { showNotification } = useNotification();

  function handleClick(evt: React.MouseEvent) {
    evt.preventDefault();
    showNotification(
      'This is a demo version of the application. Active links are marked with an asterisk (*).',
      'info',
    );
  }

  return (
    <Container
      maxWidth={false}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 4, sm: 8 },
        py: { xs: 8, sm: 10 },
        textAlign: { sm: 'center', md: 'left' },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          width: '100%',
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
            minWidth: { xs: '100%', sm: '60%' },
          }}
        >
          <Box sx={{ width: { xs: '100%', sm: '60%' } }}>
            <Box display={'flex'} alignItems={'center'} gap={1} pb={1}>
              <AppLogo />{' '}
              <Typography color="primary.main" fontWeight={'bold'}>
                TokenScreen
              </Typography>
            </Box>
            <Typography variant="body2" fontWeight={600} gutterBottom>
              Newsletter
            </Typography>
            <Typography variant="body2" color="text.secondary" mb={2}>
              Subscribe to our newsletter for weekly updates and promotions.
            </Typography>
            <Stack direction="row" spacing={1} useFlexGap>
              <TextField
                id="outlined-basic"
                hiddenLabel
                size="small"
                variant="outlined"
                fullWidth
                aria-label="Enter your email address"
                placeholder="Your email address"
                inputProps={{
                  autoComplete: 'off',
                  ['aria-label']: 'Enter your email address',
                }}
              />
              <Button
                variant="contained"
                color="primary"
                sx={{ flexShrink: 0 }}
              >
                Subscribe
              </Button>
            </Stack>
          </Box>
        </Box>
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            flexDirection: 'column',
            gap: 1,
          }}
        >
          <Typography variant="body2" fontWeight={600}>
            Product
          </Typography>
          <Link color="text.secondary" href="test" onClick={handleClick}>
            Features
          </Link>
          <Link color="text.secondary" href="#" onClick={handleClick}>
            Testimonials
          </Link>
          <Link color="text.secondary" href="#" onClick={handleClick}>
            Highlights
          </Link>
          <Link color="text.secondary" href="#" onClick={handleClick}>
            Pricing
          </Link>
          <Link color="text.secondary" href="#" onClick={handleClick}>
            FAQs
          </Link>
        </Box>
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            flexDirection: 'column',
            gap: 1,
          }}
        >
          <Typography variant="body2" fontWeight={600}>
            Company
          </Typography>
          <Link color="text.secondary" href="#" onClick={handleClick}>
            About us
          </Link>
          <Link color="text.secondary" href="#" onClick={handleClick}>
            Careers
          </Link>
          <Link color="text.secondary" href="#" onClick={handleClick}>
            Press
          </Link>
        </Box>
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            flexDirection: 'column',
            gap: 1,
          }}
        >
          <Typography variant="body2" fontWeight={600}>
            Legal
          </Typography>
          <Link color="text.secondary" href="#" onClick={handleClick}>
            Terms
          </Link>
          <Link color="text.secondary" href="#" onClick={handleClick}>
            Privacy
          </Link>
          <Link color="text.secondary" href="#" onClick={handleClick}>
            Contact
          </Link>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          pt: { xs: 4, sm: 8 },
          width: '100%',
          borderTop: '1px solid',
          borderColor: 'divider',
        }}
      >
        <div>
          <Link color="text.secondary" href="#" onClick={handleClick}>
            Privacy Policy
          </Link>
          <Typography display="inline" sx={{ mx: 0.5, opacity: 0.5 }}>
            &nbsp;•&nbsp;
          </Typography>
          <Link color="text.secondary" href="#" onClick={handleClick}>
            Terms of Service
          </Link>
          <Typography variant="body2" color="text.secondary" mt={1}>
            {'Copyright © '}
            <Link href="#" onClick={handleClick}>
              TokenScreen&nbsp;
            </Link>
            {new Date().getFullYear()}
          </Typography>
        </div>
        <Stack
          direction="row"
          justifyContent="left"
          spacing={1}
          useFlexGap
          sx={{
            color: 'text.secondary',
          }}
        >
          <IconButton
            color="inherit"
            href="#"
            aria-label="GitHub"
            sx={{ alignSelf: 'center' }}
            onClick={handleClick}
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            color="inherit"
            href="#"
            aria-label="X"
            sx={{ alignSelf: 'center' }}
            onClick={handleClick}
          >
            <TwitterIcon />
          </IconButton>
          <IconButton
            color="inherit"
            href="#"
            aria-label="LinkedIn"
            sx={{ alignSelf: 'center' }}
            onClick={handleClick}
          >
            <LinkedInIcon />
          </IconButton>
        </Stack>
      </Box>
    </Container>
  );
}
