package com.example.mactassesment.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.mactassesment.entity.Person;

@Repository
public interface PersonRepository extends JpaRepository<Person, Integer> {

	Person findByMobileNumber(String MobileNumber);

	boolean existsByMobileNumber(String mobileNumber);

}
   