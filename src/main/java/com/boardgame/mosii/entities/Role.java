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

    @NotNull
    Integer start_coord_x;

    @NotNull
    Integer start_coord_y;

    public UUID getUid() {
        return uid;
    }

    public RoleType getRoleType() {
        return roleType;
    }

    public Integer getStart_coord_x() {
        return start_coord_x;
    }

    public Integer getStart_coord_y() {
        return start_coord_y;
    }
}
