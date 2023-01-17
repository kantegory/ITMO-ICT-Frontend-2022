package org.examplenew.service;

import org.examplenew.entity.Role;
import org.examplenew.repos.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RoleService implements RoleServiceInter{

    @Autowired
    private RoleRepository roleRepository;

    public Role saveRole(Role role){
        return roleRepository.save(role);
    }

}
