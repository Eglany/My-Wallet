import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { requestLogin } from '../actions';
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
    }, this.validationLogin);
  };

  validationLogin = () => {
    const { password, email } = this.state;
    const MIN_CHAR = 6;
    const EMAILFORMAT = /\S+@\S+\.\S+/;
    const valitationButton = EMAILFORMAT.test(email) && password.length >= MIN_CHAR;

    this.setState({ disabled: !valitationButton });
  };

  onButtonClick = () => {
    const { dispatch, history } = this.props;
    const { email } = this.state;

    dispatch(requestLogin(email));
    history.push('/carteira');
  }

  render() {
    const { disabled } = this.state;
    // if (redirect) {
    //   return (<Redirect to="/carteira" />);
    // }
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

Login.propTypes = {
  history: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Login);
