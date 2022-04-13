package com.api.service.Impl;

import java.util.ArrayList;
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
	public String getTipo(String id) {
		Tipos tipo = tiposRepository.getById(id);
		return tipo.getTipo();
	}
	
	
	@Override
	public List<String> getAllTipos() {
	 List<String> nombres = new ArrayList<String>();
	 List<Tipos> tipos = tiposRepository.findAll();
	 for(Tipos tipo : tipos) {
		 nombres.add(tipo.getTipo());
	 }
	 return nombres;
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
