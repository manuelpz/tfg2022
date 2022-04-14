package com.api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.api.entity.Opciones;

import com.api.service.OpcionesService;

@RestController
@RequestMapping("/api")
public class OpcionesController {

	@Autowired
	OpcionesService opcionesService;
	
	@GetMapping("/opcion/{id}")
	public Opciones getOpcion(@PathVariable(value = "id") String id){
		return opcionesService.getOpcion(id);
	}
	
	@GetMapping("/opciones")
	public List<Opciones> getAllOpciones() {
		return opcionesService.getAllOpciones();	
	}
	
	@PostMapping("/opcion")
	public Opciones createOpcion(@Validated @RequestBody Opciones opcion) {
		return opcionesService.createOpcion(opcion);
	}
	
	@PutMapping("/opcion")
	public Opciones modifyOpcion(@Validated @RequestBody Opciones opcion) {
		return opcionesService.modifyOpcion(opcion);
	}
	
	@DeleteMapping("/opcion/{id}")
	public void deleteOpcion(@PathVariable(value = "id") String id) {
		opcionesService.deleteOpcion(id);
	}
}
