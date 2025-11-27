import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import MuiChip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

import DevicesRoundedIcon from '@mui/icons-material/DevicesRounded';
import EdgesensorHighRoundedIcon from '@mui/icons-material/EdgesensorHighRounded';

const items = [
  {
    icon: ({ isSelected }: { isSelected: boolean }) => (
      <Box
        component="img"
        src="/student.svg"
        sx={{
          width: 24,
          height: 24,
          filter: isSelected
            ? 'var(--template-palette-text-primary-filter)'
            : 'var(--template-palette-text-secondary-filter)',
        }}
      />
    ),
    title: 'Student',
    description:
      'Access powerful study tools, join classes, and get the help you need, whenever you need it.',
    imageLight: `url("${process.env.TEMPLATE_IMAGE_URL || 'https://mui.com'}/static/images/templates/templates-images/dash-light.png")`,
    imageDark: `url("${process.env.TEMPLATE_IMAGE_URL || 'https://mui.com'}/static/images/templates/templates-images/dash-dark.png")`,
  },
  {
    icon: ({ isSelected }: { isSelected: boolean }) => (
      <Box
        component="img"
        src="/tutor.svg"
        sx={{
          width: 24,
          height: 24,
          filter: isSelected
            ? 'var(--template-palette-text-primary-filter)'
            : 'var(--template-palette-text-secondary-filter)',
        }}
      />
    ),
    title: 'Tutor',
    description:
      'Share your expertise, teach on your schedule, and earn through classes and instant tutoring sessions.',
    imageLight: `url("${process.env.TEMPLATE_IMAGE_URL || 'https://mui.com'}/static/images/templates/templates-images/mobile-light.png")`,
    imageDark: `url("${process.env.TEMPLATE_IMAGE_URL || 'https://mui.com'}/static/images/templates/templates-images/mobile-dark.png")`,
  },
  {
    icon: ({ isSelected }: { isSelected: boolean }) => (
      <Box
        component="img"
        src="/parent.svg"
        sx={{
          width: 24,
          height: 24,
          filter: isSelected
            ? 'var(--template-palette-text-primary-filter)'
            : 'var(--template-palette-text-secondary-filter)',
        }}
      />
    ),
    title: 'Parent',
    description:
      'Stay connected to your child\'s learning with progress tracking, activity insights, and tutor feedback.',
    imageLight: `url("${process.env.TEMPLATE_IMAGE_URL || 'https://mui.com'}/static/images/templates/templates-images/devices-light.png")`,
    imageDark: `url("${process.env.TEMPLATE_IMAGE_URL || 'https://mui.com'}/static/images/templates/templates-images/devices-dark.png")`,
  },
];

interface ChipProps {
  selected?: boolean;
}

const Chip = styled(MuiChip)<ChipProps>(({ theme }) => ({
  variants: [
    {
      props: ({ selected }) => !!selected,
      style: {
        background:
          'linear-gradient(to bottom right, hsl(39, 77%, 47%), hsl(22, 82%, 45%))', // Gruvbox yellow to orange gradient
        color: 'hsl(0, 0%, 100%)',
        borderColor: (theme.vars || theme).palette.primary.light,
        '& .MuiChip-label': {
          color: 'hsl(0, 0%, 100%)',
        },
        ...theme.applyStyles('dark', {
          borderColor: (theme.vars || theme).palette.primary.dark,
        }),
      },
    },
  ],
}));

interface MobileLayoutProps {
  selectedItemIndex: number;
  handleItemClick: (index: number) => void;
  selectedFeature: (typeof items)[0];
}

export function MobileLayout({
  selectedItemIndex,
  handleItemClick,
  selectedFeature,
}: MobileLayoutProps) {
  if (!items[selectedItemIndex]) {
    return null;
  }

  return (
    <Box
      sx={{
        display: { xs: 'flex', sm: 'none' },
        flexDirection: 'column',
        gap: 2,
      }}
    >
      <Box sx={{ display: 'flex', gap: 2, overflow: 'auto' }}>
        {items.map(({ title }, index) => (
          <Chip
            size="medium"
            key={index}
            label={title}
            onClick={() => handleItemClick(index)}
            selected={selectedItemIndex === index}
          />
        ))}
      </Box>
      <Card variant="outlined">
        <Box sx={{
          p: 3,
          textAlign: 'center',
          minHeight: { xs: 400, sm: 500 },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          backdropFilter: 'blur(3px)',
          backgroundColor: 'rgba(255, 255, 255, 0.1)'
        }}>
          <Typography
            variant="body1"
            sx={{
              color: 'hsl(60, 100%, 90%)',
              fontFamily: 'BumbleCharm,Inter,sans-serif',
              fontSize: '0.95rem',
              lineHeight: 1.7,
              fontStyle: 'italic'
            }}
          >
            {selectedFeature.title === 'Student' && (
              <>Create your account and unlock a complete learning ecosystem built to help you excel in mathematics. Gain access to a vast library of study materials, interactive features, practice content, assessments, and our AI powered learning tools that enhance understanding. Book pre-scheduled group classes, arrange individual tutoring sessions, or request instant help through Uber Tutoring whenever you're stuck. Everything you need to learn, practice, and improve is available within a single platform.</>
            )}
            {selectedFeature.title === 'Tutor' && (
              <>Become a part of our teaching community and share your knowledge with students across the platform. Once your application is reviewed and approved, you can begin conducting classes, hosting group sessions, offering one-on-one lessons, and responding to instant session requests through our Uber Tutoring system. Tutors have access to AI powered lesson management tools, scheduling features, earnings dashboards, and student communication systems, all designed to help you teach efficiently and grow your income doing what you love.</>
            )}
            {selectedFeature.title === 'Parent' && (
              <>As a parent, you'll have a dedicated dashboard where you can link your child's account and stay fully informed about their education. Monitor their progress, review their activity history, view performance analytics, and read feedback provided by tutors after each session. Our system ensures transparency, giving you peace of mind and clear insight into how your child is learning and growing over time.</>
            )}
          </Typography>
          <Typography
            gutterBottom
            sx={{ color: 'text.primary', fontWeight: 'medium', fontFamily: 'Runewood, Inter, sans-serif' }}
          >
            {selectedFeature.title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1.5, fontFamily: 'RockThorn, Inter, sans-serif', fontSize: '1rem' }}>
            {selectedFeature.description}
          </Typography>
        </Box>
      </Card>
    </Box>
  );
}

export default function Features() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);

  const handleItemClick = (index: number) => {
    setSelectedItemIndex(index);
  };

  const selectedFeature = items[selectedItemIndex];

  return (
    <Container
      id="features"
      sx={{
        py: { xs: 8, sm: 16 },
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url(/room1.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.2,
          zIndex: -1,
          maskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 80%)',
        },
      }}
    >
      <Box sx={{ width: { sm: '100%', md: '60%' } }}>
        <Typography
          component="h2"
          variant="h4"
          gutterBottom
          sx={{ color: 'text.primary', fontFamily: 'Runewood, Inter, sans-serif' }}
        >
          One Connected Learning Experience
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: 'text.secondary', mb: { xs: 2, sm: 4 }, fontFamily: 'RockThorn, Inter, sans-serif', fontSize: '1.1rem' }}
        >
          Mathmentor is built to support every part of the learning journey from teaching, to studying, to guiding. Whether you're here to share your expertise, master new concepts, or support a child's progress, each role is designed with dedicated tools, features, and controls tailored to your needs.
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row-reverse' },
          gap: 2,
        }}
      >
        <div>
          <Box
            sx={{
              display: { xs: 'none', sm: 'flex' },
              flexDirection: 'column',
              gap: 2,
              height: '100%',
            }}
          >
            {items.map(({ icon, title, description }, index) => (
              <Box
                key={index}
                component={Button}
                onClick={() => handleItemClick(index)}
                sx={[
                  (theme) => ({
                    p: 2,
                    height: '100%',
                    width: '100%',
                    '&:hover': {
                      backgroundColor: (theme.vars || theme).palette.action.hover,
                    },
                  }),
                  selectedItemIndex === index && {
                    backgroundColor: 'action.selected',
                  },
                ]}
              >
                <Box
                  sx={[
                    {
                      width: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'left',
                      gap: 1,
                      textAlign: 'left',
                      textTransform: 'none',
                      color: 'text.secondary',
                    },
                    selectedItemIndex === index && {
                      color: 'text.primary',
                    },
                  ]}
                >
                  {typeof icon === 'function' ? icon({ isSelected: selectedItemIndex === index }) : icon}

                  <Typography variant="h6" sx={{ fontFamily: 'Runewood, Inter, sans-serif' }}>{title}</Typography>
                  <Typography variant="body2" sx={{ fontFamily: 'RockThorn, Inter, sans-serif', fontSize: '1rem' }}>{description}</Typography>
                </Box>
              </Box>
            ))}
          </Box>
          <MobileLayout
            selectedItemIndex={selectedItemIndex}
            handleItemClick={handleItemClick}
            selectedFeature={selectedFeature}
          />
        </div>
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            width: { xs: '100%', md: '70%' },
          }}
        >
          <Card
            variant="outlined"
            sx={{
              height: '100%',
              width: '100%',
              display: { xs: 'none', sm: 'flex' },
              p: 3,
              textAlign: 'center',
              flexDirection: 'column',
              justifyContent: 'center',
              backdropFilter: 'blur(3px)',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
            }}
          >
            <Typography
              variant="body1"
              sx={{
                color: 'hsl(60, 100%, 90%)',
                fontFamily: 'RockThorn, Inter, sans-serif',
                fontSize: '1.1rem'
              }}
            >
              {selectedFeature.title === 'Student' && (
                <>Create your account and unlock a complete learning ecosystem built to help you excel in mathematics. Gain access to a vast library of study materials, interactive features, practice content, assessments, and our AI powered learning tools that enhance understanding. Book pre-scheduled group classes, arrange individual tutoring sessions, or request instant help through Uber Tutoring whenever you're stuck. Everything you need to learn, practice, and improve is available within a single platform.</>
              )}
              {selectedFeature.title === 'Tutor' && (
                <>Become a part of our teaching community and share your knowledge with students across the platform. Once your application is reviewed and approved, you can begin conducting classes, hosting group sessions, offering one-on-one lessons, and responding to instant session requests through our Uber Tutoring system. Tutors have access to AI powered lesson management tools, scheduling features, earnings dashboards, and student communication systems, all designed to help you teach efficiently and grow your income doing what you love.</>
              )}
              {selectedFeature.title === 'Parent' && (
                <>As a parent, you'll have a dedicated dashboard where you can link your child's account and stay fully informed about their education. Monitor their progress, review their activity history, view performance analytics, and read feedback provided by tutors after each session. Our system ensures transparency, giving you peace of mind and clear insight into how your child is learning and growing over time.</>
              )}
            </Typography>
          </Card>
        </Box>
      </Box>
    </Container>
  );
}
