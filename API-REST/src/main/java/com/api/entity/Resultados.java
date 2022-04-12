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

	
	public Resultados() {}
	
	public Resultados(String id_resultados, Dispositivos dispositivo, Opciones opcion, Caracteristicas caracteristica) {
		this.id_resultados = id_resultados;
		this.dispositivo = dispositivo;
		this.opcion = opcion;
		this.caracteristica = caracteristica;
	}

	public String getId_resultados() {
		return id_resultados;
	}

	public void setId_resultados(String id_resultados) {
		this.id_resultados = id_resultados;
	}

	public Dispositivos getDispositivo() {
		return dispositivo;
	}

	public void setDispositivo(Dispositivos dispositivo) {
		this.dispositivo = dispositivo;
	}

	public Opciones getOpcion() {
		return opcion;
	}

	public void setOpcion(Opciones opcion) {
		this.opcion = opcion;
	}

	public Caracteristicas getCaracteristica() {
		return caracteristica;
	}

	public void setCaracteristica(Caracteristicas caracteristica) {
		this.caracteristica = caracteristica;
	}

	@Override
	public String toString() {
		return "Resultados [id_resultados=" + id_resultados + ", dispositivo=" + dispositivo + ", opcion=" + opcion
				+ ", caracteristica=" + caracteristica + "]";
	}
}
