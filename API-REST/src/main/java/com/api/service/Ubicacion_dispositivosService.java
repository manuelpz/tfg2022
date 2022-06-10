package com.api.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.api.entity.Opciones;
import com.api.entity.Ubicacion_dispositivos;

@Service
public interface Ubicacion_dispositivosService {
	Ubicacion_dispositivos createUbiDispo(Ubicacion_dispositivos ubiDispo);
	Ubicacion_dispositivos getUbiDispo(int id);
	List<Ubicacion_dispositivos> getAllUbiDispos(); 
	void deleteUbiDispo(int id);
}
