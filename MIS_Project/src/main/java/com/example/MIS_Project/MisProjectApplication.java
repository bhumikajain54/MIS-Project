package com.example.MIS_Project;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@SpringBootApplication
@EntityScan(basePackages = "com.example.MIS_Project.Model")

public class MisProjectApplication {

	public static void main(String[] args) {
		SpringApplication.run(MisProjectApplication.class, args);
	}

}
