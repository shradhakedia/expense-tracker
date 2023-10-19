import "./ExpenseItem.css";

function ExpenseItem(props) {

  return (
    <div className="expense-item">
        {/* props.date, props.title, etc. If we are passing all properties separately as props.
        Or else as object then use the syntax like below.*/}
      <div>{props.expense.date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{props.expense.title}</h2>
        <div className="expense-item__price">${props.expense.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
