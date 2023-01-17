package org.examplenew.entity;

import lombok.Data;
import lombok.NoArgsConstructor;
import javax.persistence.*;
import java.util.List;

@Data
@Entity
@NoArgsConstructor
@Table(name = "roles11")
public class Role {


    @Id
    @GeneratedValue
    private long roleID;

    @Enumerated(EnumType.STRING)
    @Column(unique = true)
    private UserRole roleName;

    public Role(UserRole roleName) {
        this.roleName = roleName;
    }

    public UserRole getRoleName() {
        return roleName;
    }

    public void setRoleName(UserRole roleName) {
        this.roleName = roleName;
    }

    public long getRoleID() {
        return roleID;
    }

    public void setRoleID(long roleID) {
        this.roleID = roleID;
    }
}
