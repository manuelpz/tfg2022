package com.api.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.api.entity.Dispositivos;

import com.api.entity.Ubicacion;

@Service
public interface DispositivosService {

	Dispositivos createDispositivo(Dispositivos dispositivo);
	Dispositivos getDispositivo(int id);
	List<Dispositivos> getAllDispositivos();
	void deleteDispositivo(int id);
	Dispositivos modifyDispositivo(Dispositivos dispositivos);
	List<Dispositivos> findByTipo(String tipo);
	Dispositivos findTopByOrderByIdDesc();	
	Dispositivos findById(int id);
}
