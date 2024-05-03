package com.springboot.expensemanager.service;

import com.springboot.expensemanager.DAO.UserRepository;
import com.springboot.expensemanager.common.AuthForm;
import com.springboot.expensemanager.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService{

    private UserRepository userrepository;
    public static String email;

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    //Constructor Injection
    @Autowired
    public UserServiceImpl(UserRepository theuserrepository){
        userrepository=theuserrepository;
    }

    @Override
    public List<User> findAll() {

        return userrepository.findAll();
    }

    @Override
    public User findUserByEmail(String email) {
        return userrepository.findUserByEmail(email);
    }

    public boolean authenticateUser(AuthForm theUser){
        User existingUser = userrepository.findUserByEmail(theUser.getEmail());
        setEmail(theUser.getEmail());
        if(existingUser!=null)
        {
            if(theUser.getPassword().equals(existingUser.getPassword()))
            {
                return true;
            }
            return false;
        }
        return false;
    }

    public String getNameOfUser(AuthForm theUser){

        char c= '@';
        int index=getEmail().indexOf(c);
        if (index != -1) {
            String userName = email.substring(0, index);
            return userName;
        }
        else  return email;
    }
}
