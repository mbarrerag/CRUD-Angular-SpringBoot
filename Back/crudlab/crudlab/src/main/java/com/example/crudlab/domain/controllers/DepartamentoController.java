package com.example.crudlab.domain.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.crudlab.domain.Services.DepartamentoService;
import com.example.crudlab.domain.model.Departamento;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class DepartamentoController {
    @Autowired
    private DepartamentoService departamentoService;

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
}
