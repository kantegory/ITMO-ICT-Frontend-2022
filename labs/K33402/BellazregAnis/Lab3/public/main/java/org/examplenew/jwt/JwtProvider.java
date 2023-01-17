package org.examplenew.jwt;

import org.examplenew.dto.CustomUserDetails;

public interface JwtProvider {

    String generateToken(CustomUserDetails customUserDetails);

    boolean validateToken(String token);

    String getLoginFromToken(String token);
}
