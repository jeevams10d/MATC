package com.example.mactassesment.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Person {
	@Id
	//@GeneratedValue(strategy = GenerationType.AUTO)
	int personId;
	String userName;
	String passWord;
	String email;
	String mobileNumber;
	
	public Person(int personId, String userName, String passWord, String email, String mobileNumber) {
		super();
		this.personId = personId;
		this.userName = userName;
		this.passWord = passWord;
		this.email = email;
		this.mobileNumber = mobileNumber;
	}
	public Person() {
		// TODO Auto-generated constructor stub
	}
	public int getPersonId() {
		return personId;
	}
	public void setPersonId(int personId) {
		this.personId = personId;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getPassWord() {
		return passWord;
	}
	public void setPassWord(String passWord) {
		this.passWord = passWord;
	}
	public String getEmail() {
		return email;
	} 
	public void setEmail(String email) {
		this.email = email;
	}
	public String getMobileNumber() {
		return mobileNumber;
	}
	public void setMobileNumber(String mobileNumber) {
		this.mobileNumber = mobileNumber;
	}
	@Override
	public String toString() {
		return "Person [personId=" + personId + ", userName=" + userName + ", passWord=" + passWord + ", email=" + email
				+ ", mobileNumber=" + mobileNumber + "]";
	}
	
	
	
}
