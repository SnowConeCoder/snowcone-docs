import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import HeroContainer from 'docs/src/layouts/HeroContainer';

export default function Hero() {
  return (
    <HeroContainer
      left={
        <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
          <Typography variant="h1" sx={{ my: 2, maxWidth: 600 }}>
            Put your goodies in here fellas
          </Typography>
        </Box>
      }
    />
  );
}
