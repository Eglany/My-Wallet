import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { requestExpense } from '../actions';
import getPrice from '../services/priceAPI';

class CreateExpense extends Component {
  constructor() {
    super();
    this.state = {
      value: 0,
      description: '',
      currency: 'BRL',
      method: 'Dinheiro',
      tag: 'Lazer',
      exchangeRates: [],
    };
  }

  // async componentDidMount() {
  //   const prices = Object.values(await getPrice());
  //   this.setState({ exchangeRates: prices });
  // }

  onInputChange = ({ target: { value, type, id } }) => {
    console.log(value, type, id);
    this.setState({
      [id]: value,
    });
  };

  onButtonClick = async () => {
    const { dispatch } = this.props;
    const prices = Object.values(await getPrice());
    this.setState({ exchangeRates: prices });
    dispatch(requestExpense(this.state));
  }

  render() {
    const currency = ['BRL', 'USD', 'EUR'];
    const method = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const tag = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    return (
      <form className="wallet-form">
        <label htmlFor="value">
          Valor:
          <input
            type="number"
            id="value"
            data-testid="value-input"
            onChange={ this.onInputChange }
          />
        </label>
        <label htmlFor="description">
          Descrição:
          <input
            type="text"
            id="description"
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
            {currency.map((coin) => (
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
            {method.map((index) => (
              <option key={ index } value={ index }>{index}</option>
            ))}
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select id="tag" data-testid="tag-input" onChange={ this.onInputChange }>
            {tag.map((index) => (
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

// function mapStateToProps(dispatch) {
//   return {
//     currencies: () => dispatch(requestPriceThunk()),
//   };
// }

export default connect()(CreateExpense);
