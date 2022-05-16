package com.api.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

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
@Table(name="TIPOS")
public class Tipos {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name = "ID_TIPO")
	private int id;
	
	@Column(name = "TIPO")
	@NotNull
	@NotBlank
	private String tipo;
	
	@OneToMany(mappedBy = "tipo", cascade = CascadeType.ALL)
	@JsonIgnoreProperties({"caracteristicas","tipo","dispositivos","opciones","resultados"})
	private List<Caracteristicas> caracteristicas = new ArrayList<>();

	@OneToMany(mappedBy = "tipo", cascade = CascadeType.ALL)
	@JsonIgnoreProperties({"tipo","resultados","resultadosf"})
	@Builder.Default
	private List<Dispositivos> dispositivos = new ArrayList<>();

}
