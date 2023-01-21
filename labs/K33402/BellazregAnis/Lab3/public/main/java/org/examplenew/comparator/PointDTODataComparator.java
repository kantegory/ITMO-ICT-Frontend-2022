package org.examplenew.comparator;

import org.apache.logging.log4j.util.PropertySource;
import org.examplenew.dto.PointDTO;
import org.examplenew.entity.Point;

import java.util.Comparator;

public class PointDTODataComparator implements Comparator {

        @Override
        public int compare(Object o1, Object o2) {
            PointDTO p1 = (PointDTO) o1;
            PointDTO p2 = (PointDTO) o2;
            return p1.getCurTime().compareTo(p2.getCurTime()); // use your logic
        }


}
