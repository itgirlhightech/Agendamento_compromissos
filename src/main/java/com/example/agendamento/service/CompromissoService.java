package com.example.agendamento.service;

import com.exemplo.agendamento.repository.CompromissoRepository;
import evilyn.project.Compromisso;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;

@Service
public class CompromissoService {

    @Autowired
    private CompromissoRepository compromissoRepository;

    public List<Compromisso> listarTodos() {
        return compromissoRepository.findAll();
    }

    public List<Compromisso> buscarPorId(Long id) {
        return compromissoRepository.findAllById(Collections.singleton(id));
    }

    public  Compromisso salvar(Compromisso compromisso) {
        return compromissoRepository.save(compromisso);
    }

    public void deletarPorId(Long id) {
        compromissoRepository.deleteById(id);
    }
}
