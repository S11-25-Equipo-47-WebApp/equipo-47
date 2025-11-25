package com.example.petbackend.features.pet.dto;

import jakarta.validation.constraints.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
public class PetDTO {
    private String name;
    private String species;
    private String breed;
    private LocalDate birthDate;
    private Double weight;
    private String color;
    private String feeding;
    private boolean neutered;
    private String notes;
}
