import React, { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const dummyExpenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  }
];

function App() {
  const [expenses, setExpenses] = useState(dummyExpenses);
  
  const addExpenseDataHandler = (expenseData) => {
    setExpenses(prevExpenses => [expenseData, ...prevExpenses]
    );
  };

  return (
    <div>
      <h2>Let's get started</h2>
      {/* <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem> */}
      {/* we can either pass the object as below or we can pass it properties as above. 
        And this would change the code for component too.*/}
      <NewExpense onAddExpense={addExpenseDataHandler}/>
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
