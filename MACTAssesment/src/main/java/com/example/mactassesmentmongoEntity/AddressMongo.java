package com.example.mactassesmentmongoEntity;

import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import org.springframework.data.mongodb.core.mapping.Document;


@Document("Address")
public class AddressMongo {
	@Id
	String location;
	String landMark;
	String pinCode;
	@ManyToOne
	@JoinColumn(name="emp_id")
	EmployeeMongo employee;
	
	
	public EmployeeMongo getEmployee() {
		return employee;
	}
	public void setEmployee(EmployeeMongo employee) {
		this.employee = employee;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	public String getLandMark() {
		return landMark;
	}
	public void setLandMark(String landMark) {
		this.landMark = landMark;
	}
	public String getPinCode() {
		return pinCode;
	}
	public void setPinCode(String pinCode) {
		this.pinCode = pinCode;
	}
	
	
}
