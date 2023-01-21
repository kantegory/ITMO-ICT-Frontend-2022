package org.examplenew.entity;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "refresh_tokens11")
public class RefreshToken {
    @Id
    @Column(unique = true, nullable = false)
    private String refreshToken;

    @OneToOne
    @JoinColumn(name = "userID", referencedColumnName = "userID", unique = true)
    private User user;
}
