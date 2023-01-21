package org.examplenew.validation;

import org.examplenew.request.RegisterRequest;
import org.springframework.stereotype.Service;

import java.util.Objects;
import java.util.Optional;


@Service
public class AuthValidator implements AuthValidatorInter {

    @Override
    public Optional<String> defaultCheck(RegisterRequest req){

        if (Objects.equals(req.getUserName().trim(), "") || Objects.equals(req.getUserPassword().trim(), "")) return Optional.of("The name or password cannot be empty.");

        if (req.getUserName().trim().length() < 3 || req.getUserPassword().trim().length() < 3) return Optional.of("The name and password must be longer than 2 characters.");
        

        return Optional.empty();
    }
}
