package com.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.api.entity.CaracteristicasFijas;

@Repository
public interface CaracteristicasFijasRepository extends JpaRepository<CaracteristicasFijas, Integer> {

	boolean existsByCaracteristicaf(String caracteristicaf);
}
