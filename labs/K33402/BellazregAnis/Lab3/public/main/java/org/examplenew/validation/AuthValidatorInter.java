package org.examplenew.validation;

import org.examplenew.request.RegisterRequest;

import java.util.Optional;

public interface AuthValidatorInter {

    Optional<String> defaultCheck(RegisterRequest req);
}
