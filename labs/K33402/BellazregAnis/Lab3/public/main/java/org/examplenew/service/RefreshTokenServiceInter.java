package org.examplenew.service;

import org.examplenew.entity.RefreshToken;

import java.util.Optional;

public interface RefreshTokenServiceInter {

    Optional<String> create(Integer userID);

    int deleteByUserID(Integer userID);

    Optional<String> updateRefreshToken(Integer userID);

    Optional<RefreshToken> findByRefreshTokenString(String refreshTokenString);


}
