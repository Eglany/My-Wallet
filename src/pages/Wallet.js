import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CreateExpense from '../components/CreateExpense';
import './Wallet.css';

class Wallet extends React.Component {
  render() {
    console.log(this.props);
    const { email } = this.props;
    return (
      <main className="wallet-page">
        <header className="wallet-header">
          <h2>Trybewallet</h2>
          <section data-testid="email-field">
            E-mail:
            {email}
          </section>
          <section data-testid="total-field">
            <div>Despesa Total: 0</div>
            <div data-testid="header-currency-field">BRL</div>
          </section>
        </header>
        <CreateExpense />
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
    expenses: state.wallet.expenses,
  };
}

export default connect(mapStateToProps)(Wallet);
