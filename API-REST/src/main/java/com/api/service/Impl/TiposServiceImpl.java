package com.api.service.Impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.api.repository.TiposRepository;
import com.api.service.TiposService;

@Service
public class TiposServiceImpl implements TiposService{

	
	@Autowired
	TiposRepository tiposRepository;
}
