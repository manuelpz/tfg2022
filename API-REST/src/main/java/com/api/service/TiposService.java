package com.api.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.api.entity.Tipos;

@Service
public interface TiposService {
	
	Tipos createTipo(Tipos tipo);
	Tipos getTipo(String tipo);
	List<Tipos> getAllTipos();
	void deleteTipo(String tipo);
	Tipos modifyTipo(Tipos tipo);

}
