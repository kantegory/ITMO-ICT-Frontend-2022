package org.examplenew.jwt;

import lombok.extern.java.Log;
import org.examplenew.dto.CustomUserDetails;

import org.examplenew.exception.InvalidTokenException;
import org.examplenew.service.CustomUserDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.GenericFilterBean;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;

@Component
@Log
public class JwtFilter extends GenericFilterBean {

    public static final String AUTHORIZATION = "Authorization";

    @Autowired
    private JwtProvider jwtProvider;

    @Autowired
    @Lazy
    private CustomUserDetailService customUserDetailsService;


    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        String token = getTokenFromRequest((HttpServletRequest) servletRequest);
        try {
            if (token != null && jwtProvider.validateToken(token)) {
                String userLogin = jwtProvider.getLoginFromToken(token);
                CustomUserDetails customUserDetails = customUserDetailsService.loadUserByUsername(userLogin);
                UsernamePasswordAuthenticationToken auth = new UsernamePasswordAuthenticationToken(customUserDetails, null, customUserDetails.getAuthorities());
                SecurityContextHolder.getContext().setAuthentication(auth);
            } else {
                logger.info("Not enough right.");
                SecurityContextHolder.clearContext();
                servletResponse.resetBuffer();
            }
            filterChain.doFilter(servletRequest, servletResponse);

        } catch (InvalidTokenException e){
            logger.info("Not enough right.");
            SecurityContextHolder.clearContext();
            servletResponse.resetBuffer();
        }
    }



    private String getTokenFromRequest(HttpServletRequest request) {
        String bearer = request.getHeader(AUTHORIZATION);
        if (bearer!= null && bearer.startsWith("Bearer ")) {
            return bearer.substring(7);
        }
        return null;
    }
}
