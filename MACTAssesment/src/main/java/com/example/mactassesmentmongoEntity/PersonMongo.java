package com.example.mactassesmentmongoEntity;

import javax.persistence.Id;

import org.springframework.data.mongodb.core.mapping.Document;

@Document("Person")
public class PersonMongo {
	@Id
	//@GeneratedValue(strategy = GenerationType.AUTO)
	int personId;
	String userName;
	String passWord;
	String email;
	String mobileNumber;
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
