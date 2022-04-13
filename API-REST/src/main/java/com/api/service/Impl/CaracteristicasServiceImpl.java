package com.api.service.Impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.api.repository.CaracteristicasRepository;
import com.api.service.CaracteristicasService;

@Service
public class CaracteristicasServiceImpl implements CaracteristicasService {

	
	@Autowired
	CaracteristicasRepository caracteristicasRepository;
}
