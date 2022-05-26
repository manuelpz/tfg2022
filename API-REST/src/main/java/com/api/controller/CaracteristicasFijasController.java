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
import com.api.entity.CaracteristicasFijas;
import com.api.service.CaracteristicasFijasService;

@RestController
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST, RequestMethod.DELETE, RequestMethod.PUT})
@RequestMapping("/api")
public class CaracteristicasFijasController {
	
	@Autowired
	CaracteristicasFijasService caracteristicasFijasService;

	@GetMapping("/caracteristicafija/{id}")
	public CaracteristicasFijas getCaracteristicaFija(@PathVariable(value = "id") int id){
		return caracteristicasFijasService.getCaracteristicaFija(id);
	}
	
	@GetMapping("/caracteristicasfijas")
	public List<CaracteristicasFijas> getCaracteristicasFijas(){
		return caracteristicasFijasService.getCaracteristicasFijas();
	}
	
	@PostMapping("/nuevo/caracteristicafija")
	public ResponseEntity createCaracteristicaFija(@Validated @RequestBody CaracteristicasFijas caracteristica) {
		if(caracteristicasFijasService.existsByCaracteristicaf(caracteristica.getCaracteristicaf()))
			return new ResponseEntity(new Mensaje("Esta caracteristica ya existe"), HttpStatus.BAD_REQUEST);
	else {
		caracteristicasFijasService.createCaracteristicaFija(caracteristica);
		return new ResponseEntity(new Mensaje("Caracteristica añadida"), HttpStatus.CREATED);
	}
		}
	
	@PutMapping("/actualizar/caracteristicafija")
	public CaracteristicasFijas modifyCaracteristicaFija(CaracteristicasFijas caracteristica) {
		caracteristicasFijasService.createCaracteristicaFija(caracteristica);
		return caracteristica;
	}
	
	@DeleteMapping("/eliminar/caracteristicafija/{id}")
	public void deleteCaracteristicaFiija(@PathVariable(value="id") int id) {
		caracteristicasFijasService.deleteCaracteristicaFija(id);
	}
}
