package com.example.crudlab.domain.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.crudlab.domain.model.Evento;

@Repository
public interface EventoRepository extends JpaRepository<Evento, Long> {
    
}
