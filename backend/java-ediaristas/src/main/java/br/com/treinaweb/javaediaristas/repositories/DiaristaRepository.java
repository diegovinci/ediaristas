package br.com.treinaweb.javaediaristas.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.treinaweb.javaediaristas.models.Diarista;

public interface DiaristaRepository extends JpaRepository<Diarista, Long> {
    
    List<Diarista> findByCodigoIbge(String codigoIbge);

}
