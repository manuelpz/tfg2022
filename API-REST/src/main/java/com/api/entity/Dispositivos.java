package com.api.entity;

import java.io.Serializable;
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
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;

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
@Table(name = "DISPOSITIVOS")
public class Dispositivos implements Serializable {
	
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name = "ID_DISPOSITIVO")
	private int id;

	@JsonIgnoreProperties({"dispositivos","caracteristicas","caracteristicasf"})
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "ID_TIPO")
	@NotNull
	private Tipos tipo;
	
	@OneToMany(mappedBy = "dispositivo", cascade = CascadeType.ALL)
	@JsonIgnoreProperties(value = {"dispositivo"}, allowSetters = true)
	private List<Resultados> resultados = new ArrayList<>();
	
	@OneToMany(mappedBy = "dispositivo", cascade = CascadeType.ALL)
	@JsonIgnoreProperties(value = {"dispositivo"}, allowSetters = true)
	private List<ResultadosFijos> resultadosf = new ArrayList<>();
	

	@ManyToMany(mappedBy = "dispositivos")
	 private List<Ubicacion> ubicaciones = new ArrayList<>();


}
