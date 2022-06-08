package com.api.service.Impl;


import com.api.entity.Ubicacion;
import com.api.repository.UbicacionRepository;
import com.api.service.UbicacionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class UbicacionServiceImp implements UbicacionService {

    @Autowired
    UbicacionRepository ubicacionRepository;



    @Override
    public Ubicacion createUbicacion(Ubicacion ubicacion)  {
        Ubicacion savePlace = ubicacionRepository.save(ubicacion);
        return savePlace;
    }

    @Override
    public Ubicacion getUbicacion(Integer id) {
        return ubicacionRepository.getById(id);
    }

    @Override
    public List<Ubicacion> getAllUbicaciones() {
        return ubicacionRepository.findAll();
    }


    @Override
    public void deleteUbicacion(Integer id) {

        Ubicacion ubicacion = ubicacionRepository.getById(id);
        ubicacionRepository.delete(ubicacion);
    }

    @Override
    public Ubicacion modifyUbicacion(Ubicacion ubicacion) {
        Ubicacion updatePlace = ubicacionRepository.save(ubicacion);
        return updatePlace;
    }
}
