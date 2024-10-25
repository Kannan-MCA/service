package com.weatherapp.service.model;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collation = "config")
public class Config {
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String id;
}
