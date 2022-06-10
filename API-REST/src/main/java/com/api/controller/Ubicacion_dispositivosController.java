package com.api.controller;

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


import com.api.entity.Ubicacion_dispositivos;
import com.api.service.Ubicacion_dispositivosService;

@RestController
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST, RequestMethod.DELETE, RequestMethod.PUT})
@RequestMapping("/api")
public class Ubicacion_dispositivosController {

	@Autowired
	Ubicacion_dispositivosService ubiDisposService;
	
	@GetMapping("/ubicacionDispositivo/{id}")
	public Ubicacion_dispositivos getUbiDispo(@PathVariable(value = "id") int id){
		return ubiDisposService.getUbiDispo(id);
	}
	
	@PostMapping("/dispositivo/ubicacionDispositivo")
	public  Ubicacion_dispositivos createUbiDispo(@Validated @RequestBody  Ubicacion_dispositivos ubiDispo) {
		return ubiDisposService.createUbiDispo(ubiDispo);
	}
	
	@PutMapping("/ubicacionDispositivoUpdate")
	public  Ubicacion_dispositivos createUbiDispoUpdate(@Validated @RequestBody  Ubicacion_dispositivos ubiDispo) {
		return ubiDisposService.createUbiDispo(ubiDispo);
	}
	
	@DeleteMapping("/ubicacionDispositivo/{id}")
	public void deleteUbiDispo(@PathVariable(value = "id") int id) {
		ubiDisposService.deleteUbiDispo(id);
	}
}
