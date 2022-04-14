package com.api.service.Impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.api.entity.Caracteristicas;
import com.api.repository.CaracteristicasRepository;
import com.api.service.CaracteristicasService;

@Service
public class CaracteristicasServiceImpl implements CaracteristicasService {

	
	@Autowired
	CaracteristicasRepository caracteristicasRepository;

	@Override
	public Caracteristicas createCaracteristica(Caracteristicas caracteristica) {
		caracteristicasRepository.save(caracteristica);
		return caracteristica;
	}

	@Override
	public Caracteristicas getCaracteristica(String id) {
		return caracteristicasRepository.getById(id);
	}

	@Override
	public List<Caracteristicas> getAllCaracteristicas() {
		return caracteristicasRepository.findAll();
	}

	@Override
	public void deleteCaracteristica(String id) {
		Caracteristicas caracteristicaBorrada = caracteristicasRepository.getById(id);
		caracteristicasRepository.delete(caracteristicaBorrada);
		
	}

	@Override
	public Caracteristicas modifyCaracteristica(Caracteristicas caracteristica) {
		caracteristicasRepository.save(caracteristica);
		return caracteristica;
	}
}