package org.examplenew.entity;

import lombok.Data;
import org.examplenew.repos.RoleRepository;

import javax.persistence.*;

@Entity
@Data
@Table(name = "users11")
public class User{

    @Id @GeneratedValue
    private Integer userID;

    @Column(nullable = false, unique = true)
    private String userName;

    @Column(nullable = false)
    private String userPassword;


    @Column(nullable = false)
    private Long userRoleID;




    //--------------------------------------
    public User(){};

    public User(String name, String pass){
        this.userName = name;
        this.userPassword = pass;
    }

    public void setUserID(Integer id) {
        this.userID = id;
    }

    public Integer getUserID() {
        return userID;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public void setUserPassword(String pass) {
        this.userPassword = pass;
    }

    public String getUserName() {
        return userName;
    }

    public String getUserPassword() {
        return userPassword;
    }

    public Role getRoleEntity(
                         RoleRepository roleRepository){
        return roleRepository.findByRoleID(userRoleID);
    }

}