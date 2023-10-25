import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnterdAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // Approach 2, 3:
  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });

  const titleChangeHandler = (event) => {
    // Approach 1:
    setEnteredTitle(event.target.value);

    // Approach 2:
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value
    // });

    // Approach 3:
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    // Approach 1:
    setEnterdAmount(event.target.value);

    // Approach 2:
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value
    // });

    // Approach 3:
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredAmount: event.target.value };
    // });
  };

  const dateChangeHandler = (event) => {
    // Approach 1:
    setEnteredDate(event.target.value);

    // Approach 2:
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });

    // Approach 3:
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredDate: event.target.value };
    // });
  };

  const submitHandler = (event) => {
    // prevent page reload on submission which is default behaviour of the browser
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      // new Date changes the string date to Date object.
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);

    props.showAddNewExpenseButton();

    // set these values to empty again after getting the value and processing with it.
    // Done with the help of states: two way binding by adding value attribute to input tag.
    setEnteredTitle("");
    setEnterdAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.showAddNewExpenseButton}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
