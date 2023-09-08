import React from "react";
import {AppBar, Toolbar, CssBaseline, Typography, SvgIcon, Icon} from "@mui/material";
import MenuIcon from "@mui/icons-material"
import {Link} from "react-router-dom";
import { Container } from "@mui/system";
import {ReactComponent as Logo} from "../views/asset/img-7143.svg"
import {ReactComponent as InstagramLogo} from "../views/asset/igIcon.svg"
import {ReactComponent as YelpLogo} from "../views/asset/yelpIcon.svg"


const styles = {
  button: {
    display: { xs: 'none', md: 'flex' },
    fontFamily: 'monospace',
    fontWeight: 700,
    letterSpacing: '.1rem',
    color: 'inherit',
    textDecoration: 'none',
  },
  logo:{
    height: 100,
    width: 100,
  },
  background:{
    backgroundColor: '#e6ddc5',
    marginBottom: "100px" //This Margin Bottom only works if navbar is position static
    //dapheny's choice of color for background
  },
  mediaIcon:{
    height:24,
    width:25,
    marginLeft:'10'
  }
}

function Navbar() {
    return (
      <div>
      <AppBar position="fixed" style={styles.background}>
        <Container maxWidth="xl" style={{marginRight:"auto"}} >
          <Toolbar disableGutters>
              <Logo ml={1} style={styles.logo} />
              <Typography variant="h6" noWrap component={Link} to="/" mr={1} ml={4} style={styles.button}>
                Home
              </Typography>
              <Typography variant="h6" noWrap component={Link} to="/menu" mr={1} ml={4} style={styles.button}>
                Menu
              </Typography>
              <Typography variant="h6" noWrap component={Link} to="/gallery" mr={1} ml={4} style={styles.button}>
                Gallery
              </Typography>
              <Typography variant="h6" noWrap component={Link} to="/location" mr={1} ml={4} style={styles.button}>
                Location
              </Typography>
              <Link target="_blank" style={{marginLeft:"auto"}} to="https://www.yelp.com/biz/hide-out-cafe-rowland-heights-2?utm_campaign=www_business_share_popup&utm_medium=copy_link&utm_source=(direct)">
                <YelpLogo style={styles.mediaIcon}/>
              </Link>
              <Link target="_blank" to="https://www.instagram.com/thisis.hideoutcafe/">
                <InstagramLogo style={styles.mediaIcon}/>
              </Link>
          </Toolbar>
        </Container>
      </AppBar>
      </div>
    );
  }
  export default Navbar;
  