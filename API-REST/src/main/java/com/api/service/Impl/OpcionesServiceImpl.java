package com.api.service.Impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.api.repository.OpcionesRepository;
import com.api.service.OpcionesService;

@Service
public class OpcionesServiceImpl implements OpcionesService{

	
	@Autowired
	OpcionesRepository opcionesRepository;
}
