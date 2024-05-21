import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props)
{

    function onSaveExpenseDataHandler(enteredExpenseData)
    {
      const expensedata = {
        ...enteredExpenseData,
        id: Math.random().toString()
      }
      props.onaddExpense(expensedata);
    }
  return(
    <div className="new-expense">
        <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler}/>
    </div>
  )
}
export default NewExpense;