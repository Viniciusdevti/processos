package com.processos.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.processos.models.Processo;

public interface ProcessoRepository extends JpaRepository<Processo, Long> {
	Processo findById(long id);


}
