import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  loginButton: {
    marginTop: theme.spacing.unit * 2,
  },
});

class LoginForm extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <form>
        <TextField
          required
          fullWidth
          label="Username"
          placeholder="Type your username..."
          type="text"
          margin="normal"
        />
        <TextField
          required
          fullWidth
          label="Password"
          placeholder="Type your password..."
          type="password"
          margin="normal"
        />
        <Button
          fullWidth
          variant="raised"
          color="primary"
          className={classes.loginButton}
        >
          Login
        </Button>
      </form>
    );
  }
}

export default withStyles(styles)(LoginForm);
