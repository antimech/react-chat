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
  state = {
    username: {
      value: '',
      isValid: true,
    },
    password: {
      value: '',
      isValid: true,
    },
    passwordConfirmation: {
      value: '',
      isValid: true,
    },
  };

  validate = () => {
    const { password, passwordConfirmation } = this.state;
    const isValid = password.value === passwordConfirmation.value;

    this.setState({
      password: { ...password, isValid },
      passwordConfirmation: { ...passwordConfirmation, isValid },
    });

    return isValid;
  };

  handleInputChange = (event) => {
    event.persist();
    const { name, value } = event.target;

    this.setState((prevState) => ({
      [name]: {
        ...prevState[name],
        value
      }
    }));
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (!this.validate()) {
      return;
    }

    const { username, password } = this.state;

    console.log('Register:', username.value, password.value);

    // TODO: Fetch
  };

  render() {
    const { classes } = this.props;
    const { username, password, passwordConfirmation } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <TextField
          required
          fullWidth
          label="Username"
          placeholder="Type your username..."
          type="text"
          name="username"
          margin="normal"
          autoComplete="username"
          value={username.value}
          onChange={this.handleInputChange}
          error={!username.isValid}
        />
        <TextField
          required
          fullWidth
          label="Password"
          placeholder="Type your password..."
          type="password"
          name="password"
          margin="normal"
          autoComplete="password"
          value={password.value}
          onChange={this.handleInputChange}
          error={!password.isValid}
        />
        <TextField
          required
          fullWidth
          label="Password confirmation"
          placeholder="Confirm your password..."
          type="password"
          name="passwordConfirmation"
          margin="normal"
          autoComplete="password"
          value={passwordConfirmation.value}
          onChange={this.handleInputChange}
          error={!passwordConfirmation.isValid}
        />
        <Button
          fullWidth
          variant="raised"
          type="submit"
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
