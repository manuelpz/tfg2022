package com.api.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.ser.std.ToStringSerializer;

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
    @JsonSerialize(using = ToStringSerializer.class)
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


    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(name = "ubicacion_dispositivos",
    joinColumns = @JoinColumn(name = "ID_UBICACION"),
    inverseJoinColumns = @JoinColumn(name = "ID_DISPOSITIVO")
)
	@JsonIgnoreProperties(value = {"resultados","resultadosf"}, allowSetters = true)
    @Builder.Default
    private List<Dispositivos> dispositivos = new ArrayList<>();
}

