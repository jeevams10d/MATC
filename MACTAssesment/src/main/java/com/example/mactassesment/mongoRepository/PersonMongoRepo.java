package com.example.mactassesment.mongoRepository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.mactassesmentmongoEntity.PersonMongo;

@Repository
public interface PersonMongoRepo extends MongoRepository<PersonMongo, Integer>{

	PersonMongo findByMobileNumber(String MobileNumber);

	boolean existsByMobileNumber(String mobileNumber);

}
