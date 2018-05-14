import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Sidebar from './components/Sidebar';
import ChatHeader from './components/ChatHeader';
import Chat from './components/Chat';

import { chats, messages } from './mock-data';

const styles = theme => ({
  root: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
  },
  'appBar-left': {
    marginLeft: 320,
  },
  'appBar-right': {
    marginRight: 320,
  },
  toolbar: theme.mixins.toolbar,
});

const App = ({ classes }) => (
  <div className={classes.root}>
    <ChatHeader />
    <Sidebar chats={chats} />
    <Chat messages={messages} />
  </div>
);

export default withStyles(styles)(App);
