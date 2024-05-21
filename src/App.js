//import ExpenseItem from "./components/ExpenseItem";

import { useState } from "react";
import Expenses from "./components/Expense/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const DummyExpenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: "200",
    date: new Date(2023, 2, 20),
  },

  { id: "e2", title: "Groceries", amount: "500", date: new Date(2023, 3, 20) },

  { id: "e3", title: "Room Rent", amount: "1000", date: new Date(2023, 3, 27) },

  { id: "e4", title: "New Desk", amount: "2000", date: new Date(2023, 2, 20) },
];

function App() {
  
  const [expenses, setExpenses] = useState[DummyExpenses];

  function addExpenseHandler(expense) {
    setExpenses((prevExpenses) => {
      return [expenses, ...prevExpenses];
    });
  }

  return (
    <div>
      <h2> Let's Get started</h2>
      <NewExpense onaddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
