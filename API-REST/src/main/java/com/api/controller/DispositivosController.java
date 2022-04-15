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
import com.api.service.DispositivosService;

@RestController
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST})
@RequestMapping("/api")
public class DispositivosController {

	
	@Autowired
	DispositivosService dispositivosService;
	
	@GetMapping("/dispositivo/{id}")
	public Dispositivos getDispositivo(@PathVariable(value = "id") String id){
		return dispositivosService.getDispositivo(id);
	}
	
	@GetMapping("/dispositivos")
	public List<Dispositivos> getAllDispositivos() {
		return dispositivosService.getAllDispositivos();	
	}
	
	@PostMapping("/dispositivo")
	public Dispositivos createDispositivo(@Validated @RequestBody Dispositivos dispositivo) {
		return dispositivosService.createDispositivo(dispositivo);
	}
	
	@PutMapping("/dispositivo/{id}")
	public Dispositivos modifyDispositivo(@Validated @RequestBody Dispositivos dispositivo) {
		return dispositivosService.modifyDispositivo(dispositivo);
	}
	
	@DeleteMapping("/dispositivo/{id}")
	public void deleteTipo(@PathVariable(value = "tipo") String id) {
		dispositivosService.deleteDispositivo(id);
	}
}
