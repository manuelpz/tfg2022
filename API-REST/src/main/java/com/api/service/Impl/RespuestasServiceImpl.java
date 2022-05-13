package com.api.service.Impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.api.entity.Respuestas;
import com.api.repository.RespuestasRepository;
import com.api.service.RespuestasService;

@Service
public class RespuestasServiceImpl implements RespuestasService{
	
	@Autowired
	RespuestasRepository respuestasRepository;

	@Override
	public List<Respuestas> getRespuestas() {
		return respuestasRepository.findAll();
	}

	@Override
	public Respuestas getRespuesta(int id) {
		return respuestasRepository.getById(id);
	}

	@Override
	public Respuestas createRespuesta(Respuestas respuesta) {
		return respuestasRepository.save(respuesta);
	}

	@Override
	public Respuestas modifyRespuesta(Respuestas respuesta) {
		return respuestasRepository.save(respuesta);
	}

	@Override
	public void deleteRespuesta(int id) {
		Respuestas respuesta = respuestasRepository.getById(id);
		respuestasRepository.delete(respuesta);
		
	}

}
