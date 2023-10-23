import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState('2020');

  const yearExpenseHandler = (year) => {
    setSelectedYear(year);

    console.log(year);
  };

  return (
    <Card className="expenses-list">
      <ExpensesFilter onYearSelected={yearExpenseHandler} selected={selectedYear}/>
      <ExpenseItem expense={props.items[0]}></ExpenseItem>
      <ExpenseItem expense={props.items[1]}></ExpenseItem>
      <ExpenseItem expense={props.items[2]}></ExpenseItem>
    </Card>
  );
}

export default Expenses;
