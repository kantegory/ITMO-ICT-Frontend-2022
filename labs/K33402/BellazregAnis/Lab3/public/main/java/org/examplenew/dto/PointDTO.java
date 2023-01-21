package org.examplenew.dto;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.GeneratedValue;
import java.time.OffsetDateTime;

@Getter
@Setter
@AllArgsConstructor
public class PointDTO {
    private double x;
    private double y;
    private double r;
    private String hit;
    private String curTime;
    private String execTime;
    private String userName;
    private Integer userID;
    private Long pointID;

    public PointDTO(){};

    public PointDTO(double x, double y, double r, Integer userID){
        this.x = x;
        this.y = y;
        this.r = r;
        this.userID = userID;
        checkHit();
    }

    public void checkHit(){
        long startTime = System.nanoTime();
        String fullCurrentTime = OffsetDateTime.now().toString();
        this.curTime = fullCurrentTime.substring(0, 10) + " " + fullCurrentTime.substring(11, 19);

        if (checkCircle() || checkTriangle() || checkRectangle()){
            setHit("true");
        } else {
            setHit("false");
        }
        this.execTime = String.valueOf(System.nanoTime() - startTime);
    }

    private boolean checkCircle(){
        double x = this.x;
        double y = this.y;
        double r = this.r;
        if (r > 0) return x <= 0 && y >= 0 && Math.sqrt(x*x + y*y) <= r/2;

        return x >= 0 && y <= 0 && Math.sqrt(x*x + y*y) <= -r/2;
    }

    private boolean checkTriangle() {
        double x = this.x;
        double y = this.y;
        double r = this.r;
        if (r > 0) return x <= 0 && y <= 0 && y >= (-x - r);
        return x >= 0 && y >= 0 && y <= (-x - r);
    }

    private boolean checkRectangle() {
        double x = this.x;
        double y = this.y;
        double r = this.r;
        if (r > 0) return x >= 0 && y >= 0 && x <= r && y <= r/2;
        return x <= 0 && y <= 0 && x >= r && y >= r/2;
    }

    @Override
    public String toString() {
        return "PointDTO{" +
                "x=" + x +
                ", y=" + y +
                ", r=" + r +
                ", hit=" + hit +
                ", curTime='" + curTime + '\'' +
                ", execTime='" + execTime + '\'' +
                ", userID=" + userID +
                ", pointID=" + pointID +
                '}';
    }
}
