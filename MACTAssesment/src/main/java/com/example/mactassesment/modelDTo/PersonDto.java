package com.example.mactassesment.modelDTo;

public class PersonDto {
	int personId;
	String userName;
	String passWord;
	String email;
	String mobileNumber;
	String role;
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
	public PersonDto(int personId, String userName, String passWord, String email, String mobileNumber) {
		super();
		this.personId = personId;
		this.userName = userName;
		this.passWord = passWord;
		this.email = email;
		this.mobileNumber = mobileNumber;
	}
	@Override
	public String toString() {
		return "PersonDto [personId=" + personId + ", userName=" + userName + ", passWord=" + passWord + ", email="
				+ email + ", mobileNumber=" + mobileNumber + "]";
	}
	
	
}
