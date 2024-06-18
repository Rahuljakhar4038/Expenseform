import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  // const OldArr = props.dataArray;
  const NewArr = props.addExpense;

  const [title, SetTitle] = useState('');
  const [amount, SetAmount] = useState('');
  const [date, SetDate] = useState('');

  // const viewTitle = title;
  // const viewAmount = amount;
  // const viewDate = date;

  // console.log(viewTitle);
  // console.log(viewAmount);
  // console.log(viewDate);


  const handleSubmit = (event) => {
    event.preventDefault();

   

    NewArr(OldArr => [...OldArr, {
      id: "500",
      title: title,
      date: new Date(date),
      amount: Number(amount)
    }
    ]);

    SetTitle('');
    SetAmount('');
    SetDate('');

  }
  
  

  const hideForm = () => {
    props.hideShoe(false)
  }


  return (
    <form onSubmit={handleSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            required
            type="text"
            placeholder="Title"
            onChange={(event) => SetTitle(event.target.value)}
            value={title}
          />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            required
            placeholder="Amount"
            type="number"
            min="0.01"
            step="0.01"
            onChange={(event) => SetAmount(event.target.value)}
            value={amount}

          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            required
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            onChange={(event) => SetDate(event.target.value)}
            value={date}
          />
        </div>
        <div className="new-expense__actions">
          <button type="reset" onClick={hideForm}>
            Cancel
          </button>
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  )
}

export default ExpenseForm
