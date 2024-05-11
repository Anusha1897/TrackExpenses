package com.springboot.expensemanager.service;

import com.springboot.expensemanager.dao.ExpenseRepository;
import com.springboot.expensemanager.entity.Expense;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ExpenseServiceImpl implements ExpenseService{

    private ExpenseRepository expenserepository;

    @Autowired
    public ExpenseServiceImpl(ExpenseRepository theexpenserepository){
        expenserepository=theexpenserepository;
    }

    @Override
    public List<Expense> getAllExpenses() {
        return expenserepository.findAll();
    }

    @Override
    public Expense createExpense(Expense expense) {
        return expenserepository.save(expense);
    }

    @Override
    public Expense editExpense(Expense expense) {
        return  expenserepository.existsById(expense.getId()) ? expenserepository.save(expense) : null;
    }

    @Override
    public boolean deleteExpense(int id) {
        if(expenserepository.existsById(id)) {
            expenserepository.deleteById(id);
            return true;
        }
        else{
            return false;
        }
    }

    @Override
    public void save(Expense theExpense) {
        expenserepository.save(theExpense);
    }

//    @Override
//    public int findSum() {
//       return expenserepository.save();
//    }
}
