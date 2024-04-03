package com.example.crudlab.domain.Services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.crudlab.domain.model.Vehiculo;
import com.example.crudlab.domain.repository.VehiculoRepository;

@Service
public class VehiculoService {
    @Autowired
    private VehiculoRepository vehiculoRepository;

    public List<Vehiculo> getAllVehiculos() {
        return vehiculoRepository.findAll();
    }

    public Optional<Vehiculo> getVehiculo(Long idVehiculo) {
        return vehiculoRepository.findById(idVehiculo);
    }

    public Vehiculo updateVehiculo(Vehiculo vehiculo) {
        return vehiculoRepository.save(vehiculo);
    }

    public Vehiculo createVehiculo(Vehiculo vehiculo) {
        return vehiculoRepository.save(vehiculo);
    }

    public void eliminarVehiculo(Long idVehiculo) {
        vehiculoRepository.deleteById(idVehiculo);
    }
}
