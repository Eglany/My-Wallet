import React from 'react';
import './Login.css';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      disabled: true,
    };
  }

  onInputChange = ({ target: { value, type } }) => {
    this.setState({
      [type]: value,
    }, this.onButtonClick);
  };

  onButtonClick = () => {
    const { password, email } = this.state;
    const MIN_CHAR = 6;
    const EMAILFORMAT = /\S+@\S+\.\S+/;
    const valitationButton = EMAILFORMAT.test(email) && password.length > MIN_CHAR;

    this.setState({ disabled: !valitationButton });
  };

  render() {
    const { disabled } = this.state;
    return (
      <main>
        <form>
          <fieldset>
            <input
              type="email"
              className="email"
              placeholder="alguem@alguem.com"
              onChange={ this.onInputChange }
              data-testid="email-input"
            />
            <input
              type="password"
              className="password"
              placeholder="Password"
              onChange={ this.onInputChange }
              data-testid="password-input"
            />
            <button
              type="button"
              disabled={ disabled }
              onClick={ this.onButtonClick }
            >
              Entrar

            </button>
          </fieldset>
        </form>
      </main>
    );
  }
}

export default Login;
