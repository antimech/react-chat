import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';

const drawerWidth = 320;

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  appFrame: {
    height: 430,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
  },
  drawerHeader: {
    ...theme.mixins.toolbar,
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3,
  },
  'appBar-left': {
    marginLeft: drawerWidth,
  },
  'appBar-right': {
    marginRight: drawerWidth,
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
});

class PermanentDrawer extends React.Component {
  render() {
    const { classes } = this.props;

    const drawer = (
      <Drawer
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <TextField
            fullWidth
            placeholder="Search chats..."
            margin="normal"
          />
        </div>
        <Divider />
        <h3>There is no chats yet...</h3>
      </Drawer>
    );

    return (
      <div className={classes.appFrame}>
        <AppBar
          position="absolute"
          className={classes.appBar}
        >
          <Toolbar>
            <Typography variant="title" color="inherit" noWrap>
              DogeCodes React Chat
            </Typography>
          </Toolbar>
        </AppBar>
        {drawer}
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Typography>{'You think water moves fast? You should see ice.'}</Typography>
        </main>
      </div>
    );
  }
}

export default withStyles(styles)(PermanentDrawer);
