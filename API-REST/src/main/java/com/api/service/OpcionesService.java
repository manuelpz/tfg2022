package com.api.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.api.entity.Opciones;

@Service
public interface OpcionesService {
	
	Opciones createOpcion(Opciones opcion);
	Opciones getOpcion(int id);
	List<Opciones> getAllOpciones();
	List<Opciones> getOpcionesByCaracteristicaId(int id);
	void deleteOpcion(int id);
	Opciones modifyOpcion(Opciones opcion);

}
