package com.example.crudlab.domain.Services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.crudlab.domain.model.Vivienda;
import com.example.crudlab.domain.repository.ViviendaRepository;

@Service
public class ViviendaService {
    
    @Autowired
    private ViviendaRepository viviendaRepository;

    public Optional<Vivienda> getVivienda(Long idVivienda) {
        return viviendaRepository.findById(idVivienda);
    }

    public Vivienda createVivienda(Vivienda vivienda) {
        return viviendaRepository.save(vivienda);
    }

    public Vivienda updateVivienda(Vivienda vivienda) {
        return viviendaRepository.save(vivienda);
    }

    public void eliminarVivienda(Long idVivienda) {
        viviendaRepository.deleteById(idVivienda);
    }
}
