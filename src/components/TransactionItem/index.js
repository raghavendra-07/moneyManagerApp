// Write your code here
import './index.css'

const TransactionItem = props => {
  const {transactionDetails, deleteTransaction} = props
  const {title, id, amount, type} = transactionDetails

  const onDeleteTransaction = () => {
    deleteTransaction(id)
  }
  return (
    <li className="transitem-con">
      <p className="text">{title}</p>
      <p className="text">Rs {amount}</p>
      <p className="text">{type}</p>
      <div className="delete-container">
        <button
          className="delete-btn"
          data-testid="delete"
          onClick={onDeleteTransaction}
          type="button"
        >
          <img
            className="delete-img"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png "
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default TransactionItem
