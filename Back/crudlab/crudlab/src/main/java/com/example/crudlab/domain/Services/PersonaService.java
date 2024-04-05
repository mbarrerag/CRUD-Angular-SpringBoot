package com.example.crudlab.domain.Services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.crudlab.domain.model.Persona;
import com.example.crudlab.domain.model.Vivienda;
import com.example.crudlab.domain.repository.PersonaRepository;
import com.example.crudlab.domain.repository.ViviendaRepository;

@Service
public class PersonaService {
    @Autowired
    private PersonaRepository personaRepository;

    @Autowired
    private ViviendaRepository viviendaRepository;

    public List<Persona> getAllPersonas() {
        return personaRepository.findAll();
    }

    public Optional<Persona> getPersona(Long idDocumento) {
        return personaRepository.findById(idDocumento);
    }

    public Persona updatePersona(Persona persona, Long idVivienda, Long idCabezaFamilia) {
        Vivienda vivienda = viviendaRepository.findById(idVivienda).orElseThrow(() -> new RuntimeException("Id vivienda no existente en la BD"));
        persona.setVivienda(vivienda);
        Persona cabeza = personaRepository.findById(idCabezaFamilia).orElseThrow(() -> new RuntimeException("Id cabeza de familia no existente en la BD"));
        persona.setCabezaFamilia(cabeza);
        return personaRepository.save(persona);
    }

    public Persona createPersona(Persona persona, Long idVivienda, Long idCabezaFamilia) {
        Vivienda vivienda = viviendaRepository.findById(idVivienda).orElseThrow(() -> new RuntimeException("Id vivienda no existente en la BD"));
        persona.setVivienda(vivienda);
        Persona cabeza = personaRepository.findById(idCabezaFamilia).orElseThrow(() -> new RuntimeException("Id cabeza de familia no existente en la BD"));
        persona.setCabezaFamilia(cabeza);
        return personaRepository.save(persona);
    }

    public void eliminarPersona(Long idDocumento) {
        personaRepository.deleteById(idDocumento);
    }
}
