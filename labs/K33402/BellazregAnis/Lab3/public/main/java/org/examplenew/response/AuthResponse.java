package org.examplenew.response;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.io.Serializable;
import java.util.Collection;

@Data
@AllArgsConstructor
public class AuthResponse implements Serializable {
    private String accessToken;
    private String tokenType;
    private String refreshToken;
    private Integer userID;
    private String userName;


    public AuthResponse(String token){
        this.accessToken = token;
    }
}
