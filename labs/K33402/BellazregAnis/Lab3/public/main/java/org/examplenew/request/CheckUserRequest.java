package org.examplenew.request;


import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class CheckUserRequest {
        private String login;
        private String token;

}
