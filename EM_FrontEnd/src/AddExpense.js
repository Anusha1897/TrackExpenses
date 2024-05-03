import react from "react";
import axios from 'axios';
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';

function AddExpenseForm(props){
    console.log(props)
   return <form>
      
    <select id="expenseCategory" name="expenseCategory"  onChange={event => props.handleChange(event)}>
      <option value="choose" defaultValue>Choose an Expense category</option>
      <option value="groceries">Groceries</option>
      <option value="shopping">Shopping</option>
      <option value="selfcare">SelfCare</option>
      <option value="travel">Travel</option>
      <option value="EMIs">EMIs</option>
    </select>
        <input
          onChange={event => props.handleChange(event)}
          type="text"
          name="expenseName"
          placeholder="Enter the Expense"
          value={props.expense.expenseName}
        />
        <input
          onChange={event => props.handleChange(event)}
          type="number"
          name="amountSpent"
          placeholder="Enter the Amount"
          value={props.expense.expenseAmount}
        />
        {/* <DatePickerComponent placeholder="Choose a date"/> */}
        <input type="date" id="expenseDate" name="expenseDate"  />
       <button onClick={props.add}>Add</button>
        </form>
}

export default AddExpenseForm