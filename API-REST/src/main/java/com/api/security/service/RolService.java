package com.api.security.service;

import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.api.security.entity.Rol;
import com.api.security.enums.RolNombre;
import com.api.security.repository.RolRepository;

@Service
@Transactional
public class RolService {
	
	@Autowired
	RolRepository rolRepository;
	
	public Optional<Rol> getByRolNombre(RolNombre rolNombre){
		return rolRepository.findByRolNombre(rolNombre);
	}
	
	public void save(Rol rol) {
		rolRepository.save(rol);
	}

}
