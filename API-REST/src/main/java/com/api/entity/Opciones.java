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
@Table(name = "OPCIONES")
public class Opciones {

	@Id
	@Column(name = "ID_OPCION")
	private String id_opcion;
	
	@Column(name = "OPCION")
	private String opcion;
	
	//Una opcion puede tener varios resultados
	//Ej: Opcion "1" -> Color rojo; Puede aparecer que varios monitores tengan "color rojo".
	@OneToMany(mappedBy = "opcion", cascade = CascadeType.ALL)
	private List<Resultados> resultados = new ArrayList<>();
	
	//Muchas de estas opciones van a corresponder a una caracteristica
	//Ej: OPCIONES "ROJO, AZUL, VERDE" correponden a la caracteristica "COLOR"
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "ID_CARACTERISTICA")
	private Caracteristicas caracteristica;
}
