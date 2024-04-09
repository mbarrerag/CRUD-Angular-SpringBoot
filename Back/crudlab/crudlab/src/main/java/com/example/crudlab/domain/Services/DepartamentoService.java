package com.example.crudlab.domain.Services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.crudlab.domain.model.Departamento;
import com.example.crudlab.domain.model.Persona;
import com.example.crudlab.domain.repository.DepartamentoRepository;

@Service
public class DepartamentoService {
    @Autowired
    private DepartamentoRepository departamentoRepository;

    public List<Departamento> getAllDepartamentos() {
        return departamentoRepository.findAll();
    }

    public Optional<Departamento> getDepartamento(Long idDepartamento) {
        return departamentoRepository.findById(idDepartamento);
    }

    public Departamento putDepartamento(Departamento departamento, Persona persona) {
        departamento.setGobernador(persona);
        
        return departamentoRepository.save(departamento);
    }
}
