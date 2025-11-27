import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import PsychologyIcon from '@mui/icons-material/Psychology';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import SchoolIcon from '@mui/icons-material/School';

const items = [
  {
    icon: <PsychologyIcon />,
    title: 'Personalized Learning Paths',
    description:
      'Customized curriculum that adapts to your unique learning style, pace and goal for optimal understanding.',
  },
  {
    icon: <TrendingUpIcon />,
    title: 'Rapid Skill Development',
    description:
      'Accelerate your learning with focused practice modules designed to build skills efficiently.',
  },
  {
    icon: <LightbulbIcon />,
    title: 'Comprehensive Concept Mastery',
    description:
      'Deep dive into mathematical concepts with interactive tools and real-world applications',
  },
  {
    icon: <AutoFixHighRoundedIcon />,
    title: 'Interactive Learning Tools',
    description:
      'Engage with dynamic visualizations, simulations, and hands on activities that make math come alive.',
  },
  {
    icon: <AnalyticsIcon />,
    title: 'Progress Tracking',
    description:
      'Monitor your growth with detailed analytics and celebrate milestones on your mathematical journey.',
  },
  {
    icon: <SchoolIcon />,
    title: 'Expert Guidance',
    description:
      'Learn from experienced math educators who provide personalized support and mentorship.',
  },
];

export default function Highlights() {
  return (
    <Box
      id="highlights"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        color: 'white',
        bgcolor: 'grey.900',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url(/room3.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.1,
          maskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 80%)',
        },
      }}
    >
      <Container
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box
          sx={{
            width: { sm: '100%', md: '60%' },
            textAlign: { sm: 'left', md: 'center' },
          }}
        >
          <Typography component="h2" variant="h4" gutterBottom sx={{ fontFamily: 'Runewood, Inter, sans-serif' }}>
            Highlights
          </Typography>
          <Typography variant="body1" sx={{ color: 'grey.400', fontFamily: 'RockThorn, Inter, sans-serif', fontSize: '1.1rem' }}>
          Discover what makes our platform truly stand out. From flexible learning options to powerful features designed for students, tutors, and parents alike. Enjoy a seamless experience, smart tools, and dedicated support that helps every learner grow with confidence.
          </Typography>
        </Box>
        <Grid container spacing={2} sx={{ gap: 'inherit' }}>
          {items.map((item, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <Stack
                direction="column"
                component={Card}
                spacing={1}
                useFlexGap
                sx={{
                  color: 'inherit',
                  p: 3,
                  height: '100%',
                  borderColor: 'hsla(220, 25%, 25%, 0.3)',
                  backgroundColor: 'grey.800',
                }}
              >
                <Box sx={{ opacity: '50%' }}>{item.icon}</Box>
                <div>
                  <Typography gutterBottom sx={{ fontWeight: 'medium', fontFamily: 'Runewood, Inter, sans-serif' }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'grey.400', fontFamily: 'RockThorn, Inter, sans-serif' }}>
                    {item.description}
                  </Typography>
                </div>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
