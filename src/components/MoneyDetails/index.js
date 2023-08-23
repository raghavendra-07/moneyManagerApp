// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {balanceAmount, incomeAmount, expensesAmount} = props
  return (
    <div className="money-details-con">
      <div className="balance-con">
        <img
          className="balance-img"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png "
          alt="balance"
        />
        <div>
          <p>Your Balance</p>
          <p data-testid="balanceAmount">RS {balanceAmount}</p>
        </div>
      </div>
      <div className="income-con">
        <img
          className="income-img"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png "
          alt="income"
        />
        <div>
          <p>Your Income</p>
          <p data-testid="incomeAmount">RS {incomeAmount}</p>
        </div>
      </div>
      <div className="expenses-con">
        <img
          className="expenses-img"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
        />
        <div>
          <p>Your Expenses</p>
          <p data-testid="expensesAmount">RS {expensesAmount}</p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
