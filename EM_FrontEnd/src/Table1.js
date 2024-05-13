import react from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css";
import axios from "axios";
import EditExpense from "./EditExpense";
import { Button } from "@mui/material";

function Table(props) {
  const [gridApi, setGridApi] = react.useState(null);
  const [table, setTable] = react.useState(null)
  const cols = [
    {
      headerName: "Expense Category",
      field: "expenseCategory",
      editable: (params) => params.node.rowIndex === editRow,
    },
    { headerName: "Expense Name", field: "expenseName" },
    { headerName: "Expense Amount", field: "amountSpent" },
    { headerName: "Expense Date", field: "expenseDate" }
    // {
    //   headerName: "Actions",
    //   field: "id",
    //   cellRenderer: (params) => (
    //     <div>
    //       <button
    //         style={{ border: "none", background: "none" }}
    //         onClick={() => props.edit(params.data)}
    //       >
    //         <EditIcon style={{ color: "#f5ba13" }} />
    //       </button>
    //       <button
    //         style={{ border: "none", background: "none" }}
    //         onClick={props.onDeleteClick}
    //       >
    //         <DeleteIcon style={{ color: "#f5ba13" }} />
    //       </button>
    //     </div>
    //   ),
    // },
  ];

  const defaultColDef = {
    sortable: true,
    filter: true,
    floatingFilter: true,
    flex: 1,
  };

  react.useEffect(()=>{
    getData
  },[])

  const getData = () => {
    fetch("http://localhost:8080/expense/list")
      .then((resp) => resp.json())
      .then((resp) => setTable(resp))
  };
  const onGridReady = (params) => {
    setGridApi(params);
  };

  return (
    <div
      className="ag-theme-quartz" // applying the grid theme
      style={{
        textAlign: "center",
        width: 1000,
        marginLeft: 220,
        paddingTop: 20,
      }}
    >
      <AgGridReact
        domLayout="autoHeight"
        rowData={table}
        columnDefs={cols}
        defaultColDef={defaultColDef}
        onGridReady={onGridReady}
      />
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
  );
}
export default Table;
