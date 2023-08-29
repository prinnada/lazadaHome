import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, InputBase, Badge, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Navbar: React.FC = () => {
  return (
    <AppBar position="static" style={{ backgroundColor:"white" }}>
      <Toolbar sx={{display : 'flex'}}>
        <Typography sx={{ flexGrow: 1 }} variant="h6" style={{ paddingRight: '56px',  color:"blue"}}>
     <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Lazada_%282019%29.svg/1280px-Lazada_%282019%29.svg.png" alt="" style={{ width: '100px'}}/>
        </Typography>
          <Box sx={{ flexGrow: 1 }}>
            <InputBase
              placeholder="Search in Lazada"
              inputProps={{ 'aria-label': 'search' }}
              style={{ width:"688px",backgroundColor:"#eff0f5"}}
            />
            <IconButton aria-label="search">
              <SearchIcon />
            </IconButton>
          </Box>
          <Box>
          <IconButton aria-label="shopping cart" color="inherit">
            <Badge badgeContent={0} color="error">
              <ShoppingCartIcon style={{ color:"blue"}} />
            </Badge>
          </IconButton>
          </Box>
        <div>
            
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
