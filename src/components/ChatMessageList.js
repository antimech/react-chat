import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import classnames from "classnames";
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import titleInitials from "../utils/title-initials";

const styles = theme => ({
  messagesWrapper: {
    overflowY: 'scroll',
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
});

class ChatMessageList extends React.Component {
  constructor(props) {
    super(props);
    this.messagesWrapper = React.createRef();
  }

  componentDidMount() {
    this.scrollDownHistory();
  }

  componentDidUpdate() {
    this.scrollDownHistory();
  }

  scrollDownHistory() {
    const messagesWrapper = this.messagesWrapper.current;

    if (messagesWrapper) {
      messagesWrapper.scrollTop = messagesWrapper.scrollHeight;
    }
  }

  render() {
    const { classes, messages } = this.props;

    return (
      <div className={classes.messagesWrapper} ref={this.messagesWrapper}>
        {messages && messages.map((message, index) => {
          const isMessageFromMe = message.sender === 'me';

          const userAvatar = (
            <Avatar>
              {titleInitials(message.sender)}
            </Avatar>
          );

          return (
            <div key={index} className={classnames(
              classes.messageWrapper,
              isMessageFromMe && classes.messageWrapperFromMe
            )}>
              {!isMessageFromMe && userAvatar}
              <Paper className={classnames(
                classes.message,
                isMessageFromMe && classes.messageFromMe
              )}>
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
    );
  }
}

export default withStyles(styles)(ChatMessageList);
