import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import classNames from 'classnames'

import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import MenuItem from '@material-ui/core/MenuItem';


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

class NavBar extends React.Component {
  state = {
    // anchorEl: null,
    mobileAnchorEl: null
  };

  handleMobileMenuClick = event => {
    this.setState({ mobileAnchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ mobileAnchorEl: null });
  };

  render() {
    const { mobileAnchorEl} = this.state;
    const { classes } = this.props

    const renderMobileMenu = (
      <Menu
        id="simple-menu"
        anchorEl={mobileAnchorEl}
        open={Boolean(mobileAnchorEl)}
        onClose={this.handleClose}
      >

      <Link to='/'>
        <MenuItem onClick={this.handleClose}>Home</MenuItem>
      </Link>

      <Link to='/todos'>
        <MenuItem onClick={this.handleClose}>Todos</MenuItem>
      </Link>
      </Menu>
    )


    const open = Boolean(mobileAnchorEl);

    return(
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
          <img src={require('../to-do-icon.png')} alt='app-logo' style={{width:'58px', marginLeft:'1vw', paddingRight:'14px'}} />
            <Typography variant="h6" color="inherit" className={classes.grow}>
              On Track
            </Typography>

            <Link className={classNames('material-icons', classes.link)} to='/'>home</Link>
            <Link style={styles.link} to='/todos'>Todos</Link>

            <div>
            <IconButton
              aria-label="More"
              aria-owns={open ? 'long-menu' : undefined}
              aria-haspopup="true"
              onClick={this.handleMobileMenuClick}
            >
              <MoreVertIcon />
            </IconButton>

            {renderMobileMenu}
            </div>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(NavBar)
