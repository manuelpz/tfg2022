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

import com.api.entity.Resultados;
import com.api.service.ResultadosService;

@RestController
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST, RequestMethod.DELETE, RequestMethod.PUT})
@RequestMapping("/api")
public class ResultadosController {

	@Autowired
	ResultadosService resultadosService;
	
	@GetMapping("/resultado/{id}")
	public List<Resultados> getResultado(@PathVariable(value = "id") String id){
		return resultadosService.findByDispositivo(id);
	}
	
	@GetMapping("/resultados")
	public List<Resultados> getAllResultados() {
		return resultadosService.getAllResultados();	
	}
	
	
	@PostMapping("/resultado")
	public Resultados createResultado(@Validated @RequestBody Resultados resultado) {
		return resultadosService.createResultado(resultado);
	}
	
	@PutMapping("/resultado")
	public Resultados modifyResultado(@Validated @RequestBody Resultados resultado) {
		return resultadosService.modifyResultado(resultado);
	}
	
	@DeleteMapping("/resultado/{id}")
	public void deleteResultado(@PathVariable(value = "id") int id) {
		resultadosService.deleteResultado(id);
	}
}
