import React, { useState } from "react";

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {

  const [title, setTitle] = useState(props.expense.title);

  const clickHandler = () => {
    setTitle("Updated!");
    console.log(props.title);
  }
  
  return (
    <Card className="expense-item">
      {/* props.date, props.title, etc. If we are passing all properties separately as props.
        Or else as object then use the syntax like below.*/}
      <ExpenseDate date={props.expense.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.expense.amount}</div>
        <button onClick={clickHandler}>Update Item</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
