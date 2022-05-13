package com.api.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.api.entity.Resultados;

@Repository
public interface ResultadosRepository extends JpaRepository<Resultados, Integer>{
	
	List<Resultados> findByDispositivo(String id);

}
