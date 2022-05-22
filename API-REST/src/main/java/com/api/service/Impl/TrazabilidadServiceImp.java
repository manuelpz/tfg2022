package com.api.service.Impl;

import com.api.entity.Trazabilidad;
import com.api.repository.TrazabilidadRepository;
import com.api.service.TrazabilidadService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class TrazabilidadServiceImp implements TrazabilidadService {

    @Autowired
    TrazabilidadRepository trazabilidadRepository;


    @Override
    public Trazabilidad createTrazabilidad(Trazabilidad trazabilidad)  {
        Trazabilidad savePlace = trazabilidadRepository.save(trazabilidad);
        return savePlace;
    }

    @Override
    public Trazabilidad getTrazabilidad(Integer id) {
        return trazabilidadRepository.getById(id);
    }

    @Override
    public List<Trazabilidad> getAllTrazabilidades() {
        return trazabilidadRepository.findAll();
    }


    @Override
    public void deleteTrazabilidad(Integer id) {

        Trazabilidad trazabilidad=trazabilidadRepository.getById(id);
        trazabilidadRepository.delete(trazabilidad);
    }

    @Override
    public Trazabilidad modifyTrazabilidad(Trazabilidad trazabilidad) {
        Trazabilidad updatePlace = trazabilidadRepository.save(trazabilidad);
        return updatePlace;
    }
}
