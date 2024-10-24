import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className='sidebar'
      style={{ width: isCollapsed ? '50px' : '250px'}}
    >
      <IconButton onClick={toggleSidebar}>
        {isCollapsed ? <MenuIcon /> : <CloseIcon />}
      </IconButton>

      {/* Conditionally render content when not collapsed */}
      {!isCollapsed && (
        <div>
          <p>Sidebar Content</p>
          <p>Menu Item 1</p>
          <p>Menu Item 2</p>
          <p>Menu Item 3</p>
          {/* Add more sidebar content here */}
        </div>
      )}
    </div>
  );
};
