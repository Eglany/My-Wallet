import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CreateExpense from '../components/CreateExpense';
import './Wallet.css';
import ExpenseTable from '../components/ExpenseTable';
import { requestPriceThunk } from '../actions';

class Wallet extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(requestPriceThunk());
  }

  calculateTotalPrice = () => {
    const { expenses } = this.props;
    if (expenses.length !== 0) {
      return expenses.reduce((acc, {
        value,
        currency,
        exchangeRates }) => acc + (Number(value) * Number(exchangeRates[currency].ask)),
      0);
    }
    return 0;
  }

  render() {
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
            <div>
              Despesa Total:
              {(this.calculateTotalPrice()).toFixed(2)}
            </div>
            <div data-testid="header-currency-field">BRL</div>
          </section>
        </header>
        <CreateExpense />
        <ExpenseTable />
      </main>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string,
}.isRequired;

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Wallet);
