package org.examplenew.converter;

import org.examplenew.dto.PointDTO;
import org.examplenew.entity.Point;
import org.examplenew.entity.User;

import java.util.Collection;
import java.util.LinkedList;
import java.util.List;
import java.util.Objects;

public class PointDTOConverter {

    public static Point dtoToEntity(PointDTO pointDTO, User user){
        return new Point(
                pointDTO.getX(),
                pointDTO.getY(),
                pointDTO.getR(),
                pointDTO.getCurTime(),
                pointDTO.getExecTime(),
                pointDTO.getHit(),
                user);
    }

    public static PointDTO entityToDTO(Point point){
        return new PointDTO(point.getX(),
                point.getY(),
                point.getR(),
                point.getHit(),
                point.getCurTime(),
                point.getExecTime(),
                point.getUser().getUserName(),
                point.getUser().getUserID(),
                point.getId());

    }

    public static List<PointDTO> listEntityToDTO(Collection<Point> pointList){
        List<PointDTO> listPointDTO = new LinkedList<>();
        for (Point point : pointList){
            listPointDTO.add(entityToDTO(point));
        }
        return listPointDTO;
    }

    public static List<Point> listDTOtoEntity(Collection<PointDTO> pointDTOList, User user){
        List<Point> listPoint = new LinkedList<>();
        for (PointDTO pointDTO : pointDTOList){
            listPoint.add(dtoToEntity(pointDTO, user));
        }
        return listPoint;
    }
}
