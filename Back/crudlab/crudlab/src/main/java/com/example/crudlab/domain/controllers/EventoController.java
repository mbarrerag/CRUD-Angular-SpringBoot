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

import com.example.crudlab.domain.Services.EventoService;
import com.example.crudlab.domain.model.Evento;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class EventoController {
    @Autowired
    private EventoService eventoService;

    @GetMapping(value = "/eventos")
    public Page<Evento> getAllEventos(Pageable pageable) {
        return eventoService.getAllEventos(pageable);
    }

    @GetMapping(value = "/eventos/{idEvento}")
    public ResponseEntity<Optional<Evento>> getEvento(@PathVariable Long idEvento) {
        Optional<Evento> evento = eventoService.getEvento(idEvento);
        return new ResponseEntity<Optional<Evento>>(evento, HttpStatus.OK);
    }

    @PutMapping(value = "/eventos/{idEvento}/{lugar}")
    public ResponseEntity<Evento> updateEvento(@PathVariable Long idEvento, @PathVariable Long lugar, @RequestBody Evento updatedEvento) {

        Evento evento = eventoService.getEvento(idEvento).orElseThrow(() -> new RuntimeException("La evento con documento: " + idEvento + " no se encuentra en la Base de Datos"));

        evento.setNombreEvento(updatedEvento.getNombreEvento());

        Evento updatedDBEvento = eventoService.updateEvento(evento, lugar);

        return new ResponseEntity<Evento>(updatedDBEvento, HttpStatus.OK);
    }
    
    @PostMapping(value = "/crearevento/{lugar}")
    public ResponseEntity<Evento> createEvento(@PathVariable Long lugar, @RequestBody Evento newEvento) {
        return new  ResponseEntity<>(eventoService.createEvento(newEvento, lugar), HttpStatus.OK);
    }

    @DeleteMapping(value = "/eliminarevento/{idEvento}")
    public ResponseEntity<Void> eliminarEvento(@PathVariable Long idEvento) {
        eventoService.eliminarEvento(idEvento);
        return ResponseEntity.noContent().build();
    }
}
