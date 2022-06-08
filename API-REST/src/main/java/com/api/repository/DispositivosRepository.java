package com.api.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.api.entity.Dispositivos;
import com.api.entity.Ubicacion;

@Repository
public interface DispositivosRepository extends JpaRepository<Dispositivos, Integer> {
	
	List<Dispositivos> findByTipo(String tipo);

	Dispositivos findTopByOrderByIdDesc();
	
	Ubicacion findTopByOrderByUbicacionesDesc();
	
	Dispositivos findById(int id);

	Dispositivos getById(int id);
	
}
