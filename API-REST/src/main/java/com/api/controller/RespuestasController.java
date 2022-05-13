package com.api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.api.entity.Respuestas;
import com.api.service.RespuestasService;

@RestController
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST})
@RequestMapping("/api")
public class RespuestasController {
	
	@Autowired
	RespuestasService respuestasService;

	@GetMapping("/respuesta/{id}")
	public Respuestas getRespuesta(@PathVariable(value = "id") int id){
		return respuestasService.getRespuesta(id);
	}
	
	@GetMapping("/respuestas")
	public List<Respuestas> getRespuestas(){
		return respuestasService.getRespuestas();
	}
	
	@PostMapping("/nuevo/respuesta")
	public Respuestas createRespuesta(@Validated @RequestBody Respuestas respuesta) {
		return respuestasService.createRespuesta(respuesta);
	}
	
	@PutMapping("/actualizar/respuesta")
	public Respuestas modifyRespuesta(Respuestas respuesta) {
		respuestasService.createRespuesta(respuesta);
		return respuesta;
	}
	
	@DeleteMapping("/eliminar/respuesta/{id}")
	public void deleteRespuesta(@PathVariable(value="id") int id) {
		respuestasService.deleteRespuesta(id);
	}

}
