import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class ExpenseTable extends Component {
  render() {
    const { expenses } = this.props;
    return (
      <table>
        <tr>
          <th>Descrição</th>
          <th>Tag</th>
          <th>Método de pagamento</th>
          <th>Valor</th>
          <th>Moeda</th>
          <th>Câmbio utilizado</th>
          <th>Valor convertido</th>
          <th>Moeda de conversão</th>
        </tr>
        {expenses.length !== 0
          ? expenses.map(({
            value,
            currency,
            description,
            exchangeRates: { code, name, ask },
            method,
            tag,
          }) => (
            <tr key={ code }>
              <td>{description}</td>
              <td>{tag}</td>
              <td>{method}</td>
              <td>{`${currency}$ ${value}`}</td>
              <td>{name.split('/')[0]}</td>
              <td>{ask}</td>
              <td>{`BRL$ ${ask * value}`}</td>
              <td>{name.split('/')[1]}</td>
            </tr>
          ))
          : null}
      </table>
    );
  }
}

ExpenseTable.propTypes = {
  expenses: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(ExpenseTable);
