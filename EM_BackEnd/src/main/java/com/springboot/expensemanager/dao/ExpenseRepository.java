package com.springboot.expensemanager.dao;

import com.springboot.expensemanager.entity.Expense;
import com.springboot.expensemanager.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ExpenseRepository extends JpaRepository<Expense, Integer> {


}
