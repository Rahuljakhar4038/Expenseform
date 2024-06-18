import { useState } from 'react';
import './App.css';
import Expenses from './Components/Expense/Expense';
import Expense from './Components/NewExpense/Expense';

const DATA_EXPENSE = [
  {
    title: "toilet Paper",
    id: "100",
    date: new Date(2021, 6, 12),
    amount: 230
  },
  {
    title: "bike ",
    id: "200",
    date: new Date(2022, 7, 18),
    amount: 5000
  },
  {
    title: "car driver salary",
    id: "300",
    date: new Date(2023, 8, 25),
    amount: 4500
  },
  {
    title: "TV",
    id: "400",
    date: new Date(2024, 4, 28),
    amount: 2000
  }
]

function App() {

  const [dataArray, setDataArray] = useState(DATA_EXPENSE);
  return (
    <div className="App">

      <Expense addExpense={setDataArray} oldArray={dataArray}></Expense>
      <Expenses expensesList={dataArray}></Expenses>
    </div>
  );
}

export default App;
