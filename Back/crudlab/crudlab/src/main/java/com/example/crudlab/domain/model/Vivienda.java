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

    @NotBlank
    private String direccion;

    @NotBlank
    @ManyToOne
    @JoinColumn(name = "id_municipio")
    private Municipio municipio;

    @NotBlank
    @ManyToOne
    @JoinColumn(name = "id_propietario")
    private Persona propietario;
}
