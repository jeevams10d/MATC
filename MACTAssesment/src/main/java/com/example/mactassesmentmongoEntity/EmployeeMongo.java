package com.example.mactassesmentmongoEntity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Document("Employee")
public class EmployeeMongo {
	@Id
//	@GeneratedValue(strategy = GenerationType.AUTO)
	int empployeeId;
	String designation;
	String experience;
	String salary;
	@OneToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "personId")
	PersonMongo person;
	@JsonIgnore
	
	
	@OneToMany(cascade = CascadeType.ALL,mappedBy = "employee")
	List<AddressMongo> address;
	
	
	
	public PersonMongo getPerson() {
		return person;
	}
	public void setPerson(PersonMongo person) {
		this.person = person;
	}
	public List<AddressMongo> getAddress() {
		return address;
	}
	public void setAddress(List<AddressMongo> address) {
		this.address = address;
	}
	public int getEmpployeeId() {
		return empployeeId;
	}
	public void setEmpployeeId(int empployeeId) {
		this.empployeeId = empployeeId;
	}
	public String getDesignation() {
		return designation;
	}
	public void setDesignation(String designation) {
		this.designation = designation;
	}
	public String getExperience() {
		return experience;
	}
	public void setExperience(String experience) {
		this.experience = experience;
	}
	public String getSalary() {
		return salary;
	}
	public void setSalary(String salary) {
		this.salary = salary;
	}
}
