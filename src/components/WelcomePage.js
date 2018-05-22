import React from 'react';
import { Redirect } from 'react-router';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import SwipeableViews from 'react-swipeable-views';

const styles = theme => ({
  appBar: {
    position: 'fixed',
  },
  paper: {
    marginTop: 64 + theme.spacing.unit * 3,
    width: 500,
  },
  tabContent: {
    padding: theme.spacing.unit * 3,
  },
});

class WelcomePage extends React.Component {
  state = {
    activeTab: 0,
  };

  handleTabChange = (event, value) => {
    this.setState({ activeTab: value });
  };

  render() {
    const { classes, signup, login, isAuthenticated } = this.props;
    const { activeTab } = this.state;

    if (isAuthenticated) {
      return (
        <Redirect to="/chat" />
      );
    }

    return (
      <React.Fragment>
        <AppBar color="primary" className={classes.appBar}>
          <Toolbar>
            <Typography variant="title" color="inherit">
              React Chat
            </Typography>
          </Toolbar>
        </AppBar>
        <Grid container justify="center">
          <Grid item>
            <Paper className={classes.paper}>
              <AppBar position="static" color="default">
                <Tabs
                  value={activeTab}
                  onChange={this.handleTabChange}
                  fullWidth
                >
                  <Tab label="Login" />
                  <Tab label="Register" />
                </Tabs>
              </AppBar>
              <SwipeableViews
                axis="x-reverse"
                index={activeTab}
                className={classes.tabContent}
              >
                {activeTab === 0 && <LoginForm onSubmit={login} />}
                {activeTab === 1 && <RegisterForm onSubmit={signup} />}
              </SwipeableViews>
            </Paper>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}


export default withStyles(styles)(WelcomePage);
