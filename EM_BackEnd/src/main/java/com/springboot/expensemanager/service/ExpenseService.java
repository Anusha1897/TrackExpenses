package com.springboot.expensemanager.service;

import com.springboot.expensemanager.entity.Expense;
import org.springframework.stereotype.Service;

import java.util.List;


public interface ExpenseService {

    List<Expense> getAllExpenses();
    Expense createExpense(Expense expense);
    Expense editExpense(Expense expense);
    boolean deleteExpense(Expense expense);
    public void save(Expense theExpense);
}
