package com.boardgame.mosii.entities;

import com.boardgame.mosii.enums.RoleType;
import com.sun.istack.NotNull;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.UUID;

@Entity
public class Role {
    @Id
    @GeneratedValue
    UUID uid;

    @NotNull
    RoleType roleType;

    @NotNull
    Integer start_coord_x;

    @NotNull
    Integer start_coord_y;
}
