package com.tmploeg.digiconnect;

import com.tmploeg.digiconnect.entities.Post;
import com.tmploeg.digiconnect.repositories.PostRepository;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class Seeder implements CommandLineRunner {
  private final PostRepository postRepository;

  @Override
  public void run(String... args) throws Exception {
    if (postRepository.count() > 0) {
      return;
    }

    postRepository.saveAll(
        List.of(1, 2, 3, 4, 5).stream()
            .map(
                n ->
                    new Post(
                        "post nr. " + n,
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, "
                            + "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
                            + "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris "
                            + "nisi ut aliquip ex ea commodo consequat. "
                            + "Duis aute irure dolor in reprehenderit in voluptate velit esse "
                            + "cillum dolore eu fugiat nulla pariatur. "
                            + "Excepteur sint occaecat cupidatat non proident, "
                            + "sunt in culpa qui officia deserunt mollit anim id est laborum."))
            .toList());
  }
}
