package com.springboot.expensemanager.mapper;

import com.springboot.expensemanager.dto.*;
import com.springboot.expensemanager.entity.*;

import java.text.*;

public class ExpenseMapper {

    public static ExpenseDTO mapToDTO(Expense expense){
        ExpenseDTO expenseDTO = new ExpenseDTO();
        expenseDTO.setId(expense.getId());
        expenseDTO.setExpenseCategory(expense.getExpenseCategory());
        expenseDTO.setExpenseName(expense.getExpenseName());
        expenseDTO.setAmountSpent(expense.getAmountSpent());
        if(expense.getExpenseDate()!=null){
            DateFormat dateFormat = new SimpleDateFormat("MM-dd-yyyy");
            String strDate = dateFormat.format(expense.getExpenseDate());
            expenseDTO.setExpenseDate(strDate);
        }
       else{
            expenseDTO.setExpenseDate("");
        }
        return expenseDTO;
    }
}
