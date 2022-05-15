package com.api.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.api.entity.ResultadosFijos;

@Service
public interface ResultadosFijosService {
	ResultadosFijos createResultadoFijo(ResultadosFijos resultadoFijo);
	ResultadosFijos getResultadoFijo(int id);
	List<ResultadosFijos> getAllResultadosFijos();
	void deleteResultadoFijo(int id);
	ResultadosFijos modifyResultadoFijo(ResultadosFijos resultadoFijo);
}
