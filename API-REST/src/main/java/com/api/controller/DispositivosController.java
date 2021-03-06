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

import com.api.entity.Dispositivos;
import com.api.entity.Ubicacion;
/*
import com.api.entity.Ubicacion;
*/
import com.api.service.DispositivosService;

@RestController
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST, RequestMethod.DELETE, RequestMethod.PUT})
@RequestMapping("/api")
public class DispositivosController {

	
	@Autowired
	DispositivosService dispositivosService;
	
	@GetMapping("/dispositivo/tipo/{tipo}")
	public List<Dispositivos> getDispositivo(@PathVariable(value = "tipo") String tipo){
		return dispositivosService.findByTipo(tipo);
	}
	
	@GetMapping("/dispositivo/lastId")
	public Dispositivos getLastId() {
		return dispositivosService.findTopByOrderByIdDesc();	
	}
	
	@GetMapping("/dispositivos")
	public List<Dispositivos> getAllDispositivos() {
		return dispositivosService.getAllDispositivos();	
	}
	
	@GetMapping("/dispositivo/id/{id}")
	public Dispositivos getDispositivosID(@PathVariable(value = "id") int id) {
		return dispositivosService.findById(id);	
	}
	
	@PostMapping("/dispositivo/nuevo")
	public Dispositivos createDispositivo(@Validated @RequestBody Dispositivos dispositivo) {
		return dispositivosService.createDispositivo(dispositivo);
	}
	
	@PutMapping("/dispositivo/actualizar/{id}")
	public Dispositivos modifyDispositivo(@Validated @RequestBody Dispositivos dispositivo) {
		return dispositivosService.modifyDispositivo(dispositivo);
	}
	
	@DeleteMapping("/dispositivo/eliminar/{id}")
	public void deleteTipo(@PathVariable(value = "id") int id) {
		dispositivosService.deleteDispositivo(id);
	}
}
