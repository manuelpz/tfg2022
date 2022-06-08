package com.api.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;


import java.io.Serializable;
import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@Entity
@Table(name="UBICACION")
public class Ubicacion implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name = "ID_UBICACION")
    private int id;


    @Column(name = "lugar")
    private String lugar;

    @Column(name = "descripcion")
    private String descripcion;

    @Column (name= "fecha")
    private Date localDateTime;

    @Column (name= "fecha_muerte")
    private Date fecha_muerte;


    @ManyToMany(fetch = FetchType.LAZY,cascade = CascadeType.ALL)
    @JoinTable(name = "ubicacion_dispositivos",
    joinColumns = @JoinColumn(name = "ID_UBICACION"),
    inverseJoinColumns = @JoinColumn(name = "ID_DISPOSITIVO")
)
	@JsonIgnoreProperties({"resultados","resultadosf"})
    private List<Dispositivos> dispositivos = new ArrayList<>();
}

