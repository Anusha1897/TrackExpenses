package com.springboot.expensemanager.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDateTime;
import java.util.Date;

@Entity
@Table(name="expenses")
public class Expense {

    //Define fields
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name="id")
    private int id;

    @NotNull(message="ExpenseCategory should not be null")
    @Size(min=4,message="Minimum size is 4")
    @Column(name="expense_category")
    private String expenseCategory;

    @NotNull(message="Expense Name should not be null")
    @Size(min=4,message="Minimum size is 4")
    @Column(name="expense_name")
    private String expenseName;

    @Column(name="expense_date")
    private Date expenseDate;

    @NotNull(message="Amount cannot not be null")
    @Column(name="amount_spent")
    private int amountSpent;


    public Expense(){

    }

    public Expense(int id, String expenseCategory, String expenseName, Date expenseDate, int amountSpent, User user) {
        this.id = id;
        this.expenseCategory = expenseCategory;
        this.expenseName = expenseName;
        this.expenseDate = expenseDate;
        this.amountSpent = amountSpent;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getExpenseCategory() {
        return expenseCategory;
    }

    public void setExpenseCategory(String expenseCategory) {
        this.expenseCategory = expenseCategory;
    }

    public String getExpenseName() {
        return expenseName;
    }

    public void setExpenseName(String expenseName) {
        this.expenseName = expenseName;
    }

    public int getAmountSpent() {
        return amountSpent;
    }

    public void setAmountSpent(int amountSpent) {
        this.amountSpent = amountSpent;
    }

    public Date getExpenseDate() {
        return expenseDate;
    }

    public void setExpenseDate(Date expenseDate) {
        this.expenseDate = expenseDate;
    }


    @Override
    public String toString() {
        return "Expense{" +
                "id=" + id +
                ", expenseCategory='" + expenseCategory + '\'' +
                ", expenseName='" + expenseName + '\'' +
                ", expenseDate=" + expenseDate +
                ", amountSpent=" + amountSpent +
                '}';
    }
}
