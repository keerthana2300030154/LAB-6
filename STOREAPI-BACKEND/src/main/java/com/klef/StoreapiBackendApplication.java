package com.klef;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer; // ✅ Import

@SpringBootApplication
public class StoreapiBackendApplication extends SpringBootServletInitializer {

    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
        return application.sources(StoreapiBackendApplication.class);
    }

    public static void main(String[] args) {
        SpringApplication.run(StoreapiBackendApplication.class, args);
    }
}
