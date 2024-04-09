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

import com.example.crudlab.domain.Services.VehiculoService;
import com.example.crudlab.domain.model.Vehiculo;


@RestController
@CrossOrigin
@RequestMapping("/api")
public class VehiculoController {
    @Autowired
    private VehiculoService vehiculoService;

    @GetMapping(value = "/vehiculos")
    public Page<Vehiculo> getAllVehiculos(Pageable pageable) {
        return vehiculoService.getAllVehiculos(pageable);
    }

    @GetMapping(value = "/vehiculos/{idVehiculo}")
    public ResponseEntity<Optional<Vehiculo>> getVehiculo(@PathVariable Long idVehiculo) {
        Optional<Vehiculo> vehiculo = vehiculoService.getVehiculo(idVehiculo);
        return new ResponseEntity<Optional<Vehiculo>>(vehiculo, HttpStatus.OK);
    }

    @GetMapping(value = "/vehiculosplaca/{placa}")
    public ResponseEntity<Vehiculo> getVehiculoPlaca(@PathVariable String placa) {
        Vehiculo vehiculo = vehiculoService.getVehiculoPlaca(placa);
        return new ResponseEntity<Vehiculo>(vehiculo, HttpStatus.OK);
    }

    @PutMapping(value = "/vehiculos/{idVehiculo}/{idPropietario}")
    public ResponseEntity<Vehiculo> updateVehiculo(@PathVariable Long idVehiculo, @PathVariable Long idPropietario, @RequestBody Vehiculo updatedVehiculo) {

        Vehiculo vehiculo = vehiculoService.getVehiculo(idVehiculo).orElseThrow(() -> new RuntimeException("La vehiculo con documento: " + idVehiculo + " no se encuentra en la Base de Datos"));

        vehiculo.setPlaca(updatedVehiculo.getPlaca());
        vehiculo.setTipoVehiculo(updatedVehiculo.getTipoVehiculo());

        Vehiculo updatedDBVehiculo = vehiculoService.updateVehiculo(vehiculo, idPropietario);

        return new ResponseEntity<Vehiculo>(updatedDBVehiculo, HttpStatus.OK);
    }

    
    @PostMapping(value = "/crearvehiculo/{propietario}")
    public ResponseEntity<Vehiculo> createVehiculo(@PathVariable Long propietario, @RequestBody Vehiculo newVehiculo) {
        return new  ResponseEntity<>(vehiculoService.createVehiculo(newVehiculo, propietario), HttpStatus.OK);
    }

    @DeleteMapping(value = "/eliminarvehiculo/{idVehiculo}")
    public ResponseEntity<Void> eliminarVehiculo(@PathVariable Long idVehiculo) {
        vehiculoService.eliminarVehiculo(idVehiculo);
        return ResponseEntity.noContent().build();
    }
}
