package com.api.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.api.entity.Dispositivos;

@Repository
public interface DispositivosRepository extends JpaRepository<Dispositivos, String> {
	
	List<Dispositivos> findByTipo(String tipo);

	Dispositivos findTopByOrderByIdDesc();
	
}
