package org.examplenew.service;


import lombok.RequiredArgsConstructor;
import org.examplenew.converter.PointDTOConverter;
import org.examplenew.dto.PointDTO;
import org.examplenew.entity.Point;
import org.examplenew.entity.User;
import org.examplenew.repos.PointRepository;
import org.examplenew.repos.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
@RequiredArgsConstructor
public class PointService implements PointServiceInter {
    @Autowired
    private PointRepository pointRepository;
    @Autowired
    private UserRepository userRepository;

    @Override
    public Optional<PointDTO> savePoint(PointDTO customPoint){
        Optional<User> userOptional = userRepository.findById(customPoint.getUserID());
        if (!userOptional.isPresent()){
            return Optional.empty();
        }
        Point point = PointDTOConverter.dtoToEntity(customPoint, userOptional.get());
        Point savedPoint = pointRepository.save(point);
        PointDTO savedPointDTO = PointDTOConverter.entityToDTO(savedPoint);
        return Optional.of(savedPointDTO);
    }

    @Override
    public List<PointDTO> findAllByUserID(Integer userID){
        return PointDTOConverter.listEntityToDTO(pointRepository.findAll());
    }


    @Override
    public Collection<PointDTO> deletePointsByUserID(Integer userID){
        Optional<User> userOptional = userRepository.findById(userID);
        if (!userOptional.isPresent()){
            return Collections.<PointDTO>emptyList();
        }
        Collection<Point> pointList = pointRepository.deleteAllByUser(userRepository.findById(userID).get());
        return PointDTOConverter.listEntityToDTO(pointList);
    }
}


