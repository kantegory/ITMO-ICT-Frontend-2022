package org.examplenew.controller;


import org.examplenew.comparator.PointDTODataComparator;
import org.examplenew.dto.PointDTO;
import org.examplenew.dto.CustomUserDetails;
import org.examplenew.request.GetRequest;
import org.examplenew.request.PointRequest;
import org.examplenew.response.OtherResponseWrapper;
import org.examplenew.service.PointServiceInter;
import org.examplenew.validation.PointValidatorInter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/points/")
public class AreaController {

    private PointServiceInter pointService;
    private PointValidatorInter pointValidator;

    @Autowired
    public AreaController(PointServiceInter pointService,
                          PointValidatorInter pointValidator){
        this.pointService = pointService;
        this.pointValidator = pointValidator;
    }

    @PostMapping("/save")
    public ResponseEntity<?> save(@RequestBody PointRequest pointRequest){
        try {
            if (SecurityContextHolder.getContext().getAuthentication() == null){
                return ResponseEntity.badRequest().body(new OtherResponseWrapper("Not enough right."));
            }
//            System.out.println("auth: " + SecurityContextHolder.getContext().getAuthentication());

            Optional<String> checkPoint = pointValidator.check(pointRequest);
            if (checkPoint.isPresent()) {
//                System.err.println(checkPoint.get());
                return ResponseEntity.badRequest().body(new OtherResponseWrapper(checkPoint.get()));
            }
            Integer userID = ((CustomUserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal()).getUserID();
            Optional<PointDTO> savePointOptional = pointService.savePoint(
                    new PointDTO(
                            pointRequest.getX(),
                            pointRequest.getY(),
                            pointRequest.getR(),
                            userID));
//            System.out.println(!savePointOptional.isPresent());
            if (!savePointOptional.isPresent()) {
                return ResponseEntity.badRequest().body(new OtherResponseWrapper("The point was not saved."));
            }
            return ResponseEntity.ok().body(savePointOptional.get());
        } catch (Exception e){
            return ResponseEntity.badRequest().body(new OtherResponseWrapper(e.getMessage()));
        }
    }


    @PostMapping("get")
    public ResponseEntity<?> get(@RequestBody GetRequest req){
//        System.out.println("req"  + req.getUserID());
        if (SecurityContextHolder.getContext().getAuthentication() == null){
            return ResponseEntity.badRequest().body(new OtherResponseWrapper("Not enough right."));
        }
        List<PointDTO> points = pointService.findAllByUserID(Integer.valueOf(req.getUserID()));
        points.sort(new PointDTODataComparator());
        return ResponseEntity.ok().body(points);
    }

    @PostMapping("clear")
    public ResponseEntity<?> clear(@RequestBody PointRequest pointRequest){
//        System.out.println(pointRequest.getUserID());
        if (SecurityContextHolder.getContext().getAuthentication() == null){
            return ResponseEntity.badRequest().body(new OtherResponseWrapper("Not enough right."));
        }
//        System.out.println("FFDAFA" + pointRequest.getUserID());
        Collection<PointDTO> deletedDTOPoints = pointService.deletePointsByUserID(pointRequest.getUserID());
        return ResponseEntity.ok().body(deletedDTOPoints);
    }


}
