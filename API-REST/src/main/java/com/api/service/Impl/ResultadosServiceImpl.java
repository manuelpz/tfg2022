package com.api.service.Impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.api.entity.Resultados;
import com.api.repository.ResultadosRepository;
import com.api.service.ResultadosService;

@Service
public class ResultadosServiceImpl implements ResultadosService{

	
	@Autowired
	ResultadosRepository resultadosRepository;

	@Override
	public Resultados createResultado(Resultados resultado) {
		resultadosRepository.save(resultado);
		return resultado;
	}

	@Override
	public Resultados getResultado(int id) {
		return resultadosRepository.getById(id);
	}

	@Override
	public List<Resultados> getAllResultados() {
		return resultadosRepository.findAll();
	}

	@Override
	public void deleteResultado(int id) {
		Resultados resultadoBorrado = resultadosRepository.getById(id);
		resultadosRepository.delete(resultadoBorrado);
		
	}

	@Override
	public Resultados modifyResultado(Resultados resultado) {
		resultadosRepository.save(resultado);
		return resultado;
	}

	@Override
	public List<Resultados> findByDispositivo(String id) {
		return resultadosRepository.findByDispositivo(id);
	}
}
