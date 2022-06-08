package com.api.service;

import com.api.entity.Dispositivos;
import com.api.entity.Ubicacion;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public interface UbicacionService {
    Ubicacion createUbicacion(Ubicacion ubicacion);
    Ubicacion getUbicacion(Integer id);
    List<Ubicacion> getAllUbicaciones();
    void deleteUbicacion(Integer id);
	Ubicacion modifyUbicacion(Ubicacion ubicacion);
}
