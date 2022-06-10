package com.api.service.Impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.api.entity.Opciones;
import com.api.entity.Ubicacion_dispositivos;
import com.api.repository.Ubicacion_dispositivosRepository;
import com.api.service.Ubicacion_dispositivosService;

@Service
public class Ubicacion_dispositivosServiceImpl implements Ubicacion_dispositivosService{

	@Autowired
	Ubicacion_dispositivosRepository ubiDisposRepository;
	
	@Override
	public Ubicacion_dispositivos createUbiDispo(Ubicacion_dispositivos ubiDispo) {
		return ubiDisposRepository.save(ubiDispo);
	}

	@Override
	public Ubicacion_dispositivos getUbiDispo(int id) {
		return ubiDisposRepository.getById(id);
	}

	@Override
	public List<Ubicacion_dispositivos> getAllUbiDispos() {
		return ubiDisposRepository.findAll();
	}

	@Override
	public void deleteUbiDispo(int id) {
		Ubicacion_dispositivos ubi = ubiDisposRepository.getById(id);
		ubiDisposRepository.delete(ubi);
		
	}

}
