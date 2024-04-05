package com.example.crudlab.domain.model;

import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
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
public class Persona {
    @Id
    @Column(name = "id_documento")
    private Long idDocumento;

    private String nombre1;

    private String nombre2;
    
    private String apellido1;

    private String apellido2;

    private String sexo;

    @Column(name = "fecha_nacimiento")
    private LocalDate fechaNacimiento;

    @ManyToOne
    @JoinColumn(name = "id_vivienda")
    @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "idVivienda")
    private Vivienda vivienda;

    @ManyToOne
    @JoinColumn(name = "id_cabeza_familia")
    @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "idDocumento")
    private Persona cabezaFamilia;

    @ManyToMany(mappedBy = "personas")
    @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "idEvento")
    private Set<Evento> eventos = new HashSet<>();
}
