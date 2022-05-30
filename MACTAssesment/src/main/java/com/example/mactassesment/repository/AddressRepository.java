package com.example.mactassesment.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.mactassesment.entity.Address;

@Repository
public interface AddressRepository extends JpaRepository<Address, Integer> {

}
