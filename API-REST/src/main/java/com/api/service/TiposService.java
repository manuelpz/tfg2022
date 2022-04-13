package com.api.service;

import java.util.List;

import com.api.entity.Tipos;

public interface TiposService {
	
	Tipos createTipo(Tipos tipo);
	String getTipo(String tipo);
	List<String> getAllTipos();
	void deleteTipo(String tipo);
	Tipos modifyTipo(Tipos tipo);

}
