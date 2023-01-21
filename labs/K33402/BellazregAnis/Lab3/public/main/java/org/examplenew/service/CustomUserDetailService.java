package org.examplenew.service;

import org.examplenew.dto.CustomUserDetails;
import org.examplenew.entity.User;
import org.examplenew.repos.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

@Component
public class CustomUserDetailService implements UserDetailsService {

    @Autowired
    @Lazy
    private UserServiceInter userService;

    @Autowired
    private RoleRepository roleRepository;

    @Override
    public CustomUserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User userEntity = userService.findByUserName(username);
        if (userEntity == null){

            throw new UsernameNotFoundException("User " + username + " NOT FOUND.");
        }
        return CustomUserDetails.fromUserEntityToCustomUserDetails(userEntity, roleRepository);
    }

}
