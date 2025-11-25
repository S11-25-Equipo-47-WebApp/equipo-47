package com.example.petbackend.features.pet.mapper;

import com.example.petbackend.config.MapStructConfig;
import com.example.petbackend.features.pet.dto.PetDTO;
import com.example.petbackend.features.pet.model.Pet;
import org.mapstruct.*;
import org.mapstruct.factory.Mappers;

@Mapper(config = MapStructConfig.class)
public interface PetMapper {
    Pet toEntity(PetDTO petDTO);
    PetDTO toDTO(Pet pet);
    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    void updatePetFromDTO(PetDTO dto, @MappingTarget Pet entity);
}
