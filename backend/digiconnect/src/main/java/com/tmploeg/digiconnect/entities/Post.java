package com.tmploeg.digiconnect.entities;

import jakarta.persistence.*;
import java.util.UUID;

@Entity
public class Post {
  @Id
  @GeneratedValue(strategy = GenerationType.UUID)
  private UUID id;

  private String title;

  @Lob private String content;
}
