package org.examplenew.controller;





import org.examplenew.entity.RefreshToken;
import org.examplenew.exception.InvalidTokenException;
import org.examplenew.jwt.JwtProvider;
import org.examplenew.repos.RoleRepository;
import org.examplenew.request.CheckUserRequest;
import org.examplenew.request.RefreshRequest;
import org.examplenew.response.RefreshResponse;
import org.examplenew.validation.AuthValidatorInter;
import org.springframework.security.authentication.BadCredentialsException;
import lombok.extern.slf4j.Slf4j;
import org.examplenew.dto.CustomUserDetails;
import org.examplenew.entity.User;
import org.examplenew.request.LogInRequest;
import org.examplenew.request.RegisterRequest;
import org.examplenew.response.AuthResponse;
import org.examplenew.response.OtherResponseWrapper;
import org.examplenew.service.RefreshTokenServiceInter;
import org.examplenew.service.UserServiceInter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.Objects;
import java.util.Optional;

@RestController
@RequestMapping("/users/")
@Slf4j
public class AuthController {
    @Autowired
    private UserServiceInter userService;

    @Autowired
    private JwtProvider jwtProvider;

    @Autowired
    private RefreshTokenServiceInter refreshTokenService;

    @Autowired
    private RoleRepository roleRepository;

    private final AuthenticationManager authenticationManager;
    private final AuthValidatorInter authValidator;


    @Autowired
    public AuthController(AuthenticationManager authenticationManager, AuthValidatorInter authValidator){
        this.authenticationManager = authenticationManager;
        this.authValidator = authValidator;
    }


    @PostMapping("/register")
    @CrossOrigin
    public ResponseEntity<?> registerUser(@RequestBody RegisterRequest registrationRequest) {
            Optional<String> checkReq = authValidator.defaultCheck(registrationRequest);
            if (checkReq.isPresent()){
                return ResponseEntity.badRequest().body(new OtherResponseWrapper(checkReq.get()));
            }

            if (userService.findByUserName(registrationRequest.getUserName()) != null){
                return ResponseEntity.badRequest().body(new OtherResponseWrapper("A user with this name already exists"));

            }

            User user = new User();

            user.setUserName(registrationRequest.getUserName());
            user.setUserPassword(registrationRequest.getUserPassword());

            return ResponseEntity.ok().body(userService.saveUser(user));

    }

    @PostMapping("/auth")
    @CrossOrigin
    public ResponseEntity<?> auth(@RequestBody LogInRequest request) {
        try {
            Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getUserName(), request.getUserPassword()));
            SecurityContextHolder.getContext().setAuthentication(authentication);

            CustomUserDetails customUserDetails = (CustomUserDetails) authentication.getPrincipal();
//            System.out.println("SET: "  + SecurityContextHolder.getContext().getAuthentication().getPrincipal());
//            System.out.println(SecurityContextHolder.getContext().getAuthentication().getAuthorities());
            String accessToken = jwtProvider.generateToken(customUserDetails);
            Optional<String> refreshToken = refreshTokenService.updateRefreshToken(customUserDetails.getUserID());


            return ResponseEntity.ok().body(
                    new AuthResponse(
                            accessToken,
                            "Bearer",
                            refreshToken.get(),
                            customUserDetails.getUserID(),
                            customUserDetails.getUsername())
            );
        } catch (BadCredentialsException e){

            return ResponseEntity.badRequest().body(new OtherResponseWrapper(e.getMessage()));

        } catch (Exception e){
            e.printStackTrace();
            return ResponseEntity.badRequest().body(new OtherResponseWrapper(e.getMessage()));
        }

    }

    @GetMapping("/all")
    @CrossOrigin
    @Deprecated
    public String allUsers(){
        return "index";
    }


    @PostMapping("/refreshToken")
    public ResponseEntity<?> refreshToken(@RequestBody RefreshRequest req){
//        System.out.println("REFRESH");
        Optional<RefreshToken> refreshTokenOptional = refreshTokenService.findByRefreshTokenString(req.getRefreshToken());

        if (!refreshTokenOptional.isPresent()){
//            System.out.println("*REFRESH* refreshtok: " + req.getRefreshToken());
            return ResponseEntity.badRequest().body(new OtherResponseWrapper("This token was not found."));
        }

        User user = refreshTokenOptional.get().getUser();
        Optional<String> updatedRefreshTokenOptional = refreshTokenService.updateRefreshToken(user.getUserID());

        if (!updatedRefreshTokenOptional.isPresent()){
            return ResponseEntity.badRequest().body(new OtherResponseWrapper("The user specified in the token was not found."));
        }

        String refreshToken = updatedRefreshTokenOptional.get();

        CustomUserDetails customUserDetails = CustomUserDetails.fromUserEntityToCustomUserDetails(user, roleRepository);
        String accessToken = jwtProvider.generateToken(customUserDetails);
        return ResponseEntity.ok().body(new RefreshResponse(accessToken, refreshToken, "Bearer"));
    }


    @PostMapping("checkUser")
    public ResponseEntity<?> checkUser(@RequestBody CheckUserRequest req){
        String login = req.getLogin();
        String token = req.getToken();
        boolean validToken;

        try {
            validToken = jwtProvider.validateToken(token);
        } catch (InvalidTokenException e){
//            System.out.println("Invalid token.");
            return ResponseEntity.badRequest().body(new OtherResponseWrapper("Invalid token."));
        }

        String loginFromToken = jwtProvider.getLoginFromToken(token);
        if (!Objects.equals(loginFromToken, login)){
//            System.out.println("Login");
            return ResponseEntity.badRequest().body(new OtherResponseWrapper("The token and the user do not match."));
        }
        return ResponseEntity.ok().body(new OtherResponseWrapper("Good."));

    }
}