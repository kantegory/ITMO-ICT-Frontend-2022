package org.examplenew.config;


import lombok.RequiredArgsConstructor;
import org.examplenew.entity.UserRole;
import org.examplenew.jwt.JwtFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;

import javax.servlet.http.HttpServletRequest;

@Configuration
@EnableWebSecurity
@CrossOrigin
@RequiredArgsConstructor
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private JwtFilter jwtFilter;

    @Override
    protected void configure(HttpSecurity http) throws Exception {
     http.cors().configurationSource(new CorsConfigurationSource() {
         @Override
         public CorsConfiguration getCorsConfiguration(HttpServletRequest request) {
             return new CorsConfiguration().applyPermitDefaultValues();
         }
     });

        http
                .httpBasic().disable()
                .csrf().disable()
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .authorizeRequests()
                .antMatchers("/users/**").permitAll()
                .antMatchers("/points/**").hasAnyAuthority(UserRole.ROLE_USER.getAuthority())
                .antMatchers("/points/clear/*").hasAnyAuthority(UserRole.ROLE_USER.getAuthority())
                .antMatchers("/points/save/*").hasAnyAuthority(UserRole.ROLE_USER.getAuthority())
                .antMatchers("/points/get/*").hasAnyAuthority(UserRole.ROLE_USER.getAuthority())
                .antMatchers("/register", "/auth", "/all").permitAll()
                .and()
                .addFilterBefore(jwtFilter,UsernamePasswordAuthenticationFilter.class);





    }

    @Bean
    public PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }

    @Bean
    public AuthenticationManager authenticationManagerBean() throws Exception{
        return super.authenticationManagerBean();
    }




}
