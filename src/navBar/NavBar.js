import React from 'react'
import {Link} from 'react-router-dom'
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  link: {
    float: 'right',
    marginRight: 30,
    color: 'white'
  }
};

const NavBar = () => {
  return(
    <div style={styles.root}>
      <AppBar position="static">
        <Toolbar>
        <img src={require('../to-do-icon.png')} alt='app-logo' style={{width:'58px', marginLeft:'1vw', paddingRight:'14px'}} />
          <Typography variant="h6" color="inherit" style={styles.grow}>
            On Track
          </Typography>

          <Link className='material-icons' style={styles.link} to='/'>home</Link>
          <Link style={styles.link} to='/Todos'>Todos</Link>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default NavBar
