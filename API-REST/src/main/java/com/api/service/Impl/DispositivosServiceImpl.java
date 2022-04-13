package com.api.service.Impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.api.repository.DispositivosRepository;
import com.api.service.DispositivosService;

@Service
public class DispositivosServiceImpl implements DispositivosService {

	
	@Autowired
	DispositivosRepository dispositivosRepository;
}
