package com.example.crudlab.domain.controllers;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
@RequestMapping("/api")
public class PersonaController {
    
    @Autowired
    private PersonaService personaService;

    @GetMapping(value = "/personas")
    public ResponseEntity<List<Persona>> getAllPersonas() {
        List<Persona> personas = personaService.getAllPersonas();
        return new ResponseEntity<List<Persona>>(personas, HttpStatus.OK);
    }

    @GetMapping(value = "/personas/{idDocumento}")
    public ResponseEntity<Optional<Persona>> getPersona(@PathVariable Long idDocumento) {
        Optional<Persona> persona = personaService.getPersona(idDocumento);
        return new ResponseEntity<Optional<Persona>>(persona, HttpStatus.OK);
    }

    @PutMapping(value = "/personas/{idDocumento}")
    public ResponseEntity<Persona> updatePersona(@PathVariable Long idDocumento, @RequestBody Persona updatedPersona) {

        Persona persona = personaService.getPersona(idDocumento).orElseThrow(() -> new RuntimeException("La persona con documento: " + idDocumento + " no se encuentra en la Base de Datos"));

        persona.setNombre1(updatedPersona.getNombre1());
        persona.setNombre2(updatedPersona.getNombre2());
        persona.setApellido1(updatedPersona.getApellido1());
        persona.setApellido2(updatedPersona.getApellido2());
        persona.setSexo(updatedPersona.getSexo());
        persona.setFechaNacimiento(updatedPersona.getFechaNacimiento());
        persona.setVivienda(updatedPersona.getVivienda());

        Persona updatedDBPersona = personaService.updatePersona(persona);

        return new ResponseEntity<Persona>(updatedDBPersona, HttpStatus.OK);
    }

    @PutMapping(value = "/personas/{updatedCabezaFamilia}/{idDocumento}")
    public ResponseEntity<Optional<Persona>> updateCabezaFamilia(@PathVariable Long updatedCabezaFamilia, @PathVariable Long idDocumento) {
        boolean result = personaService.updateCabezaFamilia(updatedCabezaFamilia, idDocumento);
        if (result) {
            return new ResponseEntity<Optional<Persona>>(personaService.getPersona(idDocumento), HttpStatus.OK);
        }
        return ResponseEntity.noContent().build();
    }
    
    @PostMapping(value = "/crearpersona")
    public ResponseEntity<Persona> createPersona(@RequestBody Persona newPersona) {
        return new  ResponseEntity<>(personaService.createPersona(newPersona), HttpStatus.OK);
    }

    @DeleteMapping(value = "/eliminarpersona/{idDocumento}")
    public ResponseEntity<Void> eliminarPersona(@PathVariable Long idDocumento) {
        personaService.eliminarPersona(idDocumento);
        return ResponseEntity.noContent().build();
    }
}
