import {Component} from 'react'

import {v4} from 'uuid'

import TransactionItem from '../TransactionItem'
import MoneyDetails from '../MoneyDetails'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here

class MoneyManager extends Component {
  state = {
    transactionList: [],
    titleInput: '',
    amountInput: '',
    optionId: transactionTypeOptions[0].optionId,
  }

  onAddTransaction = event => {
    event.preventDefault()
    const {titleInput, amountInput, optionId} = this.state
    const typeOption = transactionTypeOptions.find(
      eachTransaction => eachTransaction.optionId === optionId,
    )
    const {displayText} = typeOption
    const newTransaction = {
      id: v4(),
      title: titleInput,
      amount: amountInput,
      type: displayText,
    }

    this.setState(prevState => ({
      transactionList: [...prevState.transactionList, newTransaction],
      titleInput: '',
      amountInput: '',
      optionId: transactionTypeOptions[0].optionId,
    }))
  }

  getExpenses = () => {
    const {transactionList} = this.state

    let expensesAmount = 0

    transactionList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[1].displayText) {
        expensesAmount += parseInt(eachTransaction.amount)
      }
    })
    return expensesAmount
  }

  getIncome = () => {
    const {transactionList} = this.state

    let incomeAmount = 0

    transactionList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += parseInt(eachTransaction.amount)
      }
    })
    return incomeAmount
  }

  getBalance = () => {
    const {transactionList} = this.state
    let balanceAmount = 0
    let incomeAmount = 0
    let expensesAmount = 0

    transactionList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += parseInt(eachTransaction.amount)
      } else {
        expensesAmount += parseInt(eachTransaction.amount)
      }
    })

    balanceAmount = incomeAmount - expensesAmount

    return balanceAmount
  }

  deleteTransaction = id => {
    const {transactionList} = this.state
    const updateTransactionList = transactionList.filter(
      eachTransaction => id !== eachTransaction.id,
    )

    this.setState({
      transactionList: updateTransactionList,
    })
  }

  changeTitleInput = event => {
    this.setState({titleInput: event.target.value})
  }

  changeAmountInput = event => {
    this.setState({amountInput: event.target.value})
  }

  changeOptionId = event => {
    this.setState({optionId: event.target.value})
  }

  render() {
    const {transactionList, titleInput, amountInput} = this.state

    const balanceAmount = this.getBalance()
    const incomeAmount = this.getIncome()
    const expensesAmount = this.getExpenses()
    return (
      <div className="main-container">
        <div className="inner-container">
          <h1 className="head">Hi Richard</h1>
          <p className="para">
            Welcome back to your{' '}
            <span className="span-para"> Money Manager</span>
          </p>
        </div>

        <MoneyDetails
          balanceAmount={balanceAmount}
          incomeAmount={incomeAmount}
          expensesAmount={expensesAmount}
        />
        <div className="form-bg-con">
          <form className="form-con" onSubmit={this.onAddTransaction}>
            <h1 className="transaction-head">Add Transaction</h1>
            <label className="label-input" htmlFor="title">
              TITLE
            </label>
            <input
              className="label-input-el"
              type="text"
              value={titleInput}
              onChange={this.changeTitleInput}
              id="title"
              placeholder="TITLE"
            />
            <label className="label-input" htmlFor="amount">
              AMOUNT
            </label>
            <input
              className="label-input-el"
              type="text"
              value={amountInput}
              onChange={this.changeAmountInput}
              id="amount"
              placeholder="AMOUNT"
            />
            <label className="label-input" htmlFor="select">
              TYPE
            </label>
            <select
              className="select-class"
              onChange={this.changeOptionId}
              id="select"
            >
              {transactionTypeOptions.map(eachOption => (
                <option key={eachOption.optionId} value={eachOption.optionId}>
                  {eachOption.displayText}
                </option>
              ))}
            </select>
            <button className="add-btn" type="submit">
              Add
            </button>
          </form>
          <div className="history-con">
            <h1 className="history-head">History</h1>
            <div className="history-list-con">
              <ul className="ul-list">
                <li className="li-list">
                  <p className="title">Title</p>
                  <p className="amount">Amount</p>
                  <p className="type">Type</p>
                </li>
                {transactionList.map(eachTransaction => (
                  <TransactionItem
                    key={eachTransaction.id}
                    transactionDetails={eachTransaction}
                    deleteTransaction={this.deleteTransaction}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
