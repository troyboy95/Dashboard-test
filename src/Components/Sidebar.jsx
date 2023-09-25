import React from 'react'
import Drawer from '@mui/material/Drawer';
import Logo from './Logo';
import { Box, Button, Stack, Typography } from '@mui/material';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import SpeakerNotesOutlinedIcon from '@mui/icons-material/SpeakerNotesOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Link, useLocation } from 'react-router-dom';


const drawerWidth = 250;

const menuItems = [
  {
    name: 'Dashboard',
    icon: BarChartOutlinedIcon,
    path: '/dashboard'
  },
  {
    name: 'Projects',
    icon: LayersOutlinedIcon,
    path: '/projects'
  },
  {
    name: 'Staffing',
    icon: PeopleAltOutlinedIcon,
    path: '/staffing'
  },
  {
    name: 'Messages',
    icon: SpeakerNotesOutlinedIcon,
    path: '/messages'
  },
  {
    name: 'Support',
    icon: BarChartOutlinedIcon,
    path: '/support'
  },
  {
    name: 'Settings',
    icon: SettingsOutlinedIcon,
    path: '/settings'
  },

]



const Sidebar = () => {

  const location = useLocation();

  const ButtonLink = ({ name, path, Icon }) => (
    <Button
      to={path}
      component={Link}
      variant="text"
      startIcon={<Icon sx={{ mr: 1 }} />}
      sx={{
        color: '#fff',
        px: '20px',
        py: '8px',
        bgcolor: location.pathname.includes(path) ? '#101215' : null,
        justifyContent: 'flex-start',
        textTransform: 'none',
        width: '100%',
        '&:hover': {
          bgcolor: '#33363b',
        }
      }}>
      {name}
    </Button>
  )


  return (
    <div className=' flex flex-col justify-center items-center'>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            borderRight: "solid 0.5px #454343",
            backgroundColor: '#1F2129',

          },
        }}
        variant="permanent"
        anchor="left"
      >
        <div className=' my-6 flex justify-center'>
          <Logo />
        </div>

        <Stack
          direction="column"
          alignItems="space-between"
          flex={1}
          py={1}
          px={2}
        >
          <Stack
            direction="column"
            flex={1}
            spacing={'5px'}
          >
            {menuItems.slice(0, 4).map(({ name, icon, path }) => (
              <ButtonLink key={name} name={name} path={path} Icon={icon} />
            ))}
          </Stack>


          <Stack
            direction="column"
            spacing={'5px'}
            mb={2}
          >
            {menuItems.slice(4).map(({ name, icon, path }) => (
              <ButtonLink key={name} name={name} path={path} Icon={icon} />
            ))}
          </Stack>


          <Stack
            direction="row"
            spacing={1}
            borderTop={'solid 0.5px #454343'}
            alignItems={'center'}
            py={1}
          >
            <Box component={'img'} sx={{ width: 40, height: 40 }} src='https://cdn-icons-png.flaticon.com/512/149/149071.png' />

            <Box sx={{ my: 5 }}>
              <Typography
                component='p'
                sx={{
                  color: '#F2F4F7',
                  fontSize: '16px',
                  fontStyle: 'bold'
                }}>Olivia</Typography>
              <Typography
                component='p'
                sx={{
                  color: '#F2F4F7',
                  fontSize: '14px'
                }}
              >unknown@email.com</Typography>
            </Box>

            <LogoutOutlinedIcon sx={{color:'#fff'}} />
          </Stack>


        </Stack>



      </Drawer>
    </div>
  )
}

export default Sidebar