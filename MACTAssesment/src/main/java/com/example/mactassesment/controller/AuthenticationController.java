package com.example.mactassesment.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.mactassesment.config.JokenUtility;
import com.example.mactassesment.modelDTo.JwtRequest;
import com.example.mactassesment.modelDTo.JwtResponse;
import com.example.mactassesment.services.UserService;

@RestController
@RequestMapping("/v1/auth")
//@SecurityRequirement(name = "Authentication")
@CrossOrigin
public class AuthenticationController {

	@Autowired
	AuthenticationManager authenticationManager;

	@Autowired
    JokenUtility jokenUtility;

	@Autowired
	UserService userService;

	@PostMapping(value ="/authenticate" , consumes = MediaType.APPLICATION_JSON_VALUE)

	public ResponseEntity<?> createAuthenticationToken(@RequestBody JwtRequest jwtRequest)
			throws Exception {
		try {
			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
					jwtRequest.getUsername(), jwtRequest.getPassword()));
		} catch (DisabledException e) {
			throw new Exception("USER_DISABLED", e);
		} catch (BadCredentialsException e) {
			throw new Exception("INVALID_CREDENTIALS", e);
		}
		final UserDetails userDetails = userService.loadUserByUsername(jwtRequest.getUsername());

		final String token = jokenUtility.generateToken(userDetails);

		return ResponseEntity.ok(new JwtResponse(token));
	}


}
