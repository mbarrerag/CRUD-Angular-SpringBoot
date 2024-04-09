package com.example.crudlab.domain.Services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import com.example.crudlab.domain.model.Persona;
import com.example.crudlab.domain.model.Vivienda;
import com.example.crudlab.domain.repository.PersonaForcedRepository;
import com.example.crudlab.domain.repository.PersonaRepository;
import com.example.crudlab.domain.repository.ViviendaRepository;

@Service
public class PersonaService {
    @Autowired
    private PersonaRepository personaRepository;

    @Autowired
    private ViviendaRepository viviendaRepository;

    @Autowired
    private PersonaForcedRepository personaForcedRepository;

    public Page<Persona> getAllPersonas(Pageable pageable) {
        return personaRepository.findAll(pageable);
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

    public ResponseEntity<Void> addPersonaEvento(Long idDocumento, Long idEvento) {
        String sql = "INSERT INTO persona_participa_evento (id_persona, id_evento) VALUES(" + idDocumento + " , " + idEvento + ");";
        return personaForcedRepository.executeSQL(sql);
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
