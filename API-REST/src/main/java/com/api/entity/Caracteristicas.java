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
@Table(name = "CARACTERISTICAS")
public class Caracteristicas {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name = "ID_CARACTERISTICA")
	private int id;
	
	@Column(name = "CARACTERISTICA")
	private String caracteristica;
	
	//Muchas de estas caracteristicas van a corresponder a un tipo
	//Ej: Color, Peso y Resolucion van a corresponder al tipo "1" -> "MONITOR"
	@JsonIgnoreProperties(value="caracteristicas")
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

	
	public Caracteristicas() {}
	
	public Caracteristicas(int id, String caracteristica, Tipos tipo, List<Opciones> opciones,
			List<Resultados> resultados) {
		this.id = id;
		this.caracteristica = caracteristica;
		this.tipo = tipo;
		this.opciones = opciones;
		this.resultados = resultados;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getCaracteristica() {
		return caracteristica;
	}

	public void setCaracteristica(String caracteristica) {
		this.caracteristica = caracteristica;
	}

	public Tipos getTipo() {
		return tipo;
	}

	public void setTipo(Tipos tipo) {
		this.tipo = tipo;
	}

	public List<Opciones> getOpciones() {
		return opciones;
	}

	public void setOpciones(List<Opciones> opciones) {
		this.opciones = opciones;
	}

	public List<Resultados> getResultados() {
		return resultados;
	}

	public void setResultados(List<Resultados> resultados) {
		this.resultados = resultados;
	}

	@Override
	public String toString() {
		return "Caracteristicas [id_caracteristica=" + id + ", caracteristica=" + caracteristica
				+ ", tipo=" + tipo + ", opciones=" + opciones + ", resultados=" + resultados + "]";
	}	
}
