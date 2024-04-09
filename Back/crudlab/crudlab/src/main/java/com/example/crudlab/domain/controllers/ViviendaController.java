package com.example.crudlab.domain.controllers;

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

import com.example.crudlab.domain.model.Vivienda;

import com.example.crudlab.domain.Services.ViviendaService;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class ViviendaController {
    
    @Autowired
    private ViviendaService viviendaService;

    @GetMapping(value = "/viviendas")
    public Page<Vivienda> getAllViviendas(Pageable pageable) {
        return viviendaService.getAllViviendas(pageable);
    }

    @GetMapping(value = "/viviendas/{idVivienda}")
    public ResponseEntity<Optional<Vivienda>> getVivienda(@PathVariable Long idVivienda) {
        Optional<Vivienda> vivienda = viviendaService.getVivienda(idVivienda);
        return new ResponseEntity<Optional<Vivienda>>(vivienda, HttpStatus.OK);
    }

    @PostMapping(value = "/crearvivienda/{municipio}/{propietario}")
    public ResponseEntity<Vivienda> createVivienda(@PathVariable Long municipio, @PathVariable Long propietario, @RequestBody Vivienda newVivienda) {
        return new  ResponseEntity<>(viviendaService.createVivienda(newVivienda, municipio, propietario), HttpStatus.OK);
    }

    @PutMapping(value = "/viviendas/{idVivienda}/{municipio}/{propietario}")
    public ResponseEntity<Vivienda> updateVivienda(@PathVariable Long idVivienda, @PathVariable Long municipio, @PathVariable Long propietario, @RequestBody Vivienda updatedVivienda) {

        Vivienda vivienda = viviendaService.getVivienda(idVivienda).orElseThrow(() -> new RuntimeException("La Vivienda con Vivienda: " + idVivienda + " no se encuentra en la Base de Datos"));

        vivienda.setDireccion(updatedVivienda.getDireccion());

        Vivienda updatedDBVivienda = viviendaService.updateVivienda(vivienda, municipio, propietario);

        return new ResponseEntity<Vivienda>(updatedDBVivienda, HttpStatus.OK);
    }

    @DeleteMapping(value = "/eliminarvivienda/{idVivienda}")
    public ResponseEntity<Void> eliminarVivienda(@PathVariable Long idVivienda) {
        viviendaService.eliminarVivienda(idVivienda);
        return ResponseEntity.noContent().build();
    }
}
