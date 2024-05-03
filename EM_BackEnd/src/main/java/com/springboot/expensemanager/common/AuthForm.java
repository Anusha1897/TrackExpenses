package com.springboot.expensemanager.common;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public class AuthForm {

    @NotNull(message="Email should not be null")
    @Size(min=2,message="Min size is 2")
    private String email;
    @NotNull(message="Password should not be null")
    @Size(min=6,message="Min size is 6")
    private String password;

    public AuthForm()
    {

    }

    public AuthForm(String email, String password) {
        this.email = email;
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }


}
