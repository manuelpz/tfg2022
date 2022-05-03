package com.api.security.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.api.security.entity.Usuario;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Integer>{
	Optional <Usuario> findByNombreUsuario(String nombreUsuario);
	boolean existsByNombreUusario(String nombreUsuario);
	boolean existsByEmail(String email);
}