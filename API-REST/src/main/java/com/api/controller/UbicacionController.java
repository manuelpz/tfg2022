package com.api.controller;

import com.api.entity.Ubicacion;
import com.api.service.UbicacionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST, RequestMethod.DELETE, RequestMethod.PUT})
@RequestMapping("/api")
public class UbicacionController {

    @Autowired
    UbicacionService ubicacionService;

    @GetMapping("/dispositivo/ubicacion")
    public List<Ubicacion> getAllUbicaciones(){
        return ubicacionService.getAllUbicaciones();
    }

    @GetMapping("/dispositivo/ubicacion/{id}")
    public Ubicacion getUbicacion(@PathVariable(value = "id") int id){
        return ubicacionService.getUbicacion(id);
    }

    @PostMapping("/dispositivo/ubicacion")
    public Ubicacion addUbicacion(@Validated @RequestBody Ubicacion ubicacion){
        return  ubicacionService.createUbicacion(ubicacion);
    }

    @PutMapping("/dispositivo/ubicacion")
    public Ubicacion modifyUbicacion(@Validated @RequestBody Ubicacion ubicacion){
        return ubicacionService.modifyUbicacion(ubicacion);
    }

    @DeleteMapping("/dispositivo/ubicacion/{id}")
    public void deleteTrazabilidad(@PathVariable(value = "id") int id){
        ubicacionService.deleteUbicacion(id);
    }


}
