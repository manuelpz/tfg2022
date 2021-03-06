package com.api.repository;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.api.entity.Tipos;

@Repository
public interface TiposRepository extends JpaRepository<Tipos, Integer>{

	Tipos getByTipo(String tipo);
	boolean existsByTipo(String tipo);
}
