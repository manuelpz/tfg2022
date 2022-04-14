package com.api.service.Impl;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.api.entity.Tipos;
import com.api.repository.TiposRepository;
import com.api.service.TiposService;

@Service
public class TiposServiceImpl implements TiposService{

	
	@Autowired
	TiposRepository tiposRepository;

	@Override
	public Tipos createTipo(Tipos tipo) {
		tiposRepository.save(tipo);
		return tipo;
	}

	@Override
	public Tipos getTipo(String id) {	
		return tiposRepository.getById(id);
	}
	
	
	@Override
	public List<Tipos> getAllTipos() {
	 return tiposRepository.findAll();
	}

	@Override
	public void deleteTipo(String tipo) {
		Tipos tipoBorrado = tiposRepository.getByTipo(tipo);
		tiposRepository.delete(tipoBorrado);
	}

	@Override
	public Tipos modifyTipo(Tipos tipo) {
		tiposRepository.save(tipo);
		return tipo;
	}

	
	
	
}
