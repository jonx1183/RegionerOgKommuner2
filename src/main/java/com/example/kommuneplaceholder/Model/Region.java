package com.example.kommuneplaceholder.Model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Region {

  @Id
  @Column(length = 4)
  private String kode;
  private String navn;
  private String href;

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
