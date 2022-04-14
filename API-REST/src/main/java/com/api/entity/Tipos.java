package com.api.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@Entity
@Table(name="TIPOS")
public class Tipos {
	
	@Id
	@Column(name = "ID_TIPO")
	private String id_tipo;
	
	@Column(name = "TIPO")
	private String tipo;
	
	
	//Un tipo de dispositivo puede tener varias características
	//Ej: Resolucion, Peso, Color...
	@OneToMany(mappedBy = "tipo", cascade = CascadeType.ALL)
	@JsonIgnoreProperties(value = "caracteristicas")
	private List<Caracteristicas> caracteristicas = new ArrayList<>();
	
	//Un tipo puede tener varios dispositivos
	//Ej: TIPO 1 -> DISPOSITIVOS 1,5,7,9...
	//    TIPO 2 -> DISPOSITIVOS 2,3,10...
	@OneToMany(mappedBy = "tipo", cascade = CascadeType.ALL)
	private List<Dispositivos> dispositivos = new ArrayList<>();

	public Tipos() {}
	
	public Tipos(String id_tipo, String tipo, List<Caracteristicas> caracteristicas, List<Dispositivos> dispositivos) {
		this.id_tipo = id_tipo;
		this.tipo = tipo;
		this.caracteristicas = caracteristicas;
		this.dispositivos = dispositivos;
	}

	public String getId_tipo() {
		return id_tipo;
	}

	public void setId_tipo(String id_tipo) {
		this.id_tipo = id_tipo;
	}

	public String getTipo() {
		return tipo;
	}

	public void setTipo(String tipo) {
		this.tipo = tipo;
	}
	
	public List<Caracteristicas> getCaracteristicas() {
		return caracteristicas;
	}

	public void setCaracteristicas(List<Caracteristicas> caracteristicas) {
		this.caracteristicas = caracteristicas;
	}

	public List<Dispositivos> getDispositivos() {
		return dispositivos;
	}

	public void setDispositivos(List<Dispositivos> dispositivos) {
		this.dispositivos = dispositivos;
	}

	@Override
	public String toString() {
		return "Tipos [id_tipo=" + id_tipo + ", tipo=" + tipo + ", caracteristicas=" + caracteristicas
				+ ", dispositivos=" + dispositivos + "]";
	}
}
