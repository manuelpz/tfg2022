package com.api.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.api.entity.Respuestas;

@Service
public interface RespuestasService {

	List <Respuestas> getRespuestas();
	Respuestas getRespuesta(int id);
	Respuestas createRespuesta(Respuestas respuesta);
	Respuestas modifyRespuesta(Respuestas respuesta);
	void deleteRespuesta(int id);
	}
