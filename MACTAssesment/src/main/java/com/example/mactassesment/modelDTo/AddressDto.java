package com.example.mactassesment.modelDTo;

public class AddressDto {
	
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
	public AddressDto( String location, String landMark, String pinCode) {
		super();
		
		this.location = location;
		this.landMark = landMark;
		this.pinCode = pinCode;
	}
	@Override
	public String toString() {
		return "AddressDto [location=" + location + ", landMark=" + landMark + ", pinCode=" + pinCode + "]";
	}
	
	

}
