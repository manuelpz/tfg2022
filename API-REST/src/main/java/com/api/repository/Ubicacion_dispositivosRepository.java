package com.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.api.entity.Ubicacion_dispositivos;

@Repository
public interface Ubicacion_dispositivosRepository extends JpaRepository<Ubicacion_dispositivos, Integer>{

}
