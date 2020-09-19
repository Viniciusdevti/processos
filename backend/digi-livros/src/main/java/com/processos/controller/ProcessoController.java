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
	

	@GetMapping("book")
	public List<Processo> ListBook() {
		return processorepository.findAll();
	}

	@GetMapping("/book/{id}")
	public Processo ListProcessId(@PathVariable(value = "id") long id) {
		return processorepository.findById(id);
	}
	
	
	@PostMapping("/Process")
	public Processo  saveProcess(@RequestBody Processo Process) {
		return processorepository.save(Process);
	}

	@DeleteMapping("/processo")
	public void  deletBook(@RequestBody Processo book) {
		processorepository.delete(book);
	}
	
	@PutMapping("/processo")
	public Processo  editBook(@RequestBody Processo processo) {
		return processorepository.save(processo); 
	}

}
