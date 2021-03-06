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
import com.api.entity.Caracteristicas;
import com.api.service.CaracteristicasService;

@RestController
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST, RequestMethod.DELETE, RequestMethod.PUT})
@RequestMapping("/api")
public class CaracteristicasController {

	
	@Autowired
	CaracteristicasService caracteristicasService;
	
	@GetMapping("/caracteristica/{id}")
	public Caracteristicas getCaracteristica(@PathVariable(value = "id") int id){
		return caracteristicasService.getCaracteristica(id);
	}
	
	
	@GetMapping("/caracteristicas/tipo/{tipo}")
	public List<Caracteristicas> getCaracteristicasByTipo(@PathVariable(value = "tipo") String tipo){
		return caracteristicasService.getCaracteristicasByTipo(tipo);
	}
	
	@GetMapping("/caracteristicas")
	public List<Caracteristicas> getAllCaracteristicas() {
		return caracteristicasService.getAllCaracteristicas();	
	}
	
	@PostMapping("/caracteristica")
	public ResponseEntity createCaracteristica(@Validated @RequestBody Caracteristicas dispositivo) {
		if(caracteristicasService.existsByCaracteristica(dispositivo.getCaracteristica()))
				return new ResponseEntity(new Mensaje("Esta caracteristica ya existe"), HttpStatus.BAD_REQUEST);
		else {
			caracteristicasService.createCaracteristica(dispositivo);
			return new ResponseEntity(new Mensaje("Caracteristica a??adida"), HttpStatus.CREATED);
		}
	}
	
	@PutMapping("/caracteristica")
	public Caracteristicas modifyCaracteristica(@Validated @RequestBody Caracteristicas dispositivo) {
		return caracteristicasService.modifyCaracteristica(dispositivo);
	}
	
	@DeleteMapping("/caracteristica/{id}")
	public void deleteCaracteristica(@PathVariable(value = "id") int id) {
		caracteristicasService.deleteCaracteristica(id);
	}
}
