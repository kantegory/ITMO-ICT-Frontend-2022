package org.examplenew.repos;


import org.examplenew.dto.PointDTO;
import org.examplenew.entity.Point;
import org.examplenew.entity.RefreshToken;
import org.examplenew.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collection;

@Repository
public interface PointRepository extends JpaRepository<Point, Long> {

    @Transactional
    Collection<Point> deleteAllByUser(User user);
    @Transactional
    Collection<Point> findAllByUser(User user);


}
