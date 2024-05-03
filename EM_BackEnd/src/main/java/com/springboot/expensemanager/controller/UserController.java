package com.springboot.expensemanager.controller;

import com.springboot.expensemanager.common.AuthForm;
import com.springboot.expensemanager.entity.Expense;
import com.springboot.expensemanager.entity.User;
import com.springboot.expensemanager.service.ExpenseService;
import jakarta.validation.Valid;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import com.springboot.expensemanager.service.UserService;

import java.util.List;

@Controller
@RequestMapping("/expenseManager")
public class UserController {

    private UserService userservice;
    private ExpenseService expenseservice;

    public UserController(UserService theuserservice,ExpenseService theexpenseservice) {
        userservice = theuserservice;
        expenseservice = theexpenseservice;
    }


    //Add mapping for "/"
    @GetMapping("/login")
    public String loginPage(Model theModel){
        AuthForm theUser = new AuthForm();
        theModel.addAttribute("user",theUser);
        //return login html page
            return "login-page";
    }

    @PostMapping("/validateUser")
    public String userValidate(@Valid @ModelAttribute("user") AuthForm theUser, BindingResult theBindingResult){
        if(theBindingResult.hasErrors())
            return "login-page";
        if(userservice.authenticateUser(theUser)==true)
        {
            return "redirect:/expenseManager/homePage";
        }
        else theBindingResult.rejectValue("password",null,"Email/Password is incorrect");
        return "login-page";
    }

    @GetMapping("/homePage")
    public String homePage(@ModelAttribute("user") AuthForm theUser,Model theModel){
        String user=userservice.getNameOfUser(theUser);
        theModel.addAttribute("user",user);
        //return home html page
        return "home-page";
    }

    @GetMapping("/AddExpenseForm")
    public String ShowFormForAddExpense(Model theModel){
        Expense theExpense = new Expense();
        theModel.addAttribute("expense",theExpense);
        return "addExpense-page";
    }

    @PostMapping("/saveExpense")
    public String addExpense(@Valid @ModelAttribute("expense") Expense theExpense,
                             BindingResult theBindingResult){

        //use a redirect to prevent duplicate submissions
        if(theBindingResult.hasErrors())
        {
            return "addExpense-page";
        }
        //save the Employee
        expenseservice.save(theExpense);

        return "redirect:/expenseManager/homePage";
    }

}
