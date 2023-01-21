package org.examplenew.db;

import org.examplenew.entity.Role;
import org.examplenew.entity.UserRole;
import org.examplenew.repos.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataBaseLoader implements ApplicationRunner {
    private RoleRepository roleRepository;

    @Autowired
    public DataBaseLoader(RoleRepository roleRepository){
        this.roleRepository = roleRepository;
    }

    @Override
    public void run(ApplicationArguments args) throws Exception {

        if (roleRepository.findByRoleName(UserRole.ROLE_USER) == null)
            roleRepository.save(new Role(UserRole.ROLE_USER));
        if (roleRepository.findByRoleName(UserRole.ROLE_ADMIN) == null)
            roleRepository.save(new Role(UserRole.ROLE_ADMIN));

    }
}
