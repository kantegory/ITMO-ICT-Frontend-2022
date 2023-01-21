package org.examplenew.request;

import lombok.Data;
import lombok.ToString;

import java.io.Serializable;

@Data
@ToString
public class LogInRequest implements Serializable {
    String userName;
    String userPassword;
}
