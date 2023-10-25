import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);
  const [showButton, setShowButton] = useState(true);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = { ...enteredExpenseData, id: Math.random().toString() };

    props.onAddExpense(expenseData);
  };

  const showButtonHandler = () => {
    setShowForm(false);
    setShowButton(true);
  }

  const showExpenseFormHandler = () => {
    setShowForm(true);
    setShowButton(false);
  };

  let expenseForm;
  if (showForm) {
    expenseForm = <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} showAddNewExpenseButton={showButtonHandler}/>;
  }

  return (
    <div className="new-expense">
      {showButton && <button onClick={showExpenseFormHandler}>Add New Expense</button>}
      {expenseForm}
    </div>
  );
};

export default NewExpense;
