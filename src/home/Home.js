import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    // ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 4,
    paddingBottom: theme.spacing.unit * 4,
    backgroundColor: '#d9e4f2',
    textAlign: 'center',
    // margin:'30px 250px',
    // padding: 50,

  },
});


class Home extends React.Component {
  static contextTypes = {
    router: PropTypes.object
  }

  handleclick = () => {
    this.props.history.push(`/Todos`)
  }
  render() {
    const {classes} = this.props

    return (
      <div>
      <Grid item xs={12}>
        <Paper className={classes.root} elevation={1}>
          <Typography variant="h2" component="h3">
            On Track
          </Typography>
          <br/>
          <Typography component="h2" variant="headline" gutterBottom>
            A simple todo app.
          </Typography>
          <br/>
          <Button variant="contained" color="primary" className={classes.button}
          onClick={this.handleclick}
          >
            Get Started
          </Button>
        </Paper>
      </Grid>
      </div>
    )
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Home);
