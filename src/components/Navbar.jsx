import React from 'react'
import PersonIcon from '@mui/icons-material/Person';

export const Navbar = () => {
  return (
    <nav className='navbar'>
      <h1 className='brand'>MyApp</h1>
      <div>
        <PersonIcon/>
      </div>
    </nav>
  )
}
