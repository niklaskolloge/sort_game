package de.sortgame;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

/**
 * Main class to start Poll-Application.
 * @author Niklas Kolloge
 */
@SpringBootApplication
@EnableSwagger2
@ComponentScan(basePackages = {"org.openapitools", "de.sortgame.*", "org.openapitools.configuration", "de.sortgame"})
public class SortGameApplication{

    public static void main(String[] args) {
        new SpringApplication(SortGameApplication.class).run(args);
    }

}
