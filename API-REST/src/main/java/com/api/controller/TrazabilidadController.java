package com.api.controller;

import com.api.entity.Caracteristicas;
import com.api.entity.Trazabilidad;
import com.api.service.TrazabilidadService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST})
@RequestMapping("/api")
public class TrazabilidadController {

    @Autowired
    TrazabilidadService trazabilidadService;

    @GetMapping("/dispositivo/trazabilidad")
    public List<Trazabilidad> getAllTrazabilidades(){
        return trazabilidadService.getAllTrazabilidades();
    }

    @GetMapping("/dispositivo/trazabilidad/{id}")
    public Trazabilidad getTrazabilidad(@PathVariable(value = "id") int id){
        return trazabilidadService.getTrazabilidad(id);
    }
    @GetMapping("/dispositivo/trazabilidad/{dispositivo}")
    public List<Trazabilidad> getTrazabilidadByDispositivo(@PathVariable(value = "dispositivo") String dispositivo){
        return trazabilidadService.getTrazabilidadesByDispositivo(dispositivo);
    }

    @PostMapping("/dispositivo/trazabilidad")
    public Trazabilidad addTrazabilidad(@Validated @RequestBody Trazabilidad trazabilidad){
        return  trazabilidadService.createTrazabilidad(trazabilidad);
    }

    @PutMapping("/dispositivo/trazabilidad")
    public Trazabilidad modifyTrazabilidad(@Validated @RequestBody Trazabilidad trazabilidad){
        return trazabilidadService.modifyTrazabilidad(trazabilidad);
    }

    @DeleteMapping("/dispositivo/trazabilidad/{id}")
    public void deleteTrazabilidad(@PathVariable(value = "id") int id){
        trazabilidadService.deleteTrazabilidad(id);
    }

}
