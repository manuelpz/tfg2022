package com.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.api.entity.Resultados;

@Repository
public interface ResultadosRepository extends JpaRepository<Resultados, String>{

}
