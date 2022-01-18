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
      value: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Lazer',
      description: '',
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
    const { id } = this.state;
    const prices = await getPrice();
    this.setState({ exchangeRates: prices });
    dispatch(requestExpense(this.state));
    this.setState({ id: id + 1 });
    this.setState({
      value: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Lazer',
      description: '',
    });
  }

  render() {
    const { currencies } = this.props;
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
            {currencies.map((coin) => (
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
  currencies: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

CreateExpense.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(CreateExpense);
