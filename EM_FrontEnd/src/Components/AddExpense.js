import * as React from "react";
import { useRef } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { TextField } from "@mui/material";
import { Select } from "@mui/base/Select";
import { Option } from "@mui/base/Option";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { FormControl } from "@mui/base/FormControl";
import { MenuItem } from "@mui/material";
import { InputLabel } from "@mui/material";
import Box from '@mui/material/Box';

export default function AddExpense({ open, handleClose,data,handleChange,handleChangeDate ,handleFormSubmit}) {
  const {id,expenseCategory, expenseName , amountSpent , expenseDate} = data
  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" color="#f5ba13">{id ? "Update an Expense " : "Add an Expense"}
          
        </DialogTitle>
        <DialogContent>
          {/* <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select id="expenseCategory" name="expenseCategory" defaultValue="Groceries" fullWidth>
            <Option value="mercedes benz">Mercedes Benz</Option>
            <Option value="tesla">Tesla</Option>
            <Option value="rolls royce">Rolls Royce</Option>
            <Option value="bugatti">Bugatti</Option>
            <Option value="ferrari">Ferrari</Option>
            </Select>
          </FormControl> */}
          <form>   
            <select style={{height:50 , width:549, font:"inherit" , boxSizing:"content-box" , borderRadius:5}}
              id="expenseCategory"
              name="expenseCategory"
              placeholder="Expense Category"
              label="Expense Category"
              value={expenseCategory}
              onChange={(event) => handleChange(event)}
            >
              <option value="Choose" defaultValue>
                Choose an Expense category
              </option>
              <option value="Groceries">Groceries</option>
              <option value="Shopping">Shopping</option>
              <option value="Selfcare">SelfCare</option>
              <option value="Travel">Travel</option>
              <option value="EMIs">EMIs</option>
            </select>
            
            <TextField
              id="expenseName"
              placeholder="Enter Expense Name"
              value={expenseName}
              label="Expense Name"
              variant="outlined"
              margin="dense"
              onChange={(event) => handleChange(event)}
              fullWidth
            />
            <TextField
              id="amountSpent"
              placeholder="Enter Expense Amount"
              value={amountSpent}
              label="Expense Amount"
              variant="outlined"
              margin="dense"
              onChange={(event) => handleChange(event)}
              fullWidth
            />
            <LocalizationProvider dateAdapter={AdapterDayjs} fullWidth>
              <DatePicker
                id="expenseDate"
                name="expenseDate"               
                placeholder="Enter Expense Date"
                label="Expense date"
                variant="outlined"
                margin="dense"
                onChange={(event) => handleChangeDate(event)}
                fullWidth
              />
            </LocalizationProvider>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant="contained" sx={{bgcolor:"#f5ba13"}} onClick={handleFormSubmit} >
            {id ? "Update" : "Submit"}
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
