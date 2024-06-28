package com.tmploeg.digiconnect.controllers;

import com.tmploeg.digiconnect.entities.Post;
import com.tmploeg.digiconnect.repositories.PostRepository;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(ControllerRoutes.POSTS_ROUTE)
@CrossOrigin("${app.cors}")
@RequiredArgsConstructor
public class PostController {
  private final PostRepository postRepository;

  @GetMapping
  public List<Post> getAll() {
    return postRepository.findAll();
  }

  @PostMapping
  public Post create(@RequestBody Post post) {
    return postRepository.save(post);
  }
}
