package com.api.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.api.entity.Opciones;

@Repository
public interface OpcionesRepository extends JpaRepository<Opciones, String> {
	List<Opciones> getOpcionesByCaracteristicaId(int id);

}
