import React from 'react'
import SearchBar from './SearchBar'
import Sidebar from '../Sidebar'
import Header from './Header'
import Card from './StatesCard'
import { Box, Stack, Typography } from '@mui/material'

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import TurnedInNotOutlinedIcon from '@mui/icons-material/TurnedInNotOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';


const Home = () => {
  return (
    <div className=' flex flex-row'>
    <div className='flex ml-4 flex-1'>
      <Sidebar />
      <div className='mt-6 mx-4 mr-5 flex-1'>
        <Header />

        <Box sx={{ my: 5 }}>
          <Typography variant="h4" component="h4">Welcome back, Olivia</Typography>
          <Typography component="p">Track, manage researchers and submissions.</Typography>
        </Box>

        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
          useFlexGap
          flexWrap="wrap"
        >
          <Card itemNumber='07' itemName='Active Projects' Icon={AccountCircleIcon} />
          <Card itemNumber='04' itemName='Proposals' Icon={ModeEditOutlineOutlinedIcon} />
          <Card itemNumber='03' itemName='Active Jobs' Icon={TurnedInNotOutlinedIcon} />
          <Card itemNumber='240' itemName='Application' Icon={RemoveRedEyeOutlinedIcon} />

        </Stack>




      </div>
    </div>
    </div>
  )
}

const sidebarData = [
  { name: "Dashboard", icom: "" }
];

export default Home