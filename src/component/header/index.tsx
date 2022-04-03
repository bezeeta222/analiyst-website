import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import Fab from '@mui/material/Fab'
import NavigationIcon from '@mui/icons-material/Navigation'
import { FaTelegram } from 'react-icons/fa'
import PhotoCamera from '@mui/icons-material/PhotoCamera'
import TelegramIcon from '@mui/icons-material/Telegram'
import FacebookIcon from '@mui/icons-material/Facebook'
import YouTubeIcon from '@mui/icons-material/YouTube'
import InstagramIcon from '@mui/icons-material/Instagram'

const pages = [
  'HOME',
  'TESTIMONIALS',
  'BASIC CLASS',
  'ABOUT US',
  'PERFORMANCE',
  'CHANNEL',
]

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null,
  )

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: '#1B1A17',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 15, display: { xs: 'none', md: 'flex' } }}
          >
            Analyst
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 1, mx: 2, color: 'white', display: 'block' }}
              >
                <b>{page}</b>
              </Button>
            ))}
            <Fab
              variant="extended"
              size="medium"
              color="primary"
              aria-label="add"
              sx={{ bgcolor: '#F0A500', m: 2 }}
            >
              <TelegramIcon sx={{ mr: 1 }} />
              Join Us
            </Fab>

            <IconButton
              color="primary"
              aria-label="upload picture"
              edge="end"
              sx={{ mr: 1 }}
            >
              <FacebookIcon />
            </IconButton>

            <IconButton
              color="primary"
              aria-label="upload picture"
              edge="end"
              sx={{ mr: 1 }}
            >
              <YouTubeIcon />
            </IconButton>

            <IconButton
              color="primary"
              aria-label="upload picture"
              edge="end"
              sx={{ mr: 1 }}
            >
              <InstagramIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default ResponsiveAppBar
