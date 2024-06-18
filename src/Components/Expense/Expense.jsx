import React, { useState } from "react";
import Card from '../UI/Card';
import './Expense.css';
import ExpensesFilter from "./ExpensesFilter";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";

const Expenses = (props) => {

  const [filterDataArr, setFilterDatArr] = useState("all");

  const FilterArray = props.expensesList.filter((element)=>{
if (filterDataArr === "all") {
  return element;
} else {
  return element.date.getFullYear() === filterDataArr;
}
  })

  const handleFilter =(year)=>{
    setFilterDatArr(year);
  }


  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter DataCount={FilterArray} filterFunction={handleFilter} />
        <ExpenseChart expenses={FilterArray} />
        <ExpenseList expensesList={FilterArray} />
      </Card>

    </div>
  )
}

export default Expenses
