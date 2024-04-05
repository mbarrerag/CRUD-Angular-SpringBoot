package com.example.crudlab.domain.Services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.crudlab.domain.model.Persona;
import com.example.crudlab.domain.model.Vehiculo;
import com.example.crudlab.domain.repository.PersonaRepository;
import com.example.crudlab.domain.repository.VehiculoRepository;

@Service
public class VehiculoService {
    @Autowired
    private VehiculoRepository vehiculoRepository;

    @Autowired
    private PersonaRepository personaRepository;

    public List<Vehiculo> getAllVehiculos() {
        return vehiculoRepository.findAll();
    }

    public Optional<Vehiculo> getVehiculo(Long idVehiculo) {
        return vehiculoRepository.findById(idVehiculo);
    }

    public Vehiculo updateVehiculo(Vehiculo vehiculo, Long idPropietario) {
        Persona propietario = personaRepository.findById(idPropietario).orElseThrow(() -> new RuntimeException("Persona no registrada en la BD"));
        vehiculo.setPropietario(propietario);
        return vehiculoRepository.save(vehiculo);
    }

    public Vehiculo createVehiculo(Vehiculo vehiculo, Long idPropietario) {
        Persona persona = personaRepository.findById(idPropietario).orElseThrow(() -> new RuntimeException("Persona no existente en la BD"));
        vehiculo.setPropietario(persona);
        return vehiculoRepository.save(vehiculo);
    }

    public void eliminarVehiculo(Long idVehiculo) {
        vehiculoRepository.deleteById(idVehiculo);
    }
}
