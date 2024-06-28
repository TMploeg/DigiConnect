package com.tmploeg.digiconnect.entities;

import jakarta.persistence.*;
import java.util.UUID;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@Getter
public class Post {
  @Id
  @GeneratedValue(strategy = GenerationType.UUID)
  private UUID id;

  private String title;

  @Lob private String content;

  public Post(String title, String content) {
    this.title = title;
    this.content = content;
  }
}
