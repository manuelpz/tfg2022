package com.api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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

import com.api.dto.Mensaje;
import com.api.entity.Opciones;

import com.api.service.OpcionesService;

@RestController
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST, RequestMethod.DELETE, RequestMethod.PUT})
@RequestMapping("/api")
public class OpcionesController {

	@Autowired
	OpcionesService opcionesService;
	
	@GetMapping("/opcion/{id}")
	public Opciones getOpcion(@PathVariable(value = "id") int id){
		return opcionesService.getOpcion(id);
	}
	
	@GetMapping("/opcion/tipo/{id}")
	public List<Opciones> getOpcionesByCaracteristicaId(@PathVariable(value = "id") int id){
		return opcionesService.getOpcionesByCaracteristicaId(id);
	}
	
	@GetMapping("/opciones")
	public List<Opciones> getAllOpciones() {
		return opcionesService.getAllOpciones();	
	}
	
	@PostMapping("/opcion")
	public ResponseEntity createOpcion(@Validated @RequestBody Opciones opcion) {
		if(opcionesService.existsByOpcion(opcion.getOpcion()))
			return new ResponseEntity(new Mensaje("Esta opcion ya existe"), HttpStatus.BAD_REQUEST);
		else {
			opcionesService.createOpcion(opcion);
			return new ResponseEntity(new Mensaje("Opcion añadida"), HttpStatus.CREATED);
			}
	}
	
	@PutMapping("/opcion")
	public Opciones modifyOpcion(@Validated @RequestBody Opciones opcion) {
		return opcionesService.modifyOpcion(opcion);
	}
	
	@DeleteMapping("/opcion/{id}")
	public void deleteOpcion(@PathVariable(value = "id") int id) {
		opcionesService.deleteOpcion(id);
	}
}
