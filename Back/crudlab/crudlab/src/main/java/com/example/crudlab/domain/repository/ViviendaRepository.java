package com.example.crudlab.domain.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.crudlab.domain.model.Vivienda;

@Repository
public interface ViviendaRepository extends JpaRepository<Vivienda, Long> {
    
}
