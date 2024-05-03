import react from "react";
import Table from "./Table";
import axios from 'axios';
import EditExpense from "./EditExpense";
import AddExpenseForm from "./AddExpense";

export default function App() {
  var nextId=0
  const [expense, setExpense] = react.useState({
    key : nextId,
    expenseCategory : " ",
    expenseName: "",
    amountSpent: " ",
    expenseDate:""
  });

  function handleChange(event) {
    //event.preventDefault();
    const { name, value } = event.target;
    console.log(name);
    console.log(value);
    setExpense((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  }

  function handleChangeDate(event) {
    //event.preventDefault();
  // const { name, value } = event.target;
    console.log(event);
   // console.log(value);
    setExpense((prevValue) => ({
      ...prevValue,
      expenseDate: event.toDate(),
    }));
  }
  async function handleClick() {
    console.log(expense)
    try{
      const response = await axios.post("http://localhost:8080/expense/add-expense", expense);
      console.log("Post created:", response.data);
    }catch (error){
      console.error("Error creating post:", error);
    }
    setExpense({
      key : nextId++,
      expenseCategory : " ",
      expenseName: "",
      amountSpent: " ",
      expenseDate:""
    });
  }
  function calculateTotal(expenseArray) {
    expenseArray.map((expense) => (t = t + Number(expense.amountSpent)));
    return t;
  }

  function EditExpense(id){
 
    console.log("Clicked Edit for " , id);
    <EditExpense />
  }

  return (
    <div className="container">
      <header>
        <h1>Tracker your Expenses</h1>
      </header>
      <AddExpenseForm handleChange={handleChange} handleChangeDate={handleChangeDate} expense={expense} add={handleClick}/>
      <Table edit={EditExpense}/>  
    </div>
  );
}
