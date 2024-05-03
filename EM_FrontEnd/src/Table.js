import react from "react";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"
import axios from 'axios';
import EditExpense from "./EditExpense";

function Table(props) {
  const [posts, setPosts] = react.useState([]);
  react.useEffect(() => {
    axios.get('http://localhost:8080/expense/list')
      .then(response => {
        console.log(response)
        setPosts(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  
  return  (
     <table>
        <tr>
        <th>Expense Category</th>
          <th>Expense</th>
          <th>Amount</th>
          <th>Date</th>
        </tr>
        {posts.map((expense, index) => (
          <tr className="row">
            <td>{expense.expenseCategory}</td>
            <td>{expense.expenseName}</td>
            <td>{expense.amountSpent}</td>
            <td>{expense.expenseDate}</td>
            <td><button style={{"border":"none" , "background" : "none"}} onClick={() => props.edit(expense.id)}> <EditIcon style={{ "color": "#f5ba13"}}/> </button></td>
            <td><button style={{"border":"none" , "background" : "none"}}> <DeleteIcon style={{ "color": "#f5ba13"}}/> </button></td>
          </tr>
        ))}
      </table> 
  )
}
export default Table;
