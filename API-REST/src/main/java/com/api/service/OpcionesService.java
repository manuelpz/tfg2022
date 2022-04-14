package com.api.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.api.entity.Opciones;

@Service
public interface OpcionesService {
	
	Opciones createOpcion(Opciones opcion);
	Opciones getOpcion(String id);
	List<Opciones> getAllOpciones();
	void deleteOpcion(String id);
	Opciones modifyOpcion(Opciones opcion);

}
