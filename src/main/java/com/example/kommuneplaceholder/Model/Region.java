package com.example.kommuneplaceholder.Model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

import java.util.HashSet;
import java.util.Set;

@Entity
public class Region {

  @Id
  @Column(length = 4)
  private String kode;
  private String navn;
  private String href;

  @OneToMany(mappedBy = "region")
  @JsonBackReference
  private Set<Kommune> kommuner = new HashSet<>();

  public Set<Kommune> getKommuner() {
    return kommuner;
  }

  public String getKode() {
    return kode;
  }

  public String getNavn() {
    return navn;
  }

  public String getHref() {
    return href;
  }

  public void setKode(String kode) {
    this.kode = kode;
  }

  public void setNavn(String navn) {
    this.navn = navn;
  }

  public void setHref(String href) {
    this.href = href;
  }
}
