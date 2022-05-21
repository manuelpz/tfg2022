package com.api.repository;

import com.api.entity.Trazabilidad;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TrazabilidadReposiitory extends JpaRepository<Trazabilidad, Integer> {

    List<Trazabilidad> getTrazabilidadByDispositivo(String dispositivo);
}
