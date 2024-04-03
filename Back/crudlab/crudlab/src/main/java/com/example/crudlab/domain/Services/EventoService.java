package com.example.crudlab.domain.Services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.crudlab.domain.model.Evento;
import com.example.crudlab.domain.repository.EventoRepository;


@Service
public class EventoService {
    @Autowired
    private EventoRepository eventoRepository;

    public List<Evento> getAllEventos() {
        return eventoRepository.findAll();
    }

    public Optional<Evento> getEvento(Long idEvento) {
        return eventoRepository.findById(idEvento);
    }

    public Evento updateEvento(Evento evento) {
        return eventoRepository.save(evento);
    }

    public Evento createEvento(Evento evento) {
        return eventoRepository.save(evento);
    }

    public void eliminarEvento(Long idEvento) {
        eventoRepository.deleteById(idEvento);
    }
}
