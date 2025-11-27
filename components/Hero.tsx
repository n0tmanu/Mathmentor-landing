import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import InputLabel from '@mui/material/InputLabel';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import visuallyHidden from '@mui/utils/visuallyHidden';
import { styled } from '@mui/material/styles';

const StyledBox = styled('div')(({ theme }) => ({
  alignSelf: 'center',
  width: '100%',
  height: 400,
  position: 'relative',
  marginTop: theme.spacing(8),
  [theme.breakpoints.only('xs')]: {
    marginTop: theme.spacing(16), // Even more margin top for mobile
  },
  borderRadius: (theme.vars || theme).shape.borderRadius,
  outline: '6px solid',
  outlineColor: 'hsla(39, 77%, 47%, 0.2)', // Gruvbox yellow outline
  border: '1px solid',
  borderColor: (theme.vars || theme).palette.grey[200],
  boxShadow: '0 0 12px 8px hsla(39, 77%, 47%, 0.15)', // Gruvbox yellow shadow
  [theme.breakpoints.up('sm')]: {
    marginTop: theme.spacing(10),
    height: 700,
  },
  ...theme.applyStyles('dark', {
    boxShadow: '0 0 24px 12px hsla(39, 77%, 37%, 0.2)', // Darker yellow shadow
    outlineColor: 'hsla(39, 77%, 37%, 0.15)', // Darker yellow outline
    borderColor: (theme.vars || theme).palette.grey[700],
  }),
}));

export default function Hero() {
  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: '100%',
        minHeight: { xs: '80vh', sm: '90vh' },
        position: 'relative',
        overflow: 'hidden',

        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url(/castle.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'blur(3px)',
          zIndex: 0,
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(255, 255, 255, 0.1)', // Light overlay for better text readability
          zIndex: 1,
        },
        ...theme.applyStyles('dark', {
          '&::after': {
            backgroundColor: 'rgba(0, 0, 0, 0.3)', // Darker overlay for dark mode
          },
        }),
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
          position: 'relative',
          zIndex: 3,
        }}
      >
        <Stack
          spacing={2}
          useFlexGap
          sx={{ alignItems: 'center', width: { xs: '100%', sm: '70%' } }}
        >
          <Typography
            variant="h1"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center',
              fontSize: 'clamp(2.5rem, 18vw, 7rem)',
              fontFamily: 'Runewood, Inter, sans-serif',
              fontWeight: 400,
              color: 'text.primary',
              '@media (max-width: 700px)': {
                fontSize: '400%',
              },
            }}
          >
            mathmentor
          </Typography>
          <Typography
            sx={{
              textAlign: 'center',
              color: 'hsl(30.7, 43.7%, 79.8%)',
              width: { sm: '100%', md: '80%' },
              fontFamily: 'RockThorn, Inter, sans-serif',
              fontSize: '0.8rem',
              textShadow: '0 0 3px rgba(0, 0, 0, 0.5)',
            }}
          >
            From expert tutors to on-demand sessions, get help exactly when you need it. Our integrated AI support makes learning faster, clearer, and more personalised.
          </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={1}
            useFlexGap
            sx={{
              pt: 2,
              width: { xs: '100%', sm: '350px' },
              alignItems: { xs: 'center', sm: 'flex-start' }
            }}
          >
            <Button
              component="a"
              href="https://app.mathmentor.co.uk"
              sx={{
                backgroundImage: 'url(/start_now_before.png)',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundColor: 'transparent !important',
                border: 'none !important',
                boxShadow: 'none !important',
                outline: 'none !important',
                padding: '0 !important',
                margin: '0 !important',
                minWidth: 'auto !important',
                width: { xs: 250, sm: 300 },
                height: { xs: 80, sm: 100 },
                cursor: 'pointer',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  backgroundImage: 'url(/start_now_after.png)',
                  backgroundColor: 'transparent !important',
                  boxShadow: 'none !important',
                  border: 'none !important',
                  outline: 'none !important',
                  transform: 'scale(1.05)',
                },
                '&:active': {
                  transform: 'scale(0.95)',
                },
                '&:focus': {
                  backgroundColor: 'transparent !important',
                  boxShadow: 'none !important',
                  border: 'none !important',
                  outline: 'none !important',
                },
              }}
              aria-label="Start now"
            />
          </Stack>
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{ textAlign: 'center', fontFamily: 'MorrisRoman, Inter, sans-serif' }}
          >
            By clicking &quot;Start now&quot; you agree to our&nbsp;
            <Link href="#" color="primary">
              Terms & Conditions
            </Link>
            .
          </Typography>
        </Stack>
        <StyledBox id="image">
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              textAlign: 'center',
              maxWidth: { xs: '80%', sm: '60%', md: '50%' },
              zIndex: 3,
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '0.8rem', sm: '1.1rem' },
                color: 'text.primary',
                fontFamily: 'RockThorn, Inter, sans-serif',
                fontWeight: 400,
              }}
            >
              Every great hero needs a guide. Stuck on a difficult riddle? Summon a master mathematician instantly to light your path. Join our guild for group training or embark on a solo campaign. The power to understand is now at your command.
            </Typography>
          </Box>
        </StyledBox>

        {/* Wizard - positioned on the left side */}
        <Box
          component="img"
          src="/wizard1.png"
          alt="Wizard"
          sx={{
            position: 'absolute',
            top: { xs: '55%', sm: '50%' },
            left: { xs: '-8%', sm: '-10%' },
            transform: { xs: 'translateY(-50%)', sm: 'translateY(-50%)' },
            width: { xs: 250, sm: 375, md: 450, lg: 500 },
            height: { xs: 250, sm: 375, md: 450, lg: 500 },
            objectFit: 'contain',
            opacity: 0.8,
            zIndex: 2,
            animation: 'wizardFloat 8s cubic-bezier(0.4, 0.0, 0.2, 1) infinite',
            '@keyframes wizardFloat': {
              '0%, 100%': { transform: 'translateY(-50%) translateX(0px) translateY(0px)' },
              '33%': { transform: 'translateY(-50%) translateX(6px) translateY(-15px)' },
              '66%': { transform: 'translateY(-50%) translateX(-6px) translateY(-8px)' },
            },
          }}
        />

        {/* Troll - positioned at the bottom */}
        <Box
          component="img"
          src="/troll1.png"
          alt="Troll"
          sx={{
            position: 'absolute',
            bottom: { xs: '-2%', sm: '-5%' },
            left: '50%',
            transform: 'translateX(-50%)',
            width: { xs: 200, sm: 300, md: 350, lg: 400 },
            height: { xs: 200, sm: 300, md: 350, lg: 400 },
            objectFit: 'contain',
            opacity: 0.8,
            zIndex: 2,
            animation: 'trollFloat 9s cubic-bezier(0.4, 0.0, 0.2, 1) infinite',
            '@keyframes trollFloat': {
              '0%, 100%': { transform: 'translateX(-50%) translateX(0px) translateY(0px)' },
              '50%': { transform: 'translateX(-50%) translateX(-8px) translateY(-12px)' },
            },
          }}
        />

        {/* Elf - positioned on the right side */}
        <Box
          component="img"
          src="/elf1.png"
          alt="Elf"
          sx={{
            position: 'absolute',
            top: { xs: '55%', sm: '50%' },
            right: { xs: '-15%', sm: '-10%' },
            transform: { xs: 'translateY(-50%)', sm: 'translateY(-50%)' },
            width: { xs: 250, sm: 375, md: 450, lg: 500 },
            height: { xs: 250, sm: 375, md: 450, lg: 500 },
            objectFit: 'contain',
            opacity: 0.8,
            zIndex: 2,
            animation: 'elfFloat 10s cubic-bezier(0.4, 0.0, 0.2, 1) infinite',
            '@keyframes elfFloat': {
              '0%, 100%': { transform: 'translateY(-50%) translateX(0px) translateY(0px)' },
              '25%': { transform: 'translateY(-50%) translateX(10px) translateY(-10px)' },
              '50%': { transform: 'translateY(-50%) translateX(-5px) translateY(-20px)' },
              '75%': { transform: 'translateY(-50%) translateX(5px) translateY(-8px)' },
            },
          }}
        />
      </Container>
    </Box>
  );
}
