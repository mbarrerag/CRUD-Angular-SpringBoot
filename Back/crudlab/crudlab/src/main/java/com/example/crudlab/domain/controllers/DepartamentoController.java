package com.example.crudlab.domain.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.crudlab.domain.Services.DepartamentoService;
import com.example.crudlab.domain.Services.PersonaService;
import com.example.crudlab.domain.model.Departamento;
import com.example.crudlab.domain.model.Persona;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class DepartamentoController {
    @Autowired
    private DepartamentoService departamentoService;

    @Autowired
    private PersonaService personaService;

    @GetMapping(value = "/departamentos")
    public ResponseEntity<List<Departamento>> getAllDepartamentos() {
        List<Departamento> departamentos = departamentoService.getAllDepartamentos();
        return new ResponseEntity<List<Departamento>>(departamentos, HttpStatus.OK);
    }

    @GetMapping(value = "/departamentos/{idDepartamento}")
    public ResponseEntity<Optional<Departamento>> getDepartamento(@PathVariable Long idDepartamento) {
        Optional<Departamento> departamento = departamentoService.getDepartamento(idDepartamento);
        return new ResponseEntity<Optional<Departamento>>(departamento, HttpStatus.OK);
    }

    @PutMapping(value = "/departamentos/{idDepartamento}/{gobernador}")
    public ResponseEntity<Departamento> putDepartamento(@PathVariable Long idDepartamento, @PathVariable Long gobernador, @RequestBody Departamento updatedDepartamento) {
        Departamento departamento = departamentoService.getDepartamento(idDepartamento).orElseThrow(() -> new RuntimeException("Departamento no registrado en la BD"));
        Persona nuevoAlcalde = personaService.getPersona(gobernador).orElseThrow(() -> new RuntimeException("Alcalde no registrado en la BD"));

        return new ResponseEntity<Departamento>(departamentoService.putDepartamento(departamento, nuevoAlcalde), HttpStatus.OK);
    }
}
