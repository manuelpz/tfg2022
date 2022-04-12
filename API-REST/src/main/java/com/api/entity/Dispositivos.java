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
@Table(name = "DISPOSITIVOS")
public class Dispositivos {
	
	@Id
	@Column(name = "ID_DISPOSITIVO")
	private String id_dispositivo;
	
	//Muchos de estos dispositivos van a corresponder a un tipo
	//Ej: DISPOSITIVOS 1,2,5,7 correponden al tipo "1" -> "MONITOR"
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "ID_TIPO")
	private Tipos tipo;
	
	//Un dispositivo puede tener varias columnas "resultado"
	//Ej: El dispositivo con ID "1", tiene asociadas las columnas "resultado" 1,2,3...
	@OneToMany(mappedBy = "dispositivo", cascade = CascadeType.ALL)
	private List<Resultados> resultados = new ArrayList<>();

	public Dispositivos() {}
	
	public Dispositivos(String id_dispositivo, Tipos tipo, List<Resultados> resultados) {
		this.id_dispositivo = id_dispositivo;
		this.tipo = tipo;
		this.resultados = resultados;
	}

	public String getId_dispositivo() {
		return id_dispositivo;
	}

	public void setId_dispositivo(String id_dispositivo) {
		this.id_dispositivo = id_dispositivo;
	}

	public Tipos getTipo() {
		return tipo;
	}

	public void setTipo(Tipos tipo) {
		this.tipo = tipo;
	}

	public List<Resultados> getResultados() {
		return resultados;
	}

	public void setResultados(List<Resultados> resultados) {
		this.resultados = resultados;
	}

	@Override
	public String toString() {
		return "Dispositivos [id_dispositivo=" + id_dispositivo + ", tipo=" + tipo + ", resultados=" + resultados + "]";
	}
}
