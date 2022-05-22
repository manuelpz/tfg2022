package com.api.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.sql.Date;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@Entity
@Table(name="TRAZABILIDAD")
public class Trazabilidad {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name = "ID_TRAZABILIDAD")
    private int id;

    //Puede que tenga que cambiarlo en un futuro para que sea más purista ...
    @Column(name = "Lugar")
    private String lugar;

    @OneToMany(cascade = CascadeType.ALL)
    private List<Dispositivos> dispositivos = new ArrayList<>();

    @Column(name = "fecha_de_vida")
    private LocalDateTime datestart;

    @Column(name = "fecha_muerte")
    private Date dateend;
}
