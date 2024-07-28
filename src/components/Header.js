import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {Affix} from 'antd';

const Header = () => {
  return (
    <Affix offsetTop={0}>
      <AppBar style={{backgroundColor: '#134B8A'}} position="static">
        <Toolbar>
          <Typography variant="h6"></Typography>
        </Toolbar>
      </AppBar>
    </Affix>
  );
};

export default Header;
