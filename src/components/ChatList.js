import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ChatListItem from './ChatListItem';

const styles = theme => ({
  chatsList: {
    overflowY: 'scroll',
  },
});

const ChatList = ({ classes, chats }) => (
  <List className={classes.chatsList}>
    {chats.map((chat, index) => (
      <ChatListItem key={index} {...chat} />
    ))}
  </List>
);

export default withStyles(styles)(ChatList);
