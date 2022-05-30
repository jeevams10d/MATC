package com.example.mactassesment.entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Employee {
	@Id
//	@GeneratedValue(strategy = GenerationType.AUTO)
	int empployeeId;
	String designation;
	String experience;
	String salary;
	@OneToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "personId")
	Person person;
	@JsonIgnore
	
	
	@OneToMany(cascade = CascadeType.ALL,mappedBy = "employee")
	List<Address> address;
	
	
	public List<Address> getAddress() {
		return address;
	}
	public void setAddress(List<Address> address) {
		this.address = address;
	}
	public Person getPerson() {
		return person;
	}
	public void setPerson(Person person) {
		this.person = person;
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
