package com.springboot.expensemanager.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/expensemanager/signup")
public class SignupPageController {
    private static final String SIGNUP_PAGE = "signup";

    @GetMapping("/")
    public String getSignupPage(){
        return SIGNUP_PAGE;
    }


}
