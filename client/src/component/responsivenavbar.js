import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, IconButton, Button, Menu, MenuItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const Navbar = () => {
    const classes = useStyles();
    const [mobileAnchorEl, setMobileAnchorEl] = React.useState(null);
  
    const handleMobileMenuOpen = (event) => {
      setMobileAnchorEl(event.currentTarget);
    };
  
    const handleMobileMenuClose = () => {
      setMobileAnchorEl(null);
    };
  
    const mobileMenu = (
      <Menu
        anchorEl={mobileAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={Boolean(mobileAnchorEl)}
        onClose={handleMobileMenuClose}
      >
        <MenuItem onClick={handleMobileMenuClose}>Home</MenuItem>
        <MenuItem onClick={handleMobileMenuClose}>About</MenuItem>
        <MenuItem onClick={handleMobileMenuClose}>Contact</MenuItem>
      </Menu>
    );
  
    const desktopMenu = (
      <div className={classes.desktopMenu}>
        <Button color="inherit">Home</Button>
        <Button color="inherit">About</Button>
        <Button color="inherit">Contact</Button>
      </div>
    );
  
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={handleMobileMenuOpen}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              My App
            </Typography>
            {desktopMenu}
            <div className={classes.mobileMenu}>{mobileMenu}</div>
          </Toolbar>
        </AppBar>
      </div>
    );
  };
  