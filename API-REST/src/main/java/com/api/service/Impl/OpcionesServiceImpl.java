package com.api.service.Impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.api.entity.Opciones;
import com.api.repository.OpcionesRepository;
import com.api.service.OpcionesService;

@Service
public class OpcionesServiceImpl implements OpcionesService{

	
	@Autowired
	OpcionesRepository opcionesRepository;

	@Override
	public Opciones createOpcion(Opciones opcion) {
		opcionesRepository.save(opcion);
		return opcion;
	}

	@Override
	public Opciones getOpcion(int id) {
		return opcionesRepository.getById(id);
	}

	@Override
	public List<Opciones> getAllOpciones() {
		return opcionesRepository.findAll();
	}

	@Override
	public void deleteOpcion(int id) {
		Opciones opcionBorrada = opcionesRepository.getById(id);
		opcionesRepository.delete(opcionBorrada);
	}

	@Override
	public Opciones modifyOpcion(Opciones opcion) {
		opcionesRepository.save(opcion);
		return opcion;
	}

	@Override
	public List<Opciones> getOpcionesByCaracteristicaId(int id) {
		return opcionesRepository.getOpcionesByCaracteristicaId(id);
	}
}
