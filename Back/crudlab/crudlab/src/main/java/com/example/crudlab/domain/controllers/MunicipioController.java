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

import com.example.crudlab.domain.Services.MunicipioService;
import com.example.crudlab.domain.Services.PersonaService;
import com.example.crudlab.domain.model.Municipio;
import com.example.crudlab.domain.model.Persona;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class MunicipioController {
    
    @Autowired
    private MunicipioService municipioService;

    @Autowired
    private PersonaService personaService;

    @GetMapping(value = "/municipios")
    public ResponseEntity<List<Municipio>> getAllMunicipios() {
        List<Municipio> municipios = municipioService.getAllMunicipios();
        return new ResponseEntity<List<Municipio>>(municipios, HttpStatus.OK);
    }

    @GetMapping(value = "/municipios/{idMunicipio}")
    public ResponseEntity<Optional<Municipio>> getMunicipio(@PathVariable Long idMunicipio) {
        Optional<Municipio> municipio = municipioService.getMunicipio(idMunicipio);
        return new ResponseEntity<Optional<Municipio>>(municipio, HttpStatus.OK);
    }

    @PutMapping(value = "/municipios/{idMunicipio}/{alcalde}")
    public ResponseEntity<Municipio> putMunicipio(@PathVariable Long idMunicipio, @PathVariable Long alcalde, @RequestBody Municipio updatedMunicipio) {
        Municipio municipio = municipioService.getMunicipio(idMunicipio).orElseThrow(() -> new RuntimeException("Municipio no registrado en la BD"));
        Persona nuevoAlcalde = personaService.getPersona(alcalde).orElseThrow(() -> new RuntimeException("Alcalde no registrado en la BD"));

        return new ResponseEntity<Municipio>(municipioService.putMunicipio(municipio, nuevoAlcalde), HttpStatus.OK);
    }
}
