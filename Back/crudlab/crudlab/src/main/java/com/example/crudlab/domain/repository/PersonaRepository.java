package com.example.crudlab.domain.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.crudlab.domain.model.Persona;

import jakarta.transaction.Transactional;

@Repository
public interface PersonaRepository extends JpaRepository<Persona, Long> {

    public List<Persona> findAll();
    
    public Optional<Persona> findById(Long idDocumento);

    @Transactional
    @Modifying
    @Query(value = "UPDATE persona SET id_cabeza_familia = :updatedCabezaFamilia WHERE id_documento = :idDocumento")
    public int updateCabezaFamilia(@Param("updatedCabezaFamilia") Long updatedCabezaFamilia, @Param("idDocumento") Long idDocumento);
}
