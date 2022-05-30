package com.example.mactassesment.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.example.mactassesment.entity.Address;
import com.example.mactassesment.entity.Employee;
import com.example.mactassesment.entity.Person;
import com.example.mactassesment.exception.BusinessException;
import com.example.mactassesment.exception.BusinessExceptionReason;
import com.example.mactassesment.modelDTo.EmployeeDto;
import com.example.mactassesment.repository.AddressRepository;
import com.example.mactassesment.repository.EmployeeRepository;
import com.example.mactassesment.repository.PersonRepository;

@Service
public class EmployeeServices {
 
	@Autowired
	EmployeeRepository employeeRepository;
	
	@Autowired
	PersonRepository personRepository;
	
	@Autowired
	AddressRepository addressRepository;
	
 
 public String insertEmplyeeDetails(EmployeeDto employeeDto) {
	  
	  String MobileNumber=employeeDto.getMobileNumber();
	  Person person=personRepository.findByMobileNumber(MobileNumber);
	 
	  if(person!=null) {
		  Employee employee=new Employee();
		  employee.setPerson(person);
		  employee.setEmpployeeId(employeeDto.getEmpployeeId());
		  employee.setDesignation(employeeDto.getDesignation());
		  employee.setExperience(employeeDto.getExperience());
		  employee.setSalary(employeeDto.getSalary());
		  employeeRepository.save(employee);
	  
	      Address address=new Address();
	      address.setEmployee(employee);
	      address.setLandMark(employeeDto.getLandMark());
	      address.setLocation(employeeDto.getLocation());
	      address.setPinCode(employeeDto.getPinCode());
	      addressRepository.save(address);
	  
	  }
	  
	  
		  
	  return "insert successfully";
  }
 
 public List<Employee> getEmployee(Integer pageNo,Integer pageSize, String sortBy) {
		PageRequest paging = PageRequest.of(pageNo, pageSize, Sort.by(sortBy));
		Page<Employee> pagedResult = employeeRepository.findAll(paging);
		if(pagedResult.hasContent()) {
			return pagedResult.getContent();
		} else {
			return new ArrayList<Employee>();
		}
	}

 

	
}
