import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

const userTestimonials = [
  {
    avatar: <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />,
    name: 'Remy Sharp',
    occupation: 'Tutor',
    testimonial:
      "As a maths tutor, I love how easy it is to schedule classes, manage my sessions, and connect with students who are genuinely eager to learn. The platform’s tools feel smooth and well-designed, letting me focus on delivering great lessons instead of juggling admin work.",
  },
  {
    avatar: <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />,
    name: 'Travis Howard',
    occupation: 'Student',
    testimonial:
      "The classes are clear and engaging, and the study materials make everything easier to understand. Whenever I get stuck, I can instantly reach a tutor, which has massively improved my confidence and helped me stay consistent with my learning.",
  },
  {
    avatar: <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />,
    name: 'Cindy Baker',
    occupation: 'Tutor',
    testimonial:
      'Uber Tutoring has been a game changer for me. I can pick up quick sessions whenever I have free time, and the flexibility helps me balance teaching with my own schedule. The earnings add up nicely, and I feel supported every step of the way.',
  },
  {
    avatar: <Avatar alt="Remy Sharp" src="/static/images/avatar/4.jpg" />,
    name: 'Julia Stewart',
    occupation: 'Parent',
    testimonial:
      "The parent dashboard is incredibly helpful. It shows every class, assignment, and improvement in one place. I feel more involved and reassured, knowing exactly how my child is progressing and where extra support is being given.",
    },
  {
    avatar: <Avatar alt="Travis Howard" src="/static/images/avatar/5.jpg" />,
    name: 'John Smith',
    occupation: 'Student',
    testimonial:
      "I love that I can join group classes, book private sessions, and access tons of resources without switching apps. Studying feels more organized, less stressful, and I’m actually enjoying learning maths again.",
  },
  {
    avatar: <Avatar alt="Cindy Baker" src="/static/images/avatar/6.jpg" />,
    name: 'Daniel Wolf',
    occupation: 'Parent',
    testimonial:
      "My daughter has grown more confident in maths since joining the platform. The tutors give detailed feedback after each session, and I can see her skills improving week after week. It’s been a wonderful experience for both of us.",
  },
];


export default function Testimonials() {
  return (
    <Container
      id="testimonials"
      sx={{
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url(/room2.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.2,
          zIndex: -1,
          maskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 80%)',
        },
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
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
        <Typography
          component="h2"
          variant="h4"
          gutterBottom
          sx={{ color: 'text.primary', fontFamily: 'Runewood, Inter, sans-serif' }}
        >
          Testimonials
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary', fontFamily: 'RockThorn, Inter, sans-serif', fontSize: '1.1rem' }}>
          See what our community has to say about their experience. From smoother learning to better results, these stories show how our platform makes a difference.
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {userTestimonials.map((testimonial, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index} sx={{ display: 'flex' }}>
            <Card
              variant="outlined"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                flexGrow: 1,
              }}
            >
              <CardContent>
                <Typography
                  variant="body1"
                  gutterBottom
                  sx={{ color: 'text.secondary', fontFamily: 'RockThorn, Inter, sans-serif', fontSize: '1.1rem' }}
                >
                  {testimonial.testimonial}
                </Typography>
              </CardContent>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                }}
              >
                <CardHeader
                  avatar={testimonial.avatar}
                  title={testimonial.name}
                  subheader={testimonial.occupation}
                />
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
