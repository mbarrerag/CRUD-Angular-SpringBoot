package com.example.crudlab.domain.controllers;

import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.crudlab.domain.model.Persona;
import com.example.crudlab.domain.Services.PersonaService;


@RestController
@CrossOrigin
@RequestMapping("/api")
public class PersonaController {
    
    @Autowired
    private PersonaService personaService;

    @GetMapping(value = "/personas")
    public Page<Persona> getAllPersonas(Pageable pageable) {
        return personaService.getAllPersonas(pageable);
    }

    @GetMapping(value = "/personas/{idDocumento}")
    public ResponseEntity<Optional<Persona>> getPersona(@PathVariable Long idDocumento) {
        Optional<Persona> persona = personaService.getPersona(idDocumento);
        return new ResponseEntity<Optional<Persona>>(persona, HttpStatus.OK);
    }

    @PutMapping(value = "/personas/eventos/{idDocumento}/{idEvento}")
    public ResponseEntity<Void> addPersonaEvento(@PathVariable Long idDocumento, @PathVariable Long idEvento, @RequestBody Map<String,Object> requestBody) {

        return personaService.addPersonaEvento(idDocumento, idEvento);
    }

    @PutMapping(value = "/personas/{idDocumento}/{idVivienda}/{idCabezaFamilia}")
    public ResponseEntity<Persona> updatePersona(@PathVariable Long idDocumento, @PathVariable Long idVivienda, @PathVariable Long idCabezaFamilia, @RequestBody Persona updatedPersona) {

        Persona persona = personaService.getPersona(idDocumento).orElseThrow(() -> new RuntimeException("La persona con documento: " + idDocumento + " no se encuentra en la Base de Datos"));

        persona.setNombre1(updatedPersona.getNombre1());
        persona.setNombre2(updatedPersona.getNombre2());
        persona.setApellido1(updatedPersona.getApellido1());
        persona.setApellido2(updatedPersona.getApellido2());
        persona.setSexo(updatedPersona.getSexo());
        persona.setFechaNacimiento(updatedPersona.getFechaNacimiento());

        Persona updatedDBPersona = personaService.updatePersona(persona, idVivienda, idCabezaFamilia);

        return new ResponseEntity<Persona>(updatedDBPersona, HttpStatus.OK);
    }
    
    @PostMapping(value = "/crearpersona/{idVivienda}/{idCabezaFamilia}")
    public ResponseEntity<Persona> createPersona(@PathVariable Long idVivienda, @PathVariable Long idCabezaFamilia, @RequestBody Persona newPersona) {
        return new  ResponseEntity<>(personaService.createPersona(newPersona, idVivienda, idCabezaFamilia), HttpStatus.OK);
    }

    @DeleteMapping(value = "/eliminarpersona/{idDocumento}")
    public ResponseEntity<Void> eliminarPersona(@PathVariable Long idDocumento) {
        personaService.eliminarPersona(idDocumento);
        return ResponseEntity.noContent().build();
    }
}
