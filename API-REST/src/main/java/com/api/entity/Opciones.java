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

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@Entity
@Table(name = "OPCIONES")
public class Opciones {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name = "ID_OPCION")
	private int id_opcion;
	
	@Column(name = "OPCION")
	private String opcion;
	
	//Una opcion puede tener varios resultados
	//Ej: Opcion "1" -> Color rojo; Puede aparecer que varios monitores tengan "color rojo".
	@OneToMany(mappedBy = "opcion", cascade = CascadeType.ALL)
	private List<Resultados> resultados = new ArrayList<>();
	
	//Muchas de estas opciones van a corresponder a una caracteristica
	//Ej: OPCIONES "ROJO, AZUL, VERDE" correponden a la caracteristica "COLOR"
	@JsonIgnoreProperties({"tipo", "opciones"})
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "ID_CARACTERISTICA")
	private Caracteristicas caracteristica;

	public Opciones() {}
	
	public Opciones(int id_opcion, String opcion, List<Resultados> resultados, Caracteristicas caracteristica) {
		this.id_opcion = id_opcion;
		this.opcion = opcion;
		this.resultados = resultados;
		this.caracteristica = caracteristica;
	}

	public int getId_opcion() {
		return id_opcion;
	}

	public void setId_opcion(int id_opcion) {
		this.id_opcion = id_opcion;
	}

	public String getOpcion() {
		return opcion;
	}

	public void setOpcion(String opcion) {
		this.opcion = opcion;
	}

	public List<Resultados> getResultados() {
		return resultados;
	}

	public void setResultados(List<Resultados> resultados) {
		this.resultados = resultados;
	}

	public Caracteristicas getCaracteristica() {
		return caracteristica;
	}

	public void setCaracteristica(Caracteristicas caracteristica) {
		this.caracteristica = caracteristica;
	}

	@Override
	public String toString() {
		return "Opciones [id_opcion=" + id_opcion + ", opcion=" + opcion + ", resultados=" + resultados
				+ ", caracteristica=" + caracteristica + "]";
	}
}
