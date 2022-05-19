package com.api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
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

import com.api.entity.Tipos;
import com.api.service.TiposService;

@RestController
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST, RequestMethod.DELETE, RequestMethod.PUT})
@RequestMapping("/api")
public class TiposController {
	
	@Autowired
	TiposService tiposService;
	
	@GetMapping("/tipo/{tipo}")
	public Tipos getTipo(@PathVariable(value = "tipo") String tipo){
		return tiposService.getTipo(tipo);
	}
	
	@GetMapping("/tipos")
	public List<Tipos> getAllTipos() {
		return tiposService.getAllTipos();	
	}
	
	@PostMapping("/tipo")
	public Tipos createTipo(@Validated @RequestBody Tipos tipo) {
		return tiposService.createTipo(tipo);
	}
	
	@PutMapping("/tipo")
	public Tipos modifyTipo(@Validated @RequestBody Tipos tipo) {
		return tiposService.modifyTipo( tipo);
	}
	
	@DeleteMapping("/tipo/{tipo}")
	public void deleteTipo(@PathVariable(value = "id") int id) {
		tiposService.deleteTipo(id);
	}
	
}
