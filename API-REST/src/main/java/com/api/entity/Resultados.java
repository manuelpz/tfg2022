package com.api.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "RESULTADOS")
public class Resultados {

	@Id
	@Column(name = "ID_RESULTADOS")
	private String id_resultados;
	
	//Muchos de estos resultados van a corresponder a una id de dispositivo
	//Ej: RESULTADOS CON ID 1,2,3 correponden al dispositivo con ID "1"
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "ID_DISPOSITIVO")
	private Dispositivos dispositivo;
	
	//Muchos de estos resultados van a corresponder a una id de opciones
	//Ej: RESULTADOS CON ID 1,2,3 correponden a la opcion con ID "1"
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "ID_OPCION")
	private Opciones opcion;
	
	//Muchos de estos resultados van a corresponder a una id de caracteristicas
	//Ej: RESULTADOS CON ID 1,2,3 correponden a la carcteristica con ID "1"
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "ID_CARACTERISTICA")
	private Caracteristicas caracteristica;
}
