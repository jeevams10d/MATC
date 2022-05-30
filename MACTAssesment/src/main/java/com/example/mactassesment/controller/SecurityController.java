package com.example.mactassesment.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.v3.oas.annotations.security.SecurityRequirement;

@RestController
@RequestMapping("/v1/get/")
@SecurityRequirement(name = "Authentication")
public class SecurityController {


	@GetMapping("/hello")
	public String display() {

		return "hello world";

	}

}
