import React from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

const TarnsactionHistory = ({ items }) => (
  <table className={styles.transactionHistory}>
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>

    <tbody>
      {items.map((item, indx) => {
        const rowClass = [];
        if (indx % 2 !== 0) rowClass.push(styles.trGray);
        return (
          <tr key={item.id} className={rowClass}>
            <td>{item.type[0].toUpperCase() + item.type.slice(1)}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

TarnsactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default TarnsactionHistory;
