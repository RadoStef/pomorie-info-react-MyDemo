import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import logo from '../../assets/logo.png'
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import classes from './MenuStyles.module.css';
import { headerStyles } from './styles';
import { menuItems } from '../mock-data/data';
import { NavLink } from 'react-router-dom';

const backToMainPage = 'https://www.eva-pomorie.eu';

export const AppHeaderBar = () => {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 300 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List sx={{ marginTop: 10 }}>
        {menuItems.map((text) => (
          <ListItem key={text.id} disablePadding className={classes.list}>
            <NavLink to={text.link} className={({isActive}) => isActive ? classes.active : classes.list}>
              <ListItemButton>
                <ListItemIcon>
                  {text.icon}
                </ListItemIcon>
                <ListItemText primary={text.text} /> 
              </ListItemButton>
            </NavLink>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Container sx={headerStyles.appHeaderBar} maxWidth="xl">
      <Box>
        <a href={backToMainPage} target='_blank' rel='noreferrer'>
          <img src={logo} alt='site_logo' sx={headerStyles.logo}/>
        </a>
      </Box>
      <Box>
        <div>
          {[`menu`].map((anchor) => (
            <React.Fragment key={anchor}>
              <Button sx={{background: '#fbbc05', color: 'black', width: '200px' }} onClick={toggleDrawer(anchor, true)}>{anchor} </Button>
              <SwipeableDrawer
                // anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
                onOpen={toggleDrawer(anchor, true)}
              >
                {list(anchor)}
              </SwipeableDrawer>
            </React.Fragment>
          ))}
        </div>
      </Box>
    </Container>
  );
};