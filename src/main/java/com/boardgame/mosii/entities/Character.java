package com.boardgame.mosii.entities;

import com.boardgame.mosii.enums.Pronoun;
import com.sun.istack.NotNull;

import javax.persistence.*;
import java.util.UUID;

@Entity
public class Character {
    @Id
    @GeneratedValue
    UUID uid;

    @NotNull
    String name;

    @NotNull
    @OneToOne(cascade = CascadeType.ALL, orphanRemoval = true)
    Role role;

    @NotNull
    Integer level;

    @NotNull
    @Enumerated(EnumType.STRING)
    Pronoun pronoun;
}
