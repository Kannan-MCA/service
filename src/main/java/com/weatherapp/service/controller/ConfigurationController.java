package com.weatherapp.service.controller;

import com.weatherapp.service.model.Config;
import com.weatherapp.service.services.ConfigService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/config")
public class ConfigurationController {
    @Autowired
    ConfigService configService;
    @PostMapping("/")
    @ResponseStatus(value= HttpStatus.CREATED)
    public void addConfig(@RequestBody Config config){
        configService.createConfig(config);
    }
}