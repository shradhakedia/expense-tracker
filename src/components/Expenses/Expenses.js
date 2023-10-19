import React from "react";

import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";

function Expenses(props) {
  return (
    <Card className="expenses-list">
      <ExpenseItem expense={props.items[0]}></ExpenseItem>
      <ExpenseItem expense={props.items[1]}></ExpenseItem>
      <ExpenseItem expense={props.items[2]}></ExpenseItem>
    </Card>
  );
}

export default Expenses;
