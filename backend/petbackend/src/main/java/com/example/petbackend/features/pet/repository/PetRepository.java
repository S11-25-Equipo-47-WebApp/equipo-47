package com.example.petbackend.features.pet.repository;

import com.example.petbackend.features.pet.model.Pet;
import com.example.petbackend.features.user.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PetRepository extends JpaRepository<Pet, Long> {
    List<Pet> findByOwner(User owner);
    boolean existsByIdAndOwner(Long id, User owner);
}
