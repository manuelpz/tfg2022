package com.api.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@Entity
@Table(name="TIPOS")
public class Tipos {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name = "ID_TIPO")
	private int id;
	
	@Column(name = "TIPO")
	private String tipo;
	
	
	//Un tipo de dispositivo puede tener varias características
	//Ej: Resolucion, Peso, Color...
	@OneToMany(mappedBy = "tipo", cascade = CascadeType.ALL)
	@JsonIgnoreProperties({"caracteristicas","tipo","dispositivos","opciones","resultados"})
	private List<Caracteristicas> caracteristicas = new ArrayList<>();
	
	//Un tipo puede tener varios dispositivos
	//Ej: TIPO 1 -> DISPOSITIVOS 1,5,7,9...
	//    TIPO 2 -> DISPOSITIVOS 2,3,10...
	@OneToMany(mappedBy = "tipo", cascade = CascadeType.ALL)
	@JsonIgnoreProperties({"tipo","resultados"})
	@Builder.Default
	private List<Dispositivos> dispositivos = new ArrayList<>();

}
