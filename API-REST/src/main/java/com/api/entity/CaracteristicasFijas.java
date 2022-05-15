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
@Table(name="CARACTERISTICAS_FIJAS")
public class CaracteristicasFijas {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name= "ID_CARACTERISTICA_FIJA")
	private int id;
	
	@Column(name= "CARARACTERISTICA_FIJA")
	private String caracteristicaf;
	
	@JsonIgnoreProperties({"caracteristicaf"})
	@OneToMany(mappedBy = "caracteristicaf", cascade = CascadeType.ALL)
	private List<ResultadosFijos> resultadosFijos = new ArrayList<>();
}
