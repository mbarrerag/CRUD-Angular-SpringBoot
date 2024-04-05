package com.example.crudlab.domain.model;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "municipio")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Municipio {
    @Id
    @Column(name = "id_municipio")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idMunicipio;


    @Column(name = "nombre_municipio")
    private String nombreMunicipio;


    @ManyToOne
    @JoinColumn(name = "id_alcalde")
    @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "idDocumento")
    private Persona alcalde;


    @ManyToOne
    @JoinColumn(name = "id_departamento")
    @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "idDepartamento")
    private Departamento departamento;
}
