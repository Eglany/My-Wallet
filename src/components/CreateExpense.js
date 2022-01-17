import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { requestExpense } from '../actions';
import getPrice from '../services/priceAPI';

class CreateExpense extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Lazer',
      exchangeRates: [],
    };
  }

  onInputChange = ({ target: { value, id } }) => {
    this.setState({
      [id]: value,
    });
  };

  onButtonClick = async () => {
    const { dispatch } = this.props;
    const { id, currency } = this.state;
    const prices = Object.values(await getPrice());
    const findExchange = prices.find(({ code }) => code === currency);
    this.setState({ exchangeRates: findExchange });
    dispatch(requestExpense(this.state));
    this.setState({ id: id + 1 });
    this.setState({
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Lazer',
    });
  }

  render() {
    const currencySelect = [
      'USD',
      'CAD',
      'EUR',
      'GBP',
      'ARS',
      'BTC',
      'LTC',
      'JPY',
      'CHF',
      'AUD',
      'CNY',
      'ILS',
      'ETH',
      'XRP',
    ];
    const { value, description } = this.state;
    const methodSelect = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const tagSelect = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    return (
      <form className="wallet-form">
        <label htmlFor="value">
          Valor:
          <input
            type="number"
            id="value"
            value={ value }
            data-testid="value-input"
            onChange={ this.onInputChange }
          />
        </label>
        <label htmlFor="description">
          Descrição:
          <input
            type="text"
            id="description"
            value={ description }
            data-testid="description-input"
            onChange={ this.onInputChange }
          />
        </label>
        <label htmlFor="currency">
          Moeda:
          <select
            id="currency"
            data-testid="currency-input"
            onChange={ this.onInputChange }
          >
            {currencySelect.map((coin) => (
              <option key={ coin } value={ coin }>{coin}</option>
            ))}
          </select>
        </label>
        <label htmlFor="method">
          Método de Pagamento:
          <select
            id="method"
            data-testid="method-input"
            onChange={ this.onInputChange }
          >
            {methodSelect.map((index) => (
              <option key={ index } value={ index }>{index}</option>
            ))}
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select id="tag" data-testid="tag-input" onChange={ this.onInputChange }>
            {tagSelect.map((index) => (
              <option key={ index } value={ index }>{index}</option>
            ))}
          </select>
        </label>
        <button type="button" onClick={ this.onButtonClick }>Adicionar despesa</button>
      </form>
    );
  }
}

CreateExpense.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(CreateExpense);
