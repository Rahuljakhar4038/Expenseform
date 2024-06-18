import React from 'react'
import "./ExpenseList.css"
import ExpenseItem from './ExpenseItem'

const ExpenseList = (props) => {
  // console.log(props);

  return (

    <ul className='expenses-list'>
      {
        props.expensesList.map((element, index) => (
         <ExpenseItem item={element}></ExpenseItem>
        ))
      }

    </ul>
  )
}

export default ExpenseList
