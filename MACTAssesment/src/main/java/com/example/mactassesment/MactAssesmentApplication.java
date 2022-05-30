package com.example.mactassesment;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.enums.SecuritySchemeIn;
import io.swagger.v3.oas.annotations.enums.SecuritySchemeType;
import io.swagger.v3.oas.annotations.info.Info;
import io.swagger.v3.oas.annotations.security.SecurityScheme;


@SpringBootApplication
@SecurityScheme(name = "Authentication",description = "JWT token",type = SecuritySchemeType.HTTP,
scheme = "bearer",bearerFormat = "JWT",in = SecuritySchemeIn.HEADER)
@OpenAPIDefinition(info = @Info(title = "MATC$EMPLOYEE",version = "1.0.0",
description = "M$E helps" + "to serve the needs in a efficient manner."))
public class MactAssesmentApplication {
	Logger logger = LoggerFactory.getLogger(MactAssesmentApplication.class);
	public static void main(String[] args) {
		SpringApplication.run(MactAssesmentApplication.class, args);
		System.out.println("mactAssesmnet");
	}

}
