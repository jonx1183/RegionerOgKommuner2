package com.example.kommuneplaceholder.Controller;

import com.example.kommuneplaceholder.Model.Region;
import com.example.kommuneplaceholder.Repo.RegionRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class RegionController {

  @Autowired
  RegionRepo regionRepo;

  @GetMapping("/regioner")
  public List<Region> students() {
    return regionRepo.findAll();
  }

  @PostMapping("/region")
  @ResponseStatus(HttpStatus.CREATED)
  public Region postStudent(@RequestBody Region region) {
    System.out.println(region);
    return regionRepo.save(region);
  }


}
