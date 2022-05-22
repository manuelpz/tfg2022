package com.api.service;

import com.api.entity.Trazabilidad;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public interface TrazabilidadService {
    Trazabilidad createTrazabilidad(Trazabilidad trazabilidad);
    Trazabilidad getTrazabilidad(Integer id);
    List<Trazabilidad> getAllTrazabilidades();
    void deleteTrazabilidad(Integer id);
    Trazabilidad modifyTrazabilidad(Trazabilidad trazabilidad);
}
