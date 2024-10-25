package com.weatherapp.service.repository;

import com.weatherapp.service.model.Data;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface datarepository extends MongoRepository<Data, String> {
}