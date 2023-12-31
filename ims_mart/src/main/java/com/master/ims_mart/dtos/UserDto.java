package com.master.ims_mart.dtos;

import java.util.HashSet;
import java.util.Set;

import com.master.ims_mart.constants.AppConstants.Sex;

import jakarta.persistence.Enumerated;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class UserDto {

    private Long id;

    @NotEmpty
    @Size(min = 5, message = "User name must be at least 5 chars long!")
    private String userName;

    @Email(message = "User Email must be valid!")
    @Size(min = 8, message = "User Email must be at least 8 chars long!")
    private String userEmail;

    @NotEmpty
    @Size(min = 10, max = 12, message = "User Mobile must be valid!")
    private String userMobile;

    @NotNull
    @Min(value = 0)
    private Integer userAge;

    @Enumerated
    private Sex userSex;

    @NotEmpty
    @NotBlank
    @Size(min = 8, max = 24, message = "User Password must be 8 to 24 chars long!")
    private String userPassword;

    private Set<RoleDto> roles = new HashSet<>();
}
