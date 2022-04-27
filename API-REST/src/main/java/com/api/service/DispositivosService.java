package com.api.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.api.entity.Dispositivos;

@Service
public interface DispositivosService {

	Dispositivos createDispositivo(Dispositivos dispositivo);
	Dispositivos getDispositivo(String id);
	List<Dispositivos> getAllDispositivos();
	void deleteDispositivo(int id);
	Dispositivos modifyDispositivo(Dispositivos dispositivos);
	List<Dispositivos> findByTipo(String tipo);
	Dispositivos findTopByOrderByIdDesc();
}
