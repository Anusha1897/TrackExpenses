package com.springboot.expensemanager.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

import java.time.LocalDateTime;

@Entity
@Table(name="users")
public class User {

    //Define fields
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name="user_id")
    private int id;

    @NotNull(message="FirstName should not be null")
    @Size(min=1,message="Minimum size is 1")
    @Column(name="first_name")
    private String firstName;

    @NotNull(message="Last name should not be null")
    @Size(min=1,message="Minimum size is 1")
    @Column(name="last_name")
    private String lastName;

    @NotNull(message="email should not be null")
    @Size(min=6,message="Minimum size is 6")
    @Column(name="email")
    private String email;
    @NotNull(message="password should not be null")
    @Size(min=6,message="Minimum size is 6")
    @Column(name="password")
    private String password;

    @Column(name="enabled")
    private Boolean enabled = Boolean.TRUE;

    @Column(name="creation_time")
    private LocalDateTime creationTime;



    //define constructors
    public User()
    {

    }

    public User(int id, String firstName, String lastName, String email, String password, Boolean enabled, LocalDateTime creationTime) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.enabled = enabled;
        this.creationTime = creationTime;
    }

    public User(int id, String firstName, String lastName, String email, String password, LocalDateTime creationTime) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.enabled = Boolean.TRUE;
        this.creationTime = creationTime;
    }

    //define getters and setters

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
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

    public Boolean getEnabled() {
        return enabled;
    }

    public void setEnabled(Boolean enabled) {
        this.enabled = enabled;
    }

    public LocalDateTime getCreationTime() {
        return creationTime;
    }

    public void setCreationTime(LocalDateTime creationTime) {
        this.creationTime = creationTime;
    }

//define toString()


    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", email='" + email + '\'' +
                ", enabled=" + enabled +
                ", creationTime=" + creationTime +
                '}';
    }
}
