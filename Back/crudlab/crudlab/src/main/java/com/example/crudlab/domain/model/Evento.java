package com.example.crudlab.domain.model;

import java.util.HashSet;
import java.util.Set;

import javax.validation.constraints.NotBlank;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "evento")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Evento {
    @Id
    @Column(name = "id_evento")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idEvento;

    @Column(name = "nombre_evento")
    private String nombreEvento;

    @NotBlank
    @ManyToOne
    @JoinColumn(name = "id_lugar")
    private Vivienda lugar;

    @ManyToMany
    @JoinTable(
        name = "persona_participa_evento",
        joinColumns = @JoinColumn(name = "id_evento"),
        inverseJoinColumns = @JoinColumn(name = "id_persona")
    )
    private Set<Persona> personas = new HashSet<>();
}
