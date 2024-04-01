import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';
function TransactionHistory({ items }) {
  return (
    <table className={styles['transaction-history']}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(items => (
          <tr className={styles['table-row']} key={items.id}>
            <td className={styles['data']}>{items.type}</td>
            <td className={styles['data']}>{items.amount}</td>
            <td className={styles['data']}>{items.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default TransactionHistory;
