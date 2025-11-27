import Box from '@mui/material/Box';

export default function SitemarkIcon() {
  return (
    <Box
      component="img"
      src="/logo.jpg"
      alt="MathMentor Logo"
      sx={{ height: 40, width: 'auto', mr: 2, maxWidth: 120, borderRadius: 2 }}
    />
  );
}
