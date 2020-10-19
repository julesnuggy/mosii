package com.boardgame.mosii.controllers;

import com.boardgame.mosii.entities.Role;
import com.boardgame.mosii.services.RoleService;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/mosii/roles")
public class RoleController {
    private final RoleService roleService;

    public RoleController(RoleService roleService) {
        this.roleService = roleService;
    }

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Role> getRoles() {
        return this.roleService.getRoles();
    }

    @PostMapping(
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public Role createRole(@RequestBody Role role) {
        return this.roleService.createRole(role);
    }
}
