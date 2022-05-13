package com.api.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.api.entity.CaracteristicasFijas;

@Service
public interface CaracteristicasFijasService {
	List <CaracteristicasFijas> getCaracteristicasFijas();
	CaracteristicasFijas getCaracteristicaFija(int id);
	CaracteristicasFijas createCaracteristicaFija(CaracteristicasFijas caracteristica);
	CaracteristicasFijas modifyCaracteristicaFija(CaracteristicasFijas caracteristica);
	void deleteCaracteristicaFija(int id);

}
