package com.example.mactassesment.services;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.mactassesment.entity.Person;
import com.example.mactassesment.exception.BusinessException;
import com.example.mactassesment.exception.BusinessExceptionReason;
import com.example.mactassesment.modelDTo.PersonDto;
import com.example.mactassesment.repository.PersonRepository;

import ch.qos.logback.core.joran.util.beans.BeanUtil;

@Service
public class PersonServices {

   @Autowired
   PersonRepository personRep;
   
	public String inserPersonDetails(Person person) {
		
		personRep.save(person);
		return "insertSuccessfully";
	}
	
	public Person getPersonByMobileNumber(String mobileNumber) throws BusinessException {
		if (personRep.existsByMobileNumber(mobileNumber)) {
			return personRep.findByMobileNumber(mobileNumber);		
		}
		throw new BusinessException(BusinessExceptionReason.MOBILE_NUMBER_NOT_FOUND.name(),
				
				BusinessExceptionReason.MOBILE_NUMBER_NOT_FOUND);
	}

}
