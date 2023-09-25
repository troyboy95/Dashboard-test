import React, { useState } from 'react'
import { IconButton, Box } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  return (
    <Box className=' max-w-[350px]'
      component='form'
      onSubmit={() => { }}
      sx={{ borderRadius: 20, border: 'none', px: 2, py: 1, backgroundColor: 'black', outline: 'none' }}
    >

      <SearchIcon />
      <input style={{ border: 'none', outline: 'none', backgroundColor: 'black', marginLeft: '5px' }}
        placeholder='Search'
      value=""
      onChange={() => { }}
      />

    </Box>
  )
}

export default SearchBar
