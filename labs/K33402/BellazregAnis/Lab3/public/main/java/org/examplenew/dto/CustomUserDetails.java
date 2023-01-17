package org.examplenew.dto;

import org.examplenew.entity.User;
import org.examplenew.repos.RoleRepository;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.Collections;

public class CustomUserDetails implements UserDetails {

    private Integer userID;
    private String login;
    private String password;
    private Collection<? extends GrantedAuthority> grantedAuthorities;

    public static CustomUserDetails fromUserEntityToCustomUserDetails(User userEntity, RoleRepository roleRepository) {
        CustomUserDetails c = new CustomUserDetails();
        c.userID = userEntity.getUserID();
        c.login = userEntity.getUserName();
        c.password = userEntity.getUserPassword();
        c.grantedAuthorities = Collections.singletonList(
                new SimpleGrantedAuthority(userEntity.getRoleEntity(roleRepository).getRoleName().toString())
        );
        return c;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return grantedAuthorities;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return login;
    }

    public Integer getUserID() {
        return userID;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}