package org.examplenew.repos;

import org.examplenew.entity.Role;
import org.examplenew.entity.UserRole;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<Role, Integer> {
    Role findByRoleName(UserRole roleName);
    Role findByRoleID(Long id);
}
