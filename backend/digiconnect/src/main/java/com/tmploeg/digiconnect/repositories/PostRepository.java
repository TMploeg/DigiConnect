package com.tmploeg.digiconnect.repositories;

import com.tmploeg.digiconnect.entities.Post;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface PostRepository extends JpaRepository<Post, UUID> {}
