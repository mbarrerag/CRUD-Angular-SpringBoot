package com.example.crudlab.domain.model;

import javax.validation.constraints.NotBlank;

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

    @NotBlank
    @Column(name = "nombre_municipio")
    private String nombreMunicipio;

    @NotBlank
    @ManyToOne
    @JoinColumn(name = "id_alcalde")
    private Persona alcalde;

    @NotBlank
    @ManyToOne
    @JoinColumn(name = "id_departamento")
    private Departamento departamento;
}
