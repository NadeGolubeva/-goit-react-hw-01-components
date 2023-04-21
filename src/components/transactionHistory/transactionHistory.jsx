import PropTypes from 'prop-types';
import { TransactionTable, TableHead, TableHeadRow, TableRow } from './transactionHistory.styled';
export const TransactionHistory = ({ transactions }) => {
    return (
        <TransactionTable class="transaction-history">
  <TableHead>
    <tr>
      <TableHeadRow>Type</TableHeadRow>
      <TableHeadRow>Amount</TableHeadRow>
      <TableHeadRow>Currency</TableHeadRow>
    </tr>
  </TableHead>

            <tbody>
    {transactions.map(({ type, amount, currency, id }) =>
        {
        return (
<tr key={ id}>
      <TableRow>{type}</TableRow>
      <TableRow>{amount}</TableRow>
      <TableRow>{currency}</TableRow>
    </tr> 
 )})}
  </tbody>
</TransactionTable>
    )
}

TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['invoice', 'payment', 'withdrawal']).isRequired,
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
    })
  ).isRequired,
    
}
//  "id": "44dca67a-8e5a-4798-bf8e-b15efd4e1abd",
//     "type": "invoice",
//     "amount": "828.62",
//     "currency": "UGX"