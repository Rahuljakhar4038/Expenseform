import React, { useState } from 'react'
import ExpenseForm from './ExpenseForm'
import './Expense.css'

const Expense = (props) => {
  const [showOrHide, setShowOrHide] = useState(false);

  const showForm = () => {
    if (showOrHide) {
      setShowOrHide(false)
    } else {
      setShowOrHide(true)
    }
  }

  return (
    <div className="new-expense">
      {showOrHide ? <ExpenseForm addExpense={props.addExpense} dataArray={props.oldArray} hideShoe={setShowOrHide} /> : <button onClick={showForm}>Add New Expenses</button>}
    </div>
  )
}

export default Expense
