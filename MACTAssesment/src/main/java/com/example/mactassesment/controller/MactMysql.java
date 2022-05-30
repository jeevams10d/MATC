package com.example.mactassesment.controller;

import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.mactassesment.MongoServices.EmployeeMongoServices;
import com.example.mactassesment.entity.Employee;
import com.example.mactassesment.entity.Person;
import com.example.mactassesment.exception.BusinessException;
import com.example.mactassesment.modelDTo.EmployeeDto;
import com.example.mactassesment.modelDTo.PersonDto;
import com.example.mactassesment.services.EmployeeServices;
import com.example.mactassesment.services.PersonServices;
import com.example.mactassesmentmongoEntity.EmployeeMongo;
import com.example.mactassesmentmongoEntity.PersonMongo;

import io.swagger.annotations.ApiOperation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;

@RestController
@RequestMapping("/v1/person/")
@SecurityRequirement(name = "Authentication")
public class MactMysql {
	
	@Autowired
	PersonServices personServices;
	
	@Autowired
    EmployeeServices employeeServices;
	
	
	
	@Autowired
	EmployeeMongoServices employeeMongoServices;
	
	
	@ApiOperation(value = "About your api purpose", notes = "Description of your api", code = 200)  
	
	@PostMapping("/person/insertPersonDetails")
     public String inserPersonDetails(@RequestBody PersonDto personDto)
    { 
	  Person person=new Person();
	  BeanUtils.copyProperties(personDto, person);
	  personServices.inserPersonDetails(person);
	  
	  PersonMongo personMongo=new PersonMongo();
	  BeanUtils.copyProperties(personDto, personMongo);
	  employeeMongoServices.inserPerson(personMongo);
	  
	  return "insert successfully";
	  
    }
  
  @PostMapping("/employee/insertEmployeeDetails")
  public String inserPersonDetails(@RequestBody EmployeeDto employeeDto)
  { 
	  Employee employee=new Employee();
	  BeanUtils.copyProperties(employeeDto, employee);
	  employeeServices.insertEmplyeeDetails(employeeDto);
	  
	  EmployeeMongo employeeMongo=new EmployeeMongo();
	  BeanUtils.copyProperties(employeeDto, employeeMongo);
	  employeeMongoServices.insertEmplyeeDetails(employeeDto);
	  
	 return   "insert successfully";
  }
  
  @GetMapping("/person/{mobilenumber}")
  public Person getPersonDetails(@PathVariable String mobilenumber) throws BusinessException {
	  return personServices.getPersonByMobileNumber(mobilenumber);
  }
  
  @GetMapping("/getemployee")
 	public List<Employee> getEmployeeDetails(@RequestParam(defaultValue = "0") Integer pageNo,
 			@RequestParam(defaultValue = "10") Integer pageSize,
 			@RequestParam(defaultValue = "empployeeId") String sortBy){
 		List<Employee> employeeList = employeeServices.getEmployee(pageNo, pageSize,sortBy);
 		return employeeList;
  
}
}
