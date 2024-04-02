package com.example.crudlab.domain.controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.crudlab.domain.model.Persona;
import com.example.crudlab.domain.Services.PersonaService;


@RestController
@RequestMapping("/api")
public class PersonaController {
    
    @Autowired
    private PersonaService personaService;

    @GetMapping
    public Map<String, String> obtenerJsonConstante() {
        Map<String, String> json = new HashMap<>();
        json.put("hola", "mundo");
        return json;
    }

    @GetMapping("/personas")
    public ResponseEntity<List<Persona>> getAllPersonas() {
        List<Persona> personas = personaService.getAllPersonas();
        return new ResponseEntity<List<Persona>>(personas, HttpStatus.OK);
    }
}
