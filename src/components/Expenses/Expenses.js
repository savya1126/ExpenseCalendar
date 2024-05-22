import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import "./Expenses.css";
import Card from "../UI/Card";
import { useState } from "react";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  function filterChangeHandler(selectedyear) {
    setFilteredYear(selectedyear);
  }
  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {props.items.map((expense) => (
        <ExpenseItem
          key = {expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
      
    </Card>
  );
}

export default Expenses;
