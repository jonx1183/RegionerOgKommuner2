package com.example.kommuneplaceholder.Controller;

import com.example.kommuneplaceholder.Model.Kommune;
import com.example.kommuneplaceholder.Repo.KommuneRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@CrossOrigin
public class KommuneRestController {

  @Autowired
  KommuneRepository kommuneRepository;

  @GetMapping("/kommuner")
  public List<Kommune> getAllRegions() {
    return kommuneRepository.findAll();
  }

  @PostMapping("/kommune")
  @ResponseStatus(HttpStatus.CREATED)
  public Kommune postRegion(@RequestBody Kommune kommune) {
    System.out.println(kommune);
    return kommuneRepository.save(kommune);
  }



}

