import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  registerButton: {
    marginTop: theme.spacing.unit * 2,
  },
});

class RegisterForm extends React.Component {
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
        <TextField
          required
          fullWidth
          label="Password repeat"
          placeholder="Repeat your password..."
          type="password"
          margin="normal"
        />
        <Button
          fullWidth
          variant="raised"
          color="primary"
          className={classes.registerButton}
        >
          Register
        </Button>
      </form>
    );
  }
}

export default withStyles(styles)(RegisterForm);
