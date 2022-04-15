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

import com.api.entity.Caracteristicas;
import com.api.service.CaracteristicasService;

@RestController
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST})
@RequestMapping("/api")
public class CaracteristicasController {

	
	@Autowired
	CaracteristicasService caracteristicasService;
	
	@GetMapping("/caracteristica/{id}")
	public Caracteristicas getCaracteristica(@PathVariable(value = "id") String id){
		return caracteristicasService.getCaracteristica(id);
	}
	
	@GetMapping("/caracteristicas")
	public List<Caracteristicas> getAllCaracteristicas() {
		return caracteristicasService.getAllCaracteristicas();	
	}
	
	@PostMapping("/caracteristica")
	public Caracteristicas createCaracteristica(@Validated @RequestBody Caracteristicas dispositivo) {
		return caracteristicasService.createCaracteristica(dispositivo);
	}
	
	@PutMapping("/caracteristica")
	public Caracteristicas modifyCaracteristica(@Validated @RequestBody Caracteristicas dispositivo) {
		return caracteristicasService.modifyCaracteristica(dispositivo);
	}
	
	@DeleteMapping("/caracteristica/{id}")
	public void deleteCaracteristica(@PathVariable(value = "id") String id) {
		caracteristicasService.deleteCaracteristica(id);
	}
}
