package com.processos.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.processos.models.Processo;

import com.processos.repository.ProcessoRepository;

@RestController
@RequestMapping(value = "/api")

public class ProcessoController {
	
	@Autowired
	ProcessoRepository processorepository;

	

	@GetMapping("/processo")
	public List<Processo> ListProcesso() {
		return processorepository.findAll();
	}

	@GetMapping("/processo/{id}")
	public Processo ListProcessId(@PathVariable(value = "id") long id) {
		return processorepository.findById(id);
	}
	
	
	@PostMapping("/processo")
	public Processo  saveProcess(@RequestBody Processo processo) {
		return processorepository.save(processo);
		
	}

	@DeleteMapping("/processo")
	public void  deletProcesso(@RequestBody Processo processo) {
		processorepository.delete(processo);
	}
	
	@PutMapping("/processo")
	public Processo  editProcesso(@RequestBody Processo processo) {
		return processorepository.save(processo); 
	}

}
