package com.api.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.api.entity.Resultados;

@Service
public interface ResultadosService {

	Resultados createResultado(Resultados resultado);
	Resultados getResultado(int id);
	List<Resultados> getAllResultados();
	void deleteResultado(int id);
	Resultados modifyResultado(Resultados resultado);
	List<Resultados> findByDispositivo(String id);
}
