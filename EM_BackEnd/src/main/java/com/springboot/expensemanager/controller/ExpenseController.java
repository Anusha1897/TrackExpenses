package com.springboot.expensemanager.controller;

import com.springboot.expensemanager.common.AuthForm;
import com.springboot.expensemanager.dto.*;
import com.springboot.expensemanager.entity.Expense;
import com.springboot.expensemanager.mapper.*;
import com.springboot.expensemanager.service.ExpenseService;
import com.springboot.expensemanager.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/expense")
public class ExpenseController {

    private ExpenseService expenseService;

    public ExpenseController(ExpenseService expenseService) {
        this.expenseService = expenseService;
    }

    @GetMapping("/list")
    public ResponseEntity<List<ExpenseDTO>> getExpenses(){
        List<Expense> expenses = expenseService.getAllExpenses();
        List<ExpenseDTO> expenseDTOs = expenses.stream().map(ExpenseMapper::mapToDTO).toList();
        return new ResponseEntity<>(expenseDTOs, HttpStatus.OK);
    }

    @PostMapping("add-expense")
    public ResponseEntity<Expense> addExpense(@RequestBody Expense expense){
        Expense newExpense = expenseService.createExpense(expense);
        return new ResponseEntity<>(newExpense,HttpStatus.CREATED);
    }

    @PutMapping("edit-expense")
    public ResponseEntity<Expense> editExpense(@RequestBody Expense expense){
        Expense newExpense = expenseService.editExpense(expense);
        return newExpense!=null ? new ResponseEntity<>(newExpense,HttpStatus.OK) : new ResponseEntity<>(new Expense(),HttpStatus.BAD_REQUEST);
    }

    @DeleteMapping("delete-expense/{id}")
    public ResponseEntity<String> deleteExpense(@PathVariable int id){
        return expenseService.deleteExpense(id) ? new ResponseEntity<>("Success",HttpStatus.OK) : new ResponseEntity<>("Error Occurred",HttpStatus.BAD_REQUEST);
    }

//    @CrossOrigin
//    @GetMapping("sum")
//    public ResponseEntity<Integer> findSum(){
//        return new ResponseEntity<>(expenseService.findSum(),HttpStatus.OK);
//    }
}
