package org.examplenew.response;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.awt.*;
import java.io.Serializable;

@Data
@AllArgsConstructor
public class OtherResponseWrapper implements Serializable {
    private String message;

}
