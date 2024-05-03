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

  const rows = [
    {name : 'Dan' , age : 20},
    {name : 'Tan' , age : 10},
  ]

  const cols = [
    {header : 'Expense Category' , field : 'expenseCategory'},
    {header : 'Expense Name' , field : 'expenseName'},
    {header : 'Expense Amount' , field : 'amountSpent'},
    {header : 'Expense Date' , field : 'expenseDate'}
  ]

  const defaultColDef={
    sortable:true,filter:true
  }

  const onGridReady=(params)=>{
    console.log("Grid ready")
    fetch("http://localhost:8080/expense/list").then(resp => resp.json())
    .then(resp => {console.log(resp)
      params.api.applyTransaction({add : resp})})
  }
  
  return  (
    <div className="ag-theme-quartz" // applying the grid theme
    style={{ height: 500  , "textAlign":"center"}}
     >
     <AgGridReact 
    //  rowData={rows} 
     columnDefs={cols} 
     defaultColDef={defaultColDef}
     onGridReady={onGridReady}/>
     </div>

    //  <table>
    //     <tr>
    //     <th>Expense Category</th>
    //       <th>Expense</th>
    //       <th>Amount</th>
    //       <th>Date</th>
    //     </tr>
    //     {posts.map((expense, index) => (
    //       <tr className="row">
    //         <td>{expense.expenseCategory}</td>
    //         <td>{expense.expenseName}</td>
    //         <td>{expense.amountSpent}</td>
    //         <td>{expense.expenseDate}</td>
    //         <td><button style={{"border":"none" , "background" : "none"}} onClick={() => props.edit(expense.id)}> <EditIcon style={{ "color": "#f5ba13"}}/> </button></td>
    //         <td><button style={{"border":"none" , "background" : "none"}}> <DeleteIcon style={{ "color": "#f5ba13"}}/> </button></td>
    //       </tr>
    //     ))}
    //   </table> 
  )
}
export default Table;
