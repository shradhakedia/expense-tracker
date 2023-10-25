import React from "react";

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
  return (
    <li>
      <Card className="expense-item">
        {/* props.date, props.title, etc. If we are passing all properties separately as props.
        Or else as object then use the syntax like below.*/}
        <ExpenseDate date={props.expense.date} />
        <div className="expense-item__description">
          <h2>{props.expense.title}</h2>
          <div className="expense-item__price">${props.expense.amount}</div>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
