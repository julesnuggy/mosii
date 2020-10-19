package com.boardgame.mosii.services;

import com.boardgame.mosii.entities.Role;
import com.boardgame.mosii.repositories.RoleRepository;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class RoleService {
    private final RoleRepository roleRepository;

    public RoleService(RoleRepository roleRepository) {
        this.roleRepository = roleRepository;
    }

    public List<Role> getRoles() {
        return this.roleRepository.findAll();
    }

    public Role createRole(Role role) {
        Role newRole = new Role(role.getRoleType());
        return this.roleRepository.save(newRole);
    }
}
