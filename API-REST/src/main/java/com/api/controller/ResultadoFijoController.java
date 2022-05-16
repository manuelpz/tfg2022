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

import com.api.entity.ResultadosFijos;
import com.api.service.ResultadosFijosService;

@RestController
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST, RequestMethod.DELETE, RequestMethod.PUT})
@RequestMapping("/api")
public class ResultadoFijoController {
	
	@Autowired
	ResultadosFijosService resultadosFijosService;
	
	
	@GetMapping("/resultadosfijos")
	public List<ResultadosFijos> getAllResultados() {
		return resultadosFijosService.getAllResultadosFijos();	
	}
	
	
	@PostMapping("/resultadofijo")
	public ResultadosFijos createResultado(@Validated @RequestBody ResultadosFijos resultadoFijo) {
		return resultadosFijosService.createResultadoFijo(resultadoFijo);
	}
	
	@PutMapping("/nuevo/resultadofijo")
	public ResultadosFijos modifyResultadoFijo(@Validated @RequestBody ResultadosFijos resultadoFijo) {
		return resultadosFijosService.modifyResultadoFijo(resultadoFijo);
	}
	
	@DeleteMapping("/resultadofijo/{id}")
	public void deleteResultadoFijo(@PathVariable(value = "id") int id) {
		resultadosFijosService.deleteResultadoFijo(id);
	}

}
