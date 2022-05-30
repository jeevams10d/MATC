package com.example.mactassesment.MongoServices;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.mactassesment.modelDTo.EmployeeDto;
import com.example.mactassesment.mongoRepository.AddressMongoRepo;
import com.example.mactassesment.mongoRepository.EmployeeMongoRepo;
import com.example.mactassesment.mongoRepository.PersonMongoRepo;
import  com.example.mactassesmentmongoEntity.AddressMongo;
import com.example.mactassesmentmongoEntity.EmployeeMongo;
import com.example.mactassesmentmongoEntity.PersonMongo;

@Service
public class EmployeeMongoServices {
	@Autowired
	EmployeeMongoRepo employeeRepository;

	@Autowired
	PersonMongoRepo personRepository;

	@Autowired
	AddressMongoRepo addressRepository;


	public String inserPerson(PersonMongo personMongo) {
		personRepository.save(personMongo);
		return "insertSuccessfully";
	}


	public String insertEmplyeeDetails(EmployeeDto employeeDto) {

		PersonMongo person=personRepository.findByMobileNumber(employeeDto.getMobileNumber());
		if(personRepository.existsByMobileNumber(employeeDto.getMobileNumber())) {
			EmployeeMongo employee=new EmployeeMongo();
			employee.setPerson(person);
			employee.setEmpployeeId(employeeDto.getEmpployeeId());
			employee.setDesignation(employeeDto.getDesignation());
			employee.setExperience(employeeDto.getExperience());
			employee.setSalary(employeeDto.getSalary());
			employeeRepository.save(employee);

			AddressMongo address=new AddressMongo();
			address.setEmployee(employee);
			address.setLandMark(employeeDto.getLandMark());
			address.setLocation(employeeDto.getLocation());
			address.setPinCode(employeeDto.getPinCode());
			addressRepository.save(address);

		}

		return "insert successfully";
	}

}
