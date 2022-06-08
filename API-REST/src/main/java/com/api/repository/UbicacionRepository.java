package com.api.repository;

import com.api.entity.Ubicacion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;



@Repository
public interface UbicacionRepository extends JpaRepository<Ubicacion, Integer> {

}
