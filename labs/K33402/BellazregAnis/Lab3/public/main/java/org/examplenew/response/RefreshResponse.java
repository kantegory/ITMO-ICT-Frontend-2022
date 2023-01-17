package org.examplenew.response;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.io.Serializable;


@Data
@AllArgsConstructor
public class RefreshResponse implements Serializable {
    private String accessToken;
    private String refreshToken;
    private String tokenType;

}
