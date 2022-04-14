package com.api.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.api.entity.Caracteristicas;

@Service
public interface CaracteristicasService {

	Caracteristicas createCaracteristica(Caracteristicas caracteristica);
	Caracteristicas getCaracteristica(String id);
	List<Caracteristicas> getAllCaracteristicas();
	void deleteCaracteristica(String id);
	Caracteristicas modifyCaracteristica(Caracteristicas caracteristica);
	
}
