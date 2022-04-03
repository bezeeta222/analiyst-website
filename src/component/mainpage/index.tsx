import * as React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lx" sx={{ bgcolor: '#cfe8fc', height: '80vh' }}>
        <Box sx={{p: 5}}>
          <Typography variant="h1" component="div" align="center" gutterBottom>
            DREAM BIG
          </Typography>
          <Typography variant="h1" component="div" align="center" gutterBottom>
            Get started now.
          </Typography>
          <Typography variant="h3" component="div" align="center" gutterBottom>
            The ultimate financial hub for traders and investors.
          </Typography>
          <Typography variant="h3" component="div" align="center" gutterBottom>
             Discover
          </Typography>
        </Box>
      </Container>
    </React.Fragment>
  )
}
