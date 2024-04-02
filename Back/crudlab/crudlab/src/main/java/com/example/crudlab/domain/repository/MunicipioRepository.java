package com.example.crudlab.domain.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.crudlab.domain.model.Municipio;

@Repository
public interface MunicipioRepository extends JpaRepository<Municipio, Long> {
    
}
