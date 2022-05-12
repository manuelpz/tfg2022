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
@Table(name = "CARACTERISTICAS")
public class Caracteristicas {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name = "ID_CARACTERISTICA")
	private int id;
	
	@Column(name = "CARACTERISTICA")
	private String caracteristica;
	
	@JsonIgnoreProperties(value="caracteristicas")
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "ID_TIPO")
	private Tipos tipo;
	
	@OneToMany(mappedBy = "caracteristica", cascade = CascadeType.ALL)
	private List<Opciones> opciones = new ArrayList<>();

	@OneToMany(mappedBy = "caracteristica", cascade = CascadeType.ALL)
	private List<Resultados> resultados = new ArrayList<>();
}