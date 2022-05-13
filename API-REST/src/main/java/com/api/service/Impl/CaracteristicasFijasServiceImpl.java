package com.api.service.Impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.api.entity.CaracteristicasFijas;
import com.api.repository.CaracteristicasFijasRepository;
import com.api.service.CaracteristicasFijasService;

@Service
public class CaracteristicasFijasServiceImpl implements CaracteristicasFijasService{
	
	@Autowired
	CaracteristicasFijasRepository caracteristicasFijasRepository;

	@Override
	public List<CaracteristicasFijas> getCaracteristicasFijas() {
		return caracteristicasFijasRepository.findAll();
	}

	@Override
	public CaracteristicasFijas getCaracteristicaFija(int id) {
		return caracteristicasFijasRepository.getById(id);
	}

	@Override
	public CaracteristicasFijas createCaracteristicaFija(CaracteristicasFijas caracteristica) {
		return caracteristicasFijasRepository.save(caracteristica);
	}

	@Override
	public CaracteristicasFijas modifyCaracteristicaFija(CaracteristicasFijas caracteristica) {
		return caracteristicasFijasRepository.save(caracteristica);
	}

	@Override
	public void deleteCaracteristicaFija(int id) {
		CaracteristicasFijas caracteristica = caracteristicasFijasRepository.getById(id);
		caracteristicasFijasRepository.delete(caracteristica);
	}

	

}
