package com.weatherapp.service.services;

import com.weatherapp.service.model.Data;
import com.weatherapp.service.repository.datarepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DataService {
    @Autowired
    datarepository dataRepository;

    public Data createData(Data data){
       return dataRepository.save(data);
    }
}
