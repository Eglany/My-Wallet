import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Wallet.css';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <main className="wallet-page">
        <header className="wallet-header">
          <h2>Trybewallet</h2>
          <section data-testid="email-field">
            <p>E-mail: </p>
            {email}
          </section>
          <section data-testid="total-field">
            <p>Despesa Total: 0</p>
            <p data-testid="header-currency-field">BRL</p>
          </section>
        </header>
      </main>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

function mapStateToProps(state) {
  return {
    email: state.user.email,
  };
}

export default connect(mapStateToProps)(Wallet);
