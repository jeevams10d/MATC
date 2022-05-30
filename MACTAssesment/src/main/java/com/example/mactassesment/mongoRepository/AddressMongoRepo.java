package com.example.mactassesment.mongoRepository;


import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.mactassesmentmongoEntity.AddressMongo;

@Repository
public interface AddressMongoRepo extends MongoRepository<AddressMongo, Integer> {

}
