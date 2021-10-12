package br.com.treinaweb.javaediaristas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.treinaweb.javaediaristas.models.Diarista;

public interface DiaristaRepository extends JpaRepository<Diarista, Long> {
    
}
