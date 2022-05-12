package com.api.entity;


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
import javax.persistence.Table;

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
@Table(name = "RESULTADOS")
public class Resultados {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name = "ID_RESULTADO")
	private int id;
	
	@JsonIgnoreProperties({"tipo", "resultados"})
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "ID_DISPOSITIVO")
	private Dispositivos dispositivo;
	
	@JsonIgnoreProperties({"resultados", "caracteristica"})
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "ID_OPCION")
	private Opciones opcion;
	
	@JsonIgnoreProperties({"tipo", "opciones","resultados"})
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "ID_CARACTERISTICA")
	private Caracteristicas caracteristica;
}
