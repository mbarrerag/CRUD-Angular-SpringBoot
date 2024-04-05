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
@Table(name = "departamento")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Departamento {
    @Id
    @Column(name = "id_departamento")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idDepartamento;

    @Column(name = "nombre_departamento")
    private String nombreDepartamento;

    @ManyToOne
    @JoinColumn(name = "id_gobernador")
    @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "idDocumento")
    private Persona gobernador;

    @ManyToOne
    @JoinColumn(name = "id_capital")
    @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "idMunicipio")
    private Municipio capital;
}
