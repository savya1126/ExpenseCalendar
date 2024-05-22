//import ExpenseItem from "./components/ExpenseItem";

import React,{ useState } from "react";
import "./App.css"
import Expenses from "./components/Expenses/Expenses";
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
  
  const [expenses, setExpenses] = useState(DummyExpenses);

  function addExpenseHandler(expense) {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
