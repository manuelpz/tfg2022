package com.api.service.Impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.api.repository.ResultadosRepository;
import com.api.service.ResultadosService;

@Service
public class ResultadosServiceImpl implements ResultadosService{

	
	@Autowired
	ResultadosRepository resultadosRepository;
}
