package com.example.crudlab.domain.Services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.crudlab.domain.model.Evento;
import com.example.crudlab.domain.model.Vivienda;
import com.example.crudlab.domain.repository.EventoRepository;
import com.example.crudlab.domain.repository.ViviendaRepository;


@Service
public class EventoService {
    @Autowired
    private EventoRepository eventoRepository;

    @Autowired
    private ViviendaRepository viviendaRepository;

    public List<Evento> getAllEventos() {
        return eventoRepository.findAll();
    }

    public Optional<Evento> getEvento(Long idEvento) {
        return eventoRepository.findById(idEvento);
    }

    public Evento updateEvento(Evento evento, Long lugar) {
        Vivienda vivienda = viviendaRepository.findById(lugar).orElseThrow(() -> new RuntimeException("Vivienda no existente en la BD"));
        evento.setLugar(vivienda);
        return eventoRepository.save(evento);
    }

    public Evento createEvento(Evento evento, Long lugar) {
        Vivienda vivienda = viviendaRepository.findById(lugar).orElseThrow(() -> new RuntimeException("Vivienda no existente en la BD"));
        evento.setLugar(vivienda);
        return eventoRepository.save(evento);
    }

    public void eliminarEvento(Long idEvento) {
        eventoRepository.deleteById(idEvento);
    }
}
