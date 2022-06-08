package com.api.entity;

<<<<<<< HEAD
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;

=======
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
>>>>>>> 9afad6d2b413b003821da72db197f469fd233e9b
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
<<<<<<< HEAD

import java.io.Serializable;
import java.sql.Date;
import java.time.LocalDate;
=======
import java.sql.Date;
>>>>>>> 9afad6d2b413b003821da72db197f469fd233e9b
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@Entity
@Table(name="UBICACION")
<<<<<<< HEAD
public class Ubicacion implements Serializable {
    private static final long serialVersionUID = 1L;


	@Id
=======
public class Ubicacion {
    @Id
>>>>>>> 9afad6d2b413b003821da72db197f469fd233e9b
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name = "ID_UBICACION")
    private int id;


    @Column(name = "lugar")
    private String lugar;

    @Column(name = "descripcion")
    private String descripcion;

    @Column (name= "fecha")
<<<<<<< HEAD
    private Date localDateTime;
=======
    private LocalDateTime localDateTime;
>>>>>>> 9afad6d2b413b003821da72db197f469fd233e9b

    @Column (name= "fecha_muerte")
    private Date fecha_muerte;

<<<<<<< HEAD
    @JsonBackReference
    @ManyToMany(fetch = FetchType.LAZY,cascade = CascadeType.ALL)
    @JoinTable(name = "ubicacion_dispositivos",
    joinColumns = @JoinColumn(name = "ID_UBICACION"),
    inverseJoinColumns = @JoinColumn(name = "ID_DISPOSITIVO")
)
	@JsonIgnoreProperties({"resultados","resultadosf"})
   // @JoinColumn(name = "ID_DISPOSITIVO")
=======

    @ManyToMany(fetch = FetchType.LAZY,cascade = CascadeType.ALL)
    @JoinColumn(name = "ID_DISPOSITIVO")
>>>>>>> 9afad6d2b413b003821da72db197f469fd233e9b
    private List<Dispositivos> dispositivos = new ArrayList<>();


}
