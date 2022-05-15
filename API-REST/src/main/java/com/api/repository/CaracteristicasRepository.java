package com.api.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.api.entity.Caracteristicas;

@Repository
public interface CaracteristicasRepository extends JpaRepository<Caracteristicas, Integer> {

	List<Caracteristicas> getCaracteristicasByTipoTipo(String tipo);
}
