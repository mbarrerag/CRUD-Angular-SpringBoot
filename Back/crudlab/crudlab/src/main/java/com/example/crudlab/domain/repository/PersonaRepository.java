package com.example.crudlab.domain.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.crudlab.domain.model.Persona;

@Repository
public interface PersonaRepository extends JpaRepository<Persona, Long> {

    public List<Persona> findAll();
    
    public Optional<Persona> findById(Long idDocumento);
}
