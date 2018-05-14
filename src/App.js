import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import ExploreIcon from '@material-ui/icons/Explore';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Paper from '@material-ui/core/Paper';

import { chats, messages } from './mock-data';

const drawerWidth = 320;

const styles = theme => ({
  root: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
  },
  appBar: {
    position: 'fixed',
    width: `calc(100% - ${drawerWidth}px)`,
  },
  drawerHeader: {
    ...theme.mixins.toolbar,
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3,
  },
  chatsList: {
    overflowY: 'scroll',
  },
  newChatButton: {
    position: 'absolute',
    left: 'auto',
    right: theme.spacing.unit * 3,
    bottom: theme.spacing.unit * 3 + 48,
  },
  chatLayout: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '64px',
    height: '100%',
    overflow: 'hidden',
  },
  messagesWrapper: {
    overflowX: 'scroll',
    width: '100%',
    height: '100%',
    paddingTop: theme.spacing.unit * 3,
    paddingBottom: '120px',
  },
  messageWrapper: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 3}px`,
  },
  messageWrapperFromMe: {
    justifyContent: 'flex-end',
  },
  message: {
    minWidth: '10%',
    maxWidth: '70%',
    padding: theme.spacing.unit,
    marginLeft: theme.spacing.unit * 2,
  },
  messageFromMe: {
    marginRight: theme.spacing.unit * 2,
    backgroundColor: '#e6dcff',
  },
  'appBar-left': {
    marginLeft: drawerWidth,
  },
  'appBar-right': {
    marginRight: drawerWidth,
  },
  drawerPaper: {
    position: 'relative',
    width: 320,
    height: '100%'
  },
  toolbar: theme.mixins.toolbar,
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
        <List className={classes.chatsList}>
          {chats.map((chat, index) => (
            <ListItem key={index} button>
              <ListItemIcon>
                <Avatar>{chat.title && chat.title[0]}</Avatar>
              </ListItemIcon>
              <ListItemText primary={chat.title} />
            </ListItem>
          ))}
        </List>
        <Button variant="fab" color="primary" aria-label="add" className={classes.newChatButton}>
          <AddIcon />
        </Button>
        <BottomNavigation showLabels>
          <BottomNavigationAction label="My Chats" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Explore" icon={<ExploreIcon />} />
        </BottomNavigation>
      </Drawer>
    );

    return (
      <div className={classes.root}>
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
        <main className={classes.chatLayout}>
          <div className={classes.messagesWrapper}>
            {messages && messages.map((message, index) => {
              const isMessageFromMe = message.sender === 'me';

              const userAvatar = (
                <Avatar>
                  {message.sender[0]}
                </Avatar>
              );

              return (
                <div key={index} className={[
                  classes.messageWrapper,
                  isMessageFromMe ? classes.messageWrapperFromMe : ''
                ].join(' ')}>
                  {!isMessageFromMe && userAvatar}
                  <Paper className={[
                    classes.message,
                    isMessageFromMe ? classes.messageFromMe : ''
                  ].join(' ')}>
                    <Typography variant="caption">
                      {message.sender}
                    </Typography>
                    <Typography variant="body1">
                      {message.content}
                    </Typography>
                  </Paper>
                  {isMessageFromMe && userAvatar}
                </div>
              );
            })}
          </div>
        </main>
      </div>
    );
  }
}

export default withStyles(styles)(PermanentDrawer);
