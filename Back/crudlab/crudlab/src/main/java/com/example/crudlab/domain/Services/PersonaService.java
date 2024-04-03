package com.example.crudlab.domain.Services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.crudlab.domain.model.Persona;
import com.example.crudlab.domain.repository.PersonaRepository;

@Service
public class PersonaService {
    @Autowired
    private PersonaRepository personaRepository;

    public List<Persona> getAllPersonas() {
        return personaRepository.findAll();
    }

    public Optional<Persona> getPersona(Long idDocumento) {
        return personaRepository.findById(idDocumento);
    }

    public Persona updatePersona(Persona persona) {
        return personaRepository.save(persona);
    }

    public boolean updateCabezaFamilia(Long updatedCabezaFamilia, Long idDocumento) {
        int updatedRegisters = personaRepository.updateCabezaFamilia(updatedCabezaFamilia, idDocumento);
        return updatedRegisters > 0;
    }

    public Persona createPersona(Persona persona) {
        return personaRepository.save(persona);
    }

    public void eliminarPersona(Long idDocumento) {
        personaRepository.deleteById(idDocumento);
    }
}
