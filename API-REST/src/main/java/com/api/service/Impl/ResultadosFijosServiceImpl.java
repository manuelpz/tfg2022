package com.api.service.Impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.api.entity.ResultadosFijos;
import com.api.repository.ResultadosFijosRepository;
import com.api.service.ResultadosFijosService;

@Service
public class ResultadosFijosServiceImpl implements ResultadosFijosService{
	
	@Autowired
	ResultadosFijosRepository resultadosFijosRepository;
	
	@Override
	public ResultadosFijos createResultadoFijo(ResultadosFijos resultadoFijo) {
		return resultadosFijosRepository.save(resultadoFijo);
	}

	@Override
	public ResultadosFijos getResultadoFijo(int id) {
		return resultadosFijosRepository.getById(id);
	}

	@Override
	public List<ResultadosFijos> getAllResultadosFijos() {
		return resultadosFijosRepository.findAll();
	}

	@Override
	public void deleteResultadoFijo(int id) {
		ResultadosFijos resultadoFijo = resultadosFijosRepository.getById(id);
		resultadosFijosRepository.delete(resultadoFijo);	
	}

	@Override
	public ResultadosFijos modifyResultadoFijo(ResultadosFijos resultadoFijo) {
		return resultadosFijosRepository.save(resultadoFijo);
	}
}