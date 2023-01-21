package org.examplenew.repos;

import org.examplenew.entity.RefreshToken;
import org.examplenew.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

@Repository
public interface RefreshTokenRepository extends JpaRepository<RefreshToken, String> {
    @Transactional
    int deleteByUser(User user);

    RefreshToken findByRefreshToken(String refreshToken);

}
