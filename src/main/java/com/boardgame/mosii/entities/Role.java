package com.boardgame.mosii.entities;

import com.boardgame.mosii.enums.RoleType;
import com.sun.istack.NotNull;

import javax.persistence.*;
import java.util.UUID;

@Entity
@Table
public class Role {
    @Id
    @GeneratedValue
    UUID uid;

    @NotNull
    @Enumerated(EnumType.STRING)
    RoleType roleType;

    public Role() { }

    public Role(RoleType roleType) {
        this.roleType = roleType;
    }

    public UUID getUid() {
        return uid;
    }

    public RoleType getRoleType() {
        return roleType;
    }
}
