package com.example.crudlab.domain.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class PersonaForcedRepository {
    @Autowired
    private JdbcTemplate jdbcTemplate;

    public ResponseEntity<Void> executeSQL(String sql) {
        jdbcTemplate.execute(sql);
        return ResponseEntity.noContent().build();
    }
}
