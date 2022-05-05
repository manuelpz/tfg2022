package com.api.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

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
@Table(name = "DISPOSITIVOS")
public class Dispositivos {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name = "ID_DISPOSITIVO")
	private int id;
	
	//Muchos de estos dispositivos van a corresponder a un tipo
	//Ej: DISPOSITIVOS 1,2,5,7 correponden al tipo "1" -> "MONITOR"
	@JsonIgnoreProperties({"dispositivos","caracteristicas"})
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "ID_TIPO")
	@NotNull
	private Tipos tipo;
	
	//Un dispositivo puede tener varias columnas "resultado"
	//Ej: El dispositivo con ID "1", tiene asociadas las columnas "resultado" 1,2,3...
	@OneToMany(mappedBy = "dispositivo", cascade = CascadeType.ALL)
	private List<Resultados> resultados = new ArrayList<>();
}
