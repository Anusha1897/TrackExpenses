import react from "react";
import axios from 'axios';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

function AddExpenseForm(props){
    console.log(props)

    

   return <form>
      
    <select id="expenseCategory" name="expenseCategory"  onChange={event => props.handleChange(event)}>
      <option value="choose" defaultValue>Choose an Expense category</option>
      <option value="Groceries">Groceries</option>
      <option value="Shopping">Shopping</option>
      <option value="Selfcare">SelfCare</option>
      <option value="Travel">Travel</option>
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
          value={props.expense.amountSpent}
        />
        {/* <DatePickerComponent placeholder="Choose a date"/> */}
      
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker onChange={event => props.handleChangeDate(event)} label="Pick a date" id="expenseDate" name="expenseDate"  />
        </LocalizationProvider>
        
       <button onClick={props.add}>Add</button>
        </form>
}

export default AddExpenseForm