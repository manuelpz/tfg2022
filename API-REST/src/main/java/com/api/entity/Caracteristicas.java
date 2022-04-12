package com.api.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "CARACTERISTICAS")
public class Caracteristicas {

	@Id
	@Column(name = "ID_CARACTERISTICA")
	private String id_caracteristica;
	
	@Column(name = "CARACTERISTICA")
	private String caracteristica;
	
	//Muchas de estas caracteristicas van a corresponder a un tipo
	//Ej: Color, Peso y Resolucion van a corresponder al tipo "1" -> "MONITOR"
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "ID_TIPO")
	private Tipos tipo;
	
	//Una caraxteristica puede tener varias opciones
	//Ej: CARACTERISTICA "COLOR" puede tener las opciones "VERDE, ROJO, AZUL.."
	@OneToMany(mappedBy = "caracteristica", cascade = CascadeType.ALL)
	private List<Opciones> opciones = new ArrayList<>();
	
	//Una caraxteristica puede tener varios resultados
	//Ej: CARACTERISTICA "COLOR" puede aparecer en las columnas RESULTADOS "1,2,3..."
	@OneToMany(mappedBy = "caracteristica", cascade = CascadeType.ALL)
	private List<Resultados> resultados = new ArrayList<>();
	
	
}
