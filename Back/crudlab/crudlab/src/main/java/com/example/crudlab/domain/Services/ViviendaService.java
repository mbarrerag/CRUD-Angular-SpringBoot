package com.example.crudlab.domain.Services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.crudlab.domain.model.Municipio;
import com.example.crudlab.domain.model.Persona;
import com.example.crudlab.domain.model.Vivienda;
import com.example.crudlab.domain.repository.MunicipioRepository;
import com.example.crudlab.domain.repository.PersonaRepository;
import com.example.crudlab.domain.repository.ViviendaRepository;

@Service
public class ViviendaService {
    
    @Autowired
    private ViviendaRepository viviendaRepository;

    @Autowired
    private PersonaRepository personaRepository;

    @Autowired
    private MunicipioRepository municipioRepository;

    public Optional<Vivienda> getVivienda(Long idVivienda) {
        return viviendaRepository.findById(idVivienda);
    }

    public Vivienda createVivienda(Vivienda vivienda, Long idMunicipio, Long idPropietario) {
        Municipio municipio = municipioRepository.findById(idMunicipio).orElseThrow(() -> new RuntimeException("Municipio no existente en la BD"));
        vivienda.setMunicipio(municipio);
        Persona propietario = personaRepository.findById(idPropietario).orElseThrow(() -> new RuntimeException("Persona no existente en la BD"));
        vivienda.setPropietario(propietario);
        return viviendaRepository.save(vivienda);
    }

    public Vivienda updateVivienda(Vivienda vivienda) {
        return viviendaRepository.save(vivienda);
    }

    public void eliminarVivienda(Long idVivienda) {
        viviendaRepository.deleteById(idVivienda);
    }
}
