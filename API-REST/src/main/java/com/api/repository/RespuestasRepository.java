package com.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.api.entity.Respuestas;

@Repository
public interface RespuestasRepository extends JpaRepository<Respuestas, Integer> {

}
