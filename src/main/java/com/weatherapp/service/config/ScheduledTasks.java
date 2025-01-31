package com.weatherapp.service.config;

import com.weatherapp.service.controller.DataFeedController;
import com.weatherapp.service.model.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

@Component
public class ScheduledTasks {
    private static final Object API_KEY = "48ec71b9474a7b839364e58751eae18b";
    private static final String CITY_NAME = "Delhi,IN";
    @Autowired
    DataFeedController dataFeedController;
    @Scheduled(cron = "2 * * * * *")
    public void execute() {
        RestTemplate restTemplate = new RestTemplate();
        Data data = restTemplate.getForEntity("https://api.openweathermap.org/data/2.5/weather?q="+CITY_NAME+"&appid="+API_KEY, Data.class).getBody();
        dataFeedController.createData(data);
    }
}