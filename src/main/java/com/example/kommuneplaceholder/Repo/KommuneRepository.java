package com.example.kommuneplaceholder.Repo;
import com.example.kommuneplaceholder.Model.Kommune;
import org.springframework.data.jpa.repository.JpaRepository;

public interface KommuneRepository extends JpaRepository<Kommune, String> {
}