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
@Table(name = "vivienda")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Vivienda {
    @Id
    @Column(name = "id_vivienda")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idVivienda;

    private String direccion;

    @ManyToOne
    @JoinColumn(name = "id_municipio")
    @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "idMunicipio")
    private Municipio municipio;

    @ManyToOne
    @JoinColumn(name = "id_propietario")
    @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "idDocumento")
    private Persona propietario;
}
