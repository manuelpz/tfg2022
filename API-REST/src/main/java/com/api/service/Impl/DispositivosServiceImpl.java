package com.api.service.Impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.api.entity.Dispositivos;
import com.api.repository.DispositivosRepository;
import com.api.service.DispositivosService;

@Service
public class DispositivosServiceImpl implements DispositivosService {

	
	@Autowired
	DispositivosRepository dispositivosRepository;

	@Override
	public Dispositivos createDispositivo(Dispositivos dispositivo) {
		dispositivosRepository.save(dispositivo);
		return dispositivo;
	}

	@Override
	public Dispositivos getDispositivo(String id) {
		return dispositivosRepository.getById(id);
	}

	@Override
	public List<Dispositivos> getAllDispositivos() {
		return dispositivosRepository.findAll();
	}

	@Override
	public void deleteDispositivo(String id) {
		Dispositivos dispositivoBorrado = dispositivosRepository.getById(id);
		dispositivosRepository.delete(dispositivoBorrado);
		
	}

	@Override
	public Dispositivos modifyDispositivo(Dispositivos dispositivo) {
		dispositivosRepository.save(dispositivo);
		return dispositivo;
	}
}
