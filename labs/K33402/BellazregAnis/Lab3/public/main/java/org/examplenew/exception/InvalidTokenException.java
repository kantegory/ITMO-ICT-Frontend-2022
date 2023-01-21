package org.examplenew.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.http.HttpStatus;

@AllArgsConstructor
@Getter
public class InvalidTokenException extends RuntimeException{

    private String message;
}
