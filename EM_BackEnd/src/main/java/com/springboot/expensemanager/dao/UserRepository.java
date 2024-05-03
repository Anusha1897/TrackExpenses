package com.springboot.expensemanager.DAO;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springboot.expensemanager.entity.User;

import java.util.List;

public interface UserRepository extends JpaRepository<User, Integer> {

    // that's it ... no need to write any code LOL!

    User findUserByEmail(String email);
}
