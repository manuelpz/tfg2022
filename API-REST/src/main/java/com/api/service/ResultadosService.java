package com.api.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.api.entity.Resultados;

@Service
public interface ResultadosService {

	Resultados createResultado(Resultados resultado);
	Resultados getResultado(String id);
	List<Resultados> getAllResultados();
	void deleteResultado(String id);
	Resultados modifyResultado(Resultados resultado);
}
