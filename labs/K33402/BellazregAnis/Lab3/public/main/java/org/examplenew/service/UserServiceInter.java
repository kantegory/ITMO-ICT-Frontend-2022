package org.examplenew.service;

import org.examplenew.entity.User;

import java.util.List;

public interface UserServiceInter {

    User saveUser(User user);

    User findByUserName(String userName);

    User findByUserNameAndUserPassword(String login, String password);

    @Deprecated
    List<User> findAll();
}
