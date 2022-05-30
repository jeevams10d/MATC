package com.example.mactassesment.mongoRepository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.mactassesmentmongoEntity.EmployeeMongo;

@Repository
public interface EmployeeMongoRepo extends MongoRepository<EmployeeMongo, Integer> {



}
