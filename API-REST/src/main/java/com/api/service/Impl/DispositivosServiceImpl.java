package com.api.service.Impl;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.api.entity.Dispositivos;
import com.api.entity.Tipos;
import com.api.repository.DispositivosRepository;
import com.api.repository.TiposRepository;
import com.api.service.DispositivosService;

@Service
public class DispositivosServiceImpl implements DispositivosService {

	
	@Autowired
	DispositivosRepository dispositivosRepository;

	@Autowired
	TiposRepository tiposRepository;
	
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
	public void deleteDispositivo(int id) {
		Dispositivos dispositivoBorrado = dispositivosRepository.getById(id);
		dispositivosRepository.delete(dispositivoBorrado);
		
	}

	@Override
	public Dispositivos modifyDispositivo(Dispositivos dispositivo) {
		dispositivosRepository.save(dispositivo);
		return dispositivo;
	}

	@Override
	public List<Dispositivos> findByTipo(String tipo) {
		Tipos tipo2 = tiposRepository.getByTipo(tipo);
		List<Dispositivos> dispositivos = tipo2.getDispositivos();
		return dispositivos;
	}

	@Override
	public Dispositivos findTopByOrderByIdDesc() {
		return dispositivosRepository.findTopByOrderByIdDesc();
	}

	@Override
	public Dispositivos findById(int id) {
		// TODO Auto-generated method stub
		return dispositivosRepository.findById(id);
	}
}
