package org.examplenew.service;


import org.examplenew.entity.Role;
import org.examplenew.entity.User;

import org.examplenew.entity.UserRole;
import org.examplenew.repos.RoleRepository;
import org.examplenew.repos.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService implements UserServiceInter {

    @Autowired
    private UserRepository userEntityRepository;
    @Autowired
    private RoleRepository roleEntityRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;

    public User saveUser(User user) {
        Role userRole = roleEntityRepository.findByRoleName(UserRole.ROLE_USER);
        user.setUserRoleID(userRole.getRoleID());
        user.setUserPassword(passwordEncoder.encode(user.getUserPassword()));
        return userEntityRepository.save(user);
    }

    public User findByUserName(String userName) {
        return userEntityRepository.findByUserName(userName);
    }


    public User findByUserNameAndUserPassword(String login, String password) {
        User userEntity = findByUserName(login);
        if (userEntity != null) {
            if (passwordEncoder.matches(password, userEntity.getUserPassword())) {
                return userEntity;
            }
        }
        return null;
    }

    @Override
    public List<User> findAll(){
        return userEntityRepository.findAll();
    }
}