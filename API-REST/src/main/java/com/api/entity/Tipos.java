package com.api.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

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
	private List<Caracteristicas> caracteristicas = new ArrayList<>();
	
	//Un tipo puede tener varios dispositivos
	//Ej: TIPO 1 -> DISPOSITIVOS 1,5,7,9...
	//    TIPO 2 -> DISPOSITIVOS 2,3,10...
	@OneToMany(mappedBy = "tipo", cascade = CascadeType.ALL)
	private List<Dispositivos> dispositivos = new ArrayList<>();
	
	
}
