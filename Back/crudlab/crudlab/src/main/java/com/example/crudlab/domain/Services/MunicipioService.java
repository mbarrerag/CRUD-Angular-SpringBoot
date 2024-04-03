package com.example.crudlab.domain.Services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.crudlab.domain.model.Municipio;
import com.example.crudlab.domain.repository.MunicipioRepository;

@Service
public class MunicipioService {
    @Autowired
    private MunicipioRepository municipioRepository;

    public List<Municipio> getAllMunicipios() {
        return municipioRepository.findAll();
    }

    public Optional<Municipio> getMunicipio(Long idMunicipio) {
        return municipioRepository.findById(idMunicipio);
    }
}
