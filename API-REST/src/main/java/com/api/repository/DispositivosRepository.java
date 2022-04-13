package com.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.api.entity.Dispositivos;

@Repository
public interface DispositivosRepository extends JpaRepository<Dispositivos, String> {

}
