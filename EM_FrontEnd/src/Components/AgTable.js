import React, { useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css";
import { Button, Grid } from "@mui/material";
import AddExpense from "./AddExpense";
import axios from "axios";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AgChart from "./AgChart";

const initialValue = {
  expenseCategory: "",
  expenseName: "",
  expenseDate: "",
  amountSpent: "",
};

function AgTable() {
  const [gridApi, setGridApi] = useState(null);
  const [table, setTable] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [total, setTotal] = useState(0);
  const [FormData, setFormData] = useState({
    expenseCategory : "",
    expenseName : "",
    amountSpent :"",
    expenseDate : null
  })

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const cols = [
    { headerName: "Expense Category", field: "expenseCategory" ,filter: true,},
    { headerName: "Expense Name", field: "expenseName",filter: 'agTextColumnFilter', },
    { headerName: "Expense Amount", field: "amountSpent",filter: 'agNumberColumnFilter', },
    { headerName: "Expense Date", field: "expenseDate" ,filter: 'agDateColumnFilter',},
    {headerName:"Actions" , field:"id" , cellRenderer:(params)=><div>
        <Button onClick={()=>handleUpdate(params.data)}><EditIcon style={{ color: "#f5ba13" }} /></Button>
        <Button onClick={()=>handleDelete(params.value)}><DeleteIcon style={{ color: "#f5ba13" }} /></Button>
    </div>}
  ];

  const defaultColDef = {
    sortable: true,
    floatingFilter: true,
    flex: 1,
  };

  useEffect(() => {
    getTableData();
  }, []);
  const getTableData = () => {
    fetch("http://localhost:8080/expense/list")
      .then((resp) => resp.json())
      .then((resp) => setTable(resp));
  };

  useEffect(() => {
    // Calculate the sum whenever table changes
    let sum = 0;
     table.forEach(row => {
       sum=sum+row.amountSpent  
     });
     console.log(sum)
     setTotal(sum);
  }, [table]);

  const onGridReady = (params) => {
    setGridApi(params);
  };

  function handleChange(e){
    console.log(e)
    const {value,id} = e.target
    setFormData({...FormData,[id]:value})
  }

  function handleChangeDate(event) {
    console.log(event);
    setFormData((prevValue) => ({
      ...prevValue,
      expenseDate: event.toDate(),
    }));
  }

  function handleDelete(id){
    const confirm = window.confirm("Are you sure you want to delete the expense", id)
    if(confirm) fetch("http://localhost:8080/expense/delete-expense/"+`${id}`,{method:"DELETE"}).then(resp => resp.json).then(resp =>  getTableData()) 
     
  }

  const handleUpdate=(oldData)=>{
    handleClickOpen()
    setFormData(oldData)
  }
  async function handleFormSubmit(){
    if(FormData.id){
        try {
            const response = await axios.put(
              "http://localhost:8080/expense/edit-expense",
              FormData
            );
            console.log("Post created:", response.data);
          } catch (error) {
            console.error("Error creating post:", error);
          }
          handleClose()
          getTableData()
          setFormData({
            expenseCategory: " ",
            expenseName: "",
            amountSpent: " ",
            expenseDate: "",
          });
    }
    else{
        try {
            const response = await axios.post(
              "http://localhost:8080/expense/add-expense",
              FormData
            );
            console.log("Post created:", response.data);
          } catch (error) {
            console.error("Error creating post:", error);
          }
          handleClose()
          getTableData()
          setFormData({
            expenseCategory: " ",
            expenseName: "",
            amountSpent: " ",
            expenseDate: "",
          });
    }
    
  }
  function calculateTotal(){
    console.log("total")
    console.log(FormData)
  }
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
      <Grid align="right">
        <Button onClick={handleClickOpen}>Add Expense</Button>
      </Grid>

      <Grid >
        <Button onClick={handleClickOpen}>Graph</Button>
      </Grid>

      <AgGridReact
        domLayout="autoHeight"
        rowData={table}
        columnDefs={cols}
        defaultColDef={defaultColDef}
        onGridReady={onGridReady}
        
      />
      <AddExpense open={open} handleClose={handleClose} data = {FormData} handleChange={handleChange} handleChangeDate={handleChangeDate} handleFormSubmit={handleFormSubmit}/>
      <h3>Total : {total}</h3>
      <AgChart tableData={table}/>
    </div>
  );
}
export default AgTable;
