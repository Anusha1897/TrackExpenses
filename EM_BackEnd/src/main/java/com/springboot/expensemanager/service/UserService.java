package com.springboot.expensemanager.service;

import com.springboot.expensemanager.common.AuthForm;
import com.springboot.expensemanager.entity.User;

import java.util.List;

public interface UserService {

    List<User> findAll();

    User findUserByEmail(String email);

    boolean authenticateUser(AuthForm theUser);

    String getNameOfUser(AuthForm theUser);
}
