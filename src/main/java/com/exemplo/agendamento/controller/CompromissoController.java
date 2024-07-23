package com.exemplo.agendamento.controller;

import com.example.agendamento.service.CompromissoService;
import evilyn.project.Compromisso;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/compromissos")
@CrossOrigin(origins = "http://localhost:3000")
public class CompromissoController {

    @Autowired
    private CompromissoService compromissoService;

    @GetMapping
    public List<Compromisso> listarTodos() {
        return compromissoService.listarTodos();
    }

    @GetMapping( "/{id}")
    public List<Compromisso> buscarPorId(@PathVariable Long id) {
        return compromissoService.buscarPorId(id);
    }

    @PostMapping
    public Compromisso salvar(@RequestBody Compromisso compromisso) {
        return compromissoService.salvar(compromisso);
    }

    @DeleteMapping("/{id}")
    public void deletarPorId(@PathVariable Long id) {
        compromissoService.deletarPorId(id);
    }

}
