package org.examplenew.request;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@AllArgsConstructor
public class PointRequest implements Serializable {
    Double x;
    Double y;
    Double r;
    Integer userID;
}
