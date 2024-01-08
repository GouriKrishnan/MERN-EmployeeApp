import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './Main.css';

const Main = () => {

  return (
    <Box className="main-container" sx={{ flexGrow: 1 }}>
      <AppBar sx={{ background: "indigo"}}>
        <Toolbar className="toolbar">
          <Typography variant="h5" component="div" className="toolbar-typography">
            Employee App
          </Typography>
          <Box className="toolbar-buttons">
            <Button   color="inherit" className="">Home</Button> 
            <Button color="inherit" className="">Employee List</Button>
            <Button color="inherit" className="">LogOut</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
  };


export default Main;