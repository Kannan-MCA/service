package com.weatherapp.service.repository;

import com.weatherapp.service.model.Config;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface configrepository extends MongoRepository<Config, String> {

}
