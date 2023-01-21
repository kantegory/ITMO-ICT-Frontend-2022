package org.examplenew.validation;

import org.examplenew.request.PointRequest;

import java.util.Optional;

public interface PointValidatorInter {

    Optional<String> check(PointRequest req);

    Optional<String> checkX(Double x);

    Optional<String> checkY(Double y);

    Optional<String> checkR(Double r);
}
