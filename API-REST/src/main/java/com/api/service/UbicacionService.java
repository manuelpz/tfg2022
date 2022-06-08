package com.api.service;

import com.api.entity.Dispositivos;
import com.api.entity.Ubicacion;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public interface UbicacionService {
    Ubicacion createUbicacion(Ubicacion ubicacion);
    Ubicacion getUbicacion(Integer id);
    List<Ubicacion> getAllUbicaciones();
    void deleteUbicacion(Integer id);
<<<<<<< HEAD
   
=======
<<<<<<< HEAD
   
=======
>>>>>>> 9afad6d2b413b003821da72db197f469fd233e9b
>>>>>>> dc79bd5b5eb1c7179076cf60ba732b9fd0b52365
    Ubicacion modifyUbicacion(Ubicacion ubicacion);

}
