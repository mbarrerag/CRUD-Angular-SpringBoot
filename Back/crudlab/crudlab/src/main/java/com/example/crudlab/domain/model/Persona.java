package com.example.crudlab.domain.model;

import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

import javax.validation.constraints.NotBlank;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "persona")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "idDocumento")
public class Persona {
    @Id
    @Column(name = "id_documento")
    private Long idDocumento;

    @NotBlank
    private String nombre1;

    private String nombre2;
    
    @NotBlank
    private String apellido1;

    @NotBlank
    private String apellido2;

    @NotBlank
    private String sexo;

    @NotBlank
    @Column(name = "fecha_nacimiento")
    private LocalDate fechaNacimiento;

    @ManyToOne
    @JoinColumn(name = "id_vivienda")
    private Vivienda vivienda;

    @ManyToOne
    @JoinColumn(name = "id_cabeza_familia")
    @JsonManagedReference
    @JsonBackReference
    private Persona cabezaFamilia;

    @ManyToMany(mappedBy = "personas")
    private Set<Evento> eventos = new HashSet<>();
}
