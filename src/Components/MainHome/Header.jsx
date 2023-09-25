import React from 'react'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SearchBar from './SearchBar';
import AddIcon from '@mui/icons-material/Add';
import { Button, IconButton } from '@mui/material';

const Header = () => {
  return (
    <div className='flex flex-row items-center justify-between'>
      <SearchBar />

      <div className='flex items-center'>
        <NotificationsNoneIcon sx={{ mx: 3 }} />
        <Button variant="contained" startIcon={<AddIcon />} sx={{ borderRadius: '20px', bgcolor: '#3FA268', textTransform: 'none', }}>
          Create New Project
        </Button>
      </div>

    </div>
  )
}

export default Header