package com.example.mactassesment.modelDTo;

public class EmployeeDto {
	int empployeeId;
	String designation;
	String experience;
	String salary;
	String mobileNumber;
	String location;
	String landMark;
	String pinCode;
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
	public String getMobileNumber() {
		return mobileNumber;
	}
	public void setMobileNumber(String mobileNumber) {
		this.mobileNumber = mobileNumber;
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
	public EmployeeDto(int empployeeId, String designation, String experience, String salary, String mobileNumber,
			String location, String landMark, String pinCode) {
		super();
		this.empployeeId = empployeeId;
		this.designation = designation;
		this.experience = experience;
		this.salary = salary;
		this.mobileNumber = mobileNumber;
		this.location = location;
		this.landMark = landMark;
		this.pinCode = pinCode;
	}
	@Override
	public String toString() {
		return "EmployeeDto [empployeeId=" + empployeeId + ", designation=" + designation + ", experience=" + experience
				+ ", salary=" + salary + ", mobileNumber=" + mobileNumber + ", location=" + location + ", landMark="
				+ landMark + ", pinCode=" + pinCode + "]";
	}
	
	
}
