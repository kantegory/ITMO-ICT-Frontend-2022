package org.examplenew.service;

import org.examplenew.dto.PointDTO;
import org.examplenew.entity.Point;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

public interface PointServiceInter {

    Optional<PointDTO> savePoint(PointDTO customPoint);

    List<PointDTO> findAllByUserID(Integer userID);

    Collection<PointDTO> deletePointsByUserID(Integer userID);
}
